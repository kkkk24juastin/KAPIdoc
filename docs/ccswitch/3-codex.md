# Codex配置


1. 打开已安装的 CC Switch，你会看到如下图所示的初始界面

![](/assets/image/CC-Switch/guide/003.jpg)

1. 在顶部应用切换栏中选择 **Codex**

![](/assets/image/CC-Switch/guide/012.jpg)

1. 点击右上角 `+`，选择 **自定义供应商**。CC-Switch 的预设列表中没有 小K的AI站点

1. 回顾 [创建 API 令牌](../register/4-token.md)，在 小K的AI站点 中创建 **Codex** 分组的令牌，然后复制 API Key

![](/assets/image/CC-Switch/guide/014.jpg)

1. 填写自定义供应商配置：
   - **供应商名称**：`小K的AI站点`
   - **官网链接**：`https://api.kkkk24juastin.asia`
   - **API 请求地址**：`https://api.kkkk24juastin.asia/v1`
   - **API Key**：填入刚才复制的 API Key
   - **默认模型**：填写 Codex 分组当前支持的模型 ID
1. 点击右下角 **添加**

1. 添加成功后，回到主界面找到刚配置的 小K的AI站点，点击右侧 **启用**；显示 **使用中** 即表示切换成功

1. 在终端运行 `codex`，看到对话界面并能正常回复，即表示配置完成

![](/assets/image/CC-Switch/guide/017.jpg)

如需在 小K的AI站点 供应商卡片中显示已用额度和剩余额度，请继续查看 [用量查询配置](4-usage-query.md)。

## 更多 Codex 接入

- [ChatGPT 接入](6-codex-app.md)
- [DS接入Codex](../advanced/DeepSeekCodex.md)
