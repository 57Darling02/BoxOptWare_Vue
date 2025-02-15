<template>
    <div class="left-nav">
        <!-- <el-switch v-model="isCollapse" style="display: flex; justify-content: center"/> -->
        <el-menu default-active="5" class="el-menu-vertical" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            
            <el-sub-menu index="1">
                <template #title>
                    <i class="fa-solid fa-grid-2"></i>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>仓库</span></template>
                    <el-menu-item index="1-1" @click="toBoxHouse">货物</el-menu-item>
                    <el-menu-item index="1-2" @click="toMouduleHouse">模块</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            
            <el-menu-item index="2" @click="toHelpPage">
                <i class="fa-regular fa-ruler-combined"></i>
                <template #title>货物装载</template>
            </el-menu-item>
            
            <el-menu-item index="3" @click="toContainerHouse">
                <i class="fa-regular fa-boxes-stacked"></i>
                <template #title>货物装载</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="fa-regular fa-cubes"></i>
                <template #title>Navigator Four</template>
            </el-menu-item>
            <el-menu-item index="5" >
                <i class="fa-regular fa-messages-question"></i>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const handleOpen = () => {}
const handleClose = () => {}
function toBoxHouse() {
  router.push({ name: 'boxhouse' })
}
function toMouduleHouse() {
  router.push({ name: 'modulehouse' })
}
function toContainerHouse() {
  router.push({ name: 'containerhouse' })
}
function toHelpPage() {
  router.push({ name: 'HelpPage' })
}

const isCollapse = ref(true)
</script>

<style>
.left-nav {
    background-color: white;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 0px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.el-menu-vertical{
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border:none;
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>