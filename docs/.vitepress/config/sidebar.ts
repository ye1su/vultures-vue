/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:46:21
 * @FilePath: /iuUI/docs/.vitepress/config/sidebar.ts
 * @Description: update here
 */
export default {
  '/': [
    { text: '使用指南', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Input 输入框', link: '/components/input/' },
        { text: 'Search 搜索框', link: '/components/search/' },
        { text: 'Ripple 水波纹', link: '/components/ripple/' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton/' }
      ]
    },
    {
      text: '反馈',
      children: [
        { text: 'Modal 模态框', link: '/components/modal/' },
        { text: 'tooltip 阅读提示', link: '/components/tooltip/' },
      ]
    },
    {
      text: '数据',
      children: [
        { text: 'Card 卡片', link: '/components/card/' },
        { text: 'Tree 树', link: '/components/tree/' }
        
      ]
    }
  ]
}
