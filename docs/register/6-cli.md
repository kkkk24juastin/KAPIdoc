# 配置 CLI 工具


小K的AI站点 支持在命令行中使用 Claude Code、Codex、Grok Build。

> **不提供 Gemini CLI 教程**
>
> Google 官方 **Gemini CLI** 目前稳定性较差，几乎无法正常使用，本站 **不再提供** 其安装与配置教程。
>
> 若需要使用 Gemini 模型，请改用 Cline、Roo Code、OpenCode 等支持 OpenAI 兼容接口的工具，详见 [Gemini 相关问题](../faq/Gemini.md)。

## 基础条件

开始配置 CLI 前，请先完成以下步骤：

1. 完成 [环境检查](5-env.md)，确保 Node.js 和 npm 可以正常使用。
2. 完成 [安装 CLI](../cli/1-env.md#_2-%E5%AE%89%E8%A3%85cli)，安装 Claude Code、Codex 或 Grok Build。

## API 端点说明

登录控制台后，可以在“数据看板”右侧查看当前可用的 API Endpoint。

- 主站 Endpoint：`https://api.kkkk24juastin.asia`，稳定可靠，适合生产环境。

> **OpenAI 兼容端点需要添加 `/v1`**
>
> 如果你使用的是 OpenAI 兼容格式的客户端或工具，例如 Codex、OpenAI SDK、Cherry Studio 的 OpenAI 兼容配置，请在 API 地址后添加 `/v1`：
>
> ```bash
> https://api.kkkk24juastin.asia/v1
> ```
>
> 如果使用的是 Claude Code 等专用配置，请以对应教程中的示例为准。

> **推荐配置**
>
> 为了让配置过程轻便简单，我们 **极力推荐** 使用 GitHub 开源项目 [CC-Switch](https://github.com/farion1231/cc-switch) 来配置使用环境。
>
> [CC-Switch 配置 Claude Code、Codex 教程](../ccswitch/index.md)
>
> 如果你是老用户，或者不愿意使用此工具，也可以参考以下 CLI 配置教程文档，但我们还是极力推荐使用此工具，能省很多时间！

> **CLI 手动配置教程传送门**
>
> 注意：不管你是使用哪个 CLI，请一定先完成上方基础条件，确保 Node.js、npm 和对应 CLI 都可以正常使用。
>
> [Claude Code配置教程](../cli/2-claude.md)
>
> [Codex配置教程](../cli/3-codex.md)
>
> [Grok Build配置教程](../cli/6-grok-build.md)
