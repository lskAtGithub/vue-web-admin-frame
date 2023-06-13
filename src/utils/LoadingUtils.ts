import { ElLoading, type LoadingOptions } from 'element-plus'


class LoadingUtils {
  static loadings: number[] = []
  static loadingInstance: any = null

  static show(options?: LoadingOptions) {
    if (this.loadings.length) {
      this.loadings.push(1)
    } else {
      const defaultOptions: LoadingOptions = {
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      }
      const LoadingOptions = Object.assign(defaultOptions, options)
      this.loadingInstance = ElLoading.service(LoadingOptions)
    }
  }

  static hide() {
    this.loadings.pop()
    if (this.loadings.length === 0) {
      this.loadingInstance.close()
    }
  }
}

export default LoadingUtils