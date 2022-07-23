import type { App } from 'vue'
import Input from './src/input'

Input.install = function (app: App): void {
  app.component(Input.name, Input)
}

export { Input }

export default {
  title: 'Input 输入框',
  category: '数据展示',
  install(app: App): void {
    app.use(Input as any)
  }
}
