export default {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Input 输入框', link: '/components/input/' },
        { text: 'Search 搜索框', link: '/components/search/' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton/' }
      ]
    },
    {
      text: '反馈',
      children: [
        { text: 'Modal 模态框', link: '/components/modal/' },
      ]
    },
    {
      text: '数据',
      children: [{ text: 'Tree 树', link: '/components/tree/' }]
    }
  ]
}
