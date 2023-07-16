import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// pinia store
import pinia from '@/stores/index'

const app = createApp(App)

app.use(router).use(Antd).use(pinia)

app.mount('#app')
