# Claude Code配置


1. 打开已安装的 CC Switch，你会看到如下图所示的初始界面

![](/assets/image/CC-Switch/guide/003.jpg)

1. 在顶部应用切换栏中选择 **Claude Code**

![](/assets/image/CC-Switch/guide/004.jpg)

![](/assets/image/CC-Switch/guide/005.jpg)

1. 点击右上角 `+`，选择 **自定义供应商**。CC-Switch 的预设列表中没有 小K的AI站点

1. 回顾 [创建 API 令牌](../register/4-token.md)，在 小K的AI站点 中创建 **claude code** 分组的令牌，然后复制 API Key

![](/assets/image/CC-Switch/guide/007.jpg)

1. 填写自定义供应商配置：
   - **供应商名称**：`小K的AI站点`
   - **官网链接**：`https://api.kkkk24juastin.asia`
   - **请求地址**：`https://api.kkkk24juastin.asia`
   - **API Key**：填入刚才复制的 API Key
   - **API 格式**：`Anthropic Messages（原生）`
1. 点击右下角 **添加**

1. 添加成功后，回到主界面找到刚配置的 小K的AI站点，点击右侧 **启用**；显示 **使用中** 即表示切换成功

1. 点击左上角 **设置**，在通用页面找到 `跳过 Claude Code 初次安装确认`，务必开启

![](/assets/image/CC-Switch/guide/010.jpg)

1. 在终端运行 `claude`，看到对话界面并能正常回复，即表示配置完成

![](/assets/image/CC-Switch/guide/011.jpg)

> **使用提醒**
>
> 如果你使用的是 [claude code 分组](../token/2-group.md)，请注意该分组 **不支持第三方接入**，因此无法在 CC Switch 中完成完整的调用测试。
>
> 这类配置是否生效，请直接以 Claude Code 内的实际对话结果为准，并在 Claude Code 中完成最终测试。
