import useStore from '@/store/index'
import type { Directive, DirectiveBinding } from 'vue'

const { permission } = useStore()

function checkPermission(el: Element, binding: { value: any }) {
  const { value } = binding
  const { permissions } = permission
  if (value && value instanceof Array) {
    if (value.length > 0) {
      let index: number = 0
      let hasPermission: boolean = false
      while (index < value.length) {
        if (permissions.includes(value[index])) {
          hasPermission = true
          break
        }
        index++
      }
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

const instance: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}

export default { name: 'permission', instance }
