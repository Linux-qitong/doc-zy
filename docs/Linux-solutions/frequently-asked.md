# 高频问题
:::tip 说明
本文提供的解决方案有些是对应问题的一种处理方案，并非唯一，仅供参考。
可使用大纲在此页上查找问题。
:::
### 论坛发帖提问须知
[前往阅读](/Linux-solutions/how-to-question)。

## 使用系统的问题
### 终端提示输入密码，输入时没有反应
输入密码时屏幕无回显，直接输入完按回车即可。

### Windows 系统盘里的文件带有小锁图标，变成只读无法修改
进入 Windows ，打开控制面板（Windows 11 请通过“Windows 工具”打开），进入“硬件和声音”>“电源选项”>“选择电源按钮的功能”，点击第3行“更改当前不可用的设置”（需要管理员），找到“关机设置”下的“启用快速启动”并取消勾选，点击“保存修改”。或者，每次先进入 Windows，再**重启**进入 Linux。

### 电脑安装多系统， Linux 的时间比 Windows 的晚 8 个小时
Windows 把电脑的硬件时间（RTC）看成是本地时间（本地时间 = RTC），Linux 则是把电脑的硬件时间看成 UTC 时间（本地时间 = RTC+8 = UTC+8）。
解决方法有让 Windows 使用 UTC 或让 Linux 按照 Windows 的方式管理时间。具体见[这里](/Linux-solutions/collect.html#linux-%E5%92%8C-windows-%E6%97%B6%E9%97%B4%E4%B8%8D%E5%90%8C%E6%AD%A5)。

如出现快16个小时的情况，可能还需要调整时区为上海时区并调整时间偏移值。可以参考ArchWiki的[这篇文章](https://wiki.archlinuxcn.org/wiki/%E7%B3%BB%E7%BB%9F%E6%97%B6%E9%97%B4)

### 开启无密码登录和自动登录后，进入桌面提示“您的登录密钥环未被解锁”
终端执行：
```sh
sudo rm -f ~/.local/share/keyrings/login.keyring
```

### 控制中心更新失败自查原因
终端执行
```sh
sudo apt update && sudo apt full-upgrade
```

### 编辑右键菜单“新建文档”中的内容
修改 `~/.Templates/` 和 `/usr/share/templates/` 中的文件。

### 窗口特效无法开启
一个可能的原因是安装了华宇输入法。如果符合此情况，请改为安装其他输入法。

### 声卡没有声音的一个可能有用的解决方法(主要适用于 Intel 12/13代处理器的设备，对麦克风不起作用)
编辑 `/etc/default/grub` ， 在 `GRUB_CMDLINE_LINUX_DEFAULT` 这一行添加 `snd_hda_intel.dmic_detect=0` 。若在 Ubuntu 下声卡正常工作，可从 Ubuntu 的 `/lib/firmware/intel` 文件夹提取驱动，替换掉 deepin 下对应文件夹。 [原帖](https://bbs.deepin.org/post/248032)

### 浏览器的网页翻译不可用
网页翻译使用的是 Google 翻译，可自行安装翻译扩展来替代。

### deepin arm64或loong64版本无应用商店
由于arm和loongarch生态建设现在还较为欠缺，可供上架应用较少，所以暂时未提供应用商店

可以使用[星火应用商店](https://gitee.com/spark-store-project/spark-store/releases/)替代，龙芯用户还可以在安装liblol后安装[龙芯应用合作社](http://app.loongapps.cn/detail/222)。

## 第三方软件使用
### WPS Office 字体显示异常
安装[星火商店](https://www.spark-app.store)后从中获取“Win字体”软件包。或参见： [WPS页面显示问题](https://wiki.deepin.org/zh/WPS页面显示问题)。

### WPS office 无法打开 PDF 文件
终端执行：
```sh
sudo ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.6 /usr/lib/x86_64-linux-gnu/libtiff.so.5
```

### Firefox 显示过大 UI
打开`about:config`页面，选择我知道风险，把`browser.display.os-zoom-behavior`修改为 0。

[参考资料](https://blog.shenmo.tech/post/%E4%BF%AE%E5%A4%8D%E7%81%AB%E7%8B%90103%E7%89%88%E6%9C%AC%E5%B7%A8%E5%A4%A7%E8%BF%87%E5%A4%A7ui%E9%97%AE%E9%A2%98/)

### 删除文件管理器“磁盘”中的百度网盘快捷方式
删除`/usr/share/dde-file-manager/extensions/appEntry`目录下的 .desktop 文件。

### VSCode 使用原生标题栏
在设置中找到`Window: Title Bar Style`这一项，选择`custom`。

### Windows 应用启动无反应
删除主目录中`.deepinwine`文件夹中的对应应用的文件夹（应用数据可能会被删除，微信、QQ聊天记录与文件不受影响），然后再次尝试启动该应用。

`.deepinwine`文件夹为隐藏项目，在文件管理器中按 Ctrl+H 可显示隐藏文件。以微信为例，删除`~/.deepinwine/Deepin-WeChat/`。

### Windows 应用内提示更新，点击更新后无反应
此为正常现象，请从对应维护者那里获取推送更新。若自行更新，请手动下载最新版安装程序后在对应的目录中运行。

## 软件安装

### 解决 UEngine 禁止安装来源不明的应用
终端执行以下命令：
```sh
/usr/bin/uengine launch.sh --package=org.anbox.appmgr --component=org.anbox.appmgr.AppViewActivity
```
或者安装并打开 UEngine 运行器，点击“打开 UEngine 应用列表”。

在面板中打开设置，进入“安全”，开启“未知来源（允许安装来自未知来源的应用）”，点击“确认”。

参考资料：[http://uengine-runner.gfdgdxi.top](http://uengine-runner.gfdgdxi.top)

## 值得了解的事情
- `sudo apt autoremove` 确认执行前一定要认真审阅将会移除的软件包列表，确定其中不含有系统组件，再进下一步操作，**务必不要随意执行**。
