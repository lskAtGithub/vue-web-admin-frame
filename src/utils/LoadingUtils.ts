import { ElLoading, type LoadingOptions } from 'element-plus'


class LoadingUtils {
  static loadingInstance: any = null

  static show(options?: LoadingOptions) {
    const defaultOptions: LoadingOptions = {
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    }
    const LoadingOptions = Object.assign(defaultOptions, options)
    this.loadingInstance = ElLoading.service(LoadingOptions)
  }

  static hide() {
    this.loadingInstance.close()
  }
}

export default LoadingUtils;