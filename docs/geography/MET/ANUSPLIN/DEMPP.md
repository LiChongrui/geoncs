---
title: DEM 转换
date: 2018-10-08 23:00:00
tags:
 - AUNSPLIN
categories:
 - 气象研学
---

## *1 DEM 数据重采样	
&emsp;&emsp;以一个 0.00027777778° × 0.00027777778° 分辨率的 DEM 为例，将其重采样至0.00886815° × 0.00886815° 的分辨率。打开 **[地图处理-ArcToolBox-数据管理工具-栅格-栅格处理-重采样]** 工具，设置输入栅格，输出栅格信息，输出像元大小 X、Y 均设置为0.00886815°，重采样方法选择默认的 NEAREST 法。
::: theorem 扩展
&emsp;&emsp; DEM 重采样可使用 [地理与气象分析库（gma）](http://gma.luosgeo.com/)的 [gma.math.Resample](http://gma.luosgeo.com/UserGuide/rasp.html#resample) 函数。
:::
## *2 重投影
&emsp;&emsp;可以将所需的 DEM 数据，直接利用 **[地图处理-ArcToolBox-数据管理工具-投影和变换-栅格-投影栅格]** 方法投影到<Asia_North_Albers_WGS84_LCR>坐标系。也可利用输入的 DEM 栅格数据，首先利用上述方法进行投影转换，再利用 **[地图处理-ArcToolBox-数据管理工具-栅格-栅格处理-重采样]** 工具进行重采样。重采样分辨率中地理坐标系 0.01°大约（大于）为投影坐标系中的 1000 m。
::: theorem 扩展
&emsp;&emsp; DEM 重投影可使用 [地理与气象分析库（gma）](http://gma.luosgeo.com/)的 [gma.math.Reproject](http://gma.luosgeo.com/UserGuide/rasp.html#reproject) 函数。
:::
## 3 导出 DEM 数据

&emsp;&emsp;ANUSPLIN 要求输入的 DEM 数据文件（或其他变量或协变量文件）为以 ASCII 码保存的 DEM 数据。可以用 ARCGIS 进行导出。

&emsp;&emsp;将 DEM 数据导入 ARCGIS，打开 **[地图处理-ArcToolBox-转换工具-由栅格转出-栅格转 ASCII]** ，定义输入栅格和输出 ASCII 文件即可。


