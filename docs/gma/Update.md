---
title: 更新日志
date: 2021-11-21 20:12:00
tags:
 - gma
 - Python
categories:
 - 地理与气象分析库
---

&emsp;　gma 所有发布版本的更新内容都会在这里记录。

<!-- more -->

## 1.0.4 (2022.01.14)
---

<font color="#616AE5"><i class="fas fa-award"></i></font> **新增：**

&emsp;　1、增加【[SymDifference](UserGuide-vesp.html#symdifference)】函数

&emsp;　　交集取反。提取两个矢量不相交的部分组成新矢量。引用：gma.vesp.SymDifference。

<font color="#FFA500"><i class="fas fa-tools"></i></font> **修复：**

&emsp;　1、无法正常 import 

&emsp;　　分别为 Python 3.8、3.9、3.10 编译和发布对应版本的 whl 包，解决不同环境安装 gma 可能出现不能正常 import 的问题。

&emsp;　2、FillNoData

&emsp;　　修复 1.0.2 ~ 1.0.3 版本默认插值方法 `linear` 失效的问题。

&emsp;　3、MultiThreading

&emsp;　　修复 *agrs，**kwargs 传参失败的问题。

<font color="#3CB371"><i class="fab fa-superpowers"></i></font> **优化：**

&emsp;　1、坐标系检查

&emsp;　　放宽坐标系正确性的检查方式，以保证自定义坐标系可以正常引用。

<font color="#FF4500"><i class="fas fa-exclamation-circle"></i></font> **已知问题：**

&emsp;　1、ChangeDataType

&emsp;　　某些情况下，在设置了 BitDepth （位深）参数后，不能返回预期的位深结果。非必要情况下，请谨慎设置此参数。

## 1.0.3 (2021.12.16)
---

<font color="#616AE5"><i class="fas fa-award"></i></font>  **新增：**

&emsp;　1、增加【[SplitImage](UserGuide-rasp.html#splitimage)】函数

&emsp;　　影像切片。将一幅影像切分为特定行列数的小影像（切片）。引用：gma.rasp.SplitImage。

&emsp;　2、增加【[MultiThreading](UserGuide-osf.html#multithreading)】函数

&emsp;　　多线程。自定义多线程实现同一函数多个参数的同步执行。引用：gma.osf.MultiThreading。

## 1.0.2 (2021.11.21)
---

<font color="#616AE5"><i class="fas fa-award"></i></font> **新增：**

&emsp;　1、增加【[TVDI](UserGuide-index.html#tvdi)】函数

&emsp;　　计算温度植被干旱指数。引用：gma.index.TVDI。

<font color="#FFA500"><i class="fas fa-tools"></i></font> **修复：**

&emsp;　1、FillNoData

&emsp;　　a、解决部分插补方法的条件下，首末端缺失值未进行处理的问题。

&emsp;　　b、为 polynomial 和 spline 法设定了一个默认的 order ，默认值为 3 。

&emsp;　　c、修改了部分由于拼写问题引发的异常。

<font color="#3CB371"><i class="fab fa-superpowers"></i></font> **优化：**

&emsp;　1、Smooth

&emsp;　　为输入参数的设置情况加入判断。

<i class="far fa-trash-alt"></i> **删除：**

&emsp;　1、删除了暂时未进行整合的 palmer，utils 模块。

## 1.0.1 (2021.11.18)
---

<font color="#616AE5"><i class="fas fa-award"></i></font>  **新增：**

&emsp;　1、增加【[AddColorTable](UserGuide-rasp.html#addcolortable)】函数

&emsp;　　为栅格数据添加色彩映射表。引用：gma.rasp.AddColorTable。

<font color="#3CB371"><i class="fab fa-superpowers"></i></font> **优化：**

&emsp;　1、GTiff 格式

&emsp;　　a. 生成 GTiff 过程使用差分预测器（若压缩支持，例如 LZW ），修改默认压缩级别为 9 级 。

&emsp;　　b. 生成 GTiff 过程调用全部 CPU 核心。

&emsp;　　c. 当读取的栅格数据未压缩大小小于系统内存时，改用 RasterIO 方法实现。

&emsp;　2、内存占用

&emsp;　　默认处理过程的最大内存占用为 **0.9 * 空闲内存**，以提高数据处理速度。

&emsp;　3、.ovr 金字塔

&emsp;　　生成 .ovr 金字塔 过程使用差分预测器（ DEFLATE 压缩）。

<font color="#FFA500"><i class="fas fa-tools"></i></font> **修复：**

&emsp;　1、修正 WKT 坐标系正确性的检查方式。


## 1.0.0 (2021.11.13)
---
&emsp;　第一版 gma 。未标注版本的函数均在第一版构建。
