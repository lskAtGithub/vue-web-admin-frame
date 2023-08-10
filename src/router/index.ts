import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

import pages from './modules/pages'
import components from './modules/components'
import error from './modules/error'
import nested from './modules/nested'

/**
 * @param path: 路由的访问路径
 * @param component: 对应的映射文件
 * @param redirect: 重定向地址,如果包含了children,那么这个路径是必填且对应children中的路径,否则会影响动态加载
 * @param meta: {
 *    @param icon: 图标
 *    @param title: 标题，对应侧边栏显示和面包屑显示
 *    @param noBreadCrumbs: 是否显示面包屑， 默认显示， 如果false则不会显示改路由的层级
 *    @param keepAlive: 是否开始缓存，默认不缓存
 *    @param noTagView: 是否不显示tagView， 默认为false， 即开启 tagview
 *    @param affix: 是否固定在tagview, 设置 affix: true 则 noTagView 不能为 true
 *    @param activeMenu: 接受一个路由路径，对应左侧激活的菜单栏， 同时也会影响到动态加载的路由
 *    @param hidden: 是否在菜单栏显示
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
        meta: { title: '首页', icon: 'House', keepAlive: true, affix: true },
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    path: '/errorlog',
    component: Layout,
    redirect: '/errorlog/handle',
    meta: { icon: 'error-handle', noBreadCrumbs: true },
    children: [
      {
        name: 'ErrorHandleDemo',
        path: '/errorlog/handle',
        meta: { title: 'errorHandle示例', icon: 'error-handle' },
        component: () => import('@/views/pagesManage/error/index.vue')
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
        meta: { title: '个人中心', keepAlive: false },
        component: () => import('@/views/user/UserInfo.vue')
      },
      {
        name: 'ChangePwd',
        path: '/changePwd',
        meta: { title: '修改密码', keepAlive: false },
        component: () => import('@/views/user/ChangePwd.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录', hidden: true, noTagView: true },
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'error404',
    path: '/:catchAll(.*)',
    meta: { hidden: true },
    component: () => import('@/views/error/404.vue')
  },
  components,
  nested,
  error
]

export const asyncRoutes: Array<RouteRecordRaw> = [pages]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
