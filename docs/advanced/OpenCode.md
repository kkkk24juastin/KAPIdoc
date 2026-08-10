# OpenCode


## 项目介绍

![](/assets/image/Advanced/OpenCode/01.webp)

- **项目定位**: 一个开源的 AI 编程助手，可在终端、IDE 或桌面环境中辅助编写、调试和改进代码。
- **核心特色**:
  - 原生终端或 TUI 支持，适合命令行开发者。
  - 自动加载正确的语言服务器（LSP）以提升上下文理解。
  - 支持多会话并行与会话链接共享。
  - 支持 75+ 模型提供商，包括本地模型。
  - 可与 GitHub Copilot、ChatGPT Plus/Pro 等集成。
- **平台支持**: 终端 CLI、桌面应用（Beta）、IDE 扩展等。

## 环境配置

1. 打开你的终端，运行以下命令全局安装OpenCode

```bash
npm install -g opencode-ai
```

1. 安装完成后，在终端输入 `opencode` 命令若出现界面，则安装成功

![](/assets/image/Advanced/OpenCode/02.webp)

1. 查看 [CC Switch下载](../ccswitch/1-common.md) 一节的内容，下载并安装 CC-Switch 到本地，安装并打开软件
2. 上方配置项选择到 `OpenCode` ，然后点击 `添加供应商` 按钮

![](/assets/image/Advanced/OpenCode/03.webp)

1. 进行多项配置：
  > **重要**
  >
  > **目前支持 OpenCode 的分组：**
  >
  > - **GPT：** [codex](../token/2-group.md) 分组
  > - **Claude：** [ClaudeCode-AWSQ](../token/2-group.md)、[claude code](../token/2-group.md) 或 [claudecode-反重力](../token/2-group.md) 分组
  > - **Gemini：** [gemini](../token/2-group.md) 分组
  >
  > **请创建正确分组的 API Key 后填入。**
  - 选择 `自定义供应商`；预设列表中没有 小K的AI站点
  - 在 `供应商标识` 中填写分组名称，比如 小K的AI站点-Codex
  - 在 `接口格式` 中选择合适的分组
    - Claude系列模型：`Anthropic`
    - Codex系列模型：`OpenAI`
    - Gemini系列模型：`Google (Gemini)`
  - 在 `API Key` 中填入 [创建API令牌](../register/4-token.md) 一节中你创建的Key
  - 在 `额外选项` 中配置键值对 `{"setCacheKey":true}`
  - 在 `模型配置` 中配置ApiKey对应分组下正确的模型名，每个分组下的模型可在 [令牌分组介绍](../token/2-group.md) 一节中查询。
  - 全部配置好后，点击右下角 `添加` 按钮

![](/assets/image/Advanced/OpenCode/04.webp)

1. 在界面中选择刚配置好的 小K的AI站点 渠道，点击添加按钮

![](/assets/image/Advanced/OpenCode/05.webp)

## 验证配置

1. 重新打开终端，输入 `opencode` 运行
2. 输入 `/models` 命令，观察刚才配置的 小K的AI站点的渠道是否存在，如果存在则配置成功

![](/assets/image/Advanced/OpenCode/06.webp)

1. 开始愉快的对话吧~

![](/assets/image/Advanced/OpenCode/07.webp)
