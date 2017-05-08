---
title: MATLAB：hist()函数的使用方法
date: 2017-05-06 17:05:40
tags:
- 教程
- MATLAB
categories:
- 教程
- MATLAB
---

$hist()$是绘制直方图函数

# 语法：

```matlab
n = hist(Y)
n = hist(Y,x)
n = hist(Y,nbins)
[n,xout] = hist(...)
hist(...)
hist(axes_handle,...)
```

# 描述：

直方图显示了数据值的分布情况。

* n = hist(Y)
  将向量Y中的元素分到10个等间隔的范围内，并返回每个范围内元素的个数作为一行向量。
  如果Y是一个m x p的矩阵，hist将Y的每一列作为一个向量，并返回一个10 x p的矩阵n。n的每一列的值对应Y的该列。<!--more-->


* n = hist(Y, x)
  x是一个向量，返回x的长度个以x为中心的，Y的分布情况。
  例如：如果x是一个5元素的向量，返回Y在以x为中心的，x长度个范围内数据直方分布。
  注：如果更需要制定数值边界而不是中心，可以使用histc。
* n = hist(Y, nbins)
  nbins是一个范围，使用nbins间隔数。


* [n,xout] = hist(...)
  返回n和xout，包含有数目频率和间隔位置。可以使用bar(xout, n)来绘制直方图。
* hist(...)
  使用上述方法绘制没有输出的直方图。
* hist(axes_handle)
  使用axes_handle轴绘制，代替目前的轴（gca）。