# Gemini相关问题


- [关于 Gemini CLI](Gemini.md#关于-gemini-cli)
- [如何在 Cline 使用 Gemini-3](Gemini.md#如何在-cline-使用-gemini-3)

### 关于 Gemini CLI

> **不提供 Gemini CLI 教程**
>
> Google 官方 **Gemini CLI**（`@google/gemini-cli`）目前稳定性较差，常见无法正常调用模型、无法粘贴图片等问题，**几乎无法正常使用**。
>
> 因此本站 **已移除** Gemini CLI 的安装与配置教程，也 **不推荐** 继续折腾该工具。

若需要使用 Gemini 模型，请改用支持 **OpenAI 兼容接口** 的工具，例如：

- **Cline**（见下方教程）
- **Roo Code**
- [OpenCode](../advanced/OpenCode.md)
- [AionUI](../advanced/AionUI.md)

令牌请创建 [gemini](../token/2-group.md) 分组，并以定价页当前显示的模型为准。

### 如何在 Cline 使用 Gemini-3

#### 软件要求

| 软件 | 版本要求 | 下载链接 |
| --- | --- | --- |
| **VSCode** | 1.80.0+ | [下载 VSCode](https://code.visualstudio.com/) |

#### 1. 创建 Gemini 分组令牌

按照 [创建 API 令牌](../register/4-token.md) 的方法，创建 **gemini** 分组令牌：

![创建 API 选择分组示意图](/assets/image/FAQ/Gemini/002.webp)

#### 2. 安装 Cline 插件

- 打开 VSCode
- 单击左侧边栏的 **扩展** 图标（或按 `Ctrl+Shift+X` / `Cmd+Shift+X`）
- 在搜索框输入 **Cline**
- 找到 Cline 插件，单击 **安装**

> **安装提示**
>
> - 安装完成后，左侧边栏会出现 Cline 图标
> - 首次使用需要配置 API Key
> - 建议安装最新版本以获得最佳体验

#### 3. 打开 Cline 界面

安装完成后，有两种方式打开 Cline：

**方式一：侧边栏图标**

- 单击 VSCode 左侧边栏的 Cline 图标

**方式二：命令面板**

- 按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS)
- 输入 `Cline: Open`
- 按 Enter

#### 4. 首次配置

打开 Cline 界面后，按以下步骤配置：

1. 单击 **API Configuration** 按钮
2. 按下方填写配置信息

```yaml
API Provider: OpenAI-compatible
Base URL: https://api.kkkk24juastin.asia/v1
API Key: sk-*****
Model ID: gemini-3-pro-preview
```

![Cline 配置界面示意图](/assets/image/FAQ/Gemini/003.webp)

> **安全提醒**
>
> 请妥善保管你的 `API Key`，不要在群聊或公开截图中泄露。

**已有用户提示**

如果您之前使用过 Cline，请单击右上角的 **⚙️ 设置** 按钮进入配置界面。

**配置参数说明**

| 配置项 | 推荐值 | 说明 |
| --- | --- | --- |
| **API Provider** | `OpenAI-compatible` | 推荐选择此项，支持更多模型 |
| **Base URL** | `https://api.kkkk24juastin.asia/v1` | 小K的AI站点 的 OpenAI 兼容端点（注意带 `/v1`） |
| **API Key** | `sk-******` | 你的 小K的AI站点 Key |
| **Model ID** | `gemini-3-pro-preview` | 按分组可用模型填写 |

#### 5. 完成配置

单击右上角 **Done**。
