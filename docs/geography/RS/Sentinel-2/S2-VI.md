---
title: 可计算植被指数
date: 2021-12-29
tags:
 - Sentinel-2
categories:
 - 遥感研学
---

&emsp;&emsp; 本页统计了 Sentinel-2A、2B 卫星可计算的植被指数，波段与 [光谱波段](S2-Spectrum.html) 中的波段编号对应。

<!-- more -->

|序号 |指数 |英文名 |缩写 |公式 |
|:---| :--- | :--- | :--- | :--- |
|1| 变换型土壤调节植被指数 | Adjusted Transformed Soil-Adjusted Vegetation Index | ATSAVI | $\ 1.22 \times  \cfrac {{B9 - 1.22 \times B4 - 0.03}}{{1.22 \times B9 + B5 + 0.162472}}$ |
|2|无气溶胶植被指数 1600|Aerosol Free Vegetation Index 1600| AFRI 1600|$\ B9 - 0.66 \times \cfrac {B11}{B9 + 0.56 \times B11}$ |
|3|无气溶胶植被指数 2100|Aerosol Free Vegetation Index 2100|AFRI 2100|$\  B9 - 0.5\times \cfrac {B12 }{B9 + 0.56 \times B12}$|
|4|变动指数|Alteration||$\ \cfrac {B11}{B12}$|
|5|花青素反射指数 1|Anthocyanin Reflectance Index|ARI|$\ \cfrac {1}{B3} - \cfrac {1}{B5}$|
|6|阿什本植被指数|Ashburn Vegetation Index|AVI|$\ 2 \times B9 -B4$|
|7|大气抵抗植被指数| Atmospherically Resistant Vegetation Index|ARVI|$\ \cfrac {B8a - B5 - y \times (B5-B1) }{B8a + B5 - y \times (B5-B1)}$|
|8|大气抵抗植被指数 2 |Atmospherically Resistant Vegetation Index 2|ARVI 2|$\ -0.18+1.17 \times \cfrac {B9-B5} {B9+B5}$|
|9|宽蓝光动态范围植被指数  |Blue-Wide Dynamic Range Vegetation Index|BWDRVI|$\ \cfrac {0.1 \times B9-B1}{0.1 \times B9+B1}$|
|10|布朗宁反射指数 |Browning Reflectance Index|BRI|$\ \cfrac { \cfrac {1}{B3} - \cfrac {1}{B5}}{B9}$|
|11|冠层叶绿素含量指数|Canopy Chlorophyll Content Index|CCCI|$\ \cfrac { \cfrac {B9-B5}{B9+B5}} { \cfrac {B9-B4}{B9+B4}}$|





