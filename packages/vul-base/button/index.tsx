import type { App } from 'vue'
import Button from './src/button'

Button.install = function (app: App): void {
  app.component(Button.name, Button)
}

export { Button }

export default {
  title: 'Button 按钮',
  install(app: App): void {
    app.use(Button as any)
  }
}
