/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:08:59
 * @FilePath: /iuUI/packages/ripple/index.ts
 * @Description: update here
 */
import type { App } from 'vue'
import RippleDirective from './src/ripple-directive'

export { RippleDirective }

export default {
  title: 'Ripple 水波纹',
  category: '通用',
  install(app: App): void {
    app.directive('Ripple', RippleDirective)
  }
}
