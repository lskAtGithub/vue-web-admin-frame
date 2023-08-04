import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/manage',
  meta: { title: '页面展示', icon: 'FolderOpened', redirect: '/manage/table' },
  component: Layout,
  children: [
    {
      name: 'ErrorPage',
      meta: { title: '全局错误监听' },
      path: '/manage/error/page',
      component: () => import('@/views/pagesManage/error/index.vue')
    },
    {
      name: 'TableManage',
      meta: { keepAlive: true, title: '增删改查' },
      path: '/manage/table',
      redirect: '/manage/table/list',
      component: () => import('@/views/pagesManage/manage/index.vue'),
      children: [
        {
          name: 'TableManageList',
          meta: { title: '嵌套多层 keep-alive', noBreadCrumbs: true, keepAlive: true },
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/manage/list/index.vue')
        },
        {
          name: 'TableManageDetail',
          path: '/manage/table/detail',
          meta: {
            title: '详情',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: false
          },
          component: () => import('@/views/pagesManage/manage/details/index.vue')
        },
        {
          name: 'TableManageAdd',
          path: '/manage/table/add',
          meta: {
            title: '新增',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: true
          },
          component: () => import('@/views/pagesManage/manage/add/index.vue')
        },
        {
          name: 'TableManageEdit',
          path: '/manage/table/edit/:id',
          meta: {
            title: '修改',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: true
          },
          component: () => import('@/views/pagesManage/manage/edit/index.vue')
        }
      ]
    }
  ]
}

export default route
