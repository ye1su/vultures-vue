/*
 * @Author: sfy
 * @Date: 2023-04-22 09:34:22
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 09:37:34
 * @FilePath: /vultures-vue/packages/vul-graph/er-relation/index.ts
 * @Description: update here
 */
import type { App } from 'vue'
import ER from './src/er-relation'

ER.install = function (app: App): void {
  app.component(ER.name, ER)
}

export { ER }

export default {
  title: 'ER 关系图',
  install(app: App): void {
    app.use(ER as any)
  }
}
