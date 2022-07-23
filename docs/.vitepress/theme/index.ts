/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:00:27
 * @FilePath: /iuUI/docs/.vitepress/theme/index.ts
 * @Description: update here
 */
import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../packages/vul-base/tree'
import Search from '../../../packages/vul-base/search'
import Input from '../../../packages/vul-base/input'
import Skeleton from '../../../packages/vul-base/skeleton'
import Switch from '../../../packages/vul-base/switch'
import Modal from '../../../packages/vul-base/modal'
import Button from '../../../packages/vul-base/button'
import Ripple from '../../../packages/vul-base/ripple'
import Card from '../../../packages/vul-base/card'
import Tooltip from '../../../packages/vul-base/tooltip'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree)
    app.use(Input)
    app.use(Search)
    app.use(Skeleton)
    app.use(Switch)
    app.use(Modal)
    app.use(Button)
    app.use(Ripple)
    app.use(Card)
    app.use(Tooltip)
    registerComponents(app)
  }
}
