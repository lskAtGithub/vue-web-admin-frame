import type { ComponentPublicInstance } from 'vue'

const errorHandler = (err: unknown, vm: ComponentPublicInstance | null, info: string) => {
  if (err instanceof Error) {
    const errorMessage = err.message

    // 获取堆栈跟踪信息
    const stackTrace = err.stack as string
    // 从堆栈跟踪中提取组件名
    const componentName = extractComponentNameFromStackTrace(stackTrace)
    // 获取报错的文件
    const errorFile = info ? info.split('\n')[1]?.trim().replace(/^at /, '') : ''

    console.error('Error:', errorMessage)
    console.error('Stack Trace:', stackTrace)
    console.error('Error File:', componentName)
  }
}

const extractComponentNameFromStackTrace = (stackTrace: string): string => {
  const regex = /at\s+Component\.\w+\s+\((.+)\)/
  const match = stackTrace.match(regex)

  if (match && match.length > 1) {
    const componentInfo = match[1]
    const componentName = componentInfo.split('/').pop() || ''
    return componentName
  }

  return ''
}

export default errorHandler
