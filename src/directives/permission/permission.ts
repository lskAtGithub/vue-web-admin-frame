import useStore from '@/store/index'

const { permission } = useStore()
const { permissions } = permission

function checkPermission(el: Element, binding: { value: any }) {
  const { value } = binding

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      const hasPermission = permissions.some(role => {
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

export default {
  created(el: Element, binding: any) {
    checkPermission(el, binding)
  },
  updated(el: Element, binding: any) {
    checkPermission(el, binding)
  }
}
