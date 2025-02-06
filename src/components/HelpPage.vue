<template>
 <div class="main_page">
    <el-space wrap>
      <el-card v-for="s in step" :key="s.stepnum"  class="box-card" style="width: 250px; margin: 10px;">
      <template #header>
        <div class="card-header">
          <span>步骤{{ s.stepnum  }}</span>
          <el-button class="button" text @click="s.operation">前往</el-button>
        </div>
      </template>
      {{ s.description  }}
    </el-card>
  </el-space>
 </div>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const step = [
  {
    stepnum:1,
    description:"hhhhhh",
    operation:() => {
      router.push({  name: 'boxhouse' });
    }
  },
];


</script>
<style scoped>
    .main_page{
        background-color: antiquewhite;
        width: 100%;
        height: 100%;
    }
</style>