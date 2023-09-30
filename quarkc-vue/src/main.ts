import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// pinia store
import pinia from '@/stores/index'
import directives from '@/directives/index'
// 打印环境变量
console.log('环境变量', import.meta.env)

const app = createApp(App)

app.use(router).use(Antd).use(pinia).use(directives)

app.mount('#app')
