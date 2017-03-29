---
title: Hexo-插件：如何在Hexo上加载网易云插件
date: 2017-01-03 18:42:05
tags:
- 教程
- Hexo
categories:
- 教程
- Hexo
---

# 第一种代码格式

1. 首先**打开浏览器**在网易云音乐**官网上**（**不是**播放器！）搜索你想要生成外链播放器的歌曲，比如，我搜索的是《千百度》这首歌，**仍旧是在浏览器中**打开播放界面，点击“生成外链播放器”，只要歌曲版权支持，就都能生成外链的。

2. 在你的md文件中插入它给出的html代码（建议使用iframe）

   ```
   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=167732&auto=0&height=66"></iframe>
   ```
   其中auto=0表示不自动播放，auto=1表示自动播放

   src前面和src后面的height值不一样大，并且你一定要保证前一个height要比后一个height大20！否则显示不全！！

3. 然后直接hexo g -d上传部署，效果如下：

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=167732&auto=0&height=66"></iframe>

# 另一种代码格式，效果就是看起来更大一些

1. 代码如下：

   <!--more-->

   ```
   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=110 src="https://music.163.com/outchain/player?type=2&id=167732&auto=0&height=90"></iframe>
   ```
   其中auto=0表示不自动播放，auto=1表示自动播放

   src前面和src后面的height值不一样大，并且你一定要保证前一个height要比后一个height大20！否则显示不全！！

2. 效果如下：

   <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=110 src="https://music.163.com/outchain/player?type=2&id=167732&auto=0&height=90"></iframe>