export default class ValidateUtils {
  /**
   * 密码必须包含大小写字母,特殊字符和数字，长度为8-12位
   */
  static validatePassword(password: string) {
    const regexp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,\._])[0-9a-zA-Z!@#$%^&*,\\._]{8,12}$/
    return regexp.test(password)
  }
}