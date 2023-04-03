import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'
import { constantRoutes, asyncRoutes } from '@/router/index'
import FormatUtils from '@/utils/FormatUtils'
import type { IRoute } from '@/Types/Route'

export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes
    }
  },
  actions: {
    async SET_ROUTES() {
      const res: any = await getMenu()
      const routes: any = constantRoutes.concat(asyncRoutes)
      this.routes = constantRoutes.concat(res.data)
    },
    RESET_ROUTES() {
      this.$reset()
    }
  }
})

