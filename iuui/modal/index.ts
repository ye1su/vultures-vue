import type { App } from 'vue'
import Modal from './src/modal'

Modal.install = function (app: App): void {
  app.component(Modal.name, Modal)
}

export { Modal }

export default {
  title: 'Modal 树',
  category: '数据展示',
  install(app: App): void {
    app.use(Modal as any)
  }
}
