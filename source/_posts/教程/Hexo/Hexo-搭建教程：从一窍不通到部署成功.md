---
title: Hexo-搭建教程：从一窍不通到部署成功
date: 2017-01-02 18:41:22
categories:
- 教程
- Hexo
tags:
- 教程
- Hexo
---

# 前言

在开始建站之前，我在Git技术和前端技术上基本算是个纯小白，但经过一天的试错，我终于把Hexo部署好了，走了很多弯路，于是写下这篇详细的使用教程，以及一些我在使用中出现的问题和走过的错路，希望和我一样**零基础**的Hexo使用者（尤其是对没接触过Git相关技术的用户）可以一步一步按照我的方法来做，保证成功！如果你在看这个教程的过程中发现有什么不正确或不理解的地方，欢迎在底下评论区一起讨论！^-^

我的安装环境：

Windows 10 专业版 64位 版本14393

<!-- more -->

**注意每一步执行完后，把刚刚改动需要保存的文件保存一下再进行下一步操作！比如你修改了_config.yml文件之后，记得保存之后再进行下一步操作！**

# 1. 安装Node.js

## 1.1 Steps

1. 以管理员身份打开cmd

2. 定位到你安装程序的位置

3. 输入：

   ```
   start 安装包名称
   ```

## 1.2 注释

安装之所以麻烦，是因为win10下msi安装程序无法以正常方法赋予管理员权限，而Node.js.msi恰恰又需要管理员权限才能正常安装，否则会报错（缺少DLL云云），只能用这种绕路的方法来给权限，使它得以正常安装。

参见：

> https://wanzhiyu.github.io/2017/01/02/Node.js%E7%BC%BA%E5%B0%91%E6%89%80%E9%9C%80DLL%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/

# 2. 安装Github For Windows（可选）

## 2.1 作用

有一个图形化的界面，方便你日后同步自己的Hexo程序文件，免得丢失Hexo资料文件。**其实你不装这个也没事。。。**只是我自己需要装这个来方便自己的日常使用，熟悉git命令的完全可以就用命令操作……

**综上所述，本教程不需要安装Github For Windows就可以完成Hexo的部署！！！**

## 2.2 操作方法

搜索引擎搜索Github for desktop，找到官网后下载。下载地址：https://desktop.github.com/

这只是一个很小的用于下载真正的Github的程序，打开后还得下载主程序，最好挂着梯子下载，如果不成功（比如下着下着就出错停止），没事，重新开程序，多下几次，一次比一次下载的多，一般三四次之后就下载好啦。

# 3. 安装Git

搜索引擎搜索Git，找到官网后下载。附下载地址：https://git-scm.com/

![Git官网](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85Git/1.png)

这个下载起来就没那么多问题啦，直接迅雷下载，速度飞快。

下载好啦：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85Git/2.png)

双击安装，这个应该都会吧。。。

win10下必须右键用管理员身份打开，否则会报错，Error5：拒绝访问。![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85Git/Error5%EF%BC%9A%E6%8B%92%E7%BB%9D%E8%AE%BF%E9%97%AE.png)

其他版本系统我不知道，可能也需要吧。

一路“Next”，啥都别管。

安装完成。

![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85Git/%E5%AE%89%E8%A3%85%E5%AE%8C%E6%88%90.png)

# 4. 设置本地SSH Keys（这步一定要仔细！）

## 4.1 Steps

1. 启动开始菜单里面的Git Bash

2. 在Git Bash输入以下指令（任意位置点击鼠标右键），检查是否已经存在了SSH keys。

   ```
   ls -al ~/.ssh
   ```

3. 如果已经存在，全部删除为妙，这几个key的存放位置在C:\Users\你的用户名\\.ssh，全部删除。![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E5%88%A0%E9%99%A4%E5%B7%B2%E6%9C%89keys.png)

4. 删除前和删除后是有区别的，看截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E5%88%A0%E9%99%A4%E5%89%8D%E5%92%8C%E5%88%A0%E9%99%A4%E5%90%8E%E7%9A%84%E5%8C%BA%E5%88%AB.png)

5. 下面开始重新产生ssh keys，输入以下指令（邮箱就是你注册Github时候的邮箱）后，回车：

   ```
   ssh-keygen -t rsa -C "youremail@xxx.com"
   ```

   注意，双引号这里面填写你自己的邮箱，如我填的是wanzhiyu@outlook.com

6. 然后它会提示要你输入passphrase（如下图，我没有输入直接回车，如果你输入的话，要记得，到时候会用到）。之后，出现类似下图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E7%94%9F%E6%88%90ssh.png)

7. 然后将这个新的key添加到ssh-agent中：

   ```
   ssh-agent -s
   ```

8. 执行以下命令：

   ```
   sh-add ~/.ssh/id_rsa
   ```

9. 输入之后，在我这里是出错了，不知道你的有没有出错，下面几步图在第12步走完之后一起贴。

10. 如果你的也是这样子出错了的话，就输入以下指令：

   ```
   eval  `ssh-agent -s`
   ```

11.   重新执行刚才那条命令：

     ```
     ssh-add ~/.ssh/id_rsa
     ```


12. 完成后大概样子是这样的，截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E5%AE%8C%E6%88%90ssh%E7%9A%84%E7%94%9F%E6%88%90.png)

## 4.2 引用外部链接：

1. **正确**的操作方法来自这个网站：http://www.cnblogs.com/Security-Darren/p/4106328.html
2. 我**没能操作成功并且浪费很多时间的方法**来自这个网站：http://m.paopaoche.net/new/85988

# 5. 将SSH key添加到你的GitHub账户

## 5.1 Steps

1. 首先将公钥复制到粘贴板，仍然是在Git Bash里面进行操作：

   ```
   clip < ~/.ssh/id_rsa.pub
   ```

2. 打开Github网站，然后在github的账户页的右上角，点击配置（settings, 齿轮图形）：

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E9%93%BE%E6%8E%A5%E5%88%B0githubs1.png)

3. 在sidebar中点击“SSH keys”，接着点击“Add SSH key”，在"title"栏输入一个自己喜欢的标题，也可以不写，默认用邮箱名称，“key”栏中粘贴刚刚复制的公钥内容，最后点击“Add key”按钮，添加成功。

   三个截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/github%E8%AE%BE%E7%BD%AE.png)

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/github%E4%B8%8A%E6%B7%BB%E5%8A%A0ssh%20key.png)

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/github%E4%B8%8A%E6%B7%BB%E5%8A%A0ssh%E5%AE%8C%E6%88%90.png)

4. 检查SSH key是否成功设置

   ```
   ssh -T git@github.com
   ```

   注意，这里就是输入git@github.com，别自作主张替换成你的邮箱什么的，这里不需要。

   过程中问你yes还是no，肯定输入yes。

   最后，如果你的结果也出现了这样一句话：

   ```
   Hi 你的名字! You've successfully authenticated, but GitHub does not provide shell access.
   ```

   说明你也成功啦！

   见截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/hexo%E9%85%8D%E7%BD%AEssh/%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E5%BD%BB%E5%BA%95%E5%AE%8C%E6%88%90.png)

## 5.2 引用外部链接

1. **正确**的操作方法来自这个网站：http://www.cnblogs.com/Security-Darren/p/4106328.html
2. 这一步，网上大部分做法都是对的，不容易出错。

# 6. 在Github上建立自己的网站

## 6.1 Steps

1. 打开Github网站，右上角点击新建一个仓库。![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/github%E4%B8%8A%E5%BB%BA%E7%AB%99/1.png)

2. 在Repository name中输入：**你的用户名**.github.io

   注意这里必须是**你的用户名**！！！

   **不要自作主张填其他名字！！！**![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/github%E4%B8%8A%E5%BB%BA%E7%AB%99/2%E5%90%8D%E5%AD%97%E5%BF%85%E9%A1%BB%E4%B8%80%E6%A0%B7%EF%BC%81.png)


# 7. 安装Hexo

## 7.1 注释

其实这一部分就相对简单多啦，网上的教程基本都能实现，没有太大问题。

## 7.2 Steps

1. 在自己认为合适的地方创建一个文件夹，我是打算创建在F:\softwares\GitHub\hexo-client里面，于是我在Git Bash里面输入：

   ```
   cd f:*
   cd so*
   cd G*
   cd he*
   ```

   效果如图所示：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/%E5%A4%9A%E4%B8%AAcd.png)

   其中注意，Git Bash是**区分大小写的**，*是通配符，表示省略。

   这样我们进入F:\softwares\GitHub\hexo-client里面了

2. 输入：

   ```
   npm install hexo-cli -g
   ```

   效果如图所示：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/1.png)

   会看到有WARN，没事，不影响你安装使用。

3. 输入：

   ```
   npm install hexo --save
   ```

   效果如下面两张图所示：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/2.1.png)

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/2.2.png)

   会看到还有WARN，没事的，不影响安装成功。

4. 下面我们来看一看Hexo是不是已经安装好了。 在命令行中输入：

   ```
   hexo -v
   ```

   效果如下图所示：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/3.png)

# 8. 初始化Hexo

## 8.1 Steps

1. 接着上面的操作，输入：

   ```
   hexo init
   ```

   **注意！执行这一步前首先你得保证你要装的那个目录是空的，没东西的！**对我而言就是 这个目录：F:\softwares\GitHub\hexo-client，**它里面必须是没东西的！！！**

   否则会报fatal（致命错误）！见截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/fatal%EF%BC%8C%E4%B8%8D%E6%98%AF%E7%A9%BA%E7%9B%AE%E5%BD%95.png)

   init初始化成功后大致是这样：一个截图：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/init%E6%88%90%E5%8A%9F.png)

   当你看到：

   ```
   INFO  Start blogging with Hexo!
   ```

   说明你也成功啦！

2. 注意需要提前安装一个扩展：

   ```
   npm install hexo-deployer-git --save
   ```

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/%E5%AE%89%E8%A3%85deployer.png)

   这个扩展必须要装！有的老的教程不写！要是不装这个你之后是没法部署到网站的！

3. 打开F:\softwares\GitHub\hexo-client（就是你自己设定的hexo安装位置）里面的_config.yml文件，我这里用的是Visual Code来打开的，其他编辑器应该也可以，都差不多。

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/%E9%85%8D%E7%BD%AEconfig.yml01.png)

4. 翻到文件的最低端，如图所示，找到这几行：![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/%E9%85%8D%E7%BD%AEconfig.yml02.png)

5. 像这样修改：

   ```
   deploy:
     type: git
     repo: git@github.com:yourname/yourname.github.io.git
     branch: master
   ```

   注意这里必须是**你的用户名**！！！

   **不要自作主张填其他名字！！！**

   我填的就是：

   ```
   deploy:
     type: git
     repo: git@github.com:wanzhiyu/wanzhiyu.github.io.git
     branch: master
   ```

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/%E5%AE%89%E8%A3%85hexo/%E9%85%8D%E7%BD%AEconfig.yml03.png)

# 9. 正式部署

## 9.1 Steps

1. 其实一步就可以完成，仍然是在Git Bash中输入：

   ```
   hexo clean;hexo g -d
   ```

   > 如下面三行代码所示，其实这一步里面包含了三步：
   >
   > 1. 分别代指清空缓存（这个用词不准确，但你可以就这么理解）
   > 2. 生成待上传文件
   > 3. 部署到Github

   ```
   hexo clean
   hexo generate
   hexo deploy
   ```
   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/github%E4%B8%8A%E5%BB%BA%E7%AB%99/31.png)

   ![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/github%E4%B8%8A%E5%BB%BA%E7%AB%99/32.png)

2. 在浏览器打开你的网站：你的用户名.github.io

   比如我打开的就是：wanzhiyu.github.io

   你会看到成功啦！![](http://oj9456ckj.bkt.clouddn.com/image/hexo_install/github%E4%B8%8A%E5%BB%BA%E7%AB%99/4.png)

   ​