import { ElLoading, type LoadingOptions } from 'element-plus'


class LoadingUtils {
  static loadingInstance: any = null

  static show(options: LoadingOptions) {
    const defalutOptions: LoadingOptions = {
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    }
    const LoadingOptions = Object.assign(defalutOptions, options)
    this.loadingInstance = ElLoading.service(LoadingOptions)
  }

  static hide() {
    this.loadingInstance.close()
  }
}

export default LoadingUtils;