import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus'
export const useBoxStore = defineStore('BoxStore', {
    actions: {
        add_Box(value: { name: string, lx: number, ly: number, lz: number, mass: number }) {
            const requiredProperties = ['name', 'lx', 'ly', 'lz', 'mass'];
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
            if (typeof value.lx !== 'number' || typeof value.ly !== 'number' || typeof value.lz !== 'number' || typeof value.mass !== 'number') {
                ElNotification({
                    title: 'error',
                    message: 'lx, ly, lz 和 mass 属性必须是数字类型',
                })
                return;
            }
            // 如果所有检查都通过，将对象添加到 Box_list 数组中
            this.Box_list.push(value);
            ElNotification({
                message: `货物 ${value.name} 信息添加成功`,
            })
        }



    },

    state() {
        return {
            Box_list: JSON.parse(localStorage.getItem('Box_list') as string) || [
                {
                    name: '1号货物',
                    lx: 20,
                    ly: 18,
                    lz: 10,
                    mass: 1,
                },
                {
                    name: '2号货物',
                    lx: 25,
                    ly: 18,
                    lz: 20,
                    mass: 1,
                },
                {
                    name: '3号货物',
                    lx: 30,
                    ly: 25,
                    lz: 120,
                    mass: 1,
                },
                {
                    name: '4号货物',
                    lx: 36,
                    ly: 25,
                    lz: 30,
                    mass: 1,
                },
                {
                    name: '5号货物',
                    lx: 53,
                    ly: 32,
                    lz: 30,
                    mass: 1,
                },
                {
                    name: '6号货物',
                    lx: 70,
                    ly: 32,
                    lz: 40,
                    mass: 1,
                },
            ]
        }
    }

});