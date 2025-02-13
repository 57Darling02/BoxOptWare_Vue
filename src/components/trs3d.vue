<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos';
import { reactive, onUnmounted, onMounted, computed, ref } from 'vue';
import emitter from '@/utils/emitter';
import { box, module_container, main_container, type ShowParamsType } from '@/utils/show3d'

// 定义一个航空集装箱
// 实例化默认主容器
const default_main_containers: main_container[] = [
  new main_container(
    [5, 5, 5] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    undefined, // 使用默认 color
    true,
    0,
    true,
    'center' // 使用默认 positionType
  )
];

// 实例化默认标准模块
const default_module_containers: module_container[] = [
  new module_container(
    [1, 1, 1] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    undefined,
    undefined,
    undefined,
    undefined,
    'center'
  ),
  new module_container(
    [2, 2, 2] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    undefined,
    undefined,
    undefined,
    undefined,
    'center'
  ),
  new module_container(
    [3, 3, 3] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    undefined,
    undefined,
    undefined,
    undefined,
    'center'
  ),
  new module_container(
    [4, 4, 4] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    undefined,
    undefined,
    undefined,
    undefined,
    'center'
  )
];

// 实例化默认货物
const default_boxes: box[] = [
  new box(
    [1, 1, 1] as [number, number, number],
    [0, 0, 0] as [number, number, number],
    1,
    undefined,
    undefined,
    undefined,
    undefined,
    'center'
  )
];


const showparams = reactive<ShowParamsType>({
  main_containers: default_main_containers,
  module_containers: default_module_containers,
  boxes: default_boxes
})


const centerOfGravity = ref([0, 0, 0] as [number, number, number]);
const bestView = computed<[x: number, y: number, z: number]>(() => {
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;
  const allObjects = [...showparams.main_containers, ...showparams.module_containers, ...showparams.boxes];
  for (const obj of allObjects) {
    const [X, Y, Z] = obj.cornerPosition;
    maxX = Math.max(maxX, X);
    maxY = Math.max(maxY, Y);
    maxZ = Math.max(maxZ, Z);
  }
  const [gx, gy, gz] = centerOfGravity.value;
  return [2 * maxX - gx, 2 * maxY - gy, 2 * maxZ - gz]
});
const modulecenter = computed<[x: number, y: number, z: number]>(() => {
  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;
  const allObjects = [
    ...showparams.module_containers,
  ];

  if (allObjects.length === 0) {
    return [0, 0, 0]; // 如果没有物体，返回 [0, 0, 0]
  }

  for (const obj of allObjects) {
    const [X, Y, Z] = obj.centerPosition;
    sumX += X;
    sumY += Y;
    sumZ += Z;
  }

  const count = allObjects.length;
  const centerX = sumX / count;
  const centerY = sumY / count;
  const centerZ = sumZ / count;

  return [centerX, centerY, centerZ];
});


const floorPosition = ref([0, 0, -10] as [number, number, number])

emitter.on('update-showParams', (params) => {
  Object.assign(showparams, params)
});


emitter.on('showBoxes', (params: unknown) => {
  const boxParams = params as box[];
  showparams.boxes = boxParams;
});

emitter.on('showModules', (params: unknown) => {
  const boxParams = params as module_container[];
  showparams.module_containers = boxParams;
});
emitter.on('centerOfGravityPosition', (params: unknown) => {
  const Params = params as [number, number, number];
  centerOfGravity.value = Params;
});
onUnmounted(() => {
  emitter.off('update-showParams')
  emitter.off('showBoxes')
  emitter.off('showModules')
  emitter.off('centerOfGravityPosition')
})

</script>

<template>
  <TresCanvas clear-color="#82DBC5" :window-size="false" shadows>
    <TresPerspectiveCamera :position="bestView" :fov="45" :near="0.1" />
    <OrbitControls :target="modulecenter" :enable-damping="true" />
    <!-- 环境光与主光源 -->
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[5, 10, 5]" :intensity="1.2" cast-shadow :shadow-mapSize-width="2048"
      :shadow-mapSize-height="2048" />

    <!-- 绘制航空集装箱 -->
    <!-- <TresMesh v-for="(box, index) in showparams.main_containers" :key='box.id' :position="box.centerPosition" cast-shadow>
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        :color="box.color" />
    </TresMesh> -->

    <!-- 绘制模块 -->
    <!-- <TresMesh v-for="(box, index) in showparams.module_containers" :key="box.id" :position="box.centerPosition">
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        color="#ffffff" />
    </TresMesh> -->
    <!-- 绘制模块 -->
    <TresMesh v-for="(box, index) in showparams.module_containers" :key="box.id" :position="box.centerPosition">
      <!-- 实体部分 -->
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        color="#ffffff" />

      <!-- 描边部分 -->
      <TresLineSegments>
        <TresEdgesGeometry>
          <TresBoxGeometry :args="box.size" />
        </TresEdgesGeometry>
        <TresLineBasicMaterial color="#00a8ff" :linewidth="0.02" />
      </TresLineSegments>
    </TresMesh>


    <!-- 使用 v-for 遍历 boxes 数组创建多个货物 -->
    <TresMesh v-for="(box, index) in showparams.boxes" :key="box.id" :position="box.centerPosition">
      <!-- 绑定大小 -->
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        :color="box.color" />
    </TresMesh>

    <!-- 绘制重心 -->
    <TresMesh :position="centerOfGravity">
      <!-- 球体几何体 -->
      <TresSphereGeometry :radius="1" :widthSegments="1" :heightSegments="1" />
      <!-- 材质，使用深颜色 -->
      <TresMeshStandardMaterial color="#111111" />
    </TresMesh>

    <!-- <TresMesh receive-shadow :position="floorPosition" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[10000, 10000, 10, 10]" />
      <TresMeshStandardMaterial color="#00FF00" />
    </TresMesh> -->
    <!-- 添加辅助网格 -->
    <TresGridHelper :args="[1000, 50, '#808080', '#808080']" :position="floorPosition"
      :rotation="[-Math.PI / 2, 0, 0]" />


  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>