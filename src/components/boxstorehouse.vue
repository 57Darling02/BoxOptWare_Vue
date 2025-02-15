<template>
  <el-table :data="BoxStore.Box_list" style="width: 100%" height="95%">
    <el-table-column prop="name" label="货物名称" width="auto" />
    <el-table-column prop="lx" label="长" width="auto" />
    <el-table-column prop="ly" label="宽" width="auto" />
    <el-table-column prop="lz" label="高" width="auto" />
    <el-table-column prop="mass" label="质量" width="auto" />
    <el-table-column fixed="right" label="操作" width="auto">
      <template #default="scope">
        <el-button type="primary" class="fa-regular fa-pen" @click.prevent="openDialog(scope.$index)"
          circle></el-button>
        <el-button type="danger" class="fa-solid fa-trash" @click.prevent="deleteRow(scope.$index)" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="openDialog(-1)">
    新增货物
  </el-button>

  <el-dialog v-model="dialogFormVisible" width="90%">
    <div class="dialog" style="position: relative; display: flex; flex-direction: row;">
      <div class="td-container"
        style="flex-direction:column; max-width:90%;max-height: 90%; width: 500px;height: 500px;;position: relative;">
        <tres3d
          :main_containers="main_containers"
          :module_containers="module_containers"
          :boxes="boxes"
          :centerOfGravity="centerOfGravity"
        ></tres3d>
      </div>
      <div class="form-container">
        <el-form :model="form">
          <el-form-item label="货物名称" style="width:auto">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="长">
            <el-input v-model.number="form.lx" autocomplete="off" />
          </el-form-item>
          <el-form-item label="宽" style="width:80%">
            <el-input v-model.number="form.ly" autocomplete="off" />
          </el-form-item>
          <el-form-item label="高" style="width:80%">
            <el-input v-model.number="form.lz" autocomplete="off" />
          </el-form-item>
          <el-form-item label="质量" style="width:80%">
            <el-input v-model.number="form.mass" autocomplete="off" />
          </el-form-item>
        </el-form>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmForm">确定</el-button>
        </div>
      </div>

    </div>



  </el-dialog>

</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useBoxStore } from '@/store/Box'
import { ElNotification } from 'element-plus'
import tres3d from './tres3dprop.vue'
import { box, module_container, main_container, type ShowParamsType } from '@/utils/show3d'
const BoxStore = useBoxStore()
const isValid = ref(false)
const dialogFormVisible = ref(false)
const editIndex = ref(-1)
const DialogTitle = ref('新增货物')
const form = reactive({
  name: '默认模块',
  lx: 1,
  ly: 1,
  lz: 1,
  mass: 1,
})

const main_containers = ref([] as main_container[])
const module_containers = ref([] as module_container[])
const boxes = ref([] as box[])
const centerOfGravity = ref([0, 0, 0] as [number, number, number])

watch(form, (newValue: any, oldValue) => {
  const { lx, ly, lz,mass} = form
  isValid.value = [lx, ly, lz, mass].every(val => typeof val === 'number')
  if (isValid.value) {
    boxes.value = [
      new box(
        [lx, ly, lz],
        [0, 0, 0],
        0,
        '#A39480',
        false,
        0.5,
        false,
        'center'
      )
    ];
    centerOfGravity.value =  [0,0,0];
    module_containers.value = [
      new module_container(
        [lx, ly, lz],
        [0, 0, 0],
        '#FFFFE0',
        false,
        1,
        true,
        'center'
      )
    ];
  }
}, { immediate: true })

BoxStore.$subscribe((mutate, state) => {
  localStorage.setItem('Box_list', JSON.stringify(state.Box_list))
})
const deleteRow = (index: number) => {
  ElNotification({
    message: `货物 ${BoxStore.Box_list[index].name}信息删除成功`,
  })
  BoxStore.Box_list.splice(index, 1)
}
const openDialog = (index: number) => {
  editIndex.value = index
  if (index !== -1) {
    DialogTitle.value = '修改货物信息'
    // 如果是编辑，将对应项的数据填充到表单中
    const item = BoxStore.Box_list[index]
    form.name = item.name
    form.lx = item.lx
    form.ly = item.ly
    form.lz = item.lz
    form.mass = item.mass
  } else {
    // 如果是新增，重置表单数据
    DialogTitle.value = '新增货物信息'
    form.name = '默认货物'
    form.lx = 1
    form.ly = 1
    form.lz = 1
    form.mass = 1
  }
  dialogFormVisible.value = true
}
const confirmForm = () => {
  if (editIndex.value !== -1) {
    // 如果是编辑，更新对应项的数据
    BoxStore.Box_list[editIndex.value] = { ...form }
    ElNotification({
      message: `货物 ${form.name} 信息修改成功`,
    })
  } else {
    // 如果是新增，调用 add_Box 方法添加新项
    BoxStore.add_Box({ ...form })
  }
  dialogFormVisible.value = false
}
</script>


<style scoped></style>