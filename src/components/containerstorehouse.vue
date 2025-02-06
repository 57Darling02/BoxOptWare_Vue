<template>
  <el-container class="layout-container" style="height: 100%">
    <el-aside width="200px" style="display: flex; flex-direction: column">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" @select="handleSelect" :default-active="editIndex">


          <!-- 动态规则箱型 -->
          <el-sub-menu index="1">
            <template #title>集装箱</template>
            <el-menu-item v-for="(container, index) in containerStore.container_list" :key="container.name"
              :index="`1-${index + 1}`">
              {{ container.name }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>

      <!-- 添加箱型按钮 -->
      <div style="padding: 12px; border-top: 1px solid var(--el-border-color)">
        <el-button type="primary" style="width: 100%" @click="addcontainer">
          添加箱型
        </el-button>
      </div>
    </el-aside>

    <el-container>
      <el-main>
        <div class="show">
          hhhh
        </div>
        <div class="config">
          <div class="container-config">
            <el-form :model="currentform">
              <!-- 第一行：集装箱名称 -->
              <el-row :gutter="15">
                <el-col :span="24">
                  <el-form-item label="集装箱名称">
                    <el-input v-model="currentform.name" autocomplete="off" />
                  </el-form-item>
                </el-col>
              </el-row>

              <!-- 第二行：长和宽 -->
              <el-row :gutter="15">
                <el-col :span="12">
                  <el-form-item label="长">
                    <el-input style="max-width:80px" v-model.number="currentform.lx" autocomplete="off" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="宽">
                    <el-input style="max-width:80px" v-model.number="currentform.ly" autocomplete="off" />
                  </el-form-item>
                </el-col>
              </el-row>

              <!-- 第三行：高和最大质量 -->
              <el-row :gutter="15">
                <el-col :span="12">
                  <el-form-item label="高">
                    <el-input style="max-width:80px" v-model.number="currentform.lz" autocomplete="off" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="载重">
                    <el-input style="max-width:80px" v-model.number="currentform.mass" autocomplete="off" />
                  </el-form-item>
                </el-col>
              </el-row>

              <!-- 第四行 -->
              <el-row :gutter="15">
                <el-col :span="12">
                  <el-button type="primary" style="width:100%" :disabled="childIndex <=3 " @click="confirmForm">修改</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="danger" style="width:100%" :disabled="childIndex <=3 " @click="deleteRow">删除</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>

          <div class="box-config">



          </div>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useContainerStore } from '@/store/Container'
import { ElNotification } from 'element-plus'
import trs3d from './trs3d.vue'
import emitter from "@/utils/emitter";
import { box, module_container, main_container, type ShowParamsType } from '@/utils/show3d'

import { storeToRefs } from 'pinia'
const containerStore = useContainerStore()
const { container_list } = storeToRefs(containerStore)
const editIndex = ref('1-1')
const parentIndex = ref<number>(1);
const childIndex = ref<number>(1);

const currentform = reactive({
  name: '箱型',
  lx: 1,
  ly: 1,
  lz: 1,
  mass: 1,
  module: []
})


watch(editIndex, (newValue, oldValue) => {
  console.log(newValue)
  const [newParentIndex, newChildIndex] = newValue.split('-');
  // 更新全局变量的值
  parentIndex.value = parseInt(newParentIndex);
  childIndex.value = parseInt(newChildIndex);
  const selectedContainer = container_list.value[childIndex.value - 1]
  // 将 selectedContainer 的值赋值给 currentform 
  currentform.name = selectedContainer.name
  currentform.lx = selectedContainer.lx
  currentform.ly = selectedContainer.ly
  currentform.lz = selectedContainer.lz
  currentform.mass = selectedContainer.mass
  currentform.module = selectedContainer.module
  console.log(currentform.module)
});

const handleSelect = (index: string) => {
  editIndex.value = index
}

const addcontainer = () => {
  containerStore.container_list.push(
    {
      name: '默认规则集装箱',
      lx: 1,
      ly: 1,
      lz: 1,
      mass: 1,
      module: []
    }
  )
}

const confirmForm = () => {
  if (childIndex.value <= 3) {
    ElNotification({
      message: '无法修改经典箱型',
    })
  } else {
    containerStore.container_list[childIndex.value - 1] = { ...currentform }
    ElNotification({
      message: `集装箱 ${currentform.name} 信息修改成功`,
    })
  }
}
const deleteRow = () => {
  if (childIndex.value <= 3) {
    ElNotification({
      message: '无法修改经典箱型',
    });
    return;
  }

  ElNotification({
    message: `集装箱 ${containerStore.container_list[childIndex.value - 1].name} 信息删除成功`,
  });
  // 先执行删除操作 
  containerStore.container_list.splice(childIndex.value - 1, 1);

  // 如果删除的是最后一个元素，则选中前一个元素 
  if (containerStore.container_list.length > 0) {
    const newIndex = childIndex.value - 1 >= containerStore.container_list.length ?
      containerStore.container_list.length - 1 :
      childIndex.value - 1;
    // 更新选中的索引 
    editIndex.value = `1-${newIndex + 1}`;

  } else {
    // 如果没有剩余的容器，则清空表单 
    currentform.name = '';
    currentform.lx = 1;
    currentform.ly = 1;
    currentform.lz = 1;
    currentform.mass = 1;
    ElNotification({
      message: '最后一个集装箱已被删除',
    });
  }
};
</script>



<style scoped>
.el-main {
  width: 100%;
  height: 100%;
  /* 确保 maincontainer 占据父容器的全部高度 */
  display: flex;
  overflow: hidden;

}

.show,
.config {
  height: 100%;
}

.show {
  width: 70%;
  box-sizing: border-box;
  background-color: green;
}

.config {
  flex: 1;
  flex-direction: column;
  /* 确保子元素垂直排列 */
  align-items: center;
  /* 水平居中对齐 */
  padding: 20px;
  /* 添加内边距 */
  gap: 15px;
  /* 子元素之间的垂直间距 */
  border-radius: 8px;
  /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 阴影效果 */
  background-color: #f5f5f5;
  /* 背景颜色 */
  width: 30%;
  height: 100%;
  box-sizing: border-box;
}

.box-config,
.sidebarbox {
  margin-top: 10px;
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
