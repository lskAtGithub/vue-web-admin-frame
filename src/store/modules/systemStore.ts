import { defineStore } from 'pinia'

export const systemStore = defineStore('systemStore', {
  state: () => {
    return {
      isCollapse: false
    }
  },
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})