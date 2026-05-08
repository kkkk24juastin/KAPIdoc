# 常用客户端配置

本站同时支持 OpenAI、Claude、Gemini 三种 API 格式，适配各类主流客户端。以下是各客户端的配置方法。

## Cherry Studio

[Cherry Studio](https://cherry-ai.com) 是一款开源免费的桌面 AI 客户端，支持 Windows、macOS、Linux 三平台。

### 配置步骤

1. 下载并安装 Cherry Studio
2. 打开 Cherry Studio，点击右上角「设置」图标
3. 进入「模型服务」设置页面
4. 在左侧服务商列表底部，点击「添加」按钮添加自定义服务商
5. 填写配置信息：
   - **服务商名称**：填一个你好识别的名字，如「小K的AI小站」
   - **服务商类型**：选择 `OpenAI`
6. 配置 API 地址（最关键的一步）：
   - **API 地址** 填写：`https://api.kkkk24juastin.asia`
   - 只填根地址，Cherry Studio 会自动拼接 `/v1/chat/completions`
7. 在 **API Key** 输入框中粘贴你的 Key（`sk-` 开头）
8. 点击「管理」或「添加」按钮，添加你想使用的模型
9. 打开右上角的服务商启用开关

::: tip 验证连接
配置完成后，点击 API Key 旁边的「Check」按钮测试连通性。如果提示连接成功，说明配置正确。
:::

---

## Lobe Chat

[LobeChat](https://lobechat.com) 是一个开源的聊天 UI 框架，支持 Web 和桌面两种形式。

### 方式一：网页端手动配置

1. 打开 LobeChat，点击左下角齿轮图标 → 「语言模型」
2. 选择 `OpenAI` 服务商
3. 填写配置：
   - **API Key**：粘贴你的 Key（`sk-` 开头）
   - **API 代理地址**：`https://api.kkkk24juastin.asia/v1`
   - 开启「使用自定义 API 代理地址」
4. 在「自定义模型名称」中添加你需要的模型 ID
5. 保存后即可在对话中选择模型使用

### 方式二：Docker 自部署

如果你通过 Docker 部署 LobeChat，可以在 `docker-compose.yml` 中配置环境变量：

```yaml
version: '3.8'
services:
  lobe-chat:
    image: lobehub/lobe-chat:latest
    ports:
      - "3210:3210"
    environment:
      - OPENAI_API_KEY=sk-你的API密钥
      - OPENAI_PROXY_URL=https://api.kkkk24juastin.asia/v1
      - OPENAI_MODEL_LIST=gpt-4o,gpt-4o-mini,claude-sonnet-4-20250514,deepseek-chat
    restart: unless-stopped
```

::: warning 注意
`OPENAI_PROXY_URL` 末尾不要加斜杠 `/`，否则会导致请求路径错误（如 `/v1//chat/completions`）。
:::

---

## ChatBox

[ChatBox](https://chatboxai.app) 是一款全平台 AI 客户端，支持 Windows、macOS、Linux、iOS 和 Android。

### 配置步骤

1. 下载并安装 ChatBox
2. 打开 ChatBox，点击左下角「设置」图标（齿轮图标）
3. 进入「模型」或「API Provider」设置
4. 点击「添加 Provider」或底部的「添加」按钮
5. 选择「OpenAI API 兼容」或「Custom」类型
6. 填写配置信息：

| 配置项 | 填写内容 |
|--------|----------|
| API 提供方名称 | 小K的AI小站 |
| API Host | `https://api.kkkk24juastin.asia` |
| API Key | `sk-你的API密钥` |
| API 路径 | 保持默认 `/v1/chat/completions` |

7. 添加模型：点击「添加模型」，输入模型名称（如 `gpt-4o`）
8. 保存后点击「检查」按钮验证连接
9. 返回首页，创建新对话即可使用

---

## NextChat

[NextChat](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)（原 ChatGPT-Next-Web）是一个轻量级的 ChatGPT 网页客户端。

### 方式一：网页端手动配置

1. 打开 NextChat 页面，点击左下角「设置」
2. 在「接口地址」中填入：`https://api.kkkk24juastin.asia`
3. 在「API Key」中填入你的 Key（`sk-` 开头）
4. 保存设置即可使用

### 方式二：Docker 自部署

通过环境变量配置：

```yaml
version: '3.8'
services:
  nextchat:
    image: yidadaa/chatgpt-next-web
    ports:
      - "3000:3000"
    environment:
      - OPENAI_API_KEY=sk-你的API密钥
      - BASE_URL=https://api.kkkk24juastin.asia
    restart: unless-stopped
```

---

## Claude Code

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) 是 Anthropic 官方的命令行 AI 编程助手。本站原生支持 Claude API 格式，可直接配置使用。

### 配置方式

Claude Code 通过环境变量配置自定义 API 端点。在终端中设置以下环境变量：

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
