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
          <tres3d :main_containers="main_containers" :module_containers="module_containers" :boxes="boxes"
            :centerOfGravity="centerOfGravity"></tres3d>
        </div>
        <div class="config">
          <div class="box-config">
            <el-form :model="currentform" v-if="childIndex > 3">
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
                  <el-button type="primary" style="width:100%" @click="confirmForm">修改</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="danger" style="width:100%" @click="deleteRow">删除</el-button>
                </el-col>
              </el-row>
            </el-form>


            <div v-else-if="childIndex == 1">
              <div class="name">
                <b>AKE型集装器</b>
              </div>
              <div class="instruction">
                <img src="@/asset/image/aau.png" alt="aau型" style="width: 100%;">
                <div class="word">
                  <el-table :data="aau" :header-cell-style="{ 'text-align': 'center' }"
                    :cell-style="{ 'text-align': 'center' }" :row-style="{ 'height': '60px' }" style="font-size: 13px">
                    <el-table-column label="内容量" prop="num"></el-table-column>
                    <el-table-column label="505cu. ft., 14.3mc" prop="box"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div v-else-if="childIndex == 2">
              <div class="name">
                <b>AKE型集装器</b>
              </div>
              <div class="instruction">
                <div class="pic">
                  <img src="@/asset/image/ake.png" alt="ake型" style="width: 100%;">
                </div>
                <div class="word">
                  <el-table :data="ake" :header-cell-style="{ 'text-align': 'center' }"
                    :cell-style="{ 'text-align': 'center' }" :row-style="{ 'height': '60px' }" style="font-size: 13px">
                    <el-table-column label="内容量" prop="num"></el-table-column>
                    <el-table-column label="371cu. ft., 10.51mc" prop="box"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div v-else-if="childIndex == 3">
              <div class="name">
                <b>AMF型集装器</b>
              </div>
              <div class="instruction">
                <div class="pic">
                  <img src="@/asset/image/amf.png" alt="amf型" style="width: 100%;">
                </div>
                <div class="word">
                  <el-table :data="amf" :header-cell-style="{ 'text-align': 'center' }"
                    :cell-style="{ 'text-align': 'center' }" :row-style="{ 'height': '60px' }" style="font-size: 13px">
                    <el-table-column label="内容量" prop="num"></el-table-column>
                    <el-table-column label="516cu. ft., 14.6mc" prop="box"></el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
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
import tres3d from '@/components/tres3dprop.vue'
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

const main_containers = ref([] as main_container[])
const module_containers = ref([] as module_container[])
const boxes = ref([] as box[])
const centerOfGravity = ref([0, 0, 0] as [number, number, number])

const show = () => {
  const { lx, ly, lz, mass } = currentform
  const isValid = [lx, ly, lz, mass].every(val => typeof val === 'number')
  if (isValid && childIndex.value > 3) {
    boxes.value = [
      new box(
        [lx, ly, lz],
        [0, 0, 0],
        0,
        '#A39480',
        true,
        0.5,
        false,
        'center'
      )
    ];
    module_containers.value = [
      new module_container(
        [lx, ly, lz],
        [0, 0, 0],
        '#FFFFE0',
        false,
        0,
        true,
        'center'
      )
    ];
  } else {
    //航空集装箱建模输入
    let mds = []
    for(const i of container_list.value[childIndex.value-1].module){
      const {x,y,z,lx,ly,lz} = i
      mds.push(
        new module_container(
        [lx, ly, lz],
        [x, y, z],
        '#FFFFE0',
        true,
        0.5,
        false,
        'corner'
      )
      )
    }
    module_containers.value = mds
  }
}
watch(currentform, (newValue: any, oldValue) => {
  show()
}, { immediate: true })

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

const ake = [{ num: "数量", box: "319" }, { num: "载具重量", box: "220kg" }, { num: "适载机型", box: "747,747F,777,Airbus" }]
const amf = [{ num: "数量", box: "319" }, { num: "载具重量", box: "330kg" }, { num: "适载机型", box: "747,747F,777,Airbus" }]
const aau = [{ num: "数量", box: "319" }, { num: "载具重量", box: "355kg" }, { num: "适载机型", box: "747,747F" }]
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
