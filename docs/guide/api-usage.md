# API 调用方式

本站同时支持 **OpenAI**、**Anthropic Claude**、**Google Gemini** 三种 API 格式，你可以根据使用的客户端或开发框架选择对应的格式。

## API Base 地址

| API 格式 | Base URL |
|----------|----------|
| **OpenAI 兼容** | `https://api.kkkk24juastin.asia/v1` |
| **Anthropic Claude** | `https://api.kkkk24juastin.asia` |
| **Google Gemini** | `https://api.kkkk24juastin.asia` |

::: tip 关于 /v1 后缀
OpenAI 格式的客户端通常需要 `/v1` 路径。部分客户端会自动拼接，只需填写根地址即可。具体请参考 [常用客户端配置](/guide/clients) 中各客户端的说明。
:::

## API Key 填写方式

在客户端或代码中，将你创建的 API Key（`sk-` 开头的字符串）填入对应的位置即可。三种 API 格式使用同一个 Key。

---

## OpenAI 兼容调用示例

本站 API 完全兼容 OpenAI Chat Completions 接口：

```
POST https://api.kkkk24juastin.asia/v1/chat/completions
```

请求头：
```
Authorization: Bearer sk-你的API密钥
Content-Type: application/json
```

请求体：
```json
{
  "model": "gpt-4o",
  "messages": [
    { "role": "system", "content": "你是一个有帮助的助手。" },
    { "role": "user", "content": "你好，请介绍一下你自己。" }
  ],
  "stream": false
}
```

## Python 示例

使用 OpenAI 官方 Python SDK：

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-你的API密钥",
    base_url="https://api.kkkk24juastin.asia/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手。"},
        {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
)

print(response.choices[0].message.content)
```

流式输出示例：

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-你的API密钥",
    base_url="https://api.kkkk24juastin.asia/v1"
)

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "写一首关于春天的诗"}
    ],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

## curl 示例

```bash
curl https://api.kkkk24juastin.asia/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的API密钥" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个有帮助的助手。"},
      {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
  }'
```

## 获取模型列表

你可以通过以下接口查看当前可用的模型：

```bash
curl https://api.kkkk24juastin.asia/v1/models \
  -H "Authorization: Bearer sk-你的API密钥"
```

---

## Anthropic Claude 调用示例

本站原生支持 Claude API 格式（`/v1/messages`），可直接用于 Claude Code 等原生客户端。

### curl 示例

```bash
curl https://api.kkkk24juastin.asia/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: sk-你的API密钥" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
  }'
```

### Python 示例

```python
import anthropic

client = anthropic.Anthropic(
    api_key="sk-你的API密钥",
    base_url="https://api.kkkk24juastin.asia"
)

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
)

print(message.content[0].text)
```

---

## Google Gemini 调用示例

本站支持 Gemini API 格式。

### curl 示例

```bash
curl "https://api.kkkk24juastin.asia/v1beta/models/gemini-2.0-flash:generateContent?key=sk-你的API密钥" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {"parts": [{"text": "你好，请介绍一下你自己。"}]}
    ]
  }'
```

### Python 示例

```python
import google.generativeai as genai

genai.configure(
    api_key="sk-你的API密钥",
    client_options={"api_endpoint": "https://api.kkkk24juastin.asia"}
)

model = genai.GenerativeModel("gemini-2.0-flash")
response = model.generate_content("你好，请介绍一下你自己。")

print(response.text)
```
