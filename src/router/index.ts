import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/Layout/index.vue'

import pages from './modules/pages'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/homePage',
    meta: { title: '首页', icon: 'House' },
    children: [
      {
        path: '/home/homePage',

        meta: { title: '首页', icon: 'House' },
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录' },
    hidden: true,
    component: () => import('@/views/login/index.vue')
  }
]

export const asyncRoutes: any = [
  pages
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes.concat(asyncRoutes),
})

export default router
