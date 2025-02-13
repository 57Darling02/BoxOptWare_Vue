<template>
    <el-container class="layout-container" style="height: 100%">
        <el-container>
            <el-main>
                <div v-if="stepnum == 0" class="show">
                    <h1>- 选择货物种类</h1>
                    <el-select v-model="checkvalue" multiple clearable collapse-tags placeholder="Select goods"
                        popper-class="custom-header" :max-collapse-tags="1" style="width: 240px">
                        <template #header>
                            <el-checkbox v-model="boxcheckAll" :indeterminate="indeterminate" @change="handleCheckAll">
                                全选
                            </el-checkbox>
                        </template>
                        <el-option v-for="(item, index) in Box_list" :key="index" :label="item.name" :value="index" />
                    </el-select>
                    <h1>- 选择货物数量</h1>
                    <div class="boxstep" v-for="(item, index) in checkvalue">
                        货物 {{ Box_list[item as number].name }} 数量为
                        <el-input-number :min="1" v-model="boxnum[index]" />
                    </div>
                </div>
                <div v-else-if="stepnum == 1" class="show">
                    <h1>- 选择集装箱</h1>
                    <div class="containerstep">
                        <el-select v-model="containerindex" placeholder="Select" size="large" style="width: 240px">
                            <el-option v-for="(item, index) in container_list" :key="item.name" :label="item.name"
                                :value="index" />
                        </el-select>
                    </div>
                </div>
                <div v-else-if="stepnum == 2" class="show">
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
                <div v-else-if="stepnum == 3" class="show">
                    <trs3d />
                </div>
            </el-main>
        </el-container>
        <el-aside max-width="25%" style="display: flex; flex-direction: column">
            <el-scrollbar>
                <div class="sidebarbox">
                    <el-steps style="max-width: 600px" :active="stepnum" finish-status="success" align-center>
                        <el-step />
                        <el-step />
                        <el-step />
                    </el-steps>
                </div>
                <div v-if="stepnum == 0" class="sidebarbox">
                    - 选择货物种类及数量
                </div>
                <div v-else-if="stepnum == 1" class="sidebarbox">
                    - 选择集装箱
                </div>
                <div v-else-if="stepnum == 2" class="sidebarbox">
                    - 根据货物和集装箱类型分配模块
                </div>
                <div v-else-if="stepnum == 3">
                    <div class="sidebarbox">
                        <h2>集装箱:{{ finalresult.container.name }}</h2>
                        模块总容积:<br />{{ finalresult.container.volumn }} 平方厘米
                        <br />
                        货物体积:<br />{{ finalresult.container.boxesvolumn }} 平方厘米
                        <br />
                        体积利用率:<br />{{ finalresult.container.volumnUR * 100 }}%
                        <br />
                        重心坐标:<br />{{ finalresult.container.gravityCenter }}
                        <button @click="show(finalresult.container.allbox,finalresult.container.allmodules,finalresult.container.gravityCenter)">3D</button>
                    </div>
                    <div v-for="module in finalresult.modules" class="sidebarbox">
                        <h4>模块:{{ module.name }}</h4>
                        模块容积:<br />{{ module.volumn }} 平方厘米
                        <br />
                        货物体积:<br />{{ module.boxesvolumn }} 平方厘米
                        <br />
                        体积利用率:<br />{{ module.volumnUR * 100 }}%
                        <br />
                        重心坐标:<br />{{ module.gravityCenter }}
                        <button @click="show(module.boxes,[module.showModule],module.showModule.centerPosition)">3D</button>

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
import { reactive, ref, watch } from 'vue'
import { useContainerStore } from '@/store/Container'
import { ElNotification, ElLoading, type CheckboxValueType } from 'element-plus'
import trs3d from './trs3d.vue'
import {  MainCalculate } from '@/utils/cul_module'
import { storeToRefs } from 'pinia'


const containerStore = useContainerStore()
const { container_list } = storeToRefs(containerStore)

// 全局
const stepnum = ref(0)
const finalresult = ref();
const next = () => {
    // 推进下一步并限制
    if (++stepnum.value > 3) {
        stepnum.value = 3;
        return
    }

    if (stepnum.value == 0) {
        console.log(stepnum.value)
    }
    else if (stepnum.value == 1) {
        console.log(stepnum.value)
    }
    else if (stepnum.value == 2) {
        console.log(stepnum.value)
        finalcheck()
    }
    else if (stepnum.value == 3) {
        // calculateFromForm(finalForm)

        (async () => {
            const loading = ElLoading.service({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)',
            });
            try {
                finalresult.value = await MainCalculate(finalForm)
                console.log('result', finalresult.value)
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


// 步骤一
import { useBoxStore } from '@/store/Box'
const BoxStore = useBoxStore()
const { Box_list } = storeToRefs(BoxStore)
const boxcheckAll = ref(false)
const indeterminate = ref(false)
const checkvalue = ref<number[]>([])
const boxnum = ref<number[]>([]);
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


// 步骤2选择集装箱
const containerindex = ref(0)
// watch(containerindex, (val) => {
//     console.log('@@@@', val)
// })

//步骤3 读取表单

import { type FormData } from '@/type'
import emitter from '@/utils/emitter'
import type { box, module_container } from '@/utils/show3d'

let finalForm: FormData = {
    name: container_list.value[containerindex.value].name,
    containers: [],
    boxes: [],
    num_list: []
}



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
            id: item
        })
    }
}

//展示
function show(boxes: box[] = [],modules:module_container[] = [],gravityCenter:[number,number,number]){
    emitter.emit('showModules', modules);
    emitter.emit('centerOfGravityPosition', gravityCenter);
    emitter.emit('showBoxes', boxes);
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
    background-color: green;
}

.carbox,
.sidebarbox {
    margin: 10px;
    /* max-width: 500px; */
    /* 最大宽度限制 */
    background-color: white;
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
    background: var(--el-color-primary-light-8);
}

.layout-container .el-menu {
    border-right: none;
}

.layout-container .el-main {
    padding: 0;
}
</style>