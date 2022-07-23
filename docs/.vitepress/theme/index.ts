/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 17:47:11
 * @FilePath: /iuUI/docs/.vitepress/theme/index.ts
 * @Description: update here
 */
import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../packages/tree'
import Search from '../../../packages/search'
import Input from '../../../packages/input'
import Skeleton from '../../../packages/skeleton'
import Switch from '../../../packages/switch'
import Modal from '../../../packages/modal'
import Button from '../../../packages/button'
import Ripple from '../../../packages/ripple'
import Card from '../../../packages/card'
import Tooltip from '../../../packages/tooltip'
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
