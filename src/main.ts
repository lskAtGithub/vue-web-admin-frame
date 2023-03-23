import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css/normalize.css'
import './assets/main.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
