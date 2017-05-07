---
title: MATLAB：如何生成一组某个区间内的服从正态分布的随机数
date: 2017-05-07 10:26:21
tags:
- 教程
- MATLAB
categories:
- 教程
- MATLAB
---

例如问：如何使用MALTAB产生分布在区间 [0.2, 0.95] 服从正态分布$N(0.5, 0.4^2) $的1000个数据，以列向量表示。

代码如下：

```matlab
Soc_Normal = random('Normal', 0.5, 0.4, [2000,1]); % 首先生成足够多的满足整体分布大条件的随机数，这里用列向量
% 另一种写法：Soc_Normal = 0.5 + 0.4*randn(2000,1);

Soc_Normal(Soc_Normal<0.2 | Soc_Normal>0.95) =[]; % 踢出区间 [0.2，0.95]外的行向量
%另一种写法：Soc_Normal=Soc_Normal((Soc_Normal>=0.2 & Soc_Normal<=100)); % 保留区间 [0.2，0.95]内的行向量

Soc_Normal = Soc_Normal(1:1000); % 反正矩阵内元素也没有按照大小顺序排，取前1000个是可以满足“随机性”的
```

