# OpenClaw


> **提示**
>
> **此教程适合Linux云服务器、MacOS系统用户**

## 安装与初始化

1. 登录服务器SSH，或在MacOS打开你的终端程序，输入以下命令开始安装，耐心等待安装流程结束。等出现以下界面提示后，选择 `yes` 选项回车确认

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

![](/assets/image/Advanced/OpenClaw/01.webp)

1. 之后我们选择 `QuickStart` 回车确认

![](/assets/image/Advanced/OpenClaw/02.webp)

1. 在选择供应商部分我们先选择 `Skip for now` 回车确认，跳过设置

![](/assets/image/Advanced/OpenClaw/03.webp)

1. 在适配器选择部分，选择 `anthropic`

![](/assets/image/Advanced/OpenClaw/04.webp)

1. 在模型选择部分，我们选择 `opus-4.5`

![](/assets/image/Advanced/OpenClaw/05.webp)

1. 这里选择社交软件适配器，看个人需要，我们测试选择 `Telegram`

![](/assets/image/Advanced/OpenClaw/06.webp)

1. 输入Bot Token，然后回车
2. 这里选择安装Skill，这个先跳过，后续可以通过网页进行安装

![](/assets/image/Advanced/OpenClaw/07.webp)

1. 这里选择Hook，使用空格键全选，然后回车确认，之后过程会有GateWay安装，请耐心等待

![](/assets/image/Advanced/OpenClaw/08.webp)

1. 打开方式这里，这里我们先选择跳过

![](/assets/image/Advanced/OpenClaw/09.webp)

1. 安装Shell补全脚本，这里选择 `yes` 回车确认，至此我们完成安装

![](/assets/image/Advanced/OpenClaw/10.webp)

## 渠道与模型配置

> **提示**
>
> 小K的AI站点专门为OpenClaw配置写了一个配置脚本，Github地址为：
>
> [openclaw-configurator](https://github.com/packyme/openclaw-configurator)
>
> ，通过此脚本，可以快速帮助我们配置小K的AI站点 API。
>
> 目前脚本还不支持配置Gemini渠道，正在施工中~~~

1. 在你的SSH控制台，或者MacOS终端输入以下命令安装配置器

```bash
curl -fsSL https://github.com/packyme/openclaw-configurator/releases/latest/download/index.js -o /tmp/openclaw-config.js && node /tmp/openclaw-config.js
```

1. 选择 `添加供应商`，然后选择 `小K的AI站点`

![](/assets/image/Advanced/OpenClaw/11.webp)

1. 这里以Opus为例，在获取的模型中选择 `Claude Opus 4.5`

![](/assets/image/Advanced/OpenClaw/12.webp)

1. 输入 [创建API令牌](../register/4-token.md) 一节中你创建的相关分组的令牌，复制后填入

> **提示**
>
> **目前推荐在OpenClaw使用的分组：**
>
> - **GPT：** [codex](../token/2-group.md) 分组
> - **Claude：** [ClaudeCode-AWSQ](../token/2-group.md)、[claude code](../token/2-group.md) 或 [claudecode-反重力](../token/2-group.md) 分组
> - **Gemini：** [gemini](../token/2-group.md) 分组
>
> **请您创建正确分组的APIKEY后填入**

![](/assets/image/Advanced/OpenClaw/13.webp)

1. 选择 `选择模型`，然后选中我们刚才配置的模型，回车确认

![](/assets/image/Advanced/OpenClaw/14.webp)

1. 选择 `退出`，回到我们的控制台
2. 在控制台输入以下命令，重启GateWay

```bash
openclaw gateway restart
```

![](/assets/image/Advanced/OpenClaw/15.webp)

1. 重启成功后，控制台输入以下命令，进入TUI界面，测试模型是否能正常输出。测试正常则输入 `/quit` 退出TUI界面

```bash
openclaw tui
```

![](/assets/image/Advanced/OpenClaw/16.webp)

## 浏览器访问

1. 在控制台输入以下命令，获取 `Dashboard URL`，在浏览器进行访问

> **提示**
>
> **如何你是在服务器运行，请使用nginx或其他反向代理工具来反代服务，并设置SSL证书**
>
> 另外需要修改
>
> `~/.openclaw`
>
> 下的
>
> `openclaw.json`
>
> 文件，在
>
> `gateway`
>
> 字段下添加以下内容
>
> ```json
> "controlUi":{
>     "allowInsecureAuth":true
> }
> ```
>
> ![](/assets/image/Advanced/OpenClaw/17.webp)
>
> 修改完毕后回到控制台输入以下命令重启网关
>
> ```bash
> openclaw gateway restart
> ```

1. 访问带有Token的 `Dashboard URL` 链接，进入后台界面

![](/assets/image/Advanced/OpenClaw/18.webp)

## 配置Telegram Bot访问权限

1. 回到之前创建机器人的 @BotFather 的对话中，点击我们的机器人链接，进行对话
2. 首次对话拿到我们所需的 `Pairing code`

![](/assets/image/Advanced/OpenClaw/19.webp)

1. 在控制台输入以下命令允许您跟Bot进行互动

```bash
openclaw pairing approve telegram 你的Pairing code
```

![](/assets/image/Advanced/OpenClaw/20.webp)
