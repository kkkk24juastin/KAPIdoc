# 常见问题

## 余额充值不到账怎么办

如果兑换码充值后余额没有变化：

1. **检查兑换码是否正确**：确认没有多余空格，区分大小写
2. **检查兑换码是否已被使用**：每个兑换码只能使用一次
3. **刷新页面**：有时候页面缓存可能导致余额显示不及时
4. **查看消费记录**：在「账单」或「消费记录」中确认是否有充值记录
5. **联系客服**：如果以上方法都无法解决，请联系客服并提供你的兑换码和账号信息

## 提示额度不足怎么办

当 API 返回额度不足的错误时：

1. 登录使用站点查看当前余额
2. 如果余额为 0 或不足，前往 [购买地址](https://pay.ldxp.cn/shop/kkkk24) 购买新的兑换码
3. 使用兑换码充值后重试

::: tip 预防建议
定期检查余额，避免在使用过程中余额耗尽。你也可以为 API Key 设置额度限制，避免意外超支。
:::

## 提示模型不存在怎么办

如果 API 返回"模型不存在"或类似错误：

1. **检查模型名称是否正确**：模型名称区分大小写和连字符，确保完全匹配
2. **查看可用模型列表**：调用 `/v1/models` 接口确认该模型是否可用
3. **检查 Key 的模型限制**：确认你的 API Key 没有被限制只能使用特定模型

```bash
# 查看可用模型
curl https://api.kkkk24juastin.asia/v1/models \
  -H "Authorization: Bearer sk-你的API密钥"
```

## 请求失败怎么办

如果 API 请求失败，可以从以下几个方面排查：

### 1. 检查 API 地址

确认你填写的 API 地址正确：
- 正确：`https://api.kkkk24juastin.asia` 或 `https://api.kkkk24juastin.asia/v1`
- 错误：`http://api.kkkk24juastin.asia`（缺少 https）
- 错误：`https://api.kkkk24juastin.asia/v1/chat/completions`（不需要完整路径）

### 2. 检查 API Key

- 确认 Key 以 `sk-` 开头
- 确认 Key 没有多余的空格或换行符
- 确认 Key 没有被删除或禁用

### 3. 检查网络连接

- 确认你的网络可以正常访问 `api.kkkk24juastin.asia`
- 如果使用代理，确认代理设置正确
- 尝试在浏览器中直接访问 API 地址，看是否能正常响应

### 4. 检查余额

- 确认账号余额充足
- 确认 API Key 的额度限制没有用完

### 5. 查看错误信息

API 返回的错误信息通常包含具体原因：

| HTTP 状态码 | 含义 | 解决方法 |
|-------------|------|----------|
| `401` | 认证失败 | 检查 API Key 是否正确 |
| `403` | 无权限 | 检查 Key 的模型限制 |
| `429` | 请求过于频繁 | 降低请求频率，稍后重试 |
| `500` | 服务器错误 | 稍后重试，或联系客服 |

## base_url 应该填什么

这是最常被问到的问题之一。不同客户端对 API 地址的填写方式可能不同：

| 客户端 | base_url 填写 |
|--------|---------------|
| **通用** | `https://api.kkkk24juastin.asia` |
| **Cherry Studio** | `https://api.kkkk24juastin.asia`（只填根地址） |
| **Lobe Chat** | `https://api.kkkk24juastin.asia/v1`（需要 `/v1`） |
| **ChatBox** | API Host 填 `https://api.kkkk24juastin.asia` |
| **NextChat** | `https://api.kkkk24juastin.asia` |
| **Python SDK** | `https://api.kkkk24juastin.asia/v1` |
| **Claude Code** | `https://api.kkkk24juastin.asia` |

::: tip 简单判断规则
- 如果客户端会自动拼接 `/v1/chat/completions`，则只填根地址
- 如果客户端不自动拼接路径，则填 `https://api.kkkk24juastin.asia/v1`
- 如果不确定，两种都试试，哪个能用就用哪个
:::
