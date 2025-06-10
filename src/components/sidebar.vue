<template>
    <div class="left-nav">
        <el-menu :default-active="activeMenuIndex" class="el-menu-vertical" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <!-- 动态生成所有菜单项 -->
            <template v-for="item in menuItems" :key="item.index">
                <!-- 子菜单标题 -->
                <el-sub-menu v-if="item.type === 'subMenuTitle'" :index="item.index">
                    <template #title>
                        <i :class="item.icon"></i>
                        <span>{{ item.title }}</span>
                    </template>
                    <!-- 子菜单项 -->
                    <SubMenu :items="item.children || []" />
                </el-sub-menu>
                <!-- 独立菜单项 -->
                <el-menu-item v-else-if="item.type === 'menuItem'" :index="item.index"
                    @click="handleMenuItemClick(item.routeName)">
                    <i :class="item.icon"></i>
                    <template #title>{{ item.title }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SubMenu from '@/components/SubMenu.vue';  // 引入递归组件 
import type { MenuItem } from '@/type'
const router = useRouter();
const isCollapse = ref(true);

const menuItems = ref<MenuItem[]>([
    {
        index: '1',
        title: 'Navigator One',
        icon: 'fa-solid fa-grid-2',
        routeName: '',
        type: 'subMenuTitle',
        children: [
            {
                index: '1-1',
                title: '货物',
                icon: '',
                routeName: 'boxhouse',
                type: 'menuItem'
            },
            {
                index: '1-2',
                title: '模块',
                icon: '',
                routeName: 'modulehouse',
                type: 'menuItem'
            },
            {
                index: '1-3',
                title: '集装器',
                icon: '',
                routeName: 'containerhouse',
                type: 'menuItem'
            }
        ]
    },
    {
        index: '2',
        title: '货物装载',
        icon: 'fa-regular fa-cubes',
        routeName: 'mainWorkPage',
        type: 'menuItem'
    },
    {
        index: '3',
        title: '工作原理',
        icon: 'fa-regular fa-ruler-combined',
        routeName: 'HelpPage',
        type: 'menuItem'
    },
    {
        index: '4',
        title: '关于我们',
        icon: 'fa-regular fa-messages-question',
        routeName: 'About',
        type: 'menuItem'
    }
]);

// 计算当前激活的菜单项索引 
const activeMenuIndex = computed(() => {
    const currentRouteName = router.currentRoute.value.name as string;
    const menuItem = findMenuItemByRouteName(currentRouteName);
    return menuItem ? menuItem.index : '';
});

// 查找指定路由名称的菜单项 
const findMenuItemByRouteName = (routeName: string): MenuItem | undefined => {
    const stack = [...menuItems.value];
    while (stack.length > 0) {
        const item = stack.shift()!;
        if (item.routeName === routeName) {
            return item;
        }
        if (item.children && item.children.length > 0) {
            stack.unshift(...item.children);
        }
    }
    return undefined;
};

// 处理菜单项点击事件 
const handleMenuItemClick = (routeName: string) => {
    if (routeName) {
        router.push({ name: routeName });
    }
};



const handleOpen = () => { };
const handleClose = () => { };
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

.el-menu-vertical {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>