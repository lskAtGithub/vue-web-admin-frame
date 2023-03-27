import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../mock'
import 'normalize.css/normalize.css'
import './permission'

const app = createApp(App)
app.use(piniaStore)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

