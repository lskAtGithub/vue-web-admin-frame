import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/nested',
  meta: { title: '多级菜单', icon: 'Menu', keepAlive: false },
  redirect: '/nested/echarts',
  component: Layout,
  children: [
    
  ]
}

export default route
