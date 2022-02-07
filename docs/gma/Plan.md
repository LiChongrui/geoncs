---
title: 更新计划
date: 2021-11-21 20:12:00
sidebar: false
tags:
 - gma
 - Python
categories:
 - 地理与气象分析库
---

## 更新前瞻

```mermaid
gantt
        dateFormat  YYYY-MM-DD
        title gma 近期完善内容

        section 库优化

        持续优化: active, des3, 2022-01-20, 2022-02-10

        section 功能（函数）更新

        气象指数计算（SPEI）: crit, after now,30d

        section 长期任务

        完善、补充各个模块的函数: crit, after now,30d

```

## 更新测试中的新内容

&emsp;　更新测试中的新内容将在下一个 gma 版本中发布。下一版本 **1.0.5** 。

<i class="fas fa-box"></i> **增加 [smc](UserGuide-smc.html) 函数包。** 提供（或未来提供）空间杂项（例如计算空间距离、面积、坐标转换等操作）计算！

<font color="#616AE5"><i class="fas fa-award"></i></font> **新增：**

&emsp;　1、增加【[CALDistance](UserGuide-smc.html#caldistance)】函数

&emsp;　　计算距离。计算输入两点（或多点）之间的距离。引用：gma.smc.CALDistance

&emsp;　2、增加【[TRANCoordinate](UserGuide-smc.html#trancoordinate)】函数

&emsp;　　坐标转换。将输入点的坐标转换为目标坐标系的坐标。引用：gma.smc.TRANCoordinate

<font color="#3CB371"><i class="fab fa-superpowers"></i></font> **优化：**

&emsp;　1、相关系数计算函数（r）

&emsp;　　相关系数计算函数名由 r 改为 [CORR](UserGuide-math.html#corr)，并增加 pearson（皮尔逊相关）、kendall（肯德尔秩相关），spearman（斯皮尔曼相关）三种可选的相关系数计算方法。

&emsp;　2、Select

&emsp;　　参数设置错误时将会引发异常，不在默认返回 RMSE 结果。

&emsp;　3、GetPath

&emsp;　　a. 参数 String 修改为 Include，功能不变。

&emsp;　　b. 增加 Exclude 参数，用以排除包含此参数设置值的路径。

&emsp;　4、依赖包

&emsp;　　不在将 gdal 作为安装 gma 的前提。即使缺少 gdal，gma 仍可以正常安装，但无法引用。
