import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'
import { constantRoutes, asyncRoutes } from '@/router/index'
import type { RouteRecordRaw } from 'vue-router'

function filterAsyncRoutes (routes: RouteRecordRaw) {
  
}

export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes,
    }
  },
  actions: {
    async setRoutes() {
      const res: any = await getMenu()
      const filterRoutes = filterAsyncRoutes(res.data)
      this.routes = constantRoutes.concat(res.data)
      return filterRoutes
    },
    resetRoutes() {
      this.$reset()
    }
  }
})

