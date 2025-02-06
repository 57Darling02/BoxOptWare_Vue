<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos';
import { reactive, onUnmounted, onMounted, computed } from 'vue';
import emitter from '@/utils/emitter';
import { box, module_container, main_container, type ShowParamsType } from '@/utils/show3d'
import { calculateBestCameraView, calculateCenterOfGravity, calculateSceneBounds ,main} from '@/utils/cul_module'

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


const centerOfGravity = computed(() => calculateCenterOfGravity(showparams));
const bestView = computed<[x:number,y:number,z:number]>(() => {
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  const allObjects = [...showparams.main_containers, ...showparams.module_containers, ...showparams.boxes];
  for (const obj of allObjects) {
    const [X, Y, Z] = obj.cornerPosition;
    minX = Math.min(minX, X);
    minY = Math.min(minY, Y);
    minZ = Math.min(minZ, Z);
  }
  const [gx,gy,gz] = centerOfGravity.value;
  
  return [2*minX-gx,2*minY-gy,2*minZ-gz]
});
const calculatedFov = 60
emitter.on('update-showParams', (params) => {
  Object.assign(showparams, params)
});



onUnmounted(() => {
  emitter.off('update-showParams')
})

</script>

<template>
  <TresCanvas clear-color="#82DBC5" :window-size="false">
    <TresPerspectiveCamera :position="bestView" :fov="calculatedFov" />
    <OrbitControls :target="centerOfGravity" />
    <!-- 绘制航空集装箱 -->
    <TresMesh v-for="(box, index) in showparams.main_containers" :key='box.id' :position="box.centerPosition">
      <!-- 绑定大小 -->
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        :color="box.color" />
    </TresMesh>

    <!-- 绘制模块 -->
    <TresMesh v-for="(box, index) in showparams.module_containers" :key="box.id" :position="box.centerPosition">
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        :color="box.color" />
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
      <TresSphereGeometry :radius="1" :widthSegments="5" :heightSegments="5" />
      <!-- 材质，使用深颜色 -->
      <TresMeshStandardMaterial :color="'#111111'" />
    </TresMesh>

    <TresMesh receive-shadow :position="[0, 0, -3]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[1000, 1000, 10, 10]" />
      <TresMeshStandardMaterial color="#00FF00" />
    </TresMesh>

    <TresAmbientLight :intensity="1" />
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