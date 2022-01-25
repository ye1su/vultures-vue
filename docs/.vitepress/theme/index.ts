import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../iuui/tree'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree)
    registerComponents(app)
  }
}
