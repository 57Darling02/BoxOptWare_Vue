import { box, module_container, main_container, type ShowParamsType,getLightColorByNumber,getLightColorByType } from '@/utils/show3d'
import { Stack, Box, Space, Problem, Block, Place, PackingState, type FormData } from '@/type'
// 常量定义
import emitter from "@/utils/emitter";
const MIN_FILL_RATE = 0.9;
const MIN_AREA_RATE = 0.9;
const MAX_TIMES = 5;
const MAX_DEPTH = 5;
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
        for (let nx = 1; nx <= num_list[box.type]; nx++) {
            for (let ny = 1; ny <= Math.floor(num_list[box.type] / nx); ny++) {
                for (let nz = 1; nz <= Math.floor(num_list[box.type] / (nx * ny)); nz++) {
                    if (box.lx * nx <= container.lx && box.ly * ny <= container.ly && box.lz * nz <= container.lz) {
                        const requires = Array(num_list.length).fill(0);
                        requires[box.type] = nx * ny * nz;
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


function build_box_position(block: Block, init_pos: [number, number, number], box_list: { lx: number; ly: number; lz: number }[]): [number, number, number, number, number, number][] {
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

            const dimensions: [number, number, number, number, number, number][] = [];
            for (const x of x_list) {
                for (const y of y_list) {
                    for (const z of z_list) {
                        dimensions.push([x + init_pos[0], y + init_pos[1], z + init_pos[2], box.lx, box.ly, box.lz]);
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

    let pos: [number, number, number, number, number, number][] = [];
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

export function GetShowParams(problems: Problem[], pss: PackingState[]): ShowParamsType {
    const allMainContainers: main_container[] = [];
    const allModuleContainers: module_container[] = [];
    const allBoxes: box[] = [];
    // 确保 problems 和 pss 数组长度一致
    if (problems.length !== pss.length) {
        throw new Error('The lengths of problems and pss arrays must be the same.');
    }
    for (let i = 0; i < problems.length; i++) {
        const problem = problems[i];
        const ps = pss[i];

        const inputMainContainers: main_container[] = [
            new main_container(
                [problem.container.lx, problem.container.ly, problem.container.lz] as [number, number, number],
                [problem.container.x, problem.container.y, problem.container.z] as [number, number, number],
                getLightColorByNumber(i),
                true,
                0,
                false,
            )
        ];

        const inputModuleContainers: module_container[] = [
            new module_container(
                [problem.container.lx, problem.container.ly, problem.container.lz] as [number, number, number],
                [problem.container.x, problem.container.y, problem.container.z] as [number, number, number],
                
            )
        ];

        const inputBoxes: box[] = [];
        for (let p of ps.plan_list) {
            const bpos = build_box_position(p.block, [p.space.x, p.space.y, p.space.z], problem.box_list);
            for (let bp of bpos) {
                const newBox = new box(
                    [bp[3], bp[4], bp[5]],
                    [bp[0], bp[1], bp[2]],
                    1,
                    getLightColorByType(bp[3]),
                    true,
                    0.5
                );
                

                inputBoxes.push(newBox);
            }
        }

        allMainContainers.push(...inputMainContainers);
        allModuleContainers.push(...inputModuleContainers);
        allBoxes.push(...inputBoxes);
    }

    const Showparams: ShowParamsType = {
        main_containers: [],
        // main_containers: allMainContainers,
        module_containers: allModuleContainers,
        boxes: allBoxes
    };

    return Showparams;
}


/**
 * 根据前台表单数据执行主算法计算
 * @param formData 前台表单数据
 */
export function calculateFromForm(formData: FormData): void {
    const { containers, boxes, num_list } = formData;
    // 创建 Space 实例数组
    const containerInstances = containers.map(
        (container) => new Space(container.x, container.y, container.z, container.lx, container.ly, container.lz)
    );

    // 创建 Box 实例数组
    const boxInstances = boxes.map(
        (box) => new Box(box.lx, box.ly, box.lz, box.id)
    );


    let currentNumList = [...num_list];
    let ps_list: PackingState[] = [];
    let problem_list: Problem[] = [];

    for (const container of containerInstances) {
        // 创建问题实例
        const problem = new Problem(container, boxInstances, currentNumList);
        const search_params: Record<string, any> = {};

        // 具体计算
        const ps: PackingState = basic_heuristic(true, search_params, problem);
        problem_list.push(problem);
        ps_list.push(ps);
        // 更新 num_list 为剩下的箱子数
        currentNumList = ps.avail_list;
        // 如果所有箱子都已经用完，提前结束循环
        if (currentNumList.every(num => num === 0)) {
            break;
        }
    }
    const Showparams: ShowParamsType = GetShowParams(problem_list, ps_list);
    
    setTimeout(() => {
        emitter.emit('update-showParams', Showparams);
    }, 100)
    console.log('formdata',formData)
    console.log('pslist',ps_list)
    console.log('num',currentNumList)

    
}

// 计算重心的函数
export function calculateCenterOfGravity(showParams: ShowParamsType): [number, number, number] {
    let totalMass = 0;
    let totalX = 0;
    let totalY = 0;
    let totalZ = 0;

    // 处理 main_containers
    for (const container of showParams.main_containers) {
        const mass = 1; // 假设 main_container 质量为 1
        const position = container.centerPosition;
        totalMass += mass;
        totalX += position[0] * mass;
        totalY += position[1] * mass;
        totalZ += position[2] * mass;
    }

    // 处理 module_containers
    for (const container of showParams.module_containers) {
        const mass = 1; // 假设 module_container 质量为 1
        const position = container.centerPosition;
        totalMass += mass;
        totalX += position[0] * mass;
        totalY += position[1] * mass;
        totalZ += position[2] * mass;
    }

    // 处理 boxes
    for (const box of showParams.boxes) {
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
    console.log([centerX, centerY, centerZ])
    return [centerX, centerY, centerZ];
}

// 计算场景边界范围
export function calculateSceneBounds(showParams: ShowParamsType) {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    const allObjects = [...showParams.main_containers, ...showParams.module_containers, ...showParams.boxes];
    for (const obj of allObjects) {
        const [centerX, centerY, centerZ] = obj.centerPosition;
        const [halfSizeX, halfSizeY, halfSizeZ] = obj.size.map(size => size / 2);

        const currentMinX = centerX - halfSizeX;
        const currentMaxX = centerX + halfSizeX;
        const currentMinY = centerY - halfSizeY;
        const currentMaxY = centerY + halfSizeY;
        const currentMinZ = centerZ - halfSizeZ;
        const currentMaxZ = centerZ + halfSizeZ;

        minX = Math.min(minX, currentMinX);
        maxX = Math.max(maxX, currentMaxX);
        minY = Math.min(minY, currentMinY);
        maxY = Math.max(maxY, currentMaxY);
        minZ = Math.min(minZ, currentMinZ);
        maxZ = Math.max(maxZ, currentMaxZ);
    }

    return { minX, maxX, minY, maxY, minZ, maxZ };
}

// 计算最佳相机视角
export function calculateBestCameraView(showParams: ShowParamsType): [number, number, number] {
    const bounds = calculateSceneBounds(showParams);
    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;
    const centerZ = (bounds.minZ + bounds.maxZ) / 2;

    const rangeX = bounds.maxX - bounds.minX;
    const rangeY = bounds.maxY - bounds.minY;
    const rangeZ = bounds.maxZ - bounds.minZ;

    // 计算能覆盖场景的最小距离
    const maxRange = Math.max(rangeX, rangeY, rangeZ);
    // 这里添加一个小的缓冲系数，避免相机太近
    const buffer = 5;
    const distance = maxRange / (2 * Math.tan((Math.PI / 180) * 30)) + buffer;

    // 假设相机在 Z 轴正方向，可根据需求调整相机方向
    return [centerX, centerY, centerZ + distance];
}


// 测试算法
export async function main() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 容器
            const containers = [
                new Space(80, 0, 0, 318, 224, 10),
                new Space(70, 0, 10, 338, 224, 20),
                new Space(50, 0, 30, 378, 224, 20),
                new Space(30, 0, 50, 418, 224, 30),
                new Space(0, 0, 80, 478, 224, 40),
                new Space(0, 0, 120, 478, 224, 40)
            ];
            const box_list = [
                new Box(20, 18, 10, 0),
                new Box(25, 18, 20, 1),
                new Box(30, 25, 20, 2),
                new Box(36, 25, 30, 3),
                new Box(53, 32, 30, 4),
                new Box(70, 32, 40, 5)
            ];
            let num_list = [180, 100, 300, 100, 100, 100];
            const ps_list: PackingState[] = [];
            const problem_list: Problem[] = [];
            for (const container of containers) {
                // 问题
                const problem = new Problem(container, box_list, num_list);
                const search_params: Record<string, any> = {};
                // 具体计算
                const ps: PackingState = basic_heuristic(true, search_params, problem);
                problem_list.push(problem)
                ps_list.push(ps)
                // console.log(ps.volume);

                // 更新 num_list 为剩下的箱子数

                num_list = ps.avail_list;

                // 如果所有箱子都已经用完，提前结束循环
                if (num_list.every(num => num === 0)) {
                    break;
                }
            }
            const Showparams = GetShowParams(problem_list, ps_list);
            emitter.emit('update-showParams', Showparams);
            resolve(Showparams);
        }, 0);
    });





}
