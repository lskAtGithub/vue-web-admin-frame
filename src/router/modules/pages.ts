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
      component: () => import('@/views/pagesManage/error/index.vue'),
    },
    {
      name: 'TableManage',
      meta: { cache: true, title: '表格页' },
      path: '/manage/table',
      redirect: '/manage/table/list',
      component: () => import('@/views/pagesManage/manage/index.vue'),
      children: [
        {
          name: 'TableManageList',
          meta: { title: '表格页', noBreadCrumbs: true, cache: true },
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/manage/list/index.vue')
        },
        {
          name: 'TableManageDetail',
          path: '/manage/table/detail',
          meta: { title: '详情', activeMenu: '/manage/table/list', noTagView: false },
          component: () => import('@/views/pagesManage/manage/details/index.vue')
        },
        {
          name: 'TableManageAdd',
          path: '/manage/table/add',
          meta: { title: '新增', activeMenu: '/manage/table/list', noTagView: false, cache: true },
          component: () => import('@/views/pagesManage/manage/add/index.vue')
        }
      ]
    }
  ]
}

export default route
