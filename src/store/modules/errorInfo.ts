import { defineStore } from 'pinia'
import type { IErrorItem } from '@/Types/ErrorInfo'

const errorInfoStore = defineStore('errorInfoStore', {
  state: () => {
    return {
      errorInfo: [] as Array<IErrorItem>,
      isNewError: false as boolean,
      isShowBugHandler: true as boolean
    }
  },
  actions: {
    /**
     * @param boolean
     * @description 更改错误信息的已读状态
     */
    changeErrReadStatus(status: boolean) {
      this.isNewError = status
    },

    /**
     * @param
     * @description 添加一条错误信息
     */
    addError(errItem: IErrorItem) {
      this.errorInfo.push(errItem)
    },

    /**
     * @param
     * @description 删除某个错误信息
     */
    removeError(index: number) {
      this.errorInfo.splice(index, 1)
    }
  }
})

export default errorInfoStore
