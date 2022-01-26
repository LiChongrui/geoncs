---
title: 地理坐标系
date: 2021-12-21
tags:
 - 坐标系
categories:
 - 地信研学
---

&emsp;　本页对地理坐标系（Geographic Coordinate System）的基础参数的进行介绍，并统计了 454 个地理坐标系的官方 ID（EPSG），坐标系名称，椭球体，长半轴（m），反扁率，角度单位和本初子午线等参数。

<!-- more -->

## 简介

&emsp;　地理坐标系（Geographic Coordinate System），是使用三维球面来定义地球表面位置，以实现通过经纬度对地球表面点位引用的坐标系。一个地理坐标系包括角度测量单位、本初子午线和参考椭球体三部分。在球面系统中，水平线是等纬度线或纬线。垂直线是等经度线或经线。

&emsp;　常见的 WGS 84、CGCS 2000 等都属于地理坐标系。

## 角度单位

&emsp;　角度单位定义了 10 种地理坐标系中角度单位名称和最小值（类似于分辨率）。下表对可能涉及到的角度单位进行列举，以供与 [主要坐标参数](GEOGCS.html#主要坐标参数) 中 **角度单位** 的内容进行对应。

角度单位名称|对应中文单位|每单位弧度（°）
:---|:---|:---
Arcminute|弧分|0.000290888208665721
Arcsecond|弧秒|0.00000484813681109535
Degree|度|0.0174532925199432
Gon / Grad|百分制度|0.0157079632679489
Microradian|微弧度|0.000000999999999999999
Mil_6400|米卢_6400|0.00098174770424681
Milliarcsecond|毫微秒|0.00000000484813681109536
Minute_Centesimal|百分制分|0.000157079632679489
Radian|弧度|1
Second_Centesimal|百分制秒|0.00000157079632679489

## 本初子午线

&emsp;　本初子午线，是指在地球上，连接南北两极的经线。国际上通常将通过英国伦敦格林尼治（Greenwich）天文台原址的那条经线称为 0° 经线称为本初子午线。

&emsp;　早期的坐标系并未完全以通过英国伦敦格林尼治（Greenwich）天文台原址的经线作为本初子午线，例如：Bern 1898(Bern)（EPSG:4801）以过 Bern （伯尔尼）的经线为本初子午线。下表列举了 15 种本初子午线设置，以供与 [主要坐标参数](GEOGCS.html#主要坐标参数) 中 **本初子午线** 的内容进行对应。

本初子午线名称|对应中文名|经线（°）
:---|:---|:---
Athens|雅典|23.7163375
Bern|伯尔尼|7.439583333
Bogota|波哥大|-74.08091667
Brussels|布鲁塞尔|4.367975
Ferro|费罗|-17.66666667
Greenwich|格林尼治|0
Jakarta|雅加达|106.8077194
Lisbon|里斯本|-9.131906111
Madrid|马德里|-3.687938889
Oslo|奥斯陆|10.72291667
Paris|巴黎|2.337229167
Paris_RGS|巴黎|2.337208333
Reference_Meridian|参考经线|0
Rome|罗马|12.45233333
Stockholm|斯德哥尔摩|18.05827778

## 椭球体

&emsp;　 地球是一个两极稍扁，赤道略鼓的不规则球体。由于高山、悬崖的存在，使得地球表面存在无数的凸起和凹陷。我们假定海水面静止时，其延伸到大陆内部的形成的一个闭合曲面，我们称其为大地水准面。在大地水准面的基础之上，我们可以构建参考椭球体。大地水准面虽然十分复杂，但从整体来看，起伏是微小的，且形状接近一个扁率极小的椭圆绕短轴旋转所形成的规则椭球体，这个椭球体称为参考椭球体。其表面是一个规则数学表面，可用数学公式表达，所以在测量和制图中用它替代地球的自然表面。

&emsp;　 椭球体通常由长半轴和反扁率（长半轴除以长半轴与短半轴之差，为扁率的倒数）来定义。下表对可能涉及到的椭球体进行列举，以供与 [主要坐标参数](GEOGCS.html#主要坐标参数) 中 **椭球体** 相关的内容进行对应。

椭球体|长半轴（m）|反扁率
:----|:----|:---
Bessel 1841|6377397.155|299.1528128
GRS 1967 Modified|6378160|298.25
GRS 1980|6378137|298.2572221
Average Terrestrial System 1977|6378135|298.257
International 1924|6378388|297
Clarke 1866|6378206.4|294.9786982
WGS 84|6378137|298.2572236
Everest 1830 (1937 Adjustment)|6377276.345|300.8017
Clarke 1880 (RGS)|6378249.145|293.465
Everest 1830 (1962 Definition)|6377301.243|300.8017255
Everest 1830 (1975 Definition)|6377299.151|300.8017255
Krassowsky 1940|6378245|298.3
Clarke 1880 (IGN)|6378249.2|293.4660213
Clarke 1858|6378293.645|294.2606764
War Office|6378300|296
Airy 1830|6377563.396|299.3249646
Australian National Spheroid|6378160|298.25
Clarke 1880 (Arc)|6378249.145|293.4663077
Helmert 1906|6378200|298.3
GRS 1967|6378160|298.2471674
Indonesian National Spheroid|6378160|298.247
Clarke 1880|6378249.145|293.4663077
Everest (1830 Definition)|6377299.366|300.8017255
Everest 1830 Modified|6377304.063|300.8017
Bessel Modified|6377492.018|299.1528128
NWL 9D|6378145|298.25
Clarke 1880 (Benoit)|6378300.789|293.4663155
Bessel Namibia (GLM)|6377483.865|299.1528128
Everest 1830 (1967 Definition)|6377298.556|300.8017
Airy Modified 1849|6377340.189|299.3249646
WGS 72|6378135|298.26
CGCS2000|6378137|298.2572221
IAG 1975|6378140|298.257
Danish 1876|6377019.27|300
Clarke 1880 (international foot)|6378306.37|293.4663077
Hough 1960|6378270|297
PZ-90|6378136|298.2578393
Everest 1830 (RSO 1969)|6377295.664|300.8017
Plessis 1817|6376523|308.64
Struve 1860|6378298.3|294.73
GSK-2011|6378136.5|298.2564151

## 主要坐标参数

*&emsp;　 如果想搜索坐标系信息，可使用浏览器的页面搜索功能（ 快捷键通常为：Ctrl + F ）进行搜索。* 

<table style="font-size:14px;">
  <thead>
    <tr style="text-align: left;">
      <th>官方 ID</th>
      <th>坐标系名称</th>
      <th>椭球体</th>
      <th>长半轴（m）</th>
      <th>反扁率</th>
      <th>角度单位</th>
      <th>本初子午线</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EPSG:3819</td>
      <td>HD1909</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3821</td>
      <td>TWD67</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3824</td>
      <td>TWD97</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3889</td>
      <td>IGRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:3906</td>
      <td>MGI 1901</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4023</td>
      <td>MOLDREF99</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4046</td>
      <td>RGRDC 2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4075</td>
      <td>SREF98</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4081</td>
      <td>REGCAN95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4120</td>
      <td>Greek</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4121</td>
      <td>GGRS87</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4122</td>
      <td>ATS77</td>
      <td>Average Terrestrial System 1977</td>
      <td>6378135</td>
      <td>298.257</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4123</td>
      <td>KKJ</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4124</td>
      <td>RT90</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4125</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4126</td>
      <td>LKS94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4127</td>
      <td>Tete</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4128</td>
      <td>Madzansua</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4129</td>
      <td>Observatario</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4130</td>
      <td>Moznet</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4131</td>
      <td>Indian 1960</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4132</td>
      <td>FD58</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4133</td>
      <td>EST92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4134</td>
      <td>PSD93</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4135</td>
      <td>Old Hawaiian</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4136</td>
      <td>St. Lawrence Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4137</td>
      <td>St. Paul Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4138</td>
      <td>St. George Island</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4139</td>
      <td>Puerto Rico</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4140</td>
      <td>NAD83(CSRS)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4141</td>
      <td>Israel 1993</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4142</td>
      <td>Locodjo 1965</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4143</td>
      <td>Abidjan 1987</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4144</td>
      <td>Kalianpur 1937</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4145</td>
      <td>Kalianpur 1962</td>
      <td>Everest 1830 (1962 Definition)</td>
      <td>6377301.243</td>
      <td>300.8017255</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4146</td>
      <td>Kalianpur 1975</td>
      <td>Everest 1830 (1975 Definition)</td>
      <td>6377299.151</td>
      <td>300.8017255</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4147</td>
      <td>Hanoi 1972</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4148</td>
      <td>Hartebeesthoek94</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4149</td>
      <td>CH1903</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4150</td>
      <td>CH1903+</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4151</td>
      <td>CHTRF95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4152</td>
      <td>NAD83(HARN)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4153</td>
      <td>Rassadiran</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4154</td>
      <td>ED50(ED77)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4155</td>
      <td>Dabola 1981</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4156</td>
      <td>S-JTSK</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4157</td>
      <td>Mount Dillon</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4158</td>
      <td>Naparima 1955</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4159</td>
      <td>ELD79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4160</td>
      <td>Chos Malal 1914</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4161</td>
      <td>Pampa del Castillo</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4162</td>
      <td>Korean 1985</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4163</td>
      <td>Yemen NGN96</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4164</td>
      <td>South Yemen</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4165</td>
      <td>Bissau</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4166</td>
      <td>Korean 1995</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4167</td>
      <td>NZGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4168</td>
      <td>Accra</td>
      <td>War Office</td>
      <td>6378300</td>
      <td>296</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4169</td>
      <td>American Samoa 1962</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4170</td>
      <td>SIRGAS 1995</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4171</td>
      <td>RGF93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4173</td>
      <td>IRENET95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4174</td>
      <td>Sierra Leone 1924</td>
      <td>War Office</td>
      <td>6378300</td>
      <td>296</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4175</td>
      <td>Sierra Leone 1968</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4176</td>
      <td>Australian Antarctic</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4178</td>
      <td>Pulkovo 1942(83)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4179</td>
      <td>Pulkovo 1942(58)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4180</td>
      <td>EST97</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4181</td>
      <td>Luxembourg 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4182</td>
      <td>Azores Occidental 1939</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4183</td>
      <td>Azores Central 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4184</td>
      <td>Azores Oriental 1940</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4188</td>
      <td>OSNI 1952</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4189</td>
      <td>REGVEN</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4190</td>
      <td>POSGAR 98</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4191</td>
      <td>Albanian 1987</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4192</td>
      <td>Douala 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4193</td>
      <td>Manoca 1962</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4194</td>
      <td>Qornoq 1927</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4195</td>
      <td>Scoresbysund 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4196</td>
      <td>Ammassalik 1958</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4197</td>
      <td>Garoua</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4198</td>
      <td>Kousseri</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4199</td>
      <td>Egypt 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4200</td>
      <td>Pulkovo 1995</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4201</td>
      <td>Adindan</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4202</td>
      <td>AGD66</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4203</td>
      <td>AGD84</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4204</td>
      <td>Ain el Abd</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4205</td>
      <td>Afgooye</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4206</td>
      <td>Agadez</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4207</td>
      <td>Lisbon</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4208</td>
      <td>Aratu</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4209</td>
      <td>Arc 1950</td>
      <td>Clarke 1880 (Arc)</td>
      <td>6378249.145</td>
      <td>293.4663077</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4210</td>
      <td>Arc 1960</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4211</td>
      <td>Batavia</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4212</td>
      <td>Barbados 1938</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4213</td>
      <td>Beduaram</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4214</td>
      <td>Beijing 1954</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4215</td>
      <td>BD50</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4216</td>
      <td>Bermuda 1957</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4218</td>
      <td>Bogota 1975</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4219</td>
      <td>Bukit Rimpah</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4220</td>
      <td>Camacupa 1948</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4221</td>
      <td>Campo Inchauspe</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4222</td>
      <td>Cape</td>
      <td>Clarke 1880 (Arc)</td>
      <td>6378249.145</td>
      <td>293.4663077</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4223</td>
      <td>Carthage</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4224</td>
      <td>Chua</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4225</td>
      <td>Corrego Alegre 1970-72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4227</td>
      <td>Deir ez Zor</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4228</td>
      <td>Douala 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4229</td>
      <td>Egypt 1907</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4230</td>
      <td>ED50</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4231</td>
      <td>ED87</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4232</td>
      <td>Fahud</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4234</td>
      <td>Garoua</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4235</td>
      <td>CSG67</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4236</td>
      <td>Hu Tzu Shan 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4237</td>
      <td>HD72</td>
      <td>GRS 1967</td>
      <td>6378160</td>
      <td>298.247167427</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4238</td>
      <td>ID74</td>
      <td>Indonesian National Spheroid</td>
      <td>6378160</td>
      <td>298.247</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4239</td>
      <td>Indian 1954</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4240</td>
      <td>Indian 1975</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4241</td>
      <td>Jamaica 1875</td>
      <td>Clarke 1880</td>
      <td>6378249.14480801</td>
      <td>293.466307655636</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4242</td>
      <td>JAD69</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4243</td>
      <td>Kalianpur 1880</td>
      <td>Everest (1830 Definition)</td>
      <td>6377299.36559538</td>
      <td>300.801725543355</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4244</td>
      <td>Kandawala</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4245</td>
      <td>Kertau 1968</td>
      <td>Everest 1830 Modified</td>
      <td>6377304.063</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4246</td>
      <td>KOC</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4247</td>
      <td>La Canoa</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4248</td>
      <td>PSAD56</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4249</td>
      <td>Lake</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4250</td>
      <td>Leigon</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4251</td>
      <td>Liberia 1964</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4252</td>
      <td>Lome</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4253</td>
      <td>Luzon 1911</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4254</td>
      <td>Hito XVIII 1963</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4255</td>
      <td>Herat North</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4256</td>
      <td>Mahe 1971</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4257</td>
      <td>Makassar</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4258</td>
      <td>ETRS89</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4259</td>
      <td>Malongo 1987</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4260</td>
      <td>Manoca 1962</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4261</td>
      <td>Merchich</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4262</td>
      <td>Massawa</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4263</td>
      <td>Minna</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4265</td>
      <td>Monte Mario</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4266</td>
      <td>M'poraloko</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4267</td>
      <td>NAD27</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4268</td>
      <td>NAD27</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4269</td>
      <td>NAD83</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4270</td>
      <td>Nahrwan 1967</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4271</td>
      <td>Naparima 1972</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4272</td>
      <td>NZGD49</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4273</td>
      <td>NGO 1948</td>
      <td>Bessel Modified</td>
      <td>6377492.018</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4274</td>
      <td>Datum 73</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4275</td>
      <td>NTF</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4276</td>
      <td>NSWC 9Z-2</td>
      <td>NWL 9D</td>
      <td>6378145</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4277</td>
      <td>OSGB36</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4278</td>
      <td>OSGB70</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4279</td>
      <td>OS(SN)80</td>
      <td>Airy 1830</td>
      <td>6377563.396</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4280</td>
      <td>Batavia</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4281</td>
      <td>Palestine 1923</td>
      <td>Clarke 1880 (Benoit)</td>
      <td>6378300.789</td>
      <td>293.466315538981</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4282</td>
      <td>Pointe Noire</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4283</td>
      <td>GDA94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4284</td>
      <td>Pulkovo 1942</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4285</td>
      <td>Qatar 1974</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4286</td>
      <td>Qatar 1948</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4287</td>
      <td>Qornoq 1927</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4288</td>
      <td>Loma Quintana</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4289</td>
      <td>Amersfoort</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4291</td>
      <td>SAD69</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4292</td>
      <td>Sapper Hill 1943</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4293</td>
      <td>Schwarzeck</td>
      <td>Bessel Namibia (GLM)</td>
      <td>6377483.86528042</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4294</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4295</td>
      <td>Serindung</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4296</td>
      <td>Adindan</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4297</td>
      <td>Tananarive</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4298</td>
      <td>Timbalai 1948</td>
      <td>Everest 1830 (1967 Definition)</td>
      <td>6377298.556</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4299</td>
      <td>TM65</td>
      <td>Airy Modified 1849</td>
      <td>6377340.189</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4300</td>
      <td>TM75</td>
      <td>Airy Modified 1849</td>
      <td>6377340.189</td>
      <td>299.3249646</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4301</td>
      <td>Tokyo</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4302</td>
      <td>Trinidad 1903</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4303</td>
      <td>TC(1948)</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4304</td>
      <td>Voirol 1875</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4306</td>
      <td>Bern 1938</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4307</td>
      <td>Nord Sahara 1959</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4308</td>
      <td>RT38</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4309</td>
      <td>Yacare</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4310</td>
      <td>Yoff</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4311</td>
      <td>Zanderij</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4312</td>
      <td>MGI</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4313</td>
      <td>BD72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4314</td>
      <td>DHDN</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4315</td>
      <td>Conakry 1905</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4316</td>
      <td>Dealul Piscului 1930</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4317</td>
      <td>Pulkovo 1942(58)</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4318</td>
      <td>NGN</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4319</td>
      <td>KUDAMS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4322</td>
      <td>WGS 72</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4324</td>
      <td>WGS 72BE</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4326</td>
      <td>WGS 84</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4463</td>
      <td>RGSPM06</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4470</td>
      <td>RGM04</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4475</td>
      <td>Cadastre 1997</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4483</td>
      <td>Mexico ITRF92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4490</td>
      <td>China Geodetic Coordinate System 2000</td>
      <td>CGCS2000</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4555</td>
      <td>New Beijing</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4558</td>
      <td>RRAF 1991</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4600</td>
      <td>Anguilla 1957</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4601</td>
      <td>Antigua 1943</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4602</td>
      <td>Dominica 1945</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4603</td>
      <td>Grenada 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4604</td>
      <td>Montserrat 1958</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4605</td>
      <td>St. Kitts 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4606</td>
      <td>St. Lucia 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4607</td>
      <td>St. Vincent 1945</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4608</td>
      <td>NAD27(76)</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4609</td>
      <td>NAD27(CGQ77)</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4610</td>
      <td>Xian 1980</td>
      <td>IAG 1975</td>
      <td>6378140</td>
      <td>298.257</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4611</td>
      <td>Hong Kong 1980</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4612</td>
      <td>JGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4613</td>
      <td>Segara</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4614</td>
      <td>QND95</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4615</td>
      <td>Porto Santo</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4616</td>
      <td>Selvagem Grande</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4617</td>
      <td>NAD83(CSRS)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4618</td>
      <td>SAD69</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4619</td>
      <td>SWEREF99</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4620</td>
      <td>Point 58</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4621</td>
      <td>Fort Marigot</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4622</td>
      <td>Guadeloupe 1948</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4623</td>
      <td>CSG67</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4624</td>
      <td>RGFG95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4625</td>
      <td>Martinique 1938</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4626</td>
      <td>Reunion 1947</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4627</td>
      <td>RGR92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4628</td>
      <td>Tahiti 52</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4629</td>
      <td>Tahaa 54</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4630</td>
      <td>IGN72 Nuku Hiva</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4631</td>
      <td>IGN 1962 Kerguelen</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4632</td>
      <td>Combani 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4633</td>
      <td>IGN56 Lifou</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4634</td>
      <td>IGN72 Grande Terre</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4635</td>
      <td>ST87 Ouvea</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4636</td>
      <td>Petrels 1972</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4637</td>
      <td>Perroud 1950</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4638</td>
      <td>Saint Pierre et Miquelon 1950</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4639</td>
      <td>MOP78</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4640</td>
      <td>RRAF 1991</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4641</td>
      <td>IGN53 Mare</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4642</td>
      <td>ST84 Ile des Pins</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4643</td>
      <td>ST71 Belep</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4644</td>
      <td>NEA74 Noumea</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4645</td>
      <td>RGNC91-93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4646</td>
      <td>Grand Comoros</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4657</td>
      <td>Reykjavik 1900</td>
      <td>Danish 1876</td>
      <td>6377019.27</td>
      <td>300</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4658</td>
      <td>Hjorsey 1955</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4659</td>
      <td>ISN93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4660</td>
      <td>Helle 1954</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4661</td>
      <td>LKS92</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4662</td>
      <td>IGN72 Grande Terre</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4663</td>
      <td>Porto Santo 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4664</td>
      <td>Azores Oriental 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4665</td>
      <td>Azores Central 1995</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4666</td>
      <td>Lisbon 1890</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4667</td>
      <td>IKBD-92</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4668</td>
      <td>ED79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4669</td>
      <td>LKS94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4670</td>
      <td>IGM95</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4671</td>
      <td>Voirol 1879</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4672</td>
      <td>Chatham Islands 1971</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4673</td>
      <td>Chatham Islands 1979</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4674</td>
      <td>SIRGAS 2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4675</td>
      <td>Guam 1963</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4676</td>
      <td>Vientiane 1982</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4677</td>
      <td>Lao 1993</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4678</td>
      <td>Lao 1997</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4679</td>
      <td>Jouik 1961</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4680</td>
      <td>Nouakchott 1965</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4682</td>
      <td>Gulshan 303</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4683</td>
      <td>PRS92</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4684</td>
      <td>Gan 1970</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4685</td>
      <td>Kasai 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4686</td>
      <td>MAGNA-SIRGAS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4687</td>
      <td>RGPF</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4688</td>
      <td>Fatu Iva 72</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4689</td>
      <td>IGN63 Hiva Oa</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4690</td>
      <td>Tahiti 79</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4691</td>
      <td>Moorea 87</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4692</td>
      <td>Maupiti 83</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4693</td>
      <td>Nakhl-e Ghanem</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4694</td>
      <td>POSGAR 94</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4695</td>
      <td>Katanga 1955</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4696</td>
      <td>Kasai 1953</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4697</td>
      <td>IGC 1962 6th Parallel South</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4698</td>
      <td>IGN 1962 Kerguelen</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4699</td>
      <td>Le Pouce 1934</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4700</td>
      <td>IGN Astro 1960</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4701</td>
      <td>IGCB 1955</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4702</td>
      <td>Mauritania 1999</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4703</td>
      <td>Mhast 1951</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4704</td>
      <td>Mhast (onshore)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4705</td>
      <td>Mhast (offshore)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4706</td>
      <td>Egypt Gulf of Suez S-650 TL</td>
      <td>Helmert 1906</td>
      <td>6378200</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4707</td>
      <td>Tern Island 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4708</td>
      <td>Cocos Islands 1965</td>
      <td>Australian National Spheroid</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4709</td>
      <td>Iwo Jima 1945</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4710</td>
      <td>Astro DOS 71</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4711</td>
      <td>Marcus Island 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4712</td>
      <td>Ascension Island 1958</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4713</td>
      <td>Ayabelle Lighthouse</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4714</td>
      <td>Bellevue</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4715</td>
      <td>Camp Area Astro</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4716</td>
      <td>Phoenix Islands 1966</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4717</td>
      <td>Cape Canaveral</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4718</td>
      <td>Solomon 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4719</td>
      <td>Easter Island 1967</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4720</td>
      <td>Fiji 1986</td>
      <td>WGS 72</td>
      <td>6378135</td>
      <td>298.26</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4721</td>
      <td>Fiji 1956</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4722</td>
      <td>South Georgia 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4723</td>
      <td>GCGD59</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4724</td>
      <td>Diego Garcia 1969</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4725</td>
      <td>Johnston Island 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4726</td>
      <td>SIGD61</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4727</td>
      <td>Midway 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4728</td>
      <td>PN84</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4729</td>
      <td>Pitcairn 1967</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4730</td>
      <td>Santo 1965</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4731</td>
      <td>Viti Levu 1912</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4732</td>
      <td>Marshall Islands 1960</td>
      <td>Hough 1960</td>
      <td>6378270</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4733</td>
      <td>Wake Island 1952</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4734</td>
      <td>Tristan 1968</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4735</td>
      <td>Kusaie 1951</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4736</td>
      <td>Deception Island</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4737</td>
      <td>Korea 2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4738</td>
      <td>Hong Kong 1963</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4739</td>
      <td>Hong Kong 1963(67)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4740</td>
      <td>PZ-90</td>
      <td>PZ-90</td>
      <td>6378136</td>
      <td>298.257839303</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4741</td>
      <td>FD54</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4742</td>
      <td>GDM2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4743</td>
      <td>Karbala 1979</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4744</td>
      <td>Nahrwan 1934</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4745</td>
      <td>RD/83</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4746</td>
      <td>PD/83</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4747</td>
      <td>GR96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4748</td>
      <td>Vanua Levu 1915</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4749</td>
      <td>RGNC91-93</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4750</td>
      <td>ST87 Ouvea</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4751</td>
      <td>Kertau (RSO)</td>
      <td>Everest 1830 (RSO 1969)</td>
      <td>6377295.664</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4752</td>
      <td>Viti Levu 1912</td>
      <td>Clarke 1880 (international foot)</td>
      <td>6378306.3696</td>
      <td>293.466307655635</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4753</td>
      <td>fk89</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4754</td>
      <td>LGD2006</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4755</td>
      <td>DGN95</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4756</td>
      <td>VN-2000</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4757</td>
      <td>SVY21</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4758</td>
      <td>JAD2001</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4759</td>
      <td>NAD83(NSRS2007)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4760</td>
      <td>WGS 66</td>
      <td>NWL 9D</td>
      <td>6378145</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4761</td>
      <td>HTRS96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4762</td>
      <td>BDA2000</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4763</td>
      <td>Pitcairn 2006</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4764</td>
      <td>RSRGD2000</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4765</td>
      <td>Slovenia 1996</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4801</td>
      <td>Bern 1898 (Bern)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Bern</td>
    </tr>
    <tr>
      <td>EPSG:4802</td>
      <td>Bogota 1975 (Bogota)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Bogota</td>
    </tr>
    <tr>
      <td>EPSG:4803</td>
      <td>Lisbon (Lisbon)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Lisbon</td>
    </tr>
    <tr>
      <td>EPSG:4804</td>
      <td>Makassar (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4805</td>
      <td>MGI (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:4806</td>
      <td>Monte Mario (Rome)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Rome</td>
    </tr>
    <tr>
      <td>EPSG:4807</td>
      <td>NTF (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4808</td>
      <td>Batavia (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4809</td>
      <td>BD50 (Brussels)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Brussels</td>
    </tr>
    <tr>
      <td>EPSG:4810</td>
      <td>Tananarive (Paris)</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4811</td>
      <td>Voirol 1875 (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4813</td>
      <td>Batavia (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4814</td>
      <td>RT38 (Stockholm)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Stockholm</td>
    </tr>
    <tr>
      <td>EPSG:4815</td>
      <td>Greek (Athens)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Athens</td>
    </tr>
    <tr>
      <td>EPSG:4816</td>
      <td>Carthage (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4817</td>
      <td>NGO 1948 (Oslo)</td>
      <td>Bessel Modified</td>
      <td>6377492.018</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Oslo</td>
    </tr>
    <tr>
      <td>EPSG:4818</td>
      <td>S-JTSK (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:4819</td>
      <td>Nord Sahara 1959</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4820</td>
      <td>Segara (Jakarta)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>EPSG:4821</td>
      <td>Voirol 1879 (Paris)</td>
      <td>Clarke 1880 (IGN)</td>
      <td>6378249.2</td>
      <td>293.466021293627</td>
      <td>grad</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>EPSG:4823</td>
      <td>Sao Tome</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4824</td>
      <td>Principe</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:4901</td>
      <td>ATF (Paris)</td>
      <td>Plessis 1817</td>
      <td>6376523</td>
      <td>308.64</td>
      <td>grad</td>
      <td>Paris RGS</td>
    </tr>
    <tr>
      <td>EPSG:4902</td>
      <td>ATF (Paris)</td>
      <td>Plessis 1817</td>
      <td>6376523</td>
      <td>308.64</td>
      <td>grad</td>
      <td>Paris RGS</td>
    </tr>
    <tr>
      <td>EPSG:4903</td>
      <td>Madrid 1870 (Madrid)</td>
      <td>Struve 1860</td>
      <td>6378298.3</td>
      <td>294.73</td>
      <td>degree</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>EPSG:4904</td>
      <td>Lisbon 1890 (Lisbon)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Lisbon</td>
    </tr>
    <tr>
      <td>EPSG:5013</td>
      <td>PTRA08</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5132</td>
      <td>Tokyo 1892</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5228</td>
      <td>S-JTSK/05</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5229</td>
      <td>S-JTSK/05 (Ferro)</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Ferro</td>
    </tr>
    <tr>
      <td>EPSG:5233</td>
      <td>SLD99</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5246</td>
      <td>GDBD2009</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5252</td>
      <td>TUREF</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5264</td>
      <td>DRUKREF 03</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5324</td>
      <td>ISN2004</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5340</td>
      <td>POSGAR 2007</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5354</td>
      <td>MARGEN</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5360</td>
      <td>SIRGAS-Chile 2002</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5365</td>
      <td>CR05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5371</td>
      <td>MACARIO SOLIS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5373</td>
      <td>Peru96</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5381</td>
      <td>SIRGAS-ROU98</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5393</td>
      <td>SIRGAS_ES2007.8</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5451</td>
      <td>Ocotepeque 1935</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5464</td>
      <td>Sibun Gorge 1922</td>
      <td>Clarke 1858</td>
      <td>6378293.64520876</td>
      <td>294.260676369261</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5467</td>
      <td>Panama-Colon 1911</td>
      <td>Clarke 1866</td>
      <td>6378206.4</td>
      <td>294.978698213898</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5489</td>
      <td>RGAF09</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5524</td>
      <td>Corrego Alegre 1961</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5527</td>
      <td>SAD69(96)</td>
      <td>GRS 1967 Modified</td>
      <td>6378160</td>
      <td>298.25</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5546</td>
      <td>PNG94</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5561</td>
      <td>UCS-2000</td>
      <td>Krassowsky 1940</td>
      <td>6378245</td>
      <td>298.3</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5593</td>
      <td>FEH2010</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5681</td>
      <td>DB_REF</td>
      <td>Bessel 1841</td>
      <td>6377397.155</td>
      <td>299.1528128</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:5886</td>
      <td>TGD2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6135</td>
      <td>CIGD11</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6207</td>
      <td>Nepal 1981</td>
      <td>Everest 1830 (1937 Adjustment)</td>
      <td>6377276.345</td>
      <td>300.8017</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6311</td>
      <td>CGRS93</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6318</td>
      <td>NAD83(2011)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6322</td>
      <td>NAD83(PA11)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6325</td>
      <td>NAD83(MA11)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6365</td>
      <td>Mexico ITRF2008</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6668</td>
      <td>JGD2011</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6706</td>
      <td>RDN2008</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6783</td>
      <td>NAD83(CORS96)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6881</td>
      <td>Aden 1925</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6882</td>
      <td>Bekaa Valley 1920</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6883</td>
      <td>Bioko</td>
      <td>International 1924</td>
      <td>6378388</td>
      <td>297</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6892</td>
      <td>South East Island 1943</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6894</td>
      <td>Gambia</td>
      <td>Clarke 1880 (RGS)</td>
      <td>6378249.145</td>
      <td>293.465</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6980</td>
      <td>IGD05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6983</td>
      <td>IG05 Intermediate CRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6987</td>
      <td>IGD05/12</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:6990</td>
      <td>IG05/12 Intermediate CRS</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7035</td>
      <td>RGSPM06 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7037</td>
      <td>RGR92 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7039</td>
      <td>RGM04 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7041</td>
      <td>RGFG95 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7073</td>
      <td>RGTAAF07</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7084</td>
      <td>RGF93 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7086</td>
      <td>RGAF09 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7088</td>
      <td>RGTAAF07 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7133</td>
      <td>RGTAAF07 (lon-lat)</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7136</td>
      <td>IGD05</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7139</td>
      <td>IGD05/12</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7373</td>
      <td>ONGD14</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7683</td>
      <td>GSK-2011</td>
      <td>GSK-2011</td>
      <td>6378136.5</td>
      <td>298.2564151</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7686</td>
      <td>Kyrg-06</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7798</td>
      <td>BGS2005</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7844</td>
      <td>GDA2020</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7881</td>
      <td>St. Helena Tritan</td>
      <td>WGS 84</td>
      <td>6378137</td>
      <td>298.257223563</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
    <tr>
      <td>EPSG:7886</td>
      <td>SHGD2015</td>
      <td>GRS 1980</td>
      <td>6378137</td>
      <td>298.257222101</td>
      <td>degree</td>
      <td>Greenwich</td>
    </tr>
  </tbody>
</table>
