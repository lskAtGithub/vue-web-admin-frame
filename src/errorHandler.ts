import type { ComponentPublicInstance } from 'vue'
import useStore from './store'
import type { IErrorItem } from '@/Types/ErrorInfo'
import ToolUtils from './utils/ToolUtils'

const { errorStore } = useStore()
const errorHandler = (err: unknown, vm: ComponentPublicInstance | null, info: string) => {
  if (err instanceof Error) {
    const title = err.message
    // 获取堆栈跟踪信息
    const stackTrace = err.stack as string
    const createTime: string = ToolUtils.getNowDateTimeCn()
    const url = window.location.href
    console.error(title)
    console.error(stackTrace)
    const errItem: IErrorItem = { createTime, title, info: stackTrace, url, id: 0 }
    // 添加到错误数组
    errorStore.addError(errItem)
  }
}

export default errorHandler
