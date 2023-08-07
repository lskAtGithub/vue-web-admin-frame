import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/component',
  meta: { title: '内置组件示例', icon: 'FolderOpened', keepAlive: false },
  redirect: '/component/echarts',
  component: Layout,
  children: [
    {
      name: 'EchartsDemo',
      meta: { title: 'Echarts', keepAlive: false },
      path: '/component/echarts',
      component: () => import('@/views/componentsManage/Echarts.vue')
    },
    {
      name: 'CountUpDemo',
      meta: { title: '数字滚动', keepAlive: false },
      path: '/component/countup',
      component: () => import('@/views/componentsManage/Countup.vue')
    },
    {
      name: 'pagerTableDemo',
      meta: { title: '表格组件', keepAlive: false },
      path: '/component/pagerTable',
      component: () => import('@/views/componentsManage/PagerTable.vue')
    },
    {
      name: 'AMap',
      meta: { title: '高德地图', keepAlive: false },
      path: '/component/AMap',
      component: () => import('@/views/componentsManage/GeoMap.vue')
    },
    {
      name: 'Tinymce',
      meta: { title: '富文本' },
      path: '/component/tinymce',
      component: () => import('@/views/componentsManage/Tinymce.vue')
    }
  ]
}

export default route
