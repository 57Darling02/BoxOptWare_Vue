<template>
    <div id="app">
      <EChartsPie
        :title="'Traffic Sources'"
        :legend-data="['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']"
        :series-data="[
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
        ]"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import EChartsPie from '@/components/EChartsPie.vue';
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>