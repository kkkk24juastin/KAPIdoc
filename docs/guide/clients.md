# 常用客户端配置

本站同时支持 OpenAI、Claude、Gemini 三种 API 格式，适配各类主流客户端。以下是各客户端的配置方法。

## Cherry Studio（对话客户端）

[Cherry Studio](https://cherry-ai.com) 是一款开源免费的桌面 AI 客户端，支持 Windows、macOS、Linux 三平台，适合日常对话、写作、翻译等场景。

### 配置步骤

1. 下载并安装 Cherry Studio
2. 打开 Cherry Studio，点击右上角「设置」图标
3. 进入「模型服务」设置页面
4. 在左侧服务商列表底部，点击「添加」按钮添加自定义服务商
5. 填写配置信息：
   - **服务商名称**：填一个你好识别的名字，如「小K的AI小站」
   - **服务商类型**：根据你要使用的模型分组选择对应类型：
     - **Codex 分组**（GPT 系列模型）→ 选择 `OpenAI Response`
     - **Claude 分组**（Claude 系列模型）→ 选择 `Anthropic`
     - **Gemini 分组**（Gemini 系列模型）→ 选择 `Google Gemini`
6. 配置 API 地址（最关键的一步）：
   - **API 地址** 填写：`https://api.kkkk24juastin.asia`
   - 只填根地址，Cherry Studio 会自动拼接对应路径
7. 在 **API Key** 输入框中粘贴你的 Key（`sk-` 开头）
8. 点击「管理」或「添加」按钮，添加你想使用的模型
9. 打开右上角的服务商启用开关

::: tip 多分组使用
如果你需要同时使用不同分组的模型（如 GPT 和 Claude），可以添加多个服务商，每个服务商选择对应的类型，API Key 填同一个即可。
:::

::: tip 验证连接
配置完成后，点击 API Key 旁边的「Check」按钮测试连通性。如果提示连接成功，说明配置正确。
:::

---

## Claude Code（编程 Agent）

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) 是 Anthropic 官方的命令行 AI 编程助手，适合代码编写、项目理解、自动化任务等场景。本站原生支持 Claude API 格式，可直接配置使用。

### 方式一：环境变量配置

在终端中设置以下环境变量：

```bash
export ANTHROPIC_BASE_URL=https://api.kkkk24juastin.asia
export ANTHROPIC_AUTH_TOKEN=sk-你的API密钥
```

或者将配置持久化到 `~/.claude/settings.json` 文件中：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.kkkk24juastin.asia",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的API密钥"
  }
}
```

配置完成后，在终端中运行 `claude` 即可使用。

### 方式二：使用 CC-Switch 一键配置（推荐）

详见下方 [CC-Switch 使用教程](#cc-switch-一键配置工具)。

---

## Codex（编程 Agent）

[Codex](https://github.com/openai/codex) 是 OpenAI 官方的命令行编程 Agent，支持代码生成、调试、重构等任务。

### 方式一：环境变量配置（快速上手）

```bash
export OPENAI_API_KEY=sk-你的API密钥
export OPENAI_BASE_URL=https://api.kkkk24juastin.asia/v1
codex
```

### 方式二：config.toml 配置（推荐）

编辑 `~/.codex/config.toml`，添加自定义 Provider：

```toml
model = "gpt-4o"
model_provider = "kai"

[model_providers.kai]
name = "小K的AI小站"
base_url = "https://api.kkkk24juastin.asia/v1"
env_key = "OPENAI_API_KEY"
```

然后设置环境变量并启动：

```bash
export OPENAI_API_KEY=sk-你的API密钥
codex
```

### 多 Provider 切换

可以注册多个 Provider，通过命令行临时切换：

```toml
model_provider = "kai"   # 默认使用

[model_providers.kai]
name = "小K的AI小站"
base_url = "https://api.kkkk24juastin.asia/v1"
env_key = "OPENAI_API_KEY"

[model_providers.openai]
name = "OpenAI 官方"
base_url = "https://api.openai.com/v1"
env_key = "OPENAI_API_KEY"
```

```bash
# 使用默认 Provider
codex "写一个快排"

# 临时切换到 OpenAI 官方
codex --provider openai "写一个快排"
```

### 方式三：使用 CC-Switch 一键配置（推荐）

详见下方 [CC-Switch 使用教程](#cc-switch-一键配置工具)。

---

## Gemini CLI（编程 Agent）

[Gemini CLI](https://github.com/google-gemini/gemini-cli) 是 Google 官方的命令行 AI 工具，支持代码生成、文件操作、Shell 命令执行等。

### 环境变量配置

```bash
export GEMINI_API_KEY=sk-你的API密钥
export GEMINI_API_BASE_URL=https://api.kkkk24juastin.asia
gemini
```

将配置持久化到 `~/.gemini/.env` 文件中：

```bash
GEMINI_API_KEY=sk-你的API密钥
GEMINI_API_BASE_URL=https://api.kkkk24juastin.asia
```

配置完成后，在终端中运行 `gemini` 即可使用。

### 方式二：使用 CC-Switch 一键配置（推荐）

详见下方 [CC-Switch 使用教程](#cc-switch-一键配置工具)。

---

## CC-Switch 一键配置工具

[CC-Switch](https://github.com/farion1231/cc-switch) 是一款开源的跨平台桌面应用，可以一键管理 Claude Code、Codex、Gemini CLI 等多个 Agent 工具的 API 配置，无需手动编辑配置文件。

### 安装

从 [GitHub Release](https://github.com/farion1231/cc-switch/releases) 页面下载对应平台的安装包：

- **Windows**：下载 `.exe` 安装包
- **macOS**：下载 `.dmg` 安装包，或使用 Homebrew：`brew install --cask cc-switch`
- **Linux**：下载 `.deb`、`.rpm` 或 `.AppImage`

### 配置步骤

**第一步：添加供应商**

1. 打开 CC-Switch，在顶部分组栏选择你要配置的工具（如 `Claude`、`Codex`、`Gemini`）
2. 点击右侧的 `+` 按钮
3. 选择「自定义供应商」或从预设列表中选择
4. 填写配置信息：
   - **供应商名称**：小K的AI小站
   - **API 请求地址**：`https://api.kkkk24juastin.asia`
   - **API Key**：`sk-你的API密钥`
5. 点击「添加」保存

**第二步：启用配置**

添加成功后，在主界面会看到刚才配置的项目，点击右侧的「启用」按钮，状态变为「使用中」即可。

**第三步：验证**

- **Claude Code**：重启终端后运行 `claude`，发送消息测试
- **Codex**：重启终端后运行 `codex`，发送消息测试
- **Gemini CLI**：运行 `gemini`，发送消息测试

### 进阶功能

- **用量追踪**：在模型列表点击「配置用量查询」，可实时查看 API 余额
- **速度测试**：点击供应商卡片上的测速按钮，自动测试 API 延迟
- **本地代理故障转移**：在「设置」→「路由服务」中开启，支持多供应商自动切换

---

## 其他支持 OpenAI API 的软件

由于本站兼容 OpenAI API 格式，任何支持自定义 OpenAI API 端点的软件都可以使用。配置时只需注意以下两点：

1. **API Base URL / 端点地址**：填 `https://api.kkkk24juastin.asia` 或 `https://api.kkkk24juastin.asia/v1`（根据软件要求）
2. **API Key**：填你的 `sk-` 开头的密钥

常见支持 OpenAI API 的软件包括：

| 软件 | 类型 | 说明 |
|------|------|------|
| **Cursor** | AI 代码编辑器 | 在设置中配置 OpenAI API 端点 |
| **Continue** | VS Code 插件 | 配置 `config.json` 中的 API 设置 |
| **Open WebUI** | 自部署聊天界面 | Docker 环境变量配置 |
| **Dify** | AI 应用平台 | 在模型供应商中添加 OpenAI 兼容接口 |
| **FastGPT** | AI 知识库平台 | 在模型配置中添加自定义接口 |
| **LangChain** | 开发框架 | 在代码中设置 `base_url` 参数 |
