---
title: 默认设置
date: 2021-10-29 23:35:00
tags:
 - gma
 - Python
categories:
 - 地理与气象分析库
---

## 默认参数

&emsp;&emsp; 默认参数已经内置在 key 文件中。**下表仅列出 gma 定义了的参数，后期可能会对其进行修改。**


| 变量 / 函数 | 类型 | 说明 | 详细介绍 |
| :----| :---- | :---- | :----- |
| RasterFormat | 集合 | 支持的栅格数据驱动 | AAIGrid，BT，CALS，COG，DTED，EHdr，ENVI，ERS，EXR，FIT，GIF，GPKG，GRIB，GS7BG，GSAG，GSBG，GTiff，HDF4Image,HF2，HFA，ISCE，ISIS2，ISIS3，JP2OpenJPEG，JPEG，LAN，MBTiles，XPM，XYZ，netCDF，MFF2，MRF，NITF，PAux，PCIDSK，PCRaster，PNG，RST，Rasterlite，SIGDEM，USGSDEM，VICAR，VRT，BMP |
| VectorFormat | 集合 | 支持的矢量数据驱动 | ESRI Shapefile，PCIDSK，PDS4，PDF，MBTiles，MapInfo File，Memory，CSV，GML，LIBKML，KML，GeoJSON，OGR_GMT，GPKG，SQLite，WAsP，FlatGeobuf，Geoconcept，GeoRSS，ODS，XLSX，JML，VDV，MVT，MapML |
| DataType | 字典 | 数据类型 | 未知类型: 0，8位无符号整型: 1，16位无符号整型: 2，16位整型: 3，32位无符号整型: 4，32位整型: 5，32位浮点: 6，64位浮点: 7，16位复整型: 8，32位复整型: 9，32位复浮点型: 10，64位复浮点型: 11 |
| ResampleMethod | 字典 | 重采样方法 | 0: Nearest Neighbour，1: Bilinear，2: Cubic，3: CubicSpline，4: Lanczos，5: Average，6: RMS，7: Mode |
| FeatureType | 字典 | 矢量要素类型 | 自动: 0，点: 1，线: 2，面: 3，多点: 4，多线: 5，多面: 6 |
| GetGTiffOptions | 函数 | GTiff 的创建参数 | 1. 不生成 ESRI 世界文件（ .tfw ）。<br> 2. 不生成（ .RPB ）文件来描述 RPC（有理多项式系数）。<br> 3.  不设置数据位深（NBITS）。<br> 4. 默认 LZW 压缩。<br> 5.  默认通过估算生成文件大小来确定是否生成 BIGTIFF 文件。 |
| GenRCOptions | 函数 | 根据栅格驱动生成创建选项 | 支持的栅格驱动见 RasterFormat  |
| GetRasterEXTFromDriver | 函数 | 根据栅格驱动格式返回扩展名|  支持的栅格驱动见 RasterFormat   |
| GetSHPOptions | 函数 | ESRI Shapefile 的创建参数  | 1. 默认创建矢量文件的字段编码为 UTF-8 。<br> 2. 自动调整字段大小。 <br> 3. 不强制解除 .SHP、.DBF 文件 2GB 大小的限制。 <br> 4. 不生成空间索引文件（ .qix ）。 |
| GenVCOptions | 函数 | 根据矢量驱动生成创建选项 | 支持的矢量驱动见 VectorFormat   |
| GetVectorEXTFromDriver | 函数 | 根据矢量驱动格式返回扩展名 | 支持的矢量驱动见 VectorFormat |

::: warning 注意
*&emsp;&emsp;仅可根据 变量 / 函数 查看内置设置，不能对内置设置进行修改。*
:::

## 数据类型约定

|英文 | 中文 | 标识/来源 | 示例 |
| :--- | :---- | :---- | :---- |
|list   |列表 |[ ] |[1, 'a', 2] |
| tuple | 元组 | ( ) | (1, 2, 3) |
| dict | 字典 | { } | {'a': 1, 'b': 2} |
| array | 数组 | numpy.array      | [1 2]            |
| mat | 矩阵     | numpy.mat        | [1 2]            |
| str | 字符串 | ' ' | 'str' |
| int | 整型数 |                  | 5、-1            |
| float | 浮点数 |                  | -1、1.0、6       |
| DataFrame | 数据帧 | pandas.DataFrame | 参考 dict        |
| Series | 数据系列 | pandas.Series | 参考 dict |
| bool | 布尔型 |  | True、False |
| set | 集合 | { } | {1, 2, 3} |
| def | 函数 | | 参考 Python 函数定义 |


## 函数、参数命名规定

::: theorem 

**单个单词：** 首字母大写，例如：Clip。

**多个单词：** 每个单词首字母大写，多个单词直接连在一起。例如：ToOtherFormat。

**缩写：** 缩写单词全部大写。例如：GenerateOVR，OVR 为 Overviews 的缩写。

:::

