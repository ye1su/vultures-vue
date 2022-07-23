import type { App } from 'vue'
import Tooltip from './src/tooltip'

Tooltip.install = function (app: App): void {
  app.component(Tooltip.name, Tooltip)
}

export { Tooltip }

export default {
  title: 'Tooltip 提示',
  category: '数据展示',
  install(app: App): void {
    app.use(Tooltip as any)
  }
}
