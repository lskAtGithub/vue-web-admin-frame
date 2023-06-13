import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/component',
  meta: { title: '组件展示', icon: 'FolderOpened' },
  component: Layout,
  children: [
    {
      meta: { title: 'Echarts' },
      path: '/component/echarts',
      component: () => import('@/views/componentsManage/echarts/index.vue'),
    }
  ]
}

export default route