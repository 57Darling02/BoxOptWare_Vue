<template>
  <v-chart class="chart" :option="chartOption" autoresize />
</template>

<script lang="ts" setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, defineProps, computed } from 'vue';
import type { EChartsOption } from 'echarts';

// 使用 echarts 模块和组件
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

// 定义 props
const props = defineProps<{
  title: string;
  legendData: string[];
  seriesData: { value: number; name: string }[];
}>();

// 计算图表配置选项
const chartOption = computed<EChartsOption>(() => ({
  title: {
    text: props.title,
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: props.legendData,
  },
  series: [
    {
      name: props.title,
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: props.seriesData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}));
</script>

<style scoped>
.chart-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.chart {
  flex: 1;
}
</style>