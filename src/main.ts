import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from '@/store/index'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '../mock'
import 'normalize.css/normalize.css'
import './permission'
import '@/styles/index.scss'

const app = createApp(App)
app.use(piniaStore)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
