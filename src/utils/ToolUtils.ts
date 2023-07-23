interface KeyValueObject {
  [key: string]: any
}

export default class ToolUtils {
  /**
   * @param {object} obj
   * @returns {object} newObj
   * @description 对象的深拷贝
   */
  static deepClone(obj: KeyValueObject): KeyValueObject {
    const newObj: KeyValueObject = {}
    let keys = Object.keys(obj)
    let key = null
    let data = null
    for (let i = 0; i < keys.length; i++) {
      key = keys[i]
      data = obj[key]
      if (data && typeof data === 'object') {
        newObj[key] = this.deepClone(data)
      } else {
        newObj[key] = data
      }
    }
    return newObj
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
