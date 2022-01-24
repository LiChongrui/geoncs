---
title: 插值
date: 2018-10-08 23:00:00
tags:
 - AUNSPLIN
categories:
 - 气象研学
---

## 1 文件准备

&emsp;&emsp; 插值模块、数据和插值脚本应在同一文件夹下，文件组织示例如下：

::: theorem ANUSPIN 插值文件组织示例
- **splina.exe**&emsp;&emsp; &emsp;&emsp; ||生成表面文件的**模块**。
- **lapgrd.exe**&emsp;&emsp; &emsp;&emsp; || 生成拟合曲面和贝叶斯标准误差曲面的**模块**。
- [**splina.cmd**](Scripting.html#_2-2-splina-模块脚本参数示例)&emsp;&emsp; &emsp;&emsp; || 生成表面文件的模块**参数脚本**。
- [**lapgrd.cmd**](Scripting.html#_2-3-lapgrd-模块脚本参数示例)&emsp;&emsp; &emsp;&emsp; || 生成拟合曲面和贝叶斯标准误差曲面模块的**参数脚本**。
- **rainn.dat**&emsp;&emsp;&emsp; &emsp;&emsp; || 以 ASCII 码保存的包含站点经纬度和高程信息的**站点数据**。
- **tas4.txt**&emsp;&emsp; &emsp;&emsp; || 以 ASCII 码保存的 **DEM 数据**。

:::
::: tip 提示
&emsp;&emsp;SPLINA.exe、LAPGRD.exe 可从 ANUSPLIN 安装文件夹下复制。
::: 

## 2 脚本编写
### 2.1 新建插值脚本

&emsp;&emsp;使用记事本、写字板或 Word 等文本编辑程序创建纯文本文件 .txt，将扩展名改为 .cmd，利用记事本、写字板或 Word 等文本编辑程序对 .cmd 命令行文件进行编辑，以 splina.cmd 和 lapgrd.cmd 为例。

### 2.2 splina 模块脚本参数示例

&emsp;&emsp;生成表面文件的模块为 splina.exe ，其对应的脚本 splina.cmd （文件名自拟，以下为示例），脚本参数（表 2.2-a）和参数解释（表 2.2-b）供大家参考学习。

**<center>表 2.2-a splina.cmd 脚本示例</center>**

```bash
rainsp
1
2
1
0
0
140 150 0 5
-45 -39 0 5
2 5000 1 1
1000.0
2
2
12
0
1
1
rainn.dat
300
6
(a6,f8.3,f8.3,f8.1/12f9.2)
04-P-04-splina.res
04-P-04-splina.opt
04-P-04-splina.sur
04-P-04-splina.lis
04-P-04-splina.cov


```
::: warning 注意
&emsp;&emsp;每个参数为一行。
:::

**<center>表 2.2-b [splina.cmd] 脚本解释</center>**

<table>
 <tr align="left">
	<td >参数（例）</td> 
	<td colspan="2">说明</td> 
	<td>解释</td>
 </tr>
 <tr align="left">
	<td >rainsp</td> 
	<td colspan="2">表面文件名</td> 
	<td></td>
 </tr>
 <tr align="left">
	<td rowspan="9">1</td> 
	<td  colspan="2"  rowspan="9">插值数据的单位</td> 
	<td >0-未定义</td>
 </tr>
 <tr align="left"><td >1-米</td></tr>
 <tr align="left"><td >2-英尺</td></tr>
 <tr align="left"><td >3-千米</td></tr>
 <tr align="left"><td >4-英里</td></tr>
 <tr align="left"><td >5-度</td></tr>
 <tr align="left"><td >6-弧度</td></tr>
 <tr align="left"><td >7-毫米</td></tr>
 <tr align="left"><td >8-兆焦耳</td></tr> 
 <tr align="left">
	<td >2</td> 
	<td   rowspan="4">变量</td> 
	<td >独立样条变量</td>
	<td >0-10</td>
 </tr>
 <tr align="left">
	<td >1</td> 
	<td >独立协变量</td>
	<td >0-7</td>
 </tr>    
 <tr align="left">
	<td >0</td> 
	<td >表面样条变量</td>
	<td >0-7</td>
 </tr>   
 <tr align="left">
	<td >0</td> 
	<td >表面协变量</td>
	<td >0-7</td>
 </tr> 
 <tr align="left">
	<td >140 150 0 5</td> 
	<td >第1个变量（经度）的参数</td> 
	<td rowspan="3" align="left">含义： <br>
		&emsp;&emsp;前两个数字：经纬度和高程的边界信息。 <br>
		&emsp;&emsp;第三个数字：表示经纬度和高程（变量）是否进行转换和转换方法。 <br>
		&emsp;&emsp;第四个数字：表示单位。 <br>
		&emsp;&emsp;如果有，第五个数字代表边距。 <br> </td> 
	<td rowspan="3" align="left">
	①经纬度和高程的边界（大于DEM中的范围）<br>
		&emsp;&emsp;[140 150]-经度的西东边界<br>
		&emsp;&emsp;[-45 -39]-纬度南北边界<br>
		&emsp;&emsp;[2 5000]-高程的下上边界<br>
	②经纬度 (变量)的变换方法<br>
		&emsp;&emsp;0-不进行变换<br>
		&emsp;&emsp;1-X/A<br>
		&emsp;&emsp;2-X*A<br>
		&emsp;&emsp;3-A*LOG(X + B)<br>
		&emsp;&emsp;4-(X/B)**A<br>
		&emsp;&emsp;5-A*EXP(X/B)<br>
		&emsp;&emsp;6-A*TANH(X/B)<br>
		&emsp;&emsp;7-取异向角值<br>
		&emsp;&emsp;8-取异向角系数<br>
	③单位定义可参考[插值数据的单位]<br>
	④当第3个变量为高程时，可将单位m变换为km，可提高拟合效果。<br>
	</td>
 </tr>
 <tr align="left">
	<td >-45 -39 0 5</td> 
	<td >第2个变量（纬度）的参数</td> 
 </tr>
 <tr align="left">
	<td >2 5000 1 1</td> 
	<td >第3个变量（协变量-高程）的参数</td> 
 </tr>
 <tr align="left">
	<td >1000.0</td> 
	<td colspan="2">变换系数A</td> 
	<td >A=1000.0</td>
  </tr>
  <tr align="left">
	<td rowspan="3">2</td> 
	<td colspan="2" rowspan="3">因变量转换</td> 
	<td >0-不转换</td>
  </tr>
  <tr align="left"><td >1-转换为自然对数</td></tr>
  <tr align="left"><td >2-转换为平方根</td></tr>
  <tr align="left">
	<td >2</td> 
	<td colspan="2">样条次数</td> 
	<td >≥2</td>
  </tr>
  <tr align="left">
	<td >12</td> 
	<td colspan="2">输出表面数</td> 
	<td >≥1</td>
  </tr>
  <tr align="left">
	<td rowspan="3">0</td> 
	<td colspan="2" rowspan="3">误差权重选择</td> 
	<td >0-所有数据点采用统一的权重</td>
  </tr>
  <tr ><td align="left">1-所有的表面采用统一的权重</td></tr>
  <tr><td align="left">12(输出表面数)-为每个表面采用不同的权重</td></tr>
  <tr  align="left">
	<td rowspan="3">1</td> 
	<td colspan="2" rowspan="3">优化参数指标(通常为1)</td> 
	<td align="left">0-每个表面采用相同的平滑参数</td>
  </tr>
  <tr  align="left"><td >1-每个表面采用相同的平滑算法</td></tr>
  <tr  align="left"><td >2-每个表面采用不同的平滑算法</td></tr>
  <tr  align="left">
	<td rowspan="5">1</td> 
	<td colspan="2" rowspan="5">平滑方法选择 (通常为1)</td> 
	<td >0-采用表面平滑参数-参数大小</td>
  </tr>
  <tr align="left"><td >1-最小化GCV法</td></tr>
  <tr align="left"><td >2-使用所提供的误差标准偏差估计最小化真实均方误差(MSE)</td></tr>  
  <tr align="left"><td >3-采用固定自由度-固定值大小</td></tr>  
  <tr align="left"> <td >4-最小化GML法</td></tr>  
  <tr align="left">
	<td >rainn.dat</td> 
	<td colspan="2" >插值数据文件</td> 
	<td align="left"></td>
  </tr>
  <tr align="left">
	<td >300</td> 
	<td colspan="2" >数据点个数</td> 
	<td align="left">≥数据点真实值</td>
  </tr>
  <tr align="left">
	<td >6</td> 
	<td colspan="2" >站点标签字符数</td> 
	<td ></td>
  </tr>
  <tr align="left">
	<td >(a6,f8.3,f8.3,f8.1/12f9.2)</td> 
	<td colspan="2" >数据格式</td> 
	<td >
		a6-标签类型为字符串，6字符。<br>
		f8.3-变量数据，3位小数，8个字符。<br>
		/-换行。<br>
		12f9.2-12个9个字符保留两位小数的数据。<br>
		若有：<br>
		x-空格。<br>
		48x, f8.1,40x-数据为8个字符1位小数，除去前6(48/8)列数据和后5(40/8)列数据，只保留第7列数据。<br>
		（注意：定义的数据数量与站点标签、变量个数与需要插值的数据数量总和尽量一致。例如根据 <表1.2.1 ANUSPLIN插值数据格式示例> 的示例数据，我们可以定义 （a5, 2f8.2, f8.1, 4f8.0），表示1个5字符的站点标签，2个8字符2位小数的变量（经度、纬度），1个8字符1位小数的协变量（高程），4个8字符无小数的数据。）
	</td>
  </tr>
  <tr>
	<td colspan="4" align="left">若有，此处可以为导入导出数据节点文件和坏数据标志文件。若无，则忽略，不需空行。（脚本示例中为 忽略）</td> 
  </tr>
  <tr align="left">
	<td >04-P-04-splina.res</td> 
	<td colspan="2" >输出残差文件</td> 
	<td >不需要可不填，需空行。</td>
  </tr>
  <tr align="left">
	<td >04-P-04-splina.opt</td> 
	<td colspan="2" >光滑参数文件</td> 
	<td >不需要可不填，需空行。</td>
  </tr>
  <tr align="left">
	<td >04-P-04-splina.sur</td> 
	<td colspan="2" >表面文件</td> 
	<td align="left">LAPGRD的输入数据</td>
  </tr>
  <tr align="left">
	<td >04-P-04-splina.lis</td> 
	<td colspan="2" >列表文件</td> 
	<td  align="left">观测数据、预测数据、误差数据。不需要可不填，需空行。</td>
  </tr>
  <tr align="left">
	<td >04-P-04-splina.cov</td> 
	<td colspan="2" >拟合表面系数的误差协方差文件</td> 
	<td >不需要可不填，需空行。</td>
  </tr>
  <tr><td colspan="4" align="left">(建议空两行作为结尾)</td></tr>
</table>

::: warning 注意
&emsp;&emsp;输入数据格式应与 SPSS 输出的以 ASCII 码保存的包含站点经纬度和高程信息的站点数据（.dat）中定义的数据的属性一致。
:::

### 2.3 lapgrd 模块脚本参数示例

&emsp;&emsp;生成拟合曲面和贝叶斯标准误差曲面的模块为 lapgrd.exe ，其对应的脚本 lapgrd.cmd （文件名自拟，以下为示例），脚本参数（表 2.2-a）和参数解释（表 2.2-b）供大家参考学习。

**<center>表 2.3-a [lapgrd.cmd] 脚本示例</center>**

```bash
04-P-04-splina.sur
1
1
1
04-P-04-splina.cov
2

1
1
144.5 148.5 0.25
2
-44.0 -40.0 0.25
0
2
tas4.txt
2
-99.0
rain1.grd
(f8.2)
2
-99.0
cov_rain1.grd
(f8.2)


```
::: warning 注意
&emsp;&emsp;每个参数为一行。
:::

**<center>表 2.3-b [lapgrd.cmd] 脚本解释</center>**

<table>
  <tr align="left">
	<td >参数（例）</td> 
	<td >说明</td> 
	<td>解释</td>
  </tr>
  <tr align="left">
	<td >04-P-04-splina.sur</td> 
	<td >输入表面名</td> 
	<td></td>
  </tr>
  <tr align="left">
	<td rowspan="2">1</td> 
	<td rowspan="2">表面个数</td> 
	<td >0-全部输出</td>
  </tr>
  <tr align="left">
	<td >1-12([splina.cmd]中的输出表面数)-输出指定个数的表面，与最后输出的*.grd个数一致。</td>
  </tr>  
  <tr align="left">
	<td rowspan="2">1</td> 
	<td rowspan="2">表面类型计算</td> 
	<td >0-只统计摘要信息</td>
  </tr>
  <tr align="left"><td >1-拟合表面值</td> </tr>  
  <tr align="left">
	<td rowspan="2">1</td> 
	<td rowspan="2">表面值转换，不一定需要。依[splina.cmd]中的因变量转换确定。没有则忽略，不需空行。</td> 
	<td >0-不进行转换</td>
  </tr>
  <tr align="left"><td >1-应用转换</td> </tr> 
  <tr align="left">
	<td >04-P-04-splina.cov</td> 
	<td colspan="4">误差协方差文件名，没有则忽略，不需空行。</td> 
  </tr> 
  <tr align="left">
	<td rowspan="5">2</td> 
	<td rowspan="5">误差协方差类型。没有则忽略，不需空行。</td> 
	<td >0-只计算平均表面值的标准误差</td>
  </tr>
  <tr align="left"><td >1-模型标准误差</td> </tr> 
  <tr align="left"><td >2-预测标准误差</td> </tr> 
  <tr align="left"><td >3-95%模型置信区间</td> </tr> 
  <tr align="left"><td >4-95%预测置信区间</td> </tr> 
  <tr align="left"><td colspan="4">最大标准误差，可不填，需空行。</td> </tr> 
 <tr align="left">
	<td rowspan="2">1</td> 
	<td rowspan="2">栅格位置</td> 
	<td >0-栅格边角</td>
 </tr>
 <tr align="left"><td >1-栅格中心</td> </tr> 
 <tr align="left">
	<td >1</td> 
	<td >第1个变量的索引(经度)</td> 
	<td >数据中第1数字类型的数据列</td>
 </tr>
 <tr align="left">
	<td >144.5 148.5 0.25</td> 
	<td >边界与分辨率，小于[splina.cmd]中纬度的边界范围，与DEM的范围一致。</td> 
	<td >[144.5 148.5]-西东边界<br>
		0.25-分辨率</td>
 </tr>
 <tr align="left">
	<td >2</td> 
	<td >第2个变量的索引(纬度)</td> 
	<td >数据中第2数字类型的数据列</td>
 </tr>
 <tr align="left">
	<td >-44.0 -40.0 0.25</td> 
	<td >边界与分辨率。小于[splina.cmd]中纬度的边界范围，与DEM的范围一致。</td> 
	<td >[-44.0 -40.0]-南北边界<br>
		0.25-分辨率</td>
 </tr>
 <tr align="left">
	<td rowspan="4">0</td> 
	<td rowspan="4">掩膜方式</td> 
	<td >0-无掩膜</td>
 </tr>
 <tr align="left"><td >1-通用掩膜</td> </tr> 
 <tr align="left"><td >2-ARCGIS掩膜</td> </tr> 
 <tr align="left"><td >3-Idrisi掩膜</td> </tr> 
 <tr align="left"><td colspan="3" align="left">若有掩膜，此处可以为掩膜文件名。若没有，则忽略，不需空行。（脚本示例中为忽略）</td> </tr> 
 <tr align="left">
	<td rowspan="4">2</td> 
	<td rowspan="4">独立协变量数据格式</td> 
	<td >0-固定常数</td>
 </tr>
 <tr align="left"><td >1-通用栅格格式</td> </tr> 
 <tr align="left"><td >2-ArcGIS格式</td> </tr> 
 <tr align="left"><td >3-Idrisi格式</td> </tr>  
 <tr align="left">
	<td >tas4.txt</td> 
	<td >独立协变量数据文件名。若为常量，此处为常量值。</td> 
	<td >此处为ArcGIS导出以ASCII码保存的纯文本dem数据。</td>
 </tr>
 <tr align="left">
	<td rowspan="4">2</td> 
	<td rowspan="4">输出文件格式</td> 
	<td >0-X,Y,Z网格文件</td>
 </tr>
 <tr align="left"><td >1-以行的形式保存通用栅格文件</td> </tr> 
 <tr align="left"><td >2-ARCGIS栅格文件</td> </tr> 
 <tr align="left"><td >3- Idrisi影像文件</td> </tr>  
 <tr align="left">
	<td >-99.0</td> 
	<td >输出文件无效值定义</td> 
	<td >设置值与DEM中无效值相同。</td>
 </tr>
 <tr align="left">
	<td >rain1.grd</td> 
	<td >输出文件名</td> 
	<td >输出文件个数与[表面个数]一致。每个文件名占一行。</td>
 </tr>
 <tr align="left">
	<td >(1f8.2)</td> 
	<td >输出文件数量（1，为1时可忽略）和数据格式（f8.2）</td> 
	<td >空白表示以二进制形式输出。<br>
		*注意：如果输出文件无效值设置过大，建议增加输出文件字符宽度。</td>
 </tr>
 <tr align="left">
	<td >2</td> 
	<td >输出误差表面格式</td> 
	<td >同[输出文件格式]。</td>
 </tr>
 <tr align="left">
	<td >-99.0</td> 
	<td >输出误差文件无效值定义</td> 
	<td >同[输出文件无效值定义]。</td>
 </tr>
 <tr align="left">
	<td >cov_rain1.grd</td> 
	<td >输出误差文件名</td> 
	<td >同[输出文件名]。</td>
 </tr>
 <tr align="left">
	<td >(1f8.2)</td> 
	<td >输出误差文件数量（1，为1时可忽略）和数据格式（f8.2）</td> 
	<td >同[输出文件数量和数据格式]。</td>
 </tr>
  <tr align="left"><td colspan="4">(建议空两行作为结尾)</td> </tr>
</table>

::: warning 注意
&emsp;&emsp;请关注 [splina.cmd] 和 [lapgrd.cmd] 参数的联动，例如 [splina.cmd] 定义了数据转换方式，[lapgrd.cmd] 需要应用转换恢复。
:::

## 3 执行插值脚本
### 3.1 分部执行

&emsp;&emsp;1）打开 **“运行”** ，输入**CMD**， 运行CMD程序。

&emsp;&emsp;2）利用 **cd** 命令，将 CMD 的运行文件夹转至数据文件夹。例如：脚本和数据在 C:\ANUSPLIN 文件夹下，输入：

```bash
 cd C:\ANUSPLIN 
```
&emsp;&emsp;3）执行 **splina<RAINSP.cmd>rainsp.log** 命令。
```bash
C:\ANUSPLIN>splina<RAINSP.cmd>rainsp.log
```
&emsp;&emsp;4）执行 **lapgrd<rainrd.cmd>rainrd.log** 命令。

```bash
C:\ANUSPLIN>lapgrd<rainrd.cmd>rainrd.log
```

### 3.2 一键全部执行

&emsp;&emsp;在脚本文件夹下创建 run.cmd 文件，并将以下内容复制到 run.cmd 文件中：

```bash
splina<RAINSP.cmd>rainsp.log
lapgrd<rainrd.cmd>rainrd.log
```

&emsp;&emsp;双击 **run.cmd** 即可运行。

### 3.3 修改调试

&emsp;&emsp;ANUSPLIN 运行记录保存在 rainsp.log 和 rainrd.log 文件中，运行出错时，可根据 rainsp.log 和 rainrd.log 文件中错误位置和提示修改脚本和数据。

