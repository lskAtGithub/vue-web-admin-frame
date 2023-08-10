import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/error',
  meta: { title: '异常页', icon: 'Warning', keepAlive: false },
  redirect: '/error/500',
  component: Layout,
  children: [
    {
      path: '/error/500',
      meta: { title: '500', keepAlive: false },
      component: () => import('@/views/error/500.vue')
    },
    {
      path: '/error/403',
      meta: { title: '403', keepAlive: false },
      component: () => import('@/views/error/403.vue')
    }
  ]
}

export default route
