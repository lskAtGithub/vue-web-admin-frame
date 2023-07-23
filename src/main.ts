import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from '@/store/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../mock'
import './permission'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import IndexUtils from './utils/Index'
import SvgIcon from '@/components/SvgIcon.vue'
import registerDirectives from '@/directives/index'
import errorHandler from './errorHandler'

const app = createApp(App)
app.use(router)
app.use(piniaStore)
app.use(ElementPlus, {
  locale: zhCn
})
app.component('svg-icon', SvgIcon)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册指令
registerDirectives(app)

// 全局错误监听
app.config.errorHandler = (err, vm, info) => {
  errorHandler(err, vm, info)
}

IndexUtils.windowResize()
