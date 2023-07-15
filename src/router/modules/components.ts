import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/component',
  meta: { title: '内置组件示例', icon: 'FolderOpened' },
  component: Layout,
  children: [
    {
      name: 'EchartsDemo',
      meta: { title: 'Echarts' },
      path: '/component/echarts',
      component: () => import('@/views/componentsManage/Echarts.vue'),
    },
    {
      name: 'CountUpDemo',
      meta: { title: '数字滚动' },
      path: '/component/countup',
      component: () => import('@/views/componentsManage/Countup.vue'),
    },
    {
      name: 'pagerTableDemo',
      meta: { title: '表格组件' },
      path: '/component/pagerTable',
      component: () => import('@/views/componentsManage/pagerTable.vue'),
    },
  ]
}

export default route