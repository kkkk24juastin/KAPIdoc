import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '小K的AI小站',
  description: '小K的AI小站使用文档 - 快速上手指南',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '小K的AI小站',

    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/guide/' },
      { text: '购买服务', link: 'https://pay.ldxp.cn/shop/kkkk24' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '新用户必看', link: '/guide/' },
          { text: '注册与登录', link: '/guide/register' },
          { text: '购买与充值', link: '/guide/redeem' },
          { text: '创建 API Key', link: '/guide/api-key' },
        ],
      },
      {
        text: 'API 使用',
        items: [
          { text: 'API 调用方式', link: '/guide/api-usage' },
          { text: '常用客户端配置', link: '/guide/clients' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: '模型与价格', link: '/guide/pricing' },
          { text: '常见问题', link: '/guide/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    footer: {
      message: '小K的AI小站使用文档',
      copyright: 'Copyright © 2024-2026 小K的AI小站',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    lastUpdated: {
      text: '最后更新于',
    },

    editLink: {
      pattern: 'https://github.com/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
