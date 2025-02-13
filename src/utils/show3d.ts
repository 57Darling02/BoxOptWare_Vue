// ##############################################################color

// 定义半透明容器使用的浅色颜色数组，相邻颜色差别尽可能大
const lightColorArray: string[] = [

    "#FFCCCC", // 浅红色
    "#CCFFCC", // 浅绿色
    "#CCCCFF", // 浅蓝色
    "#FFFFCC", // 浅黄色
    "#FFCCFF", // 浅紫色
    "#CCFFFF"  // 浅青色
];

// 定义不透明色块使用的深色颜色数组，与浅色数组颜色完全不同
const darkColorArray: string[] = [
    "#8B0000", // 深红色
    "#006400", // 深绿色
    "#00008B", // 深蓝色
    "#8B8B00", // 深黄色
    "#8B008B", // 深紫色
    "#008B8B"  // 深青色
];

/**
 * 根据输入数字为半透明容器返回对应的浅色颜色色号
 * @param num 输入的数字
 * @returns 对应的浅色颜色色号
 */
export function getLightColorByNumber(num: number): string {
    // 计算输入数字在浅色颜色数组长度范围内的索引
    const index = num % lightColorArray.length;
    // 根据索引从浅色颜色数组中获取对应的颜色色号
    return lightColorArray[index];
}

export function getLightColorByType(num: number): string {
    // 计算输入数字在浅色颜色数组长度范围内的索引
    const index = num % lightColorArray.length;
    // 根据索引从浅色颜色数组中获取对应的颜色色号
    return lightColorArray[index];
}

/**
 * 根据输入数字为不透明色块返回对应的深色颜色色号
 * @param num 输入的数字
 * @returns 对应的深色颜色色号
 */
export function getDarkColorByNumber(num: number): string {
    // 计算输入数字在深色颜色数组长度范围内的索引
    const index = num % darkColorArray.length;
    // 根据索引从深色颜色数组中获取对应的颜色色号
    return darkColorArray[index];
}

// 用于存储排序后的长宽高组合与颜色索引的映射
const dimensionColorMap = new Map<string, number>();

// 生成一个唯一的键，通过排序后的长宽高组合
function generateKey(dimensions: [number, number, number]): string {
    return dimensions.slice().sort((a, b) => a - b).join('-');
}

// 根据输入的长宽高获取颜色
export function getColorByDimensions(dimensions: [number, number, number]): string {
    const key = generateKey(dimensions);
    let colorIndex;

    if (dimensionColorMap.has(key)) {
        colorIndex = dimensionColorMap.get(key)!;
    } else {
        // 当颜色索引超出颜色数组长度时，取模让其复用颜色
        colorIndex = dimensionColorMap.size % darkColorArray.length;
        dimensionColorMap.set(key, colorIndex);
    }

    return darkColorArray[colorIndex];
}

//######################################box
// 基类，用于管理 index 的自动递增
class BaseBox {
    // 静态属性，用于记录当前的 index 值
    protected static currentIndex = 0;
    public index: number;
    constructor() {
        // 获取当前的 index 值
        this.index = BaseBox.currentIndex++;
        // 根据类名和 index 生成 id
    }
}

// 定义 showbox 类，设置部分属性的默认值
class showbox extends BaseBox {
    public centerPosition: [number, number, number];
    public cornerPosition: [number, number, number];
    constructor(
        public size: [number, number, number],
        public position: [number, number, number],
        public color: string = getDarkColorByNumber(BaseBox.currentIndex - 1),
        public transparent: boolean = false,
        public opacity: number = 1,
        public wireframe: boolean = false,
        public positionType: 'center' | 'corner' = 'corner',
        public id: number = -1
    ) {
        // 调用基类的构造函数，传入类名
        super();
        if (positionType === 'center') {
            this.centerPosition = position;
            const [halfWidth, halfHeight, halfDepth] = size.map(dim => dim / 2);
            this.cornerPosition = [
                position[0] - halfWidth,
                position[1] - halfHeight,
                position[2] - halfDepth
            ];
        } else {
            this.cornerPosition = position;
            const [halfWidth, halfHeight, halfDepth] = size.map(dim => dim / 2);
            this.centerPosition = [
                position[0] + halfWidth,
                position[1] + halfHeight,
                position[2] + halfDepth
            ];
        }
    }
}

// 定义 main_container 类，继承自 showbox 并覆盖默认值
export class main_container extends showbox {
    constructor(
        size: [number, number, number],
        position: [number, number, number],
        color: string = '#ffffff',
        transparent: boolean = true,
        opacity: number = 0,
        wireframe: boolean = true,
        positionType: 'center' | 'corner' = 'corner'
    ) {
        // 调用父类的构造函数
        super(size, position, color, transparent, opacity, wireframe, positionType);
        
    }
}

// 定义 module_container 类，继承自 showbox 并覆盖默认值
export class module_container extends showbox {
    constructor(
        size: [number, number, number],
        position: [number, number, number],
        color: string = '#ffffff',
        transparent: boolean = true,
        opacity: number = 0.5,
        wireframe: boolean = true,
        positionType: 'center' | 'corner' = 'corner'
    ) {
        // 调用父类的构造函数
        super(size, position, color, transparent, opacity, wireframe, positionType);
    }
}

// 定义 货物 类，继承自 showbox
export class box extends showbox {
    constructor(
        size: [number, number, number],
        position: [number, number, number],
        public mass:number = 1,
        color: string = '',
        transparent: boolean = false,
        opacity: number = 1,
        wireframe: boolean = false,
        positionType: 'center' | 'corner' = 'corner',
        id:number = -1
    ) {
        // 调用父类的构造函数
        super(size, position, color, transparent, opacity, wireframe, positionType,id);
        if(this.color !== ''){
            this.color = getColorByDimensions(this.size)
        }
        
    }
    // 将 box 实例转换为普通对象以便序列化
    toPlainObject() {
        return {
            size: this.size,
            position: this.position,
            mass: this.mass,
            color: this.color,
            transparent: this.transparent,
            opacity: this.opacity,
            wireframe: this.wireframe,
            positionType: this.positionType
        };
    }

    // 从普通对象创建 box 实例
    static fromPlainObject(obj: any): box {
        return new box(
            obj.size,
            obj.position,
            obj.mass,
            obj.color,
            obj.transparent,
            obj.opacity,
            obj.wireframe,
            obj.positionType
        );
    }
}

 // 定义 ShowParams 的类型
type ShowParamsType = {
    main_containers: main_container[];
    module_containers: module_container[];
    boxes: box[];
    gcenter?:[number,number,number] //重心位置参数
};
export type { ShowParamsType };