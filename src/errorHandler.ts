import type { ComponentPublicInstance } from 'vue'

const errorHandler = (err: unknown | Error, vm: ComponentPublicInstance | null, info: string) => {
  console.error('发生错误:', err)
  console.error('组件:', vm)
  console.error('错误信息:', info)
}

export default errorHandler
