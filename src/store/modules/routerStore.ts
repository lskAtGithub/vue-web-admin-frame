import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'
import { constantRoutes } from '@/router/index'

export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes
    }
  },
  actions: {
    async setRoutes() {
      const res: any = await getMenu()
      this.routes = constantRoutes.concat(res.data)
    },
    resetRoutes() {
      this.$reset()
    }
  }
})

