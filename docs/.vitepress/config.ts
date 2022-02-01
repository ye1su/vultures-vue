import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import sidebar from './config/sidebar'
import nav from './config/navbar'
import head from './config/head'

const config = {
  base:'/iuUI/',
  title: 'iuUI',
  description: 'A VitePress site',
  head,
  themeConfig: {
    sidebar,
    nav,
    logo: '../../assets/iu.svg'
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}

export default config
