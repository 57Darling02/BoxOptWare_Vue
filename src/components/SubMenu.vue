<!-- SubMenu.vue  组件 -->
<template>
    <div>
        <template v-for="item in items" :key="item.index">
            <!-- 子菜单标题 -->
            <el-sub-menu v-if="item.type === 'subMenuTitle'" :index="item.index">
                <template #title>
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </template>
                <SubMenu :items="item.children || []" />
            </el-sub-menu>

            <!-- 独立菜单项 -->
            <el-menu-item v-else-if="item.type === 'menuItem'" :index="item.index"
                @click="handleMenuItemClick(item.routeName)">
                <i :class="item.icon"></i>
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </template>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { useRouter } from 'vue-router';
import type { MenuItem } from '@/type'

const router = useRouter();

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        default: () => []
    }
});

const handleMenuItemClick = (routeName: string) => {
    if (routeName) {
        router.push({ name: routeName });
    }
};
</script>