# hexo-client
Personal Blog Files

# 1. 下次重装系统后，如果没有清空F盘

## 1.1 Steps

1. 下载好Github（使用ss**全局模式**，选择**负载均衡**后双击安装下载），并且登陆，设置好文件夹位置

2. 安装好Git

3. 安装好Node.js

4. 在hexo-client文件夹内右键运行Git Bash

5. 首先按教程方法**设置好本地的SSH Keys**并且**将SSH key添加到你的GitHub账户**

6. 安装hexo：

   ```
   npm install hexo-cli -g;npm install hexo --save;hexo -v;npm install hexo-deployer-git --save
   **这里不要hexo init的步骤！**
   npm install hexo-generator-sitemap --save;npm install hexo-generator-baidu-sitemap --save;npm install hexo-wordcount --save;npm install hexo-generator-searchdb --save;npm install hexo-wordcount --save;
   ```

7. 直接部署：

   ```
   hexo clean;hexo g -d
   ```
   ​


**1. 下次Clone到本地时，记得主题Next已经全盘同步到本地了，不要安装Next主题了，直接在站点配置文件里面添加就行。**

**2. 因为本方法没有做过测试，所以如果此方法不行，那么就按下面的方法重新来过吧。**

# 2. 下次重装系统后，如果清空了F盘

## 1.1 Steps

1. 下载好Github（使用ss**全局模式**，选择**负载均衡**后双击安装下载），并且登陆，设置好文件夹位置，**把这个hexo-client文件夹Clone下来**

2. 安装好Git

3. 安装好Node.js

4. 在hexo-client文件夹内右键运行Git Bash

5. 首先按教程方法设置好本地的SSH Keys并且将SSH key添加到你的GitHub账户

6. 首先，随便找个地方比如G盘新建一个hexotemp文件夹，在里面使用以下几个命令

   ```
   npm install hexo-cli -g;npm install hexo --save;hexo -v;hexo init;npm install hexo-deployer-git --save
   ```

7. 从Github for windows上下载源码到**hexo-client**文件夹，文件夹名字不要变动，**保持hexo-client**

8. 打开**hexotemp**文件夹，**删除_config.yml文件！！！**以及source文件夹（可删可不删，不删的话就会多一篇hello world的日志）

9. 将**整个hexotemp文件夹**复制到**hexo-client文件夹**，覆盖。

10. 然后再执行：

  ```
  npm install hexo-generator-sitemap --save;npm install hexo-generator-baidu-sitemap --save;npm install hexo-wordcount --save;npm install hexo-generator-searchdb --save;npm install hexo-wordcount --save;

  hexo clean;hexo g -d
  ```

   **下次Clone到本地时，记得主题Next已经全盘同步到本地了，不要安装Next主题了，直接在站点配置文件里面添加就行。**
