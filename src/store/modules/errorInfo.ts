import { defineStore } from 'pinia'
import type { IErrorItem } from '@/Types/ErrorInfo'
import type { ComponentPublicInstance } from 'vue'

const errorInfoStore = defineStore('errorInfoStore', {
  state: () => {
    return {
      errorInfo: [] as Array<IErrorItem>,
      isNewError: false as boolean
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
    addError(err: unknown | Error, vm: ComponentPublicInstance | null, info: string) {
      this.errorInfo.push({ err, info })
    },

    /**
     * @param
     * @description 删除某个错误信息
     */
    removeError(err: unknown | Error, vm: ComponentPublicInstance | null, info: string) {
      this.errorInfo.push({ err, info })
    }
  }
})

export default errorInfoStore
