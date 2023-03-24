import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      couter: 0,
      name: 'admin manage'
    }
  },
})