---
title: Hexo-SE：将你的Hexo个人小站收录至搜索引擎的注意事项
date: 2017-01-03 19:30:15
tags:
- 教程
- Hexo
categories:
- 教程
- Hexo
---

完全正确可行的链接：

http://dotdotcloud.cn/2016/05/09/hexo%E5%8D%9A%E5%AE%A2%E8%A2%AB%E7%99%BE%E5%BA%A6-google%E6%94%B6%E5%BD%95%E7%9A%84%E6%96%B9%E6%B3%95/

最关键的地方在于这句话：我们的博客系统使用了hexo，部署在Github上，因此下载Google的验证文件之后，需要在文件开头添加layout: false来取消hexo对其进行的转换！！！

```
layout: false
---
google-site-verification: google6c91812b12cd004a.html
```

另外，还要在**站点配置文件**中添加以下几行代码：

```
# Sitemap Setting
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

注意，两个path前面**至少有一个**一定要加一个制表符！

# 注

如果在Google提交站点地图时出现：“This URL is not allowed for a Sitemap at this location”，出现这个错误的原因通常在于：”error usually means that you have an URL pointing to a different Domain from yours.“，也就是说你的URL指向不对！
那么你要修改一下hexo-client（即<span class="inline-span blue">站点配置文件</span>）下的_config.yml文件中的“url“这一项（大约在第15行）为你的域名（可能是github.io域名，也可能是你的cn、com域名等等，得看你自己用的是哪个）。
参考资料：https://answers.squarespace.com/questions/63470/this-url-is-not-allowed-for-a-sitemap-at-this-location-%E2%80%94-google-webmaster-tools.html