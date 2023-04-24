/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 09:49:13
 * @FilePath: /vultures-vue/docs/.vitepress/config/sidebar.ts
 * @Description: update here
 */
export default {
  '/components/': [
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },

      ]
    },

  ],
  '/graph/': [
    {
      text: 'echats',
      children: [
        { text: 'nar 柱状图', link: '/graph/bubbles/' },
      ]
    },
    {
      text: '关系',
      children: [
        { text: 'ER', link: '/graph/er/' },
      ]
    },
  ]
}

