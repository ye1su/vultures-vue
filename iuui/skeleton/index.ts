import type { App } from 'vue'
import Skeleton from './src/skeleton'

Skeleton.install = function (app: App): void {
  app.component(Skeleton.name, Skeleton)
}

export { Skeleton }

export default {
  title: 'Skeleton 骨架屏',
  install(app: App): void {
    app.use(Skeleton as any)
  }
}
