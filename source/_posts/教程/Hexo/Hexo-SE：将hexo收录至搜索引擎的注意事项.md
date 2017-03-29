---
title: Hexo-SE：将hexo收录至搜索引擎的注意事项
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

