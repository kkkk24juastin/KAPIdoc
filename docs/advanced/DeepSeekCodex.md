# DS接入Codex


本教程用于通过 CC Switch 将 小K的AI站点 的 `deepseek` 分组接入 Codex CLI 和 ChatGPT。

> **兼容性提醒**
>
> Codex 原生面向 OpenAI 模型。接入 DeepSeek 后可能出现模型元数据缺失等提示，部分能力或性能可能受到影响。请以实际对话结果和 小K的AI站点 当前支持的模型为准。

## 创建并启用供应商

1. 打开 CC Switch，在顶部应用切换栏中选择 **Codex**。


1. 点击右上角 `+`，选择 **自定义供应商**。Codex 预设列表中没有 小K的AI站点。


1. 回顾 [创建 API 令牌](../register/4-token.md)，在 小K的AI站点 中创建 `deepseek` 分组的令牌，然后复制 API Key。

![](/assets/image/CC-Switch/guide/030.jpg)

1. 在 小K的AI站点 供应商配置中填写以下内容：
  - **官网链接**：`https://api.kkkk24juastin.asia`
  - **API Key**：刚才创建的 `deepseek` 分组 API Key
  - **API 请求地址**：`https://api.kkkk24juastin.asia/v1`
  - **默认模型**：`deepseek-v4-flash`


1. 点击右下角 **添加**，返回供应商列表后启用新建的 小K的AI站点 供应商。


1. 完全退出并重新打开正在运行的 Codex CLI 或 ChatGPT，使新的供应商配置生效。

## 验证配置

在终端运行 `codex` 并发送一条测试消息。界面顶部显示 `deepseek-v4-flash` 且能够正常回复，即表示 Codex CLI 已经接入成功。

![](/assets/image/CC-Switch/guide/033.jpg)

如果使用 ChatGPT，同样发送一条测试消息；能够正常回复即表示应用侧配置生效。
