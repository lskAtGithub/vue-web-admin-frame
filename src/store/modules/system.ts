import { defineStore } from 'pinia'

const systemStore = defineStore('systemStore', {
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

export default systemStore
