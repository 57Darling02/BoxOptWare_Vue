<template>
    <el-container class="layout-container" style="height: 100%">
        <el-container>
            <el-main>
                <div v-if="stepnum == 0" class="show">
                    <h1>- 选择集装箱</h1>
                    <div class="containerstep">
                        <el-select v-model="containerindex" placeholder="Select" size="large" style="width: 240px">
                            <el-option v-for="(item, index) in container_list" :key="item.name" :label="item.name"
                                :value="index" />
                        </el-select>
                    </div>
                    <h1>- 选择货物种类及数量</h1>
                    <el-select v-model="checkvalue" multiple clearable collapse-tags placeholder="Select goods"
                        popper-class="custom-header" :max-collapse-tags="1" style="width: 240px">
                        <template #header>
                            <el-checkbox v-model="boxcheckAll" :indeterminate="indeterminate" @change="handleCheckAll">
                                全选
                            </el-checkbox>
                        </template>
                        <el-option v-for="(item, index) in Box_list" :key="index" :label="item.name" :value="index" />
                    </el-select>

                    <div class="boxstep" v-for="(item, index) in checkvalue">
                        货物 {{ Box_list[item as number].name }} 数量为
                        <el-input-number :min="1" v-model="boxnum[index]" />
                    </div>
                </div>

                <div v-else-if="stepnum == 1" class="show">
                    <h2>最终确认</h2>
                    <div class="carbox">
                        集装箱：{{ finalForm.name }}
                    </div>
                    <div class="carbox">
                        <h3>货物清单</h3>
                        <el-table :data="finalForm.boxes" stripe style="width: 100%">
                            <el-table-column prop="id" label="编号" width="auto" />
                            <el-table-column label="货物名称" width="auto">
                                <template #default="{ row }">
                                    {{ Box_list[row.id].name }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="lx" label="长" width="auto" />
                            <el-table-column prop="ly" label="宽" width="auto" />
                            <el-table-column prop="lz" label="高" width="auto" />
                            <el-table-column label="数量" width="auto">
                                <template #default="{ row, $index }">
                                    {{ finalForm.num_list[$index] }}
                                </template>
                            </el-table-column>
                            <el-table-column label="货物质量" width="auto">
                                <template #default="{ row }">
                                    {{ Box_list[row.id].mass }}
                                </template>
                            </el-table-column>
                        </el-table>

                    </div>

                </div>
                <div v-else-if="stepnum == 2" class="show">
                    <tres3d :main_containers="main_containers" :module_containers="module_containers" :boxes="boxes"
                        :centerOfGravity="centerOfGravity"></tres3d>
                </div>
            </el-main>
        </el-container>
        <el-aside max-width="25%" style="display: flex; flex-direction: column">
            <el-scrollbar>
                <div class="sidebarbox">
                    <el-steps style="max-width: 600px" :active="stepnum" finish-status="success" align-center>
                        <el-step />
                        <el-step />
                    </el-steps>
                </div>
                <div v-if="stepnum == 0" class="sidebarbox">
                    - 选择集装箱、货物种类及数量
                </div>
                <div v-else-if="stepnum == 1" class="sidebarbox" style="height: 500px;">
                    <EChartsPie :title="'货物使用情况'" :legend-data="pieLegendData" :series-data="pieSeriesData" />
                </div>

                <div v-else-if="stepnum == 2 && finalresult != null">
                    <div class="sidebarbox"
                        @click="show(finalresult.container.allbox, finalresult.container.allmodules, finalresult.container.gravityCenter)">
                        <h2>集装箱:{{ finalresult.container.name }}</h2>
                        <b>模块总容积:</b><br />{{ finalresult.container.volumn }} 平方厘米
                        <br />
                        <b>货物体积:</b><br />{{ finalresult.container.boxesvolumn }} 平方厘米
                        <br />
                        <b>体积利用率:</b>{{ (finalresult.container.volumnUR * 100).toFixed(3) }}%
                        <br />
                        <b>重心坐标:</b><br />
                        x:{{ formatxyz(finalresult.container.gravityCenter)[0] }}
                        y:{{ formatxyz(finalresult.container.gravityCenter)[1] }}
                        z:{{ formatxyz(finalresult.container.gravityCenter)[2] }}
                        <br /><b>中心坐标:</b><br />
                        x:{{ formatxyz(geometric_center)[0] }}
                        y:{{ formatxyz(geometric_center)[1] }}
                        z:{{ formatxyz(geometric_center)[2] }}
                        <br /><b>相对中心偏移:</b><br />
                        x:{{ (geometric_center[0] - finalresult.container.gravityCenter[0]).toFixed(3) }}
                        y:{{ (geometric_center[1] - finalresult.container.gravityCenter[1]).toFixed(3) }}
                        z:{{ (geometric_center[2] - finalresult.container.gravityCenter[2]).toFixed(3) }}
                        <div class="hw" v-for="(num, index) in finalresult.container.restBoxnum " :key="index">
                            <div class="hw2" v-if="num">
                                {{ Box_list[finalForm.boxes[index].id].name }} 剩余数量为
                                {{ finalresult.container.restBoxnum[index] }}
                            </div>
                        </div>

                        <br />
                        <button
                            @click="show(finalresult.container.allbox, finalresult.container.allmodules, finalresult.container.gravityCenter)">3D</button>
                    </div>
                    <div v-for="(module, index) in finalresult.modules" class="sidebarbox"
                        :key="`module_${module.name}_${index}`"
                        @click="show(module.boxes, [module.showModule], module.gravityCenter)">
                        <h4>模块:{{ module.name }}</h4>
                        <b>模块容积:</b>{{ module.volumn }} 平方厘米
                        <br />
                        <b>货物体积:</b>{{ module.boxesvolumn }} 平方厘米
                        <br />
                        <b>体积利用率:</b>{{ (module.volumnUR * 100).toFixed(3) }}%
                        <br />
                        <b>重心坐标:</b>{{ formatxyz(module.gravityCenter) }}

                        <div class="hw" v-for="(num, index) in module.num_list" :key="`hw_${module.name}_${index}`">
                            <div class="hw2" v-if="num">
                                {{ Box_list[finalForm.boxes[index].id].name }} 数量为 {{ module.num_list[index] }}
                            </div>
                        </div>
                        <button :key="`module_${module.name}`"
                            @click="show(module.boxes, [module.showModule], module.gravityCenter)">3D</button>
                    </div>
                </div>
            </el-scrollbar>
            <div style="padding: 12px; border-top: 1px solid var(--el-border-color)">
                <el-row :gutter="20" align="middle">
                    <el-col :span="8">
                        <el-button type="primary" plain @click="pre" style="width: 100%;">
                            上一步
                        </el-button>
                    </el-col>
                    <el-col :span="16">
                        <el-button type="primary" plain @click="next" style="width: 100%;">
                            下一步
                        </el-button>
                    </el-col>
                </el-row>
            </div>

        </el-aside>
    </el-container>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useContainerStore } from '@/store/Container'
import { ElNotification, ElLoading, type CheckboxValueType } from 'element-plus'
import tres3d from './tres3dprop.vue'
import { MainCalculate } from '@/utils/cul_module'
import { storeToRefs } from 'pinia'
import EChartsPie from '@/components/EChartsPie.vue';

const containerStore = useContainerStore()
const { container_list } = storeToRefs(containerStore)
const geometric_center = computed<[x: number, y: number, z: number]>(() => {
    if (!finalresult.value || !finalresult.value.container || !finalresult.value.container.allmodules) {
        return [0, 0, 0]; // 如果 finalresult.value 为空或者结构不完整，返回 [0, 0, 0]
    }
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
    const allObjects = [
        ...finalresult.value.container.allmodules,
    ];

    for (const obj of allObjects) {
        const [X, Y, Z] = obj.centerPosition;
        sumX += X;
        sumY += Y;
        sumZ += Z;
    }

    const count = allObjects.length;
    const centerX = sumX / count;
    const centerY = sumY / count;
    const centerZ = sumZ / count;
    return [centerX, centerY, centerZ];
});
// 全局
const stepnum = ref(0)
const finalresult = ref();
const formatxyz = (xyz: [number, number, number]) => {
    return xyz.map(num => num.toFixed(1));
};
const next = () => {
    // 推进下一步并限制
    if (++stepnum.value > 2) {
        stepnum.value = 2;
        return
    }

    if (stepnum.value == 0) {
        console.log(stepnum.value)
    }

    else if (stepnum.value == 1) {
        console.log(stepnum.value)
        finalcheck()
    }
    else if (stepnum.value == 2) {
        (async () => {
            const loading = ElLoading.service({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)',
            });
            try {
                finalresult.value = await MainCalculate(finalForm)
                show(finalresult.value.container.allbox, finalresult.value.container.allmodules, finalresult.value.container.gravityCenter)
            } catch (err) {
                console.log('计算失败', err)
            } finally {
                loading.close();

            }
        })()

    }




};
const pre = () => {
    if (--stepnum.value < 0) {
        stepnum.value = 0
        return
    }
}
import { useBoxStore } from '@/store/Box'
const BoxStore = useBoxStore()
const { Box_list } = storeToRefs(BoxStore)
const boxcheckAll = ref(false)
const indeterminate = ref(false)
const checkvalue = ref<number[]>([])
const boxnum = ref<number[]>([]);
const containerindex = ref(0)
watch(checkvalue, (val) => {
    if (val.length === 0) {
        boxcheckAll.value = false
        indeterminate.value = false
    } else if (val.length === Box_list.value.length) {
        boxcheckAll.value = true
        indeterminate.value = false
    } else {
        indeterminate.value = true
    }
    boxnum.value = new Array(val.length).fill(1);
    // 打印选中的货物信息到控制台
    console.log('Selected  goods:', checkvalue.value)
})
const handleCheckAll = (val: CheckboxValueType) => {
    indeterminate.value = false
    if (val) {
        checkvalue.value = Box_list.value.map((_: any, index: any) => index)
        console.log('All  goods selected')
    } else {
        checkvalue.value = []
        console.log('All  goods deselected')
    }
}



//步骤3 读取表单
import { type FormData } from '@/type'
import type { box, main_container, module_container } from '@/utils/show3d'

let finalForm: FormData = reactive({
    name: container_list.value[containerindex.value].name,
    containers: [],
    boxes: [],
    num_list: []
})


const pieLegendData = ref()
const pieSeriesData = ref()
function finalcheck() {
    if (checkvalue.value.length <= 0) {
        ElNotification({
            message: '请选择货物',
        })
        stepnum.value = 0
        return
    } else if (checkvalue.value.length !== boxnum.value.length) {
        ElNotification({
            message: '货物数量异常',
        })
        stepnum.value = 0
        return
    } else if (containerindex.value < 0 || containerindex.value >= container_list.value.length) {
        ElNotification({
            message: '请选择集装箱',
        })
        stepnum.value = 1
        return
    }
    const finalcontainer = container_list.value[containerindex.value]
    const finalmodules = finalcontainer.module

    if (finalmodules.length == 0) {
        finalmodules.push({
            lx: finalcontainer.lx,
            ly: finalcontainer.ly,
            lz: finalcontainer.lz,
            name: finalcontainer.name,
            x: 0,
            y: 0,
            z: 0,
        })
    }
    finalForm = {
        name: container_list.value[containerindex.value].name,
        containers: finalmodules,
        boxes: [],
        num_list: boxnum.value
    }
    for (const item of checkvalue.value) {
        const box = Box_list.value[item]
        finalForm.boxes.push({
            lx: box.lx,
            ly: box.ly,
            lz: box.lz,
            id: item,
            mass: box.mass
        })
    }
    // 计算饼图的图例数据和系列数据
    const names = new Set<string>();
    finalForm.boxes.forEach((box) => {
        names.add(Box_list.value[box.id].name);
    });
    const dataMap = new Map<string, number>();
    finalForm.boxes.forEach((box, index) => {
        const name = Box_list.value[box.id].name;
        const quantity = finalForm.num_list[index];
        if (dataMap.has(name)) {
            dataMap.set(name, dataMap.get(name)! + quantity);
        } else {
            dataMap.set(name, quantity);
        }
    });
    pieLegendData.value = Array.from(names);
    pieSeriesData.value = Array.from(dataMap.entries()).map(([name, value]) => ({ value, name }));
}


//展示
const main_containers = ref([] as main_container[])
const module_containers = ref([] as module_container[])
const boxes = ref([] as box[])
const centerOfGravity = ref([0, 0, 0] as [number, number, number])

function show(Boxes: box[] = [], modules: module_container[] = [], gravityCenter: [number, number, number]) {

    module_containers.value = modules;
    centerOfGravity.value = gravityCenter;
    boxes.value = Boxes;

}

</script>



<style scoped>
.el-main {
    width: 100%;
    height: 100%;
    /* 确保 maincontainer 占据父容器的全部高度 */
    display: flex;
    overflow: hidden;
}


.show {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgb(248, 241, 241);
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.carbox,
.sidebarbox {
    margin: 10px;
    /* max-width: 500px; */
    /* 最大宽度限制 */
    background-color: rgb(248, 241, 241);
    /* 白色背景 */
    padding: 20px;
    /* 内边距 */
    border-radius: 8px;
    /* 圆角 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */

}


.layout-container .el-aside {
    color: var(--el-text-color-primary);
}

.layout-container .el-menu {
    border-right: none;
}

.layout-container .el-main {
    padding: 0;
}
</style>