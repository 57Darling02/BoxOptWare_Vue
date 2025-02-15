<template>
    <div class="nivo-bar-chart">
      <ResponsiveBar
        :data="chartData"
        :keys="chartKeys"
        indexBy="country"
        :margin="{ top: 50, right: 130, bottom: 50, left: 60 }"
        :padding="0.3"
        groupMode="grouped"
        layout="horizontal"
        :valueScale="{ type: 'linear' }"
        :indexScale="{ type: 'band', round: true }"
        :colors="{ scheme: 'nivo' }"
        :defs="chartDefs"
        :fill="chartFill"
        :borderColor="{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }"
        :axisTop="null"
        :axisRight="null"
        :axisBottom="{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
        }"
        :axisLeft="{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0
        }"
        :labelSkipWidth="12"
        :labelSkipHeight="12"
        :labelTextColor="{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }"
        :legends="[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]"
        role="application"
        ariaLabel="Nivo bar chart demo"
        :barAriaLabel="barAriaLabelFunction"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps } from 'vue';
  import { ResponsiveBar } from '@nivo/bar';
  
  // 定义 props
  const props = defineProps<{
    data: Array<{
      country: string;
      'hot dog': number;
      burger: number;
      sandwich: number;
      kebab: number;
      fries: number;
      donut: number;
    }>;
  }>();
  
  // 定义图表所需的数据和配置
  const chartData = ref(props.data);
  const chartKeys = ref([
    'hot dog',
    'burger',
    'sandwich',
    'kebab',
    'fries',
    'donut'
  ]);
  const chartDefs = ref([
    {
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: '#38bcb2',
      size: 4,
      padding: 1,
      stagger: true
    },
    {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: '#eed312',
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }
  ]);
  const chartFill = ref([
    {
      match: {
        id: 'fries'
      },
      id: 'dots'
    },
    {
      match: {
        id: 'sandwich'
      },
      id: 'lines'
    }
  ]);
  
  const barAriaLabelFunction = (e: any) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`;
  </script>
  
  <style scoped>
  .nivo-bar-chart {
    width: 100%;
    height: 500px; /* 可以根据需要调整高度 */
  }
  </style>