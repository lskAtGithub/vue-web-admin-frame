export default class PageTitleUtils {
  static getPageTitle(title: string): string {
    const titleFix: string = '后台管理系统'
    return title ? title + titleFix : titleFix
  }
}