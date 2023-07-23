import useStore from '@/store'
import ToolUtils from '@/utils/ToolUtils'

const { system } = useStore()
export default class IndexUtils {
  /**
   * @description 监听窗口的变化 ，处理侧边菜单的展开收缩
   */
  static windowResize() {
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
    console.log(import.meta.env)
    return import.meta.env.MODE === 'development'
  }
}
