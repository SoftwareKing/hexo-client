---
title: Hexo-编辑：在日志中添加链接时显示点击按钮
date: 2017-02-15 10:17:27
tags:
- 教程
- Hexo
categories:
- 教程
- Hexo
---

源代码转自：http://notes.iissnan.com/2016/next-documentations-reload/ 最后的两个按钮，我把它们摘抄下来，下次可以自己改编使用，效果如下：

<p><style type="text/css">.next-documentations-reload-help-button{<br>      ;padding: 0 20px;<br>      ;border: 2px solid #555;<br>      ;text-decoration: none;<br>      ;display: inline-block;<br>      ;overflow: hidden;<br>      ;color: #555;<br>      ;font-size: 14px;<br>      ;background: #fff;<br>      ;border-radius: 2px;<br>      ;transition: all 0.3s ease;<br>    }<br>    {}.next-documentations-reload-help-button:hover {<br>      ;color: white;<br>      ;background-color: black;<br>      ;border-color: black;<br>    }<br>    {}.next-documentations-reload-help-button i {margin-right: 5px;}<br></style></p>

<p class="text-center"><a href="http://theme-next.iissnan.com/" class="next-documentations-reload-help-button" target="_blank" rel="external"><i class="fa fa-globe"></i> 访问 NexT 文档</a><a href="https://github.com/iissnan/theme-next-docs" class="next-documentations-reload-help-button" style="margin-left: 10px;" target="_blank" rel="external"><i class="fa fa-github-alt"></i> NexT 文档源码</a></p>

源代码如下：

```html
<p><style type="text/css">.next-documentations-reload-help-button{<br>      ;padding: 0 20px;<br>      ;border: 2px solid #555;<br>      ;text-decoration: none;<br>      ;display: inline-block;<br>      ;overflow: hidden;<br>      ;color: #555;<br>      ;font-size: 14px;<br>      ;background: #fff;<br>      ;border-radius: 2px;<br>      ;transition: all 0.3s ease;<br>    }<br>    {}.next-documentations-reload-help-button:hover {<br>      ;color: white;<br>      ;background-color: black;<br>      ;border-color: black;<br>    }<br>    {}.next-documentations-reload-help-button i {margin-right: 5px;}<br></style></p>

<p class="text-center"><a href="http://theme-next.iissnan.com/" class="next-documentations-reload-help-button" target="_blank" rel="external"><i class="fa fa-globe"></i> 访问 NexT 文档</a><a href="https://github.com/iissnan/theme-next-docs" class="next-documentations-reload-help-button" style="margin-left: 10px;" target="_blank" rel="external"><i class="fa fa-github-alt"></i> NexT 文档源码</a>
```

代码的第二段里面有class="fa fa-globe"的字样，这是用来显示那个“互联网”的图标的，fa全称就是font-awesome，fa后面跟着什么代号，就显示什么图标；还有就是这个：class="next-documentations-reload-help-button"里面的内容一定要有，不然没有button的效果。官网在这里（学以致用哈哈~）：

<p><style type="text/css">.next-documentations-reload-help-button{<br>      ;padding: 0 20px;<br>      ;border: 2px solid #555;<br>      ;text-decoration: none;<br>      ;display: inline-block;<br>      ;overflow: hidden;<br>      ;color: #555;<br>      ;font-size: 14px;<br>      ;background: #fff;<br>      ;border-radius: 2px;<br>      ;transition: all 0.3s ease;<br>    }<br>    {}.next-documentations-reload-help-button:hover {<br>      ;color: white;<br>      ;background-color: black;<br>      ;border-color: black;<br>    }<br>    {}.next-documentations-reload-help-button i {margin-right: 5px;}<br></style></p>

<p class="text-center"><a href="http://fontawesome.dashgame.com/" class="next-documentations-reload-help-button" target="_blank" rel="external"><i class="fa fa-flag"></i> 访问 Font Awesome 官网</a></p>

把上面这段源代码加换行后看得更清楚（尤其是对我这种没怎么学过前端开发的人。。。）展开如下：

<!--more-->

```HTML
<p>
    <style type="text/css">
        .next-documentations-reload-help-button
        {
            <br>      ;
            padding: 0 20px;
            <br>      ;
            border: 2px solid #555;
            <br>      ;
            text-decoration: none;
            <br>      ;
            display: inline-block;
            <br>      ;
            overflow: hidden;
            <br>      ;
            color: #555;
            <br>      ;
            font-size: 14px;
            <br>      ;
            background: #fff;
            <br>      ;
            border-radius: 2px;
            <br>      ;
            transition: all 0.3s ease;
            <br>    
        }

        <br>    {}

        .next-documentations-reload-help-button:hover 
        {
            <br>      ;
            color: white;
            <br>      ;
            background-color: black;
            <br>      ;
            border-color: black;
            <br>    
        }
            <br>    {}
        .next-documentations-reload-help-button i 
        {
            margin-right: 5px;
        }
        <br>
    </style>
</p>

<p  class="text-center">
    <a  href="http://theme-next.iissnan.com/"
        class="next-documentations-reload-help-button"
        target="_blank" 
        rel="external">
        <i class="fa fa-globe"></i>访问 NexT 文档</a>
    <a  href="https://github.com/iissnan/theme-next-docs" 
        class="next-documentations-reload-help-button" 
        style="margin-left: 10px;" 
        target="_blank" 
        rel="external">
        <i class="fa fa-github-alt"></i>NexT 文档源码</a>
</p>
```

