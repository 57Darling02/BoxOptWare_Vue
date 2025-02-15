import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/asset/fontawesome/css/all.min.css'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(pinia)
app.use(router)
app.mount('#app')
