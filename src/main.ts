import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from '@/store/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../mock'

import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import './permission'
import '@/styles/index.scss'
import IndexUtils from './utils/Index'
import SvgIcon from '@/components/SvgIcon.vue'
import registerDirectives from '@/directives/index'

const app = createApp(App)
app.use(piniaStore)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.component('svg-icon', SvgIcon)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册指令
registerDirectives(app)

IndexUtils.windowResize()

