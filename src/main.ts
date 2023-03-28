import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from '@/store/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '../mock'
import 'normalize.css/normalize.css'
import './permission'
import '@/styles/index.scss'

const app = createApp(App)
app.use(piniaStore)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
