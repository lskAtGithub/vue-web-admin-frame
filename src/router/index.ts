import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

import pages from './modules/pages'
import components from './modules/components'

/**
 * @param path: 路由的访问路径
 * @param component: 对应的映射文件
 * @param redirect: 重定向地址,如果包含了children,那么这个路径是必填且对应children中的路径,否则会影响动态加载
 * @param meta: {
 *    @param icon: 图标
 *    @param title 标题，对应侧边栏显示和面包屑显示
 *    @param noBreadCrumbs: 是否显示面包屑， 默认显示， 如果false则不会显示改路由的层级
 *    @param cache: 是否开始缓存，默认不缓存
 *    @param noTagView: 是否不显示tagView， 默认都会显示
 *    @param activeMenu: 接受一个路由路径，对应左侧激活的菜单栏， 同时也会影响到动态加载的路由
 * }
 * @param children: 子路由，多级路由通过children实现
 */

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
        component: () => import('@/views/user/UserInfo.vue')
      },
      {
        name: 'ChangePwd',
        path: '/changePwd',
        meta: { title: '修改密码' },
        component: () => import('@/views/user/ChangePwd.vue')
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
  },
  components
]

export const asyncRoutes: Array<RouteRecordRaw> = [pages]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
