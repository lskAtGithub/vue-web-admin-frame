import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'

export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: []
    }
  },
  actions: {
    async SET_ROUTES() {
      const data:any = await getMenu()
      this.routes = data
    },
    RESET_ROUTES() {
      this.$reset()
    }
  }
})