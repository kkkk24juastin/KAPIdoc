# 通用步骤


### CC-Switch介绍

### Claude Code / Codex 全方位辅助工具

[![Version](https://img.shields.io/badge/version-3.7.1-blue.svg)](https://github.com/farion1231/cc-switch/releases)

[![farion1231%2Fcc-switch | Trendshift](https://trendshift.io/api/badge/repositories/15372)](https://trendshift.io/repositories/15372)

[更新日志](https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md)

|

[下载地址](https://github.com/farion1231/cc-switch/releases/latest)

**从供应商切换器到 AI CLI 一体化管理平台**

**统一管理 Claude Code、Codex 等 CLI 的供应商配置、MCP 服务器、Skills 扩展和系统提示词。**

使用 CC-Switch，您可以：

- ✅ 一键切换 API 配置 - 在多个 API 提供商之间快速切换
- ✅ 可视化配置管理 - 通过图形界面轻松管理所有配置
- ✅ 支持自定义供应商 - 可手动配置 小K的AI站点 的接口地址和 API Key
- ✅ MCP 服务器管理 - 管理 Model Context Protocol 服务器
- ✅ 系统托盘快捷操作 - 通过托盘菜单快速切换

> **配置提示**
>
> CC-Switch 没有内置 小K的AI站点 模板。添加供应商时请选择 **自定义供应商**，并按后续教程填写接口地址和 API Key。

### 软件下载

#### Windows

1. 点击下载链接→[传送门](https://github.com/farion1231/cc-switch/releases/latest)←，进入 CC-Switch 的 GitHub Releases 页面
2. 鼠标滚动到页面底部，在 `Assets` 中选择适合自己系统的安装包。Windows 系统推荐下载普通 `.msi` 安装包

![](/assets/image/CC-Switch/guide/001.jpg)

![](/assets/image/CC-Switch/guide/002.jpg)

1. 安装后运行 CC-Switch 主程序，界面如下

![](/assets/image/CC-Switch/guide/003.jpg)

#### macOS

- macOS 安装推荐使用 Homebrew。
- 开启终端后，分别运行以下命令：

```bash
# 添加 tap 源
brew tap farion1231/ccswitch

# 安装 CC-Switch
brew install --cask cc-switch
```

- 安装完成后，在“启动台”或“应用程序”文件夹中找到 CC-Switch 并启动。

![](/assets/image/CC-Switch/guide/003.jpg)

#### Linux

> **重要**
>
> 以下命令中的文件名包含占位符版本号 x.x.x，请访问 [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) 页面查看最新版本，并替换为实际的版本号和完整文件名。

Debian/Ubuntu 系统：

```bash
# 下载 .deb 包
wget https://github.com/farion1231/cc-switch/releases/latest/download/cc-switch_x.x.x_amd64.deb

# 安装
sudo dpkg -i cc-switch_x.x.x_amd64.deb
```

### 环境检查

> **注意**
>
> **请你最好进行此步的环境检查步骤！！！**
>
> 点击右侧传送门查看
>
> [如何进行环境检查？](../cli/1-env.md)
