---
title: Hexo-Next的背景动态效果和心心
date: 2017-01-20 20:26:37
categories:
- 教程
- Hexo
tags:
- 教程
- Hexo
---

博客背景动态效果图和点击小红心效果的相关设置。
把 `js` 文件 `love.js` 和 `particle.js` 放在 `\themes\next\source\js\src` 文件目录下
更新 `\themes\next\layout\_layout.swig` 文件，在末尾（在前面引用会出现找不到的bug）添加以下 `js` 引入代码：

```html
<!-- 背景动画 -->
<script type="text/javascript" src="/js/src/particle.js"></script>
<!-- 页面点击小红心 -->
<script type="text/javascript" src="/js/src/love.js"></script>
```

想设置动画线条颜色可改为：

```html
<script type="text/javascript" color="255,0,0" opacity="0.3" count="99" src="particle.js"></script>
```

就能显示红色。或者用：

```html
<script type="text/javascript" src="/js/src/particles.js" count="50" zindex="-2" opacity="1" color="0,104,183"></script>
```

两个JS下载为：

```
http://7u2ss1.com1.z0.glb.clouddn.com/love.js
http://7u2ss1.com1.z0.glb.clouddn.com/particle.js
```

或者我干脆在这里把它们代码贴出来：

<!--more-->

1. love.js文件

   ```javascript
   !function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
   ```

   ​

2. particle.js文件

   ```javascript
   !function(){function n(n,e,t){return n.getAttribute(e)||t}function e(n){return document.getElementsByTagName(n)}function t(){var t=e("script"),o=t.length,i=t[o-1];return{l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.5),c:n(i,"color","0,0,0"),n:n(i,"count",99)}}function o(){c=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function i(){l.clearRect(0,0,c,a);var n,e,t,o,u,d,x=[w].concat(y);y.forEach(function(i){for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>c||i.x<0?-1:1,i.ya*=i.y>a||i.y<0?-1:1,l.fillRect(i.x-.5,i.y-.5,1,1),e=0;e<x.length;e++)n=x[e],i!==n&&null!==n.x&&null!==n.y&&(o=i.x-n.x,u=i.y-n.y,d=o*o+u*u,d<n.max&&(n===w&&d>=n.max/2&&(i.x-=.03*o,i.y-=.03*u),t=(n.max-d)/n.max,l.beginPath(),l.lineWidth=t/2,l.strokeStyle="rgba("+m.c+","+(t+.2)+")",l.moveTo(i.x,i.y),l.lineTo(n.x,n.y),l.stroke()));x.splice(x.indexOf(i),1)}),r(i)}var c,a,u=document.createElement("canvas"),m=t(),d="c_n"+m.l,l=u.getContext("2d"),r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/45)},x=Math.random,w={x:null,y:null,max:2e4};u.id=d,u.style.cssText="position:fixed;top:0;left:0;z-index:"+m.z+";opacity:"+m.o,e("body")[0].appendChild(u),o(),window.onresize=o,window.onmousemove=function(n){n=n||window.event,w.x=n.clientX,w.y=n.clientY},window.onmouseout=function(){w.x=null,w.y=null};for(var y=[],s=0;m.n>s;s++){var f=x()*c,h=x()*a,g=2*x()-1,p=2*x()-1;y.push({x:f,y:h,xa:g,ya:p,max:6e3})}setTimeout(function(){i()},100)}();
   ```



转载自：http://blog.ynxiu.com/2016/hexo-next-theme-optimize.html