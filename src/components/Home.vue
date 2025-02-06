<template>
  <div class="homePage">
    <div class="show1">
      <h1>
        装什么？我来帮你！
      </h1>
      <label>一个集装箱装载决策平台</label>
      <div class="button-container">
        <RouterLink :to="{name:'workpage'}" class="try-button">试一下</RouterLink>
        <RouterLink :to="{name:'login'}" class="login-button">登入</RouterLink>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.show1 .button-container a[href] {
  text-decoration: none;
}
.homePage {
  /* background-color: green; */
  /* display: flex; */
  animation: fadeInUp 1s ease-in-out 0.2s forwards;
  /* 添加 forwards 使动画结束后保持最后一帧的状态 */
  opacity: 0;
  /* 初始时设置元素透明 */
}


label {
  animation: fadeInUp 1s ease-in-out 0.6s forwards;
  opacity: 0;
}

.show1 h1 {
  font-size: 50px;
  font-weight: 800;
  animation: fadeInUp 1s ease-in-out 0.4s forwards;
  /* 添加 forwards 使动画结束后保持最后一帧的状态 */
  opacity: 0;
  /* 初始时设置元素透明 */
}

/* 按钮容器样式 */
.show1 .button-container {
  display: flex;
  gap: 50px;
  /* 按钮之间的间距 */
  margin-top: 20px;
  /* 与上面内容的间距 */
  animation: fadeInUp 1s ease-in-out 0.8s forwards;
  /* 添加 forwards 使动画结束后保持最后一帧的状态 */
  opacity: 0;
  /* 初始时设置元素透明 */

}

/* 试一下按钮样式 */
.show1 .try-button {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 10px;
}

/* 试一下按钮 hover 效果 */
.show1 .try-button:hover {
  background-color: darkgreen;
}

/* 登入按钮样式 */
.show1 .login-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 登入按钮 hover 效果 */
.show1 .login-button:hover {
  background-color: white;
  color: black;
}

.homePage .show1 {
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;
  font-family: 'azy';
}

.homePage .show1 label {
  font-weight: 500;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}


</style>