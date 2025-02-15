<template>
  <div class="main_page">
    <div class="stepHelp">
      <el-space wrap>
        <el-card v-for="s in step" :key="s.stepnum" class="box-card" style="width: 250px; margin: 10px;">
          <template #header>
            <div class="card-header">
              <span><b>{{ s.title }}</b></span>
              <el-button class="button" text @click="s.operation">前往</el-button>
            </div>
          </template>
          {{ s.description }}
        </el-card>
      </el-space>
    </div>
    <div class="yl">
      <div class="cl">
        <EChartsPie :title="'航空集装箱使用量'" :legend-data="['AMF', 'AKE', 'AUU']" :series-data="[
          { value: 335, name: 'AMF' },
          { value: 310, name: 'AKE' },
          { value: 234, name: 'AUU' },
        ]" />
      </div>
      <div class="cl">
        <h1>模块化装箱原理</h1>
        <img src="@/asset/image/image1.GIF" alt="模块化装箱示例" >
      </div>

    </div>
  </div>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router';
import EChartsPie from './EChartsPie.vue';
const router = useRouter()

const step = [
  {
    stepnum: 1,
    title: '货物管理',
    description: "在仓库中创建/修改你的货物，规定其属性（长宽高质量等）",
    operation: () => {
      router.push({ name: 'boxhouse' });
    }
  },
  {
    stepnum: 2,
    title: '(可选) 集装箱管理',
    description: "在仓库中创建/修改规则形状的集装箱，规定其属性（长宽高等）",
    operation: () => {
      router.push({ name: 'containerhouse' });
    }
  },
  {
    stepnum: 3,
    title: '工作台',
    description: "进入工作台进行智能装配",
    operation: () => {
      router.push({ name: 'mainWorkPage' });
    }
  },
];


</script>
<style scoped>
.main_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.yl,
.stepHelp {
  background-color: rgb(248, 241, 241);
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.yl {
  display: flex;
  flex: 1
}

.cl {
  height: 100%;
  position: relative;
  width: 600px;
}
</style>