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
    async SET_ROUTES() {
      const res: any = await getMenu()
      this.routes = constantRoutes.concat(res.data)
    },
    RESET_ROUTES() {
      this.$reset()
    }
  }
})

