export default class FormatUtils {
  /**
   * @param {Array} arr
   * @returns {Array}
   */
  static flattenArray(arr: Array<any>) {
    while (arr.some((i) => Array.isArray(i))) {
      arr = [].concat(...arr)
    }
    return arr
  }
}
