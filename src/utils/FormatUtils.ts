export default class FormatUtils {
  /**
   * @param {Array} arr
   * @description 数组扁平化函数
   * @returns {Array}
   */
  static flattenArray(arr: Array<any>) {
    while (arr.some((i) => Array.isArray(i))) {
      arr = [].concat(...arr)
    }
    return arr
  }
}
