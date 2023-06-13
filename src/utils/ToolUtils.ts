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
      key = keys[i];
      data = (obj)[key];
      if (data && typeof data === 'object') {
        newObj[key] = this.deepClone(data)
      } else {
        newObj[key] = data;
      }
    }
    return newObj
  }
}