<template>
    <div class="WorkPage">
        <Sidebar />
        <div class="workplace">
            <RouterView />
        </div>
        <div class="repositories">

        </div>

    </div>
</template>

<style scoped>
div.WorkPage {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: max-content;
    animation: fadeInUp 1s ease-in-out 0.2s forwards;
    opacity: 0;
}

.workplace {
    background-color: white;
    border-radius: 10px;
    flex: 1;
    margin: 5px;
    margin-left: 0px;
    padding: 10px;
    min-width: 300px;
    border-left: none;
    border-top-left-radius: 0;
}
</style>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Sidebar from './sidebar.vue';

</script>