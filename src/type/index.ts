import type { box, module_container } from "@/utils/show3d";

// 栈数据结构
export class Stack<T> {
    private items: T[] = [];

    get isEmpty(): boolean {
        return this.items.length === 0;
    }

    get size(): number {
        return this.items.length;
    }

    push(...items: T[]): void {
        this.items.push(...items);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    clear(): void {
        this.items = [];
    }
}

// 箱子类
export class Box {
    constructor(
        public lx: number,
        public ly: number,
        public lz: number,
        public id: number = 0
    ) { }
}

// 剩余空间类
export class Space {
    constructor(
        public x: number,
        public y: number,
        public z: number,
        public lx: number,
        public ly: number,
        public lz: number,
        public origin: Space | null = null
    ) { }

    // 判断两个空间是否相等
    isEqual(other: Space | null | undefined): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        return (
            this.x === other.x &&
            this.y === other.y &&
            this.z === other.z &&
            this.lx === other.lx &&
            this.ly === other.ly &&
            this.lz === other.lz
        );
    }
}

// 装箱问题类
export class Problem {
    constructor(
        public container: Space,
        public box_list: Box[],
        public num_list: number[]
    ) { }
}

// 块类
export class Block {
    volume = 0;
    ax = 0;
    ay = 0;
    times = 0;
    fitness = 0;

    constructor(
        public lx: number,
        public ly: number,
        public lz: number,
        public require_list: number[] = [],
        public children: Block[] = [],
        public direction: 'x' | 'y' | 'z' | null = null
    ) { }

    // 判断两个块是否相等
    isEqual(other: Block | null | undefined): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        return (
            this.lx === other.lx &&
            this.ly === other.ly &&
            this.lz === other.lz &&
            this.ax === other.ax &&
            this.ay === other.ay &&
            this.require_list.every((val, idx) => val === other.require_list[idx])
        );
    }
}

// 放置类
export class Place {
    constructor(
        public space: Space,
        public block: Block
    ) { }

    // 判断两个放置是否相等
    isEqual(other: Place): boolean {
        return this.space.isEqual(other.space) && this.block.isEqual(other.block);
    }
}

// 装箱状态类
export class PackingState {
    volume = 0;
    volume_complete = 0;
    constructor(
        public plan_list: Place[] = [],
        public space_stack: Stack<Space> = new Stack(),
        public avail_list: number[] = []
    ) { }
}

// 定义前台表单数据类型
export interface FormData {
    name:string;
    // 容器信息，每个容器包含 x, y, z 坐标和 lx, ly, lz 尺寸
    containers: {
        name: string;
        x: number;
        y: number;
        z: number;
        lx: number;
        ly: number;
        lz: number;
    }[];
    // 箱体信息，每个箱体包含 lx, ly, lz 尺寸和 id 标识
    boxes: {
        lx: number;
        ly: number;
        lz: number;
        id: number;
        mass:number;
    }[];
    // 每个箱体的初始数量
    num_list: number[];
}

// 定义菜单项数据 
export interface MenuItem {
    index: string;
    title: string;
    icon: string;
    routeName: string;
    type: 'subMenuTitle' | 'menuItem'; // 区分子菜单标题和普通菜单项 
    children?: MenuItem[]; // 子菜单项数组 
}

export interface finalResult {
    modules:{
        name: string;
        x: number;
        y: number;
        z: number;
        lx: number;
        ly: number;
        lz: number;
        boxes:box[];
        volumn: number;
        boxesvolumn: number;
        volumnUR: number;
        gravityCenter: [number,number,number];
        num_list:number[],
        showModule:module_container
    }[];
    container:{
        name:string;
        volumn: number;
        boxesvolumn: number;
        volumnUR: number;
        gravityCenter: [number,number,number];
        allmodules:module_container[];
        allbox:box[];
        restBoxnum:number[]
    }
}