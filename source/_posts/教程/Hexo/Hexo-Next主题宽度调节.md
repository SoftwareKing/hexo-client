---
title: Hexo-Next主题宽度调节
date: 2017-01-20 20:11:27
categories:
- 教程
- Hexo
tags:
- 教程
- Hexo
---

有两种方法，第二种我没成功，只看第一种吧。

# 第一种方法：

现在一般都用宽屏显示器，博客页面两侧留白太多，调整一下宽度。
打开 `\themes\next\source\css\_common\components\post\post-expand.styl` 文件，找到

```css
@media (max-width: 767px)
```

改为

```css
@media (max-width: 1080px)
```

打开 `\themes\next\source\css\ _variables\base.styl` 文件，找到

```css
$main-desktop                   = 960px
$main-desktop-large             = 1200px
$content-desktop                = 700px
```

修改 `$main-desktop` 和 `$content-desktop` 的数值：

```css
$main-desktop                   = 1080px
$main-desktop-large             = 1200px
$content-desktop                = 810px
```

`Next.Mist` 主题的文章宽度至此改完了。如果你用的是 `Next.Pisces`，还需要继续修改。
打开 `\themes\next\source\css\_schemes\Pisces\_layout.styl` 文件，将第 `4` 行的 `width改为1080px` ，修改后如下：

```css
.header {
  position: relative;
  margin: 0 auto;
  width: 1080px;
```

<!--more-->

# 第二种方法（Next文档中给出的方法，但我试了下，没用）

编辑 `themes/next/source/css/_variables/custom.styl` 文件，新增变量：

```css
// 修改成你期望的宽度
$content-desktop = 700px

// 当视窗超过 1600px 后的宽度
$content-desktop-large = 900px
```

以上方法不适用 `Pisces` Scheme

`Pisces` Scheme 编辑 `themes/next/source/css/_schemes/Picses/_layout.styl` 文件，更改以下 `css` 选项定义值：

```css
.header{ width: 1150px; }
.container .main-inner { width: 1150px; }
.content-wrap { width: calc(100% - 260px); }
```



第一种方法转载自：<http://blog.ynxiu.com/2016/hexo-next-theme-optimize.html>