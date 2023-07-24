import type { ComponentPublicInstance } from 'vue'
import useStore from './store'
import type { IErrorItem } from '@/Types/ErrorInfo'
import ToolUtils from './utils/ToolUtils'

const { errorInfo } = useStore()
const errorHandler = (err: unknown, vm: ComponentPublicInstance | null, info: string) => {
  if (err instanceof Error) {
    const title = err.message
    // 获取堆栈跟踪信息
    const stackTrace = err.stack as string
    const createTime: string = ToolUtils.getNowDateTimeCn()
    const url = window.location.href
    const errItem: IErrorItem = { createTime, title, info: stackTrace, url }
    // 添加到错误数组
    errorInfo.addError(errItem)
  }
  // 错误继续往下走
  throw err
}

export default errorHandler
