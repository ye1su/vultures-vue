/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:02:32
 * @FilePath: /iuUI/docs/.vitepress/config.ts
 * @Description: update here
 */
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import sidebar from './config/sidebar'
import nav from './config/navbar'
import head from './config/head'

const config = {
  base:'/vultures/',
  title: 'vultures',
  description: 'vultures组件库',
  head,
  themeConfig: {
    sidebar,
    nav,
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/InternationSi/vultures' }
  ],
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}

export default config
