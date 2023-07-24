interface KeyValueObject {
  [key: string]: any
}

type FormatType = 'Time' | 'DateTime' | 'Date'

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

  /**
   * @param {String} FormatType 返回格式类型【日期 + 时间，日期， 时间】
   * @description 前端获取当前的日期
   * @returns String 返回客户端当前的中文时间
   */

  static getNowDateTimeCn(formatter: FormatType = 'DateTime') {
    let result
    const now: Date = new Date()
    // 格式化日期为中文格式
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true
    }
    const chineseDate = now.toLocaleDateString("zh-CN", options)
    // 格式化时间为中文格式
    const time = now.toLocaleTimeString("zh-CN")
    // 组合日期和时间

    if (formatter === 'DateTime') {
      result = `${chineseDate} ${time}`
    } else if (formatter === 'Date') {
      result = `${chineseDate}`
    } else {
      result = `${time}`
    }
    return result
  }
}
