<template>
    <form id="login-form">
        <h1>
            Welcome
        </h1>
        <div class="input-wrap">
            <input type="text" placeholder="Your email" v-model="form_data.username" spellcheck="false"
                autocomplete="username" required>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="input-wrap">
            <input :type="show_psd" placeholder="Your password" v-model="form_data.password" spellcheck="false"
                autocomplete="current-password" required>
            <i :class="show_psd == 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" class="toggle-password"
                @click="togglePasswordVisibility"></i>
        </div>
        <div class="rem">
            <label>
                <input type='checkbox' v-model="form_data.remb">
                Remenber me
            </label>
            <div><a href="#" @click="forget">Forget password?</a></div>

        </div>

        <button @click="login">Login</button>
        <p class="reg">Don't have account?
            <!-- <a @click="ToRegister">Register</a> -->
            <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </p>

    </form>
</template>

<style scoped>
* {
    font-family: "azy";
}

#login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(35%, 400px);
    background-color: rgba(255, 255, 255, 0.1);
    /* background-color: brown;  */
    padding: 50px;
    border-radius: 20px;
    min-width: 300px;
    border-color: rgba(228, 195, 195, 0.13);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.13);
    animation: fadeInUp 1s ease-in-out 0.2s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 25px;
    animation: fadeInUp 1s ease-in-out 0.4s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

.input-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    height: 55px;
    width: 100%;
    border: 1px solid white;
    border-radius: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    animation: fadeInUp 1s ease-in-out 0.6s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

.input-wrap input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.2rem;
    color: white;
}

.input-wrap i {
    color: white;
    margin-left: 10px;
}


input::placeholder {
    font-size: 1rem;
    color: white;
}

input[type="password"]::-ms-reveal {
    display: none
}


.rem {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    animation: fadeInUp 1s ease-in-out 0.8s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

.rem p,
.rem a {
    font-size: 1.0rem;
    color: white;
}

button {
    font-size: 1.2rem;
    height: 55px;
    width: 100%;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 25px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    animation: fadeInUp 1s ease-in-out 1s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

button:hover {
    background-color: rgb(189, 189, 189);
}

.reg {
    font-size: 1.0rem;
    color: white;
    margin-bottom: 25px;
    animation: fadeInUp 1s ease-in-out 1.2s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

.reg a {
    font-weight: 500;
    color: white;
    text-decoration: underline;
}
</style>

<script setup lang="ts">
import { ElLoading, ElNotification } from 'element-plus';
import { ref, reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
const show_psd = ref('password')
function togglePasswordVisibility() {
    show_psd.value = show_psd.value === 'password' ? 'text' : 'password';
}

const form_data = reactive({
    username: "",
    password: "",
    remb: false
})
async function login() {
    // 在所有操作之前调用 ElLoading.service
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    });
    try {
        ElNotification({
            message: `${form_data.username} 用户登入成功`,
        })
        router.replace({name:'mainWorkPage'})
        // alert(`username: ${form_data.username} \npassword: ${form_data.password} \nrem:${form_data.remb}`)
    } catch (error: any) {
        alert('An error occurred: ' + error.message);
    }finally{
        loading.close();
    }
}

function forget() {
    alert("没办法")
}
</script>