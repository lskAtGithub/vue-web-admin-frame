import type { App } from 'vue'
import permission from './permission'

const install = function(app:App) {
  app.directive('permission', permission)
}

export default install
