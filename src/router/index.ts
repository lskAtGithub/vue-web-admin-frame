import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/Layout/index.vue'

import table from './modules/table'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/homePage',
    title: '首页',
    children: [
      {
        path: '/home/homePage',
        title: '首页',
        component: () => import('@/views/Home/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    title: '登录',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  }
]

const asyncRoutes: any = [
  table
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes.concat(asyncRoutes),
})

export default router
