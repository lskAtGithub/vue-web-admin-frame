import useStore from '@/store'
import ToolUtils from '@/utils/ToolUtils'

export default class IndexUtils {
  /**
   * @description 监听窗口的变化 ，处理侧边菜单的展开收缩
   */
  static windowResize() {
    const { system } = useStore()
    window.addEventListener(
      'resize',
      ToolUtils.debounce(() => {
        if (window.innerWidth <= 900) {
          system.packCollapse()
        }
      }, 300)
    )
  }

  /**
   * @description 判断当前环境是否为 development （本地开发环境）
   * @returns boolean
   */
  static isDevelopment() {
    return import.meta.env.MODE === 'development'
  }
}
