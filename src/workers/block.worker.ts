import { box, module_container,getLightColorByType } from '@/utils/show3d'
import { Stack, Box, Space, Problem, Block, Place, PackingState, type FormData, type finalResult } from '@/type'

const MIN_FILL_RATE = 0.9;
const MIN_AREA_RATE = 0.9;
const MAX_TIMES = 5;
const MAX_DEPTH = 6;
const MAX_BRANCH = 5;

// 临时的最优放置方案
let tmp_best_ps: PackingState | null = null;


// 合并块时通用校验项目
function combine_common_check(combine: Block, container: Space, num_list: number[]): boolean {
    return (
        combine.lx <= container.lx &&
        combine.ly <= container.ly &&
        combine.lz <= container.lz &&
        combine.require_list.every((val, idx) => val <= num_list[idx]) &&
        combine.volume / (combine.lx * combine.ly * combine.lz) >= MIN_FILL_RATE &&
        (combine.ax * combine.ay) / (combine.lx * combine.ly) >= MIN_AREA_RATE &&
        combine.times <= MAX_TIMES
    );
}

// 合并块时通用合并项目
function combine_common(a: Block, b: Block, combine: Block): void {
    combine.require_list = a.require_list.map((val, idx) => val + b.require_list[idx]);
    combine.volume = a.volume + b.volume;
    combine.children = [a, b];
    combine.times = Math.max(a.times, b.times) + 1;
}

// 生成简单块
function gen_simple_block(container: Space, box_list: Box[], num_list: number[]): Block[] {
    const blockTable: Block[] = [];
    for (const box of box_list) {
        for (let nx = 1; nx <= num_list[box.id]; nx++) {
            for (let ny = 1; ny <= Math.floor(num_list[box.id] / nx); ny++) {
                for (let nz = 1; nz <= Math.floor(num_list[box.id] / (nx * ny)); nz++) {
                    if (box.lx * nx <= container.lx && box.ly * ny <= container.ly && box.lz * nz <= container.lz) {
                        const requires = Array(num_list.length).fill(0);
                        requires[box.id] = nx * ny * nz;
                        const block = new Block(box.lx * nx, box.ly * ny, box.lz * nz, requires);
                        block.ax = box.lx * nx;
                        block.ay = box.ly * ny;
                        block.volume = box.lx * nx * box.ly * ny * box.lz * nz;
                        block.times = 0;
                        blockTable.push(block);
                    }
                }
            }
        }
    }
    return blockTable.sort((a, b) => b.volume - a.volume);
}

// 生成复合块
function gen_complex_block(container: Space, box_list: Box[], num_list: number[]): Block[] {
    let blockTable = gen_simple_block(container, box_list, num_list);
    for (let times = 0; times < MAX_TIMES; times++) {
        const newBlockTable: Block[] = [];
        for (let i = 0; i < blockTable.length; i++) {
            const a = blockTable[i];
            for (let j = 0; j < blockTable.length; j++) {
                if (i === j) continue;
                const b = blockTable[j];
                if (a.times === times || b.times === times) {
                    const c = new Block(0, 0, 0);
                    if (a.ax === a.lx && b.ax === b.lx && a.lz === b.lz) {
                        c.direction = 'x';
                        c.ax = a.ax + b.ax;
                        c.ay = Math.min(a.ay, b.ay);
                        c.lx = a.lx + b.lx;
                        c.ly = Math.max(a.ly, b.ly);
                        c.lz = a.lz;
                        combine_common(a, b, c);
                        if (combine_common_check(c, container, num_list)) {
                            newBlockTable.push(c);
                            continue;
                        }
                    }
                    if (a.ay === a.ly && b.ay === b.ly && a.lz === b.lz) {
                        c.direction = 'y';
                        c.ax = Math.min(a.ax, b.ax);
                        c.ay = a.ay + b.ay;
                        c.lx = Math.max(a.lx, b.lx);
                        c.ly = a.ly + b.ly;
                        c.lz = a.lz;
                        combine_common(a, b, c);
                        if (combine_common_check(c, container, num_list)) {
                            newBlockTable.push(c);
                            continue;
                        }
                    }
                    if (a.ax >= b.lx && a.ay >= b.ly) {
                        c.direction = 'z';
                        c.ax = b.ax;
                        c.ay = b.ay;
                        c.lx = a.lx;
                        c.ly = a.ly;
                        c.lz = a.lz + b.lz;
                        combine_common(a, b, c);
                        if (combine_common_check(c, container, num_list)) {
                            newBlockTable.push(c);
                        }
                    }
                }
            }
        }
        blockTable = [...blockTable, ...newBlockTable];
        // 去重
        const uniqueBlocks = new Map<string, Block>();
        blockTable.forEach(block => {
            const key = `${block.lx}-${block.ly}-${block.lz}-${block.ax}-${block.ay}-${block.require_list.join('-')}`;
            uniqueBlocks.set(key, block);
        });
        blockTable = Array.from(uniqueBlocks.values());
    }
    return blockTable.sort((a, b) => b.volume - a.volume);
}

// 生成可行块列表
function gen_block_list(space: Space, avail: number[], blockTable: Block[]): Block[] {
    return blockTable.filter(block =>
        block.require_list.every((val, idx) => val <= avail[idx]) &&
        block.lx <= space.lx &&
        block.ly <= space.ly &&
        block.lz <= space.lz
    );
}

// 裁切出新的剩余空间（有稳定性约束）
function gen_residual_space(space: Space, block: Block): [Space, Space, Space] {
    const rmx = space.lx - block.lx;
    const rmy = space.ly - block.ly;
    const rmz = space.lz - block.lz;
    if (rmx >= rmy) {
        const drs_x = new Space(space.x + block.lx, space.y, space.z, rmx, space.ly, space.lz, space);
        const drs_y = new Space(space.x, space.y + block.ly, space.z, block.lx, rmy, space.lz, space);
        const drs_z = new Space(space.x, space.y, space.z + block.lz, block.ax, block.ay, rmz, null);
        return [drs_z, drs_y, drs_x];
    } else {
        const drs_x = new Space(space.x + block.lx, space.y, space.z, rmx, block.ly, space.lz, space);
        const drs_y = new Space(space.x, space.y + block.ly, space.z, space.lx, rmy, space.lz, space);
        const drs_z = new Space(space.x, space.y, space.z + block.lz, block.ax, block.ay, rmz, null);
        return [drs_z, drs_x, drs_y];
    }
}

// 空间转移
function transfer_space(space: Space, spaceStack: Stack<Space>): Space | null {
    if (spaceStack.size <= 1) {
        spaceStack.pop();
        return null;
    }
    const discard = space;
    spaceStack.pop();
    const target = spaceStack.peek();
    if (discard.origin && target && discard.origin.isEqual(target.origin)) {
        const newTarget = new Space(target.x, target.y, target.z, target.lx, target.ly, target.lz, target.origin);
        if (discard.lx === discard.origin.lx) {
            newTarget.ly = discard.origin.ly;
        } else if (discard.ly === discard.origin.ly) {
            newTarget.lx = discard.origin.lx;
        } else {
            return null;
        }
        spaceStack.pop();
        spaceStack.push(newTarget);
        return target;
    }
    return null;
}

// 还原空间转移
function transfer_space_back(space: Space, spaceStack: Stack<Space>, revert_space: Space): void {
    spaceStack.pop();
    spaceStack.push(revert_space);
    spaceStack.push(space);
}

// 块放置算法
function place_block(ps: PackingState, block: Block): Place {
    const space = ps.space_stack.pop()!;
    ps.avail_list = ps.avail_list.map((val, idx) => val - block.require_list[idx]);
    const place = new Place(space, block);
    ps.plan_list.push(place);
    ps.volume += block.volume;
    const [cuboid1, cuboid2, cuboid3] = gen_residual_space(space, block);
    ps.space_stack.push(cuboid1, cuboid2, cuboid3);
    return place;
}

// 块移除算法
function remove_block(ps: PackingState, block: Block, place: Place, space: Space): void {
    ps.avail_list = ps.avail_list.map((val, idx) => val + block.require_list[idx]);
    const index = ps.plan_list.findIndex(p => p.isEqual(place));
    if (index > -1) {
        ps.plan_list.splice(index, 1);
    }
    ps.volume -= block.volume;
    for (let i = 0; i < 3; i++) {
        ps.space_stack.pop();
    }
    ps.space_stack.push(space);
}

// 补全放置方案
function complete(ps: PackingState, blockTable: Block[]): void {
    const tmp = new PackingState([...ps.plan_list], new Stack<Space>(), [...ps.avail_list]);
    tmp.space_stack.push(...ps.space_stack['items']);
    while (!tmp.space_stack.isEmpty) {
        const space = tmp.space_stack.peek()!;
        const blockList = gen_block_list(space, tmp.avail_list, blockTable);
        if (blockList.length > 0) {
            place_block(tmp, blockList[0]);
        } else {
            transfer_space(space, tmp.space_stack);
        }
    }
    ps.volume_complete = tmp.volume;
}

// 带深度限制的深度优先搜索算法
function depth_first_search(ps: PackingState, depth: number, branch: number, blockTable: Block[]): void {
    if (depth !== 0) {
        const space = ps.space_stack.peek()!;
        const blockList = gen_block_list(space, ps.avail_list, blockTable);
        if (blockList.length > 0) {
            for (let i = 0; i < Math.min(branch, blockList.length); i++) {
                const place = place_block(ps, blockList[i]);
                depth_first_search(ps, depth - 1, branch, blockTable);
                remove_block(ps, blockList[i], place, space);
            }
        } else {
            const oldTarget = transfer_space(space, ps.space_stack);
            if (oldTarget) {
                depth_first_search(ps, depth, branch, blockTable);
                transfer_space_back(space, ps.space_stack, oldTarget);
            }
        }
    } else {
        complete(ps, blockTable);
        if (tmp_best_ps === null || ps.volume_complete > tmp_best_ps.volume_complete) {
            tmp_best_ps = { ...ps };
        }
    }
}

// 评价某个块
function estimate(ps: PackingState, blockTable: Block[], search_params: Record<string, unknown>): number {
    tmp_best_ps = new PackingState();
    depth_first_search(ps, MAX_DEPTH, MAX_BRANCH, blockTable);
    return tmp_best_ps?.volume_complete || 0;
}

// 查找下一个可行块
function find_next_block(ps: PackingState, blockList: Block[], blockTable: Block[], search_params: Record<string, unknown>): Block {
    let bestBlock = blockList[0];
    let bestFitness = 0;
    for (let block of blockList) {
        let space = ps.space_stack.peek()!;
        let place = place_block(ps, block);
        let fitness = estimate(ps, blockTable, search_params);
        remove_block(ps, block, place, space);
        if (fitness > bestFitness) {
            bestFitness = fitness;
            bestBlock = block;
        }
    }
    return bestBlock;
}

function basic_heuristic(is_complex: boolean, search_params: Record<string, any>, problem: Problem): PackingState {
    let block_table: Block[];
    if (is_complex) {
        // 生成复合块
        block_table = gen_complex_block(problem.container, problem.box_list, problem.num_list);
    } else {
        // 生成简单块
        block_table = gen_simple_block(problem.container, problem.box_list, problem.num_list);
    }
    // 初始化排样状态
    const ps = new PackingState([], new Stack<Space>(), [...problem.num_list]);
    // 开始时，剩余空间堆栈中只有容器本身
    ps.space_stack.push(problem.container);
    // 所有剩余空间均转满，则停止
    while (ps.space_stack.size > 0) {
        const space = ps.space_stack.peek();
        if (space) {
            const block_list = gen_block_list(space, ps.avail_list, block_table);
            if (block_list.length > 0) {
                // 查找下一个近似最优块
                const block = find_next_block(ps, block_list, block_table, search_params);
                // 弹出顶部剩余空间
                ps.space_stack.pop();
                // 更新可用物品数量
                ps.avail_list = ps.avail_list.map((val, index) => val - block.require_list[index]);
                // 更新排样计划
                ps.plan_list.push(new Place(space, block));
                // 更新已利用体积
                ps.volume = ps.volume + block.volume;
                // 压入新裁切的剩余空间
                const [cuboid1, cuboid2, cuboid3] = gen_residual_space(space, block);
                ps.space_stack.push(cuboid1, cuboid2, cuboid3);
            } else {
                // 转移剩余空间
                transfer_space(space, ps.space_stack);
            }
        }
    }
    return ps
}


function build_box_position(block: Block, init_pos: [number, number, number], box_list: { lx: number; ly: number; lz: number }[]): [number, number, number, number, number, number, number][] {
    if (block.children.length <= 0 && block.times === 0) {
        const box_idx = block.require_list.findIndex(val => val > 0);
        if (box_idx > -1) {
            const box = box_list[box_idx];
            const nx = block.lx / box.lx;
            const ny = block.ly / box.ly;
            const nz = block.lz / box.lz;

            const x_list: number[] = [];
            for (let i = 0; i < nx; i++) {
                x_list.push(i * box.lx);
            }
            const y_list: number[] = [];
            for (let i = 0; i < ny; i++) {
                y_list.push(i * box.ly);
            }
            const z_list: number[] = [];
            for (let i = 0; i < nz; i++) {
                z_list.push(i * box.lz);
            }

            const dimensions: [number, number, number, number, number, number, number][] = [];
            for (const x of x_list) {
                for (const y of y_list) {
                    for (const z of z_list) {
                        dimensions.push([x + init_pos[0], y + init_pos[1], z + init_pos[2], box.lx, box.ly, box.lz, box_idx]);
                    }
                }
            }

            return dimensions.sort((a, b) => {
                if (a[0] !== b[0]) return a[0] - b[0];
                if (a[1] !== b[1]) return a[1] - b[1];
                return a[2] - b[2];
            });
        }
        return [];
    }

    let pos: [number, number, number, number, number, number, number][] = [];
    for (const child of block.children) {
        pos = pos.concat(build_box_position(child, init_pos, box_list));
        if (block.direction === "x") {
            init_pos = [init_pos[0] + child.lx, init_pos[1], init_pos[2]];
        } else if (block.direction === "y") {
            init_pos = [init_pos[0], init_pos[1] + child.ly, init_pos[2]];
        } else if (block.direction === "z") {
            init_pos = [init_pos[0], init_pos[1], init_pos[2] + child.lz];
        }
    }
    return pos;
}


function calculateCenterOfGravity(boxes: box[]): [number, number, number] {
    let totalMass = 0;
    let totalX = 0;
    let totalY = 0;
    let totalZ = 0;
    // 处理 boxes
    for (const box of boxes) {
        const mass = box.mass;
        const position = box.centerPosition;
        totalMass += mass;
        totalX += position[0] * mass;
        totalY += position[1] * mass;
        totalZ += position[2] * mass;
    }

    if (totalMass === 0) {
        return [0, 0, 0];
    }

    const centerX = totalX / totalMass;
    const centerY = totalY / totalMass;
    const centerZ = totalZ / totalMass;
    return [centerX, centerY, centerZ];
}

// Worker
const calculate = (formData: FormData): finalResult => {

    const { name, containers, boxes, num_list } = formData;
    // 创建 Space 实例数组
    const containerInstances = containers.map(
        (container) => new Space(container.x, container.y, container.z, container.lx, container.ly, container.lz)
    );

    // 创建 Box 实例数组
    const boxInstances = boxes.map(
        (box) => new Box(box.lx, box.ly, box.lz, box.id)
    );

    let finalResult: finalResult = {
        modules: [],
        container: {
            name: name,
            volumn: 0,
            boxesvolumn: 0,
            volumnUR: 0,
            gravityCenter: [0, 0, 0],
            allmodules: [],
            allbox: []
        }
    }

    let currentNumList = [...num_list];
    let tempcount = 0;
    let allboxes: box[] = []
    for (const container of containerInstances) {
        let module = {
            name: containers[tempcount++].name,
            x: container.x,
            y: container.y,
            z: container.z,
            lx: container.lx,
            ly: container.ly,
            lz: container.lz,
            boxes: [] as box[],
            volumn: 0,
            boxesvolumn: 0,
            volumnUR: 0.0,
            gravityCenter: [0, 0, 0] as [number, number, number],
            num_list: [] as number[],
            showModule:  new module_container(
                [container.lx, container.ly, container.lz] as [number, number, number],
                [container.x, container.y, container.z] as [number, number, number],
                undefined,
                undefined,
                undefined,
                undefined,
                'corner'
            )
        }
        finalResult.container.allmodules.push(module.showModule)
        // 创建问题实例
        const problem = new Problem(container, boxInstances, currentNumList);
        const search_params: Record<string, any> = {};
        // 具体计算
        const ps: PackingState = basic_heuristic(true, search_params, problem);
        // 计算结果
        for (const p of ps.plan_list) {
            const bpos = build_box_position(p.block, [p.space.x, p.space.y, p.space.z], problem.box_list);
            for (const bp of bpos) {
                const newBox = new box(
                    [bp[3], bp[4], bp[5]],
                    [bp[0], bp[1], bp[2]],
                    1,
                    getLightColorByType(boxes[bp[6]].id),
                    true,
                    0.5,
                    false,
                    'corner',
                    boxes[bp[6]].id
                );
                module.boxes.push(newBox);
                finalResult.container.allbox.push(newBox)
            }
        }
        module.boxesvolumn = ps.volume
        module.volumn = module.lx * module.ly * module.lz
        module.volumnUR = module.boxesvolumn / module.volumn
        module.gravityCenter = calculateCenterOfGravity(module.boxes)
        allboxes.push(...module.boxes)
        // 记录每层安排
        module.num_list = currentNumList.map((num, index) => num - ps.avail_list[index]);
        // 更新 num_list 为剩下的箱子数
        currentNumList = ps.avail_list;
        finalResult.modules.push(module)
        finalResult.container.boxesvolumn += module.boxesvolumn
        finalResult.container.volumn += module.volumn
        // 如果所有箱子都已经用完，提前结束循环
        if (currentNumList.every(num => num === 0)) {
            break;
        }
    }
    finalResult.container.gravityCenter = calculateCenterOfGravity(allboxes)
    finalResult.container.volumnUR = finalResult.container.boxesvolumn / finalResult.container.volumn
    // console.log('formdata', formData.boxes)
    // console.log('num', currentNumList)
    return finalResult
}

// 消息处理器 
self.onmessage = async (e: MessageEvent<{ type: string; data: FormData }>) => {
    try {
        if (e.data.type === 'CALCULATE') {
            const result = calculate(e.data.data)
            self.postMessage({
                type: 'SUCCESS',
                data: result
            })
        }
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : '未知错误'
        })
    }
}

// TS类型声明 
export type CalcWorker = typeof self 