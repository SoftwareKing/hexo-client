---
title: 使用rec安装谷歌服务框架的正确方法
date: 2017-02-06 19:13:06
tags:
- 教程
- Android
categories:
- 教程
- Android
---

# 1. 安装一个第三方Recovery（rec）

我安装的是TWRP，在[TWRP的设备选择界面](https://twrp.me/Devices/)找到自己的设备型号，下载相应的rec，进入fastboot使用工具刷入即可，在此就不详述了，比如小米4c的刷入方法在这里：https://alair.cn/logs/Mi4C-Unlock-and-TWRP-Recovery.html

<!--more-->

# 2. 选择合适的GApps包（包含谷歌服务框架）

有了刷入工具，我们接下来要面对的就是 GApps 的版本选择问题。网络上常见的 GApps 主要有 PA GApps （已停更，版本稍旧）、Kang GApps 、OpenGApps 、tk GApps 以及 bank GApps 等等，以 [Open GApps ](http://opengapps.org/)为例，该网站提供的 GApps 主要包含以下几个版本：

- **stock **：最为贴近 Nexus 机型体验的 GApps 版本，包含了 Nexus 机型所预装的所有 Google 服务和 Google 应用。需要注意的是，这个版本会用 Chrome 、 Google Now Launcher 、 Google Keybord 等 Google 应用替换掉 CM 系 ROM 中那些基于 AOSP 代码的相关应用。
- **full** ：与 stock 版所包含的内容相同，但不会替换 AOSP 应用。
- **mini** ：包含了完整的 Google 服务框架和主流 Google 应用，去掉了 Google Docs 等文档处理应用
- **micro **：包含了完整的 Google 服务框架和少数 Google 应用，如 Gmail 、 Google Calender 、 Google Now Launcher 。
- **nano** ：包含完整的 Google 服务框架但不包含多余的 Google 应用。
- **pico**：包含了最基础的 Google 服务框架，体积最小，一些依赖完整 Google 框架的应用（如 Google Camera ）将无法运行。

**Platform得看你的cpu来选择，见手机的“关于”界面一般都有。**

![](http://oj9456ckj.bkt.clouddn.com/image/UseRec_GApps/%E9%80%89%E6%8B%A9%E5%90%88%E9%80%82%E7%9A%84%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E5%8C%85.png)

值得一提的是，[ Open GApps ](http://opengapps.org/)最近还放了一种叫做 **aroma** 的版本，该版本具备图形化安装界面，在刷入过程中可自行选择需要安装的 GApps 组件（*反正我是什么都没选，就只是默认安装了最基础的一组谷歌服务包*），十分好用。

# 3. 使用第三方Recovery安装 GApps 

1. 将 GApps 压缩包放在手机内置储存或是 SD 卡的根目录，**无需解压**。
2. 关机，进入第三方 Recovery （进入 Recovery 的方式因机型而异）。
3. 进入第三方 Recovery 后，选择「 install zip 」安装 zip 压缩包，然后选择「 choose zip from /sdcard 」找到刚才放入根目录的 GApps 压缩包选择安装即可。
4. 需要注意的是，安装 GApps 的过程**全程不需要清除数据或是恢复出厂的步骤**，因而刷入 GApps 之后系统中原有数据也不会受到影响。

# 参考来源：

| 标题                  | 链接                     |
| ------------------- | ---------------------- |
| 好马配好鞍，安装谷歌服务框架的正确姿势 | http://sspai.com/30499 |