<template>
  <div class="app_main">
    <RouterView></RouterView>
  </div>

</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    RouterView
  }
});
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* display: flex; */

}

.app_main {
  min-width: max-content;
  min-height: max-content;
  width: 100vw;
  height: 100vh;
  background-image: url('@/asset/image/login_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

/* 定义从下往上淡入的动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@font-face {
    font-family: "azy";
    src: url("@/asset/font/ZhuZiAWan2.woff2") format("woff2"),
}
</style>