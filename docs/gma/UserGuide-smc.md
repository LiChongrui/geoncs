---
title: 空间杂项
date: 2021-10-30 00:00:00
tags:
 - gma
 - Python
categories:
 - 地理与气象分析库
---

**&emsp;&emsp;空间杂项** 为 **gma.smc** 内所有其他空间计算相关函数的详细功能、参数设置和引用方法说明，如果您想了解 gma 所有函数的整体情况，请参考 [函数功能列表](Function.html) 。

## CALDistanceFromPoint<Badge text="1.0.5 +"/>
::: theorem

**引用：**  gma.smc.CALDistanceFromPoint(Points, Projection = 'WGS84', Unit = 'meter')

**功能：** 【计算距离】。计算输入两点（或多点）之间的距离。

**参数：**

&emsp;Points：`list||tuple` 。需要计算距离的两点（或多点）的 X，Y 坐标（经度、纬度）。可为嵌套列表或元组。至少有 2 个坐标点。
    
&emsp;&emsp;例如： Points = [(130.1, 45.2), (131.5, 40.2)]

**可选参数：**

&emsp;Projection = `str`。输入坐标点的坐标系。默认为 WGS84（EPSG:4326）。

&emsp;Unit = `str`。计算距离结果的单位。默认为米（meter）。
    
&emsp;&emsp;支持的单位还有：kilometer（千米）、mile（英里）、nautical mile（海里）。

**返回：**`float`。

:::