<template style="min-height:100%">
    <form id="register-form">
        <h1>
            Welcome to Web
        </h1>
        <div class="input-wrap">
            <input type="text" placeholder="Your email" v-model="form_data.username" spellcheck="false"
                autocomplete="username" pattern="[a-zA-Z0-9_]{4,20}" required>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="input-wrap">
            <input :type="show_psd" placeholder="Your password" v-model="form_data.password" spellcheck="false"
                autocomplete="current-password"
                title="Username must be 4-20 characters long and can only contain letters, numbers, and underscores."
                required>
            <i :class="show_psd == 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" class="toggle-password"
                @click="togglePasswordVisibility"></i>
        </div>
        <div class="input-wrap">
            <input type='number' placeholder="请输入暗号" v-model="form_data.anhao" spellcheck="false"
                autocomplete="username" required>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="Lic">
            <label>
                <input type='checkbox' v-model="form_data.lic">
                同意用户协议
            </label>
            <div><a href="#" @click="forget">关于暗号</a></div>

        </div>

        <button @click="register">register</button>
        <p class="login">Already have account?
            <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </p>

    </form>
</template>

<style scoped>

* {
    font-family: "azy";
    /* width: inherit; */
}

#register-form {
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.Lic {
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

.Lic p,
.Lic a {
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

.login {
    font-size: 1.0rem;
    color: white;
    margin-bottom: 25px;
    animation: fadeInUp 1s ease-in-out 1.2s forwards;
    /* 添加 forwards 使动画结束后保持最后一帧的状态 */
    opacity: 0;
    /* 初始时设置元素透明 */
}

.login a {
    font-weight: 500;
    color: white;
    text-decoration: underline;
}

</style>

<script setup lang="ts">
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
    anhao: '',
    lic: false
})
async function register() {
    try {
        alert(`username: ${form_data.username} \npassword: ${form_data.password} \nlic:${form_data.lic}`)
    } catch (error: any) {
        alert('An error occurred: ' + error.message);
    }
}

function forget() {
    alert("114514")
}

</script>