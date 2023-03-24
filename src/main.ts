import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../mock'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import './permission'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.mount('#app')

