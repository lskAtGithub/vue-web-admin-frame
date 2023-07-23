export default class VerifyUtils {
  /**
   * @param {string} url
   * @returns {Boolean}
   * @description 校验传入值是否为url
   */
  static validURL(url: string): boolean {
    const reg =
      /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }

  /**
   * @param {string} email
   * @returns {Boolean}
   * @description 校验传入值是否为邮箱
   */
  static validEmail(email: string): boolean {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
  }

  /**
   * @param {array} arg
   * @returns {boolean}
   * @description 校验传入值是否为数组
   */
  static isArray(arg: any): boolean {
    if (typeof Array.isArray === 'undefined') {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
  }

  /**
   * @param {string} password
   * @returns {Boolean}
   * @description 传入值是否为密码，必须包含大小写字母,特殊字符和数字，长度为8-12位
   */
  static validatePassword(password: string) {
    const regexp =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,\._])[0-9a-zA-Z!@#$%^&*,\\._]{8,12}$/
    return regexp.test(password)
  }
}
