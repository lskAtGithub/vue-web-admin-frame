import type { ComponentPublicInstance } from 'vue'

export interface IErrorItem {
  err: unknown | Error
  info: string
  vm?: ComponentPublicInstance
}
