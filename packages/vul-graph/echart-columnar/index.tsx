/*
 * @Author: sifengyuan
 * @Date: 2022-07-24 21:45:03
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-24 21:55:38
 * @FilePath: /vultures/packages/vul-graph/echart-columnar/index.tsx
 * @Description: update here
 */
import type { App } from 'vue'
import EchartColumnar from './src/echart-columnar'

EchartColumnar.install = function (app: App): void {
  app.component(EchartColumnar.name, EchartColumnar)
}

export { EchartColumnar }

export default {
  title: 'EchartColumnar 柱状图',
  install(app: App): void {
    app.use(EchartColumnar as any)
  }
}
