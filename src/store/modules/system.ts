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
    },
    packCollapse() {
      this.isCollapse = true
    }
  }
})

export default systemStore
