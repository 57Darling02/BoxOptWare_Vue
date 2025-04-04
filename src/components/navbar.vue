<template>
  <div class="navbar">
    <button type="button" class="title" @click="tohomepage">
      <span>智拼模组</span>
      <span class="fa-solid fa-cubes"></span>
    </button>
    <div class="right-buttons">
      <button type="button" @click="tologin">
        <span>登入</span>
        <span class="fa-solid fa-user"></span>
      </button>
      <button type="button" @click="toworkpage">
        <span>装箱</span>
        <span class="fa-solid fa-cube"></span>
      </button>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function tologin() {
  router.push({ name: 'login' })
}
function toworkpage() {
  router.push({ name: 'workpage' })
}

function tohomepage() {
  router.push({ name: 'home' })
}
</script>


<style scoped>

.navbar {
  /* width: 100%; */
  /* height: 50px; */
  /* background-color: transparent; */
  font-family: "azy";
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 0px;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  /* 初始设置为透明边框 */
  box-shadow: 0 0 0 rgba(202, 199, 199, 0);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* 鼠标悬浮时背景模糊效果、添加边界和阴影 */
.navbar:hover {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  /* 显示底部边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加阴影 */
}

.navbar .right-buttons {
  height: 100%;
  display: flex;
}

.navbar button {
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-transform: none;
  line-height: normal;
  overflow: visible;
}

.navbar button.title {
  color: #121212;
  font-weight: 400;

}



.navbar button {
  position: relative;
  display: grid;
  place-content: center;
  grid-template-areas: "stack";
  padding: 0 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
}

.navbar button>span {
  transition: all 0.3s ease-in-out;
  grid-area: stack;
  color: #00ffff; /* 纯青色 */
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  font-size: 1.3rem;
}

.navbar .right-buttons button>span {
  transition: all 0.3s ease-in-out;
  grid-area: stack;
  color: #00ffff; /* 纯青色 */
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  font-size: 1rem;
}


.navbar button>span:last-of-type {
  margin-top: 0.25rem;
  transform: scale(0);
  transition-delay: 0s;
  border-radius: 50%;
  font-size: 1rem;
  color: white;
}

.navbar button:focus-visible>span:first-of-type,
.navbar button:hover>span:first-of-type {
  transform: scale(0);
}

.navbar button:focus-visible>span:last-of-type,
.navbar button:hover>span:last-of-type {
  transform: scale(1);
}
</style>