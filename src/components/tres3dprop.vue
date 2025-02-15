<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos';
import { computed, defineProps} from 'vue';
import { box, module_container, main_container} from '@/utils/show3d'

const props = defineProps<{
  main_containers: main_container[];
  module_containers: module_container[];
  boxes: box[];
  centerOfGravity: [number,number,number]
}>();

const bestView = computed<[x: number, y: number, z: number]>(() => {
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;
  const allObjects = [...props.main_containers, ...props.module_containers, ...props.boxes];
  for (const obj of allObjects) {
    const [X, Y, Z] = obj.centerPosition;
    const [lx, ly, lz] = obj.size;
    maxX = Math.max(maxX, X + lx);
    maxY = Math.max(maxY, Y + ly);
    maxZ = Math.max(maxZ, Z + lz);
  }

  return [2*maxX-modulecenter.value[0], 2*maxY-modulecenter.value[1], 2*maxZ-modulecenter.value[2]]
});
const modulecenter = computed<[x: number, y: number, z: number]>(() => {
  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;
  const allObjects = [
    ...props.module_containers,
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

  //绕X轴旋转修正
  return rotateAroundXAxis([centerX, centerY, centerZ]);
});

function rotateAroundXAxis(originalPosition: [number, number, number]): [number, number, number] {
    const [x0, y0, z0] = originalPosition;
    // 绕 x 轴旋转 -90 度的旋转矩阵
    const rotationMatrix: number[][] = [
        [1, 0, 0],
        [0, 0, 1],
        [0, -1, 0]
    ];

    // 进行矩阵乘法计算旋转后的位置
    const newX = rotationMatrix[0][0] * x0 + rotationMatrix[0][1] * y0 + rotationMatrix[0][2] * z0;
    const newY = rotationMatrix[1][0] * x0 + rotationMatrix[1][1] * y0 + rotationMatrix[1][2] * z0;
    const newZ = rotationMatrix[2][0] * x0 + rotationMatrix[2][1] * y0 + rotationMatrix[2][2] * z0;

    return [newX, newY, newZ];
}

const floorPosition = computed<[x: number, y: number, z: number]>(() => {
  let minZ = Infinity;
  const allObjects = [
    ...props.module_containers,
    ...props.boxes
  ];

  if (allObjects.length === 0) {
    return [0, 0, 0]; // 如果没有物体，返回 [0, 0, 0]
  }

  for (const obj of allObjects) {
    const Z = obj.centerPosition[2];
    const lz = obj.size[2];
    minZ = Math.min(minZ, Z - lz / 2);
  }
  return [modulecenter.value[0], modulecenter.value[1], minZ]
});


</script>

<template>
  <TresCanvas clear-color="#333" :window-size="false">
    <TresPerspectiveCamera :position="bestView" :fov="45" :near="0.1" />
    <OrbitControls :target="modulecenter" :enable-damping="true" :enable-rotate="true" :enable-pan="true"
      :enable-zoom="true" :max-polar-angle="Math.PI / 2"  />

    <TresGroup :rotation="[-Math.PI / 2, 0, 0]">
      <!-- 环境光与主光源 -->
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[5, 10, 5]" :intensity="1.2" cast-shadow :shadow-mapSize-width="2048"
        :shadow-mapSize-height="2048" />

      <!-- 绘制模块 -->
      <!-- <TresMesh v-for="(box, index) in props.module_containers" :key="box.id" :position="box.centerPosition">
      <TresBoxGeometry :args="box.size" />
      <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
        color="#ffffff" />
    </TresMesh> -->
      <!-- 绘制模块 -->
      <TresMesh v-for="(box, index) in props.module_containers" :key="index" :position="box.centerPosition">
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
      <TresMesh v-for="(box, index) in props.boxes" :key="index" :position="box.centerPosition">
        <!-- 绑定大小 -->
        <TresBoxGeometry :args="box.size" />
        <TresMeshToonMaterial :transparent="box.transparent" :opacity="box.opacity" :wireframe="box.wireframe"
          :color="box.color" />
        <TresLineSegments>
          <TresEdgesGeometry>
            <TresBoxGeometry :args="box.size" />
          </TresEdgesGeometry>
          <TresLineBasicMaterial color="#00a8ff" :linewidth="0.02" />
        </TresLineSegments>
      </TresMesh>

      <!-- 绘制重心 -->
      <TresMesh :position="props.centerOfGravity">
        <!-- 球体几何体 -->
        <TresSphereGeometry :radius="1" :widthSegments="1" :heightSegments="1" />
        <!-- 材质，使用深颜色 -->
        <TresMeshStandardMaterial color="#111111" />
      </TresMesh>

      <!-- 添加辅助网格 -->
      <TresGridHelper :args="[1000, 50, '#808080', '#808080']" :position="floorPosition"
        :rotation="[-Math.PI / 2, 0, 0]" />
    </TresGroup>


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