import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus'
export const useModuleStore = defineStore('ModuleStore', {
    actions: {
        add_Module(value: { name: string, lx: number, ly: number, lz: number, x: number, y: number, z: number }) {
            const requiredProperties = ['name', 'lx', 'ly', 'lz', 'x', 'y', 'z'];
            for (const prop of requiredProperties) {
                if (!value.hasOwnProperty(prop)) {
                    ElNotification({
                        title: 'error',
                        message: `输入对象缺少 ${prop} 属性`,
                    })
                    return;
                }
            }
            // 检查属性的类型是否正确
            if (typeof value.name !== 'string') {
                ElNotification({
                    title: 'error',
                    message: 'name 属性必须是字符串类型',
                })
                return;
            }
            if (typeof value.lx !== 'number' || typeof value.ly !== 'number' || typeof value.lz !== 'number' || typeof value.x !== 'number' || typeof value.y !== 'number' || typeof value.z !== 'number') {
                ElNotification({
                    title: 'error',
                    message: 'lx, ly, lz 和 xyz 属性必须是数字类型',
                })
                return;
            }
            // 如果所有检查都通过，将对象添加到 Module_list 数组中
            this.Module_list.push(value);
            ElNotification({
                message: `模块${value.name}信息添加成功`,
            })
        }



    },

    state() {
        return {
            Module_list: JSON.parse(localStorage.getItem('Module_list') as string) || [
                { name: 'AAU第一层', lx: 318, ly: 224, lz: 10, x: 80, y: 0, z: 0 },
                { name: 'AAU第二层', lx: 338, ly: 224, lz: 20, x: 70, y: 0, z: 10 },
                { name: 'AAU第三层', lx: 378, ly: 224, lz: 20, x: 50, y: 0, z: 30 },
                { name: 'AAU第四层', lx: 418, ly: 224, lz: 30, x: 30, y: 0, z: 50 },
                { name: 'AAU第五层', lx: 478, ly: 224, lz: 40, x: 0, y: 0, z: 80 },
                { name: 'AAU第六层', lx: 478, ly: 224, lz: 40, x: 0, y: 0, z: 120 },
                { name: 'AKE第一层', lx: 156, ly: 154, lz: 10, x: 0, y: 0, z: 0 },
                { name: 'AKE第二层', lx: 164, ly: 154, lz: 20, x: 0, y: 0, z: 10 },
                { name: 'AKE第三层', lx: 180, ly: 154, lz: 20, x: 0, y: 0, z: 30 },
                { name: 'AKE第四层', lx: 200, ly: 154, lz: 30, x: 0, y: 0, z: 50 },
                { name: 'AKE第五层', lx: 200, ly: 154, lz: 40, x: 0, y: 0, z: 80 },
                { name: 'AKE第六层', lx: 200, ly: 154, lz: 40, x: 0, y: 0, z: 120 },
                { name: 'AMF第一层', lx: 318, ly: 244, lz: 10, x: 45, y: 0, z: 0 },
                { name: 'AMF第二层', lx: 336, ly: 244, lz: 20, x: 36, y: 0, z: 10 },
                { name: 'AMF第三层', lx: 372, ly: 244, lz: 20, x: 18, y: 0, z: 30 },
                { name: 'AMF第四层', lx: 408, ly: 244, lz: 30, x: 0, y: 0, z: 50 },
                { name: 'AMF第五层', lx: 408, ly: 244, lz: 40, x: 0, y: 0, z: 80 },
                { name: 'AMF第六层', lx: 408, ly: 244, lz: 40, x: 0, y: 0, z: 120 }
            ]
        }
    }

});