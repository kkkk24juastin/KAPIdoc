import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '小K的AI站点',
  description: '小K的AI站点使用文档',

  // Keep the current page hierarchy while excluding unfinished draft sections.
  srcExclude: ['guide/**', 'paint/**'],

  themeConfig: {
    siteTitle: '小K的AI站点',

    nav: [
      { text: '快速开始', link: '/register/' },
      { text: '小K的AI站点', link: 'https://api.kkkk24juastin.asia' },
      { text: '购买服务', link: 'https://pay.ldxp.cn/shop/kkkk24' },
      { text: '售后支持', link: '/faq/#售后支持' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '（1）注册账号', link: '/register/1-register' },
          { text: '（2）登录账号', link: '/register/2-login' },
          { text: '（3）购买额度', link: '/register/3-quota' },
          { text: '（4）创建 API 令牌', link: '/register/4-token' },
          { text: '（5）环境检查', link: '/register/5-env' },
          { text: '（6）配置 CLI 工具', link: '/register/6-cli' },
        ],
      },
      {
        text: '模型分组介绍',
        items: [
          { text: '模型广场', link: '/token/1-intro' },
          { text: '令牌分组介绍', link: '/token/2-group' },
        ],
      },
      {
        text: 'CC-Switch 使用',
        items: [
          { text: '通用步骤', link: '/ccswitch/1-common' },
          { text: 'Claude Code 配置', link: '/ccswitch/2-claude' },
          { text: 'Codex 配置', link: '/ccswitch/3-codex' },
          { text: '用量查询配置', link: '/ccswitch/4-usage-query' },
          { text: 'CC-Switch CLI 使用', link: '/ccswitch/5-ccs_cli' },
          { text: 'Claude Desktop 配置', link: '/ccswitch/4-claude-desktop' },
          { text: 'ChatGPT 接入', link: '/ccswitch/6-codex-app' },
        ],
      },
      {
        text: 'CLI 配置教程',
        items: [
          { text: '环境检查（通用步骤）', link: '/cli/1-env' },
          { text: 'Claude Code 配置', link: '/cli/2-claude' },
          { text: 'Codex 配置', link: '/cli/3-codex' },
          { text: 'CC 缓存优化代理', link: '/cli/5-cache-fix' },
          { text: 'Grok Build 配置', link: '/cli/6-grok-build' },
          { text: 'Kimi Code 配置', link: '/cli/7-kimi-code' },
        ],
      },
      {
        text: '官方客户端',
        items: [
          { text: 'AionUI', link: '/advanced/AionUI' },
          { text: 'OpenCode', link: '/advanced/OpenCode' },
          { text: 'OpenClaw', link: '/advanced/OpenClaw' },
          { text: 'Hermes', link: '/advanced/Hermes' },
          { text: 'WorkBuddy', link: '/advanced/WorkBuddy' },
        ],
      },
      {
        text: '第三方接入',
        items: [
          { text: 'DeepSeek 接入 Claude Code', link: '/advanced/DeepSeekClaudeCode' },
          { text: 'DeepSeek 接入 Codex', link: '/advanced/DeepSeekCodex' },
          { text: 'ChatGPT 接入 Claude Code', link: '/advanced/ChatGPTClaudeCode' },
        ],
      },
      {
        text: '常见问题',
        items: [
          { text: 'Claude Code', link: '/faq/CC' },
          { text: 'Codex', link: '/faq/Codex' },
          { text: 'Gemini', link: '/faq/Gemini' },
        ],
      },
    ],

    footer: {
      message: '小K的AI站点使用文档 · 售后QQ群：1006226940',
      copyright: 'Copyright © 2024-2026 小K的AI站点',
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

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
