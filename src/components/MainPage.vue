<template style="height:100%">
    <div class="MainPage">
        <div class="nav">
            <navbar />
        </div>
        <div class="show">
            <RouterView />
        </div>

    </div>
</template>

<style scoped>
.MainPage {
height: 100vh;
width: 100vw;
display: flex;
align-self: auto;
flex-direction: column;
}
.MainPage .nav{
display: flex;
width: 100vw;
height: 50px;

}
.MainPage .show{
width: 100%;
height: 100%;
overflow: auto;
display: flex;
align-items: center;
justify-content: center;

}
</style>

<script lang="ts" setup>
import navbar from './navbar.vue';
import { RouterView } from 'vue-router';
import { useUserStore } from '@/store/User'

</script>