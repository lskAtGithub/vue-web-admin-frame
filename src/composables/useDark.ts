import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'vue-admin-frame-vueuse-theme-key',
  valueDark: 'dark',
  valueLight: 'light'
})
export const toggleDark = useToggle(isDark)
