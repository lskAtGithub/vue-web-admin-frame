import useStore from "@/store"

const { system } = useStore()
export default class IndexUtils {
  /**
   * @description 监听窗口的变化 ，处理侧边菜单的展开收缩
   */
  static windowResize() {
    window.addEventListener('resize', this.debounce(() => {
      if (window.innerWidth <= 900) {
        system.packCollapse()
      }
    }, 300))
  }

  /**
  * @param {Function} fn 目标函数
  * @param {Number} timeout 延迟执行毫秒数
  * @description 防抖函数
  */
  static debounce(fn: Function, timeout: number = 600) {
    let timer = null as any
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        // @ts-ignore
        fn.apply(this, arguments)
      }, timeout)
    }
  }
}