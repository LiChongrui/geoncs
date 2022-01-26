---
title: 投影坐标系
date: 2021-12-22
tags:
 - 坐标系
categories:
 - 地信研学
---

&emsp;　本页对投影坐标系（Projected Coordinate System）的基础参数的进行介绍，并统计了 4782 个投影坐标系的官方 ID（EPSG），坐标系名称，投影，单位和其他相关参数。

<!-- more -->

## 简介

&emsp;　地球椭球体表面也是个曲面，而我们日常生活中的地图及量测空间通常是二维平面，因此在地图制图和线性量测时首先要考虑把曲面转化成平面。由于球面上任何一点的位置是用地理坐标（λ，φ）表示的，而平面上的点的位置是用直角坐标（X，Y）表示的，所以要想将地球表面上的点转移到平面上，必须采用一定的方法来确定地理坐标与平面直角坐标或极坐标之间的关系。这种在球面和平面之间建立点与点之间函数关系的数学方法，就是地图投影方法。

&emsp;　投影坐标系使用基于 X，Y 值的坐标系统来描述地球上某个点所处的位置。这个坐标系是从地球的近似椭球体投影得到的，它对应于某个地理坐标系。投影坐标系主要由 [地理坐标系](GEOGCS.html) 和 [投影方法](PROJCS.html#投影方法) 构成。

## 投影方法

&emsp;　地图投影是利用一定数学法则把地球表面的经、纬线转换到平面上的理论和方法。由于地球是一个赤道略宽两极略扁的不规则的梨形球体，故其表面是一个不可展平的曲面，所以运用任何数学方法进行这种转换都会产生误差和变形，为按照不同的需求缩小误差，就产生了各种投影方式。

&emsp;　下表列出了投影坐标系主要采用的 33 种投影方法，以供与 [主要坐标参数](PROJCS.html#主要坐标参数) 中 **投影** 的内容进行对应。

| 序号 | 投影方法                                  | 序号 | 投影方法                               |
| ---- | :---------------------------------------- |:---- |:-------------------------------------- |
| 1    | Transverse_Mercator                       | 18   | Azimuthal_Equidistant                  |
| 2    | Oblique_Stereographic                     | 19   | Mercator_2SP                           |
| 3    | Transverse_Mercator_South_Orientated      | 20   | Cylindrical_Equal_Area                 |
| 4    | Hotine_Oblique_Mercator_Azimuth_Center    | 21   | Equirectangular                        |
| 5    | Lambert_Conformal_Conic_1SP               | 22   | Guam Projection                        |
| 6    | Krovak                                    | 23   | Krovak_Modified                        |
| 7    | Cassini_Soldner                           | 24   | Krovak_Modified_(North_Orientated)     |
| 8    | Lambert_Conformal_Conic_2SP               | 25   | Polyconic                              |
| 9    | Lambert_Azimuthal_Equal_Area              | 26   | Lambert Conic Conformal (2SP Michigan) |
| 10   | Lambert_Conic_Conformal_(West_Orientated) | 27   | Colombia Urban                         |
| 11   | Mercator_1SP                              | 28   | Tunisia_Mapping_Grid                   |
| 12   | Bonne_(South_Orientated)                  | 29   | Lambert_Conic_Near-Conformal           |
| 13   | Albers_Conic_Equal_Area                   | 30   | New_Zealand_Map_Grid                   |
| 14   | Polar_Stereographic_(variant_C)           | 31   | Laborde_Oblique_Mercator               |
| 15   | Polar_Stereographic                       | 32   | Lambert_Conformal_Conic_2SP_Belgium    |
| 16   | Hotine_Oblique_Mercator                   | 33   | Transverse_Mercator_Zoned_Grid_System  |
| 17   | Hyperbolic Cassini-Soldner                |      |                                        |


## 长度单位

&emsp;　长度单位定义了投影坐标系中 16 个长度单位和最小值（类似于分辨率）。下表对可能涉及到的长度单位进行列举，以供与 [主要坐标参数](PROJCS.html#主要坐标参数) 中 长度单位 的内容进行对应。

 | 序号| 单位  |   每单位长度（m） | 序号|单位  |   每单位长度（m） |
|:---|:---|:---|:---|:---|:---|
|1| metre                                |          1        |9| Clarke's yard                        |          0.914392 |
|2| Clarke's link                        |          0.201166 |10|kilometre                            |       1000        |
|3| Gold Coast foot                      |          0.3048   | 11|Indian yard                          |          0.914399 |
|4| US survey foot                       |          0.304801 |12|British chain (Benoit 1895 B)        |         20.1168   |
|5| foot                                 |          0.3048   |13|British yard (Sears 1922)            |          0.914398 |
|6| Clarke's foot                        |          0.304797 |14|German legal metre                   |          1.00001  |
|7| link                                 |          0.201168 |15|British chain (Sears 1922)           |         20.1168   |
|8| British chain (Sears 1922 truncated) |         20.1168   |16|British foot (Sears 1922)            |          0.304799 |

## 主要坐标参数

[Transverse_Mercator](PROJCS/Transverse_Mercator.html)

