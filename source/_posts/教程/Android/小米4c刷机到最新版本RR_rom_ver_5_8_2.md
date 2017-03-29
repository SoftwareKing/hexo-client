---
title: 小米4c刷机到最新版本RR_rom_ver_5_8_2
date: 2017-03-18 21:49:52
tags:
- 教程
- Android
categories:
- 教程
- Android
---

# 缘

今天为了把我的小米4c升级到最新的RR Rom（5.8.2版本）（全称为Resurrection Remix ROM），折腾了一天，最后无奈在谷歌中直接输入关键词：“libra rr rom 5.8.2”，居然答案就在第一条，无语……

最终是成功了，解决问题的方法很简单，但是由于解决方案只有英文的版本，国内很少人去看，现在我把解决方案写在这篇文章里。

一切问题的答案来自这两篇论坛文稿：

* 链接1：https://forum.xda-developers.com/showpost.php?p=71114622&postcount=1196
* 链接2：https://forum.xda-developers.com/mi-4c/development/official-resurrection-remix-libra-aqua-t3507773

<!--more-->

# 1. 准备原材料

1. 首先，链接1给出的是一个很重要的注意事项，**在安装RR Rom 5.8.2之后的任何一个版本前，必需先安装一个新版的firmware！！！**这个新版本的firmware作者给出了简化版，下载安装即可：[新版firmware](https://www.androidfilehost.com/?fid=457095661767138866) 
2. 其次，你可能需要谷歌服务，那么你还要去下载对应的Gapps，具体安装方法在这里：[使用rec安装谷歌服务框架的正确方法](https://wanzhiyu.github.io/2017/02/06/%E6%95%99%E7%A8%8B/Android/%E4%BD%BF%E7%94%A8rec%E5%AE%89%E8%A3%85%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%96%B9%E6%B3%95/)
3. 最后，也是**最重要的，一个合适的第三方recovery！**这个找的如果不对，将无法成功刷入rec！！！我就是这个没选对，害得我忙活了一天！！！下载地址在这里：[此处适用的第三方rec：TWRP3.0.2](https://www.androidfilehost.com/?fid=529152257862704733)

# 2. 安装步骤

1. Unlock bootloader ，确保已经解锁手机
2. Install **上文刚下载的TWRP**（[安装方法](http://www.cyucn.com/post/2/)），进入rec
3. 刷入上文下载的**新版的firmware**
4. 刷入**Rom**（下载地址在[这里](https://sourceforge.net/projects/resurrectionremix/files/libra/)） and **Gapps**（见上文） to storage
5. Reboot

# 3. 后续

* 如果发现wifi图标有叉叉，网上一堆解决方案，不赘述。但是adb shell可能即使**已经启用了adb调试**但是依然没用无法成功，这时候启动刷机精灵，使用刷机精灵的adb工具即可成功。