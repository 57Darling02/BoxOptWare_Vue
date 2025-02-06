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
                    <h1>最终确认</h1>
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
                <div v-else-if="stepnum == 3" class="sidebarbox">
                    - 结果分析和可视化
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
import { reactive, ref, watch, nextTick } from 'vue'
import { useContainerStore } from '@/store/Container'

import { ElNotification, ElLoading, type CheckboxValueType } from 'element-plus'
import trs3d from './trs3d.vue'

import { storeToRefs } from 'pinia'

const containerStore = useContainerStore()
const { container_list } = storeToRefs(containerStore)

// 全局
const stepnum = ref(0)
const next = () => {
    // 在所有操作之前调用 ElLoading.service
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    });
    // 推进下一步并限制
    if (++stepnum.value > 3) {
        stepnum.value = 3;
        loading.close();
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
    }
    else if (stepnum.value == 3) {
        //判断表单格式
        finalcheck()

    }

    loading.close();


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
watch(containerindex, (val) => {
    console.log('@@@@', val)
})

//步骤3 读取表单
import { calculateFromForm } from '@/utils/cul_module'
import { type FormData } from '@/type'
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
            message: '请选择容器',
        })
        stepnum.value = 1
        return
    }
    const finalcontainer = container_list.value[containerindex.value]
    const modules = finalcontainer.module

    if (modules.length == 0) {
        modules.push({
            lx: finalcontainer.lx,
            ly: finalcontainer.ly,
            lz: finalcontainer.lz,
            name: finalcontainer.name,
            x: 0,
            y: 0,
            z: 0,
        })
    }
    console.log('module', modules)
    const finalForm: FormData = {
        containers: modules,
        boxes: [],
        num_list: boxnum.value
    }
    for (const item of checkvalue.value) {
        console.log('hhhh', item)
        const box = Box_list.value[item]
        finalForm.boxes.push({
            lx: box.lx,
            ly: box.ly,
            lz: box.lz,
            id: item
        })
    }
    calculateFromForm(finalForm)




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

.sidebarbox {
    margin: 10px;
    max-width: 500px;
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