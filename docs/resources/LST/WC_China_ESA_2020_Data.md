---
title: ESA WorldCover
date: 2021-10-11 23:12:00
tags:
 - LST
categories:
 - 资源教程
sticky: 1
---

&emsp;&emsp;欧洲航天局（ESA）**< ESA WorldCover 10m 2020 >** 产品基于 Sentinel-1 和 Sentinel-2 数据提供了一种新的全球地表覆盖产品，分辨率为 10 米，时间为 2020 年。

<!-- more -->

&emsp;&emsp;该产品是在欧空局世界覆盖项目 < ESA WorldCover Project >的框架内生成的，该项目是欧洲航天局第五个地球观测包络线计划（EOEP-5）的一部分。

## 数据简介

&emsp;&emsp;该产品包括11个地表覆盖类别：分别为**林地，灌木，草地，耕地，建筑，裸地/稀疏植被区，雪和冰，开阔水域，草本湿地，红树林，苔藓和地衣**。详细内容见下表：

<table>
  <thead>
     <tr style="text-align: left;">
	<th >数据值</th> 
	<th >颜色</th> 
	<th>色彩映射（16 进制）</th> 
	<th >地表覆盖类型</th>
	<th >英文对照</th> 
     </tr>
  </thead>
<tbody>
 <tr align="left">
	<td >10</td> 
	<td bgcolor=#006400></td> 
	<td >#006400</td> 
	<td>林地</td>
	<td>Trees</td>
 </tr>
 <tr align="left">
	<td >20</td> 
	<td bgcolor=#ffbb22></td> 
	<td >#ffbb22</td> 
	<td >灌木</td>
	<td >Shrubland</td>
 </tr>
 <tr align="left">
	<td >30</td> 
	<td bgcolor=#ffff4c></td> 
	<td >#ffff4c</td> 
	<td >草地</td>
	<td >Grassland</td>
 </tr>
 <tr align="left">
	<td >40</td> 
	<td bgcolor=#f096ff></td> 
	<td >#f096ff</td> 
	<td >耕地</td>
	<td >Cropland</td>
 </tr>
 <tr align="left">
	<td >50</td> 
	<td bgcolor=#fa0000></td> 
	<td >#fa0000</td> 
	<td >建筑</td>
	<td >Built-up</td>
 </tr>
 <tr align="left">
	<td >60</td> 
	<td bgcolor=#b4b4b4></td> 
	<td >#b4b4b4</td> 
	<td >裸地/稀疏植被区</td>
	<td >Barren / sparse vegetation</td>
 </tr>
 <tr align="left">
	<td >70</td> 
	<td bgcolor=#f0f0f0></td> 
	<td >#f0f0f0</td> 
	<td >雪和冰</td>
	<td >Snow and ice</td>
 </tr>
 <tr align="left">
	<td >80</td> 
	<td bgcolor=#0064c8></td> 
	<td >#0064c8</td> 
	<td >开阔水域</td>
	<td >Open water</td>
 </tr>
<tr align="left">
	<td >90</td> 
	<td bgcolor=#0096a0></td> 
	<td >#0096a0</td> 
	<td >草本湿地</td>
	<td >Herbaceous wetland</td>
 </tr>
<tr align="left">
	<td >95</td> 
	<td bgcolor=#00cf75></td> 
	<td >#00cf75</td> 
	<td >红树林</td>
	<td >Mangroves</td>
 </tr>
<tr align="left">
	<td >100</td> 
	<td bgcolor=#fae6a0></td> 
	<td >#fae6a0</td> 
	<td >苔藓和地衣</td>
	<td >Moss and lichen</td>
 </tr>
</tbody>
</table>

## 数据下载

&emsp;&emsp;ESA 土地利用数据官网为：[https://esa-worldcover.org/en](https://esa-worldcover.org/en)

&emsp;&emsp;下载步骤（顺序如图中序号）：

&emsp;&emsp;0.注册一个ESA账号（当然这是必须的），登录并进入数据下载页面。

&emsp;&emsp;1.选择 **‘DOWNLOAD’**。

&emsp;&emsp;2.Extend 选择 **Administrative borders** 。

&emsp;&emsp;3.Borders选择 **Countries** 。
![](https://img-blog.csdnimg.cn/7b84f8c397ee46508910f056a55e643e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)&emsp;&emsp;4.双击中国区域，可获得中国区的范围和产品。

&emsp;&emsp;5.选择全部或部分需要的数据，点击**NEXT**。

![](https://img-blog.csdnimg.cn/a196333344d1456daacf0e345dd553bd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

&emsp;&emsp;也可以查看选择数据的区域（如下图）：

![](https://img-blog.csdnimg.cn/1f5c969d123847a0b796053e995a7849.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

&emsp;&emsp;6.选择质量控制数据和土地利用数据，点击**DOWNLOAD**，待处理完成后即可下载。

![](https://img-blog.csdnimg.cn/84b385b9c50b4beb93de7bc862dfaaa2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

## 从 GEE 获取

&emsp;&emsp;GEE 已完成对 **< ESA WorldCover 10 m 2020 >** 数据的收录，可直接在 GEE 中下载。下载代码及代码说明如下。

```javascript
//引入数据集
var China = ee.FeatureCollection("users/lichongrui321/VTD_PG_Province_China"),
    ESA_WC = ee.ImageCollection("ESA/WorldCover/v100");
    
//边界和显示配置
Map.centerObject(China, 4);
var empty = ee.Image().toByte();
var outline = empty.paint({featureCollection:China,
                          color:0, //颜色透明
                          width:3  //边界宽度
                          });
Map.addLayer(outline, {palette: "ff0000"}, "China");

//ESA_WC数据集配置
var dataset = ESA_WC.first().clip(China);
var visualization = {bands: ['Map']};
Map.addLayer(dataset, visualization, "WorldCover");

//导出数据到网盘
Export.image.toDrive({
    		image:dataset,
    		description: "ESA_WC_China",
    		folder:'ESA',
    		region:China,
    		scale:10,
    		crs:'EPSG:4326',
    		maxPixels:1e13
			});
```
&emsp;&emsp;GEE 处理后数据如下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/dc9525e31781494b970afe0bd135baf8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

&emsp;&emsp;任务结束后，点击**RUN**，简单设置后数据会导出至Google网盘，之后可在Google网盘中下载数据。

![](https://img-blog.csdnimg.cn/2a4b10d528ff476db2081c282770cd56.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

&emsp;&emsp;任务结束后，点击**RUN**，简单设置后数据会导出至Google网盘，之后可在Google网盘中下载数据。


## 数据示例
&emsp;&emsp; 以下为从ESA官网下载的 ESA_WorldCover_10m_2020_v100_N33E111_Map 产品示例图，主要区域为河南省洛阳市。
![](https://img-blog.csdnimg.cn/21120c28af1544a094e278afb2c4e0fb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16)

&emsp;&emsp; 下载获得的 ESA WorldCover 数据类型为 .tif 文件（驱动格式为：COG），数据类型为 8 位无符号整型，坐标系为 WGS 84（EPSG:4326），且具有色彩映射表，色彩与值（地表覆盖类型）的对应关系见 [数据简介](WC_China_ESA_2020_Data.html#数据简介)。
