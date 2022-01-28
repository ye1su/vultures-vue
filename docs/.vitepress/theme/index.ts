import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../iuui/tree'
import Search from '../../../iuui/search'
import Input from '../../../iuui/input'
import skeleton from '../../../iuui/skeleton'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree)
    app.use(Input)
    app.use(Search)
    app.use(skeleton)
    registerComponents(app)
  }
}
