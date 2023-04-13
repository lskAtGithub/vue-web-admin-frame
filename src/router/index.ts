import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

import pages from './modules/pages'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/homePage',
    meta: { icon: 'House', noBreadCrumbs: true },
    children: [
      {
        name: 'HomePage',
        path: '/home/homePage',
        meta: { title: '首页', icon: 'House', cache: true },
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    path: '/userInfo',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        name: 'UserInfo',
        path: '/userInfo',
        meta: { title: '个人中心' },
        component: () => import('@/views/user/userInfo.vue')
      },
      {
        name: 'ChangePwd',
        path: '/changePwd',
        meta: { title: '修改密码' },
        component: () => import('@/views/user/changePwd.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录', hidden: true },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true, noTagView: true },
    children: [
      {
        meta: { noTagView: true },
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    meta: { hidden: true },
    component: () => import('@/views/error/404.vue')
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  pages
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
