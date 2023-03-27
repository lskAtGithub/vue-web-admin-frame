import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/Layout/index.vue'

import table from './modules/table'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/homePage',
    title: '首页',
    children: [
      {
        path: '/home/homePage',
        component: () => import('@/views/Home/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    title: '登录',
    component: () => import('@/views/login/index.vue')
  },
  table
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes,
})

export default router
