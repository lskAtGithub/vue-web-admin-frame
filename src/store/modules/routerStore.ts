import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'
import { constantRoutes, asyncRoutes } from '@/router/index'
import type { RouteRecordRaw } from 'vue-router'


export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes,
      dynamicRoutes: asyncRoutes
    }
  },
  actions: {
    async setRoutes() {
      const res: any = await getMenu()
      this.routes = constantRoutes.concat(res.data)
      return this.dynamicRoutes
    },
    resetRoutes() {
      this.$reset()
    }
  }
})

