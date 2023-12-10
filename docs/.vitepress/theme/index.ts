/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 09:47:55
 * @FilePath: /vultures-vue/docs/.vitepress/theme/index.ts
 * @Description: update here
 */

// 基础组件
import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../../packages/Basic/button/index.js'

// 导入包
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {

    app.use(Button)
    registerComponents(app)
  },
}
