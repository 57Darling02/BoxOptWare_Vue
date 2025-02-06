<template>
  <el-table :data="ModuleStore.Module_list" style="width: 100%" height="95%">
    <el-table-column prop="name" label="模块名称" width="auto" />
    <el-table-column prop="lx" label="长" width="auto" />
    <el-table-column prop="ly" label="宽" width="auto" />
    <el-table-column prop="lz" label="高" width="auto" />
    <el-table-column prop="x" label="x" width="auto" />
    <el-table-column prop="y" label="y" width="auto" />
    <el-table-column prop="z" label="z" width="auto" />
    <el-table-column fixed="right" label="Operations" width="auto">
      <template #default="scope">
        <el-button type="primary" class="fa-regular fa-pen" @click.prevent="openDialog(scope.$index)"
          circle></el-button>
        <el-button type="danger" class="fa-solid fa-trash" @click.prevent="deleteRow(scope.$index)" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="openDialog(-1)">
    新增模块
  </el-button>

  <el-dialog v-model="dialogFormVisible" :title="DialogTitle" width="500">
    <div class="dialog" style="position: relative; display: flex; flex-direction: row;">
      <div class="td-container"
        style="flex-direction:column; max-width:90%;max-height: 90%; width: 500px;height: 500px;;position: relative;">
        <trs3d />
      </div>
      <div class="form-container">
        <el-form :model="form">
          <el-form-item label="模块名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="长" :label-width="formLabelWidth">
            <el-input v-model.number="form.lx" autocomplete="off" />
          </el-form-item>
          <el-form-item label="宽" :label-width="formLabelWidth">
            <el-input v-model.number="form.ly" autocomplete="off" />
          </el-form-item>
          <el-form-item label="高" :label-width="formLabelWidth">
            <el-input v-model.number="form.lz" autocomplete="off" />
          </el-form-item>
          <el-form-item label="x" :label-width="formLabelWidth">
            <el-input v-model.number="form.x" autocomplete="off" />
          </el-form-item>
          <el-form-item label="y" :label-width="formLabelWidth">
            <el-input v-model.number="form.y" autocomplete="off" />
          </el-form-item>
          <el-form-item label="z" :label-width="formLabelWidth">
            <el-input v-model.number="form.z" autocomplete="off" />
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
import { useModuleStore } from '@/store/Module'
import { ElNotification } from 'element-plus'
import trs3d from './trs3d.vue'
import emitter from "@/utils/emitter";
import { box, module_container, main_container, type ShowParamsType } from '@/utils/show3d'
const ModuleStore = useModuleStore()
const isValid = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const editIndex = ref(-1)
const DialogTitle = ref('新增模块信息')

const form = reactive({
  name: '默认模块',
  lx: 1,
  ly: 1,
  lz: 1,
  x: 1,
  y: 1,
  z: 1
})

watch(form, (newValue: any, oldValue) => {
  const { lx, ly, lz, x ,y ,z } = newValue
  isValid.value = [lx, ly, lz, x ,y ,z].every(val => typeof val === 'number')
  if (isValid.value) {
    const showParams: ShowParamsType = {
      main_containers: [],
      module_containers: [
        new module_container(
          [lx, ly, lz],
          [x, y, z],
          undefined,
          undefined,
          undefined,
          undefined,
          'center'
        )
      ],
      boxes: [
        new box(
          [lx, ly, lz],
          [x, y, z],
          0,
          '#FFFFE0',
          true,
          0.5,
          false,
          'center'
        )
      ]
    }
    emitter.emit('update-showParams', showParams);
  }
}, { immediate: true })


ModuleStore.$subscribe((mutate, state) => {
  localStorage.setItem('Module_list', JSON.stringify(state.Module_list))
})

const deleteRow = (index: number) => {
  ElNotification({
    message: `模块 ${ModuleStore.Module_list[index].name} 信息删除成功`,
  })
  ModuleStore.Module_list.splice(index, 1)
}

const openDialog = (index: number) => {
  editIndex.value = index
  if (index !== -1) {
    DialogTitle.value = '修改模块信息'
    // 如果是编辑，将对应项的数据填充到表单中
    const item = ModuleStore.Module_list[index]
    form.name = item.name
    form.lx = item.lx
    form.ly = item.ly
    form.lz = item.lz
    form.x = item.x
    form.y = item.y
    form.z = item.z
  } else {
    // 如果是新增，重置表单数据
    DialogTitle.value = '新增模块信息'
    form.name = '默认模块'
    form.lx = 1
    form.ly = 1
    form.lz = 1
    form.x = 1
    form.y = 1
    form.z = 1
  }
  dialogFormVisible.value = true
}

const confirmForm = () => {
  if (editIndex.value !== -1) {
    // 如果是编辑，更新对应项的数据
    ModuleStore.Module_list[editIndex.value] = { ...form }
    ElNotification({
      message: `模块 ${form.name} 信息修改成功`,
    })
  } else {
    // 如果是新增，调用 add_Module 方法添加新项
    ModuleStore.add_Module({ ...form })
    ElNotification({
      message: `模块 ${form.name} 信息添加成功`,
    })
  }
  dialogFormVisible.value = false
}
</script>