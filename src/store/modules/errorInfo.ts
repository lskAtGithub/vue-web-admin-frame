import { defineStore } from 'pinia'
import type { IErrorItem } from '@/Types/ErrorInfo'

const errorInfoStore = defineStore('errorInfoStore', {
  state: () => {
    return {
      errorInfo: [] as Array<IErrorItem>,
      isNewError: false as boolean,
      isShowBugHandler: true as boolean,
      errorSize: 0 as number
    }
  },
  actions: {
    /**
     * @param { IErrorItem } errItem
     * @description 添加一条错误信息
     */
    addError(errItem: IErrorItem) {
      this.errorInfo.unshift({ ...errItem, id: this.errorInfo.length + 1 })
      this.toggleReadStatus(true)
      this.errorSize++
    },

    /**
     * @param { number } id
     * @description 删除某个错误信息
     */
    removeError(id: number) {
      this.errorInfo = this.errorInfo.filter((item) => item.id !== id)
      this.errorSize--
    },

    /**
     * @param { Boolean }
     * @description 更改是否已读信息
     */
    toggleReadStatus(status: boolean) {
      this.isNewError = status
    }
  }
})

export default errorInfoStore
