import type { box, module_container } from "@/utils/show3d";

// ջ���ݽṹ
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

// ������
export class Box {
    constructor(
        public lx: number,
        public ly: number,
        public lz: number,
        public id: number = 0
    ) { }
}

// ʣ��ռ���
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

    // �ж������ռ��Ƿ����
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

// װ��������
export class Problem {
    constructor(
        public container: Space,
        public box_list: Box[],
        public num_list: number[]
    ) { }
}

// ����
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

    // �ж��������Ƿ����
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

// ������
export class Place {
    constructor(
        public space: Space,
        public block: Block
    ) { }

    // �ж����������Ƿ����
    isEqual(other: Place): boolean {
        return this.space.isEqual(other.space) && this.block.isEqual(other.block);
    }
}

// װ��״̬��
export class PackingState {
    volume = 0;
    volume_complete = 0;
    constructor(
        public plan_list: Place[] = [],
        public space_stack: Stack<Space> = new Stack(),
        public avail_list: number[] = []
    ) { }
}

// ����ǰ̨����������
export interface FormData {
    name:string;
    // ������Ϣ��ÿ���������� x, y, z ����� lx, ly, lz �ߴ�
    containers: {
        name: string;
        x: number;
        y: number;
        z: number;
        lx: number;
        ly: number;
        lz: number;
    }[];
    // ������Ϣ��ÿ��������� lx, ly, lz �ߴ�� id ��ʶ
    boxes: {
        lx: number;
        ly: number;
        lz: number;
        id: number;
        mass:number;
    }[];
    // ÿ������ĳ�ʼ����
    num_list: number[];
}

// ����˵������� 
export interface MenuItem {
    index: string;
    title: string;
    icon: string;
    routeName: string;
    type: 'subMenuTitle' | 'menuItem'; // �����Ӳ˵��������ͨ�˵��� 
    children?: MenuItem[]; // �Ӳ˵������� 
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