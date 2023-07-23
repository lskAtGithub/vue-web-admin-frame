import useStore from '@/store/index'
import type { Directive, DirectiveBinding } from 'vue'

const { permission } = useStore()
const { permissions } = permission

function checkPermission(el: Element, binding: { value: any }) {
  const { value } = binding
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value
      const hasPermission = permissions.some((role) => {
        return permissionRoles.includes(role)
      })
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

const instance: Directive = {
  created(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}

export default { name: 'permission', instance }
