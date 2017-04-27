---
title: Hexo-Next主题安装来必力社会化评论插件
date: 2017-02-10 20:51:29
tags:
- 教程
- Hexo
categories:
- 教程
- Hexo
---

把官网上的代码复制下来，粘贴到hexo-client\themes\next\layout\_partials\comments.swig文件中的最后一个end if前面即可。

官网链接在这里：

<p><style type="text/css">.next-documentations-reload-help-button{<br>      ;padding: 0 20px;<br>      ;border: 2px solid #555;<br>      ;text-decoration: none;<br>      ;display: inline-block;<br>      ;overflow: hidden;<br>      ;color: #555;<br>      ;font-size: 14px;<br>      ;background: #fff;<br>      ;border-radius: 2px;<br>      ;transition: all 0.3s ease;<br>    }<br>    {}.next-documentations-reload-help-button:hover {<br>      ;color: white;<br>      ;background-color: black;<br>      ;border-color: black;<br>    }<br>    {}.next-documentations-reload-help-button i {margin-right: 5px;}<br></style></p>

<p class="text-center"><a href="https://livere.com/" class="next-documentations-reload-help-button" target="_blank" rel="external"><i class="fa fa-globe"></i> 访问 Livere(来必力) 官网</a></p>

---

2017-04-20 更新：

其实在next主题中已经集成了这个评论插件，只要在config文件中输入你的来必力id即可。

后来发现这个评论系统有个奇葩的地方，就是用ie/edge内核的浏览器似乎没法看到chrome的评论，反之亦然，不懂为啥。。。
