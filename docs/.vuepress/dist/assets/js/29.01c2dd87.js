(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{567:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("  开始写博客这么久，但没多少文章，说来惭愧。")]),t._v(" "),a("p",[t._v("  从本篇开始，内容会逐步涉及数据获取、处理等实际的过程。也会跟gma库")]),t._v(" "),a("p",[t._v("（详见"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_42155937/article/details/121023363",target:"_blank",rel:"noopener noreferrer"}},[t._v("自建 | 地理与气象数据分析（geographic and meteorological data analysis）（gma）的说明与使用"),a("OutboundLink")],1),t._v("）中构建的一些函数进行联动和测试。")]),t._v(" "),a("p",[t._v("  也感谢各位大佬的阅读和指导。")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"%E7%9B%AE%E5%BD%95"}},[t._v("TOC")])]),t._v(" "),a("h1",{attrs:{id:"_0-数据简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-数据简介"}},[t._v("#")]),t._v(" 0 数据简介")]),t._v(" "),a("p",[t._v("  欧洲航天局（ESA）"),a("strong",[t._v("< ESA WorldCover 10 m 2020 >")]),t._v(" 产品基于Sentinel-1和Sentinel-2数据提供了一种新的全球地表覆盖产品，分辨率为10米，时间为2020年。")]),t._v(" "),a("p",[t._v("  该产品是在欧空局世界覆盖项目 < ESA WorldCover project >的框架内生成的，该项目是欧洲航天局第五个地球观测包络线计划（EOEP-5）的一部分。")]),t._v(" "),a("p",[t._v("  该产品包括11个地表覆盖类别：分别为"),a("strong",[t._v("林地，灌木，草地，耕地，建筑，裸地/稀疏植被区，雪和冰，开阔水域，草本湿地，红树林，苔藓")]),t._v("。")]),t._v(" "),a("center",[t._v("表 0 < ESA WorldCover 10 m 2020 > 数据简介")]),t._v(" "),a("table",[a("tr",{attrs:{align:"left"}},[a("td",[t._v("值")]),t._v(" "),a("td",[t._v("色彩映射")]),t._v(" "),a("td",[t._v("地表覆盖类型")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("10")]),t._v(" "),a("td",{attrs:{bgcolor:"#006400"}},[t._v("#006400")]),t._v(" "),a("td",[t._v("林地")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("20")]),t._v(" "),a("td",{attrs:{bgcolor:"#ffbb22"}},[t._v("#ffbb22")]),t._v(" "),a("td",[t._v("灌木")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("30")]),t._v(" "),a("td",{attrs:{bgcolor:"#ffff4c"}},[t._v("#ffff4c")]),t._v(" "),a("td",[t._v("草地")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("40")]),t._v(" "),a("td",{attrs:{bgcolor:"#f096ff"}},[t._v("#f096ff")]),t._v(" "),a("td",[t._v("耕地")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("50")]),t._v(" "),a("td",{attrs:{bgcolor:"#fa0000"}},[t._v("#fa0000")]),t._v(" "),a("td",[t._v("建筑")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("60")]),t._v(" "),a("td",{attrs:{bgcolor:"#b4b4b4"}},[t._v("#b4b4b4")]),t._v(" "),a("td",[t._v("裸地/稀疏植被区")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("70")]),t._v(" "),a("td",{attrs:{bgcolor:"#f0f0f0"}},[t._v("#f0f0f0")]),t._v(" "),a("td",[t._v("雪和冰")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("80")]),t._v(" "),a("td",{attrs:{bgcolor:"#0064c8"}},[t._v("#0064c8")]),t._v(" "),a("td",[t._v("开阔水域")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("90")]),t._v(" "),a("td",{attrs:{bgcolor:"#0096a0"}},[t._v("#0096a0")]),t._v(" "),a("td",[t._v("草本湿地")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("95")]),t._v(" "),a("td",{attrs:{bgcolor:"#00cf75"}},[t._v("#00cf75")]),t._v(" "),a("td",[t._v("红树林")])]),t._v(" "),a("tr",{attrs:{align:"left"}},[a("td",[t._v("100")]),t._v(" "),a("td",{attrs:{bgcolor:"#fae6a0"}},[t._v("#fae6a0")]),t._v(" "),a("td",[t._v("苔藓")])])]),t._v(" "),a("h1",{attrs:{id:"_1-从esa官网下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-从esa官网下载"}},[t._v("#")]),t._v(" 1 从ESA官网下载")]),t._v(" "),a("p",[t._v("  ESA土地利用数据官网为：")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://esa-worldcover.org/en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://esa-worldcover.org/en"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("  下载步骤（顺序如图中序号）：")]),t._v(" "),a("p",[t._v("  0.注册一个ESA账号（当然这是必须的），登录并进入数据下载页面。")]),t._v(" "),a("p",[t._v("  1.选择 "),a("strong",[t._v("‘DOWNLOAD’")]),t._v("。")]),t._v(" "),a("p",[t._v("  2.Extend 选择 "),a("strong",[t._v("Administrative borders")]),t._v(" 。")]),t._v(" "),a("p",[t._v("  3.Borders选择 "),a("strong",[t._v("Countries")]),t._v(" 。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/7b84f8c397ee46508910f056a55e643e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),t._v("  4.双击中国区域，可获得中国区的范围和产品。")]),t._v(" "),a("p",[t._v("  5.选择全部或部分需要的数据，点击"),a("strong",[t._v("NEXT")]),t._v("。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/a196333344d1456daacf0e345dd553bd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),t._v("\n  也可以查看选择数据的区域（如下图）：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/1f5c969d123847a0b796053e995a7849.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("  6.选择质量控制数据和土地利用数据，点击"),a("strong",[t._v("DOWNLOAD")]),t._v("，待处理完成后即可下载。"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/84b385b9c50b4beb93de7bc862dfaaa2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),t._v(" "),a("h1",{attrs:{id:"_2-利用gee下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用gee下载"}},[t._v("#")]),t._v(" 2 利用GEE下载")]),t._v(" "),a("h2",{attrs:{id:"_2-1-gee简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-gee简介"}},[t._v("#")]),t._v(" 2.1 GEE简介")]),t._v(" "),a("blockquote",[a("p",[t._v("  谷歌地球云计算平台（Google Earth Engine，GEE）是Gorelick等人（2017）在谷歌公司、卡内基梅隆大学和美国地质调查局联合开发的世界上最先进的基于云计算的地理空间分析平台。该平台拥有Landsat、Sentinel、MODIS等系列卫星的各级数据及数据产品，能快速获取并处理不同级别的图像产品以供直接使用，并且其高性能计算和并行处理可用于处理大型地理空间数据集。通过调用GEE平台海量数据资源，可以快速计算NDVI、NDWI、NDBI等各种指数，能进行地物分类、植被覆盖、作物产量预测等等。")])]),t._v(" "),a("blockquote",[a("p",[t._v("  GEE托管目前大部分卫星图像，并将其存储在公共数据云存档中。其中包括可追溯40多年的历史地球图像，并且每天摄取的图像几乎无延时更新。基于海量数据集，还提供API和其他工具，以支持大型数据集的空间分析。")])]),t._v(" "),a("blockquote",[a("p",[t._v("  GEE包含的数据集超过 200 个公共的数据集，超过2000万张影像，每天的数据量增加大约10000张影像，容量超过30PB。GEE有一个可搜索的数据目录（https://developers.google.com/earth-engine/datasets/），包括整个EROS（USGS NASA）Landsat目录，大量的MODIS数据集，Sentinel-1数据，NAIP数据，降水量数据，海面温度数据，CHIRPS气候数据、海拔数据、夜间灯光数据以及人口经济数据等等。")])]),t._v(" "),a("h2",{attrs:{id:"_2-2-gee下载代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-gee下载代码"}},[t._v("#")]),t._v(" 2.2 GEE下载代码")]),t._v(" "),a("p",[t._v("  GEE以完成对 "),a("strong",[t._v("< ESA WorldCover 10 m 2020 >")]),t._v(" 数据的收录，可直接在GEE中下载。下载代码及代码说明如下。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入数据集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" China "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FeatureCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users/lichongrui321/VTD_PG_Province_China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ESA_WC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImageCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESA/WorldCover/v100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//边界和显示配置")]),t._v("\nMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("centerObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("China"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" empty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" outline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("featureCollection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("China"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//颜色透明")]),t._v("\n                          width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//边界宽度")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("palette"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ff0000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ESA_WC数据集配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ESA_WC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("China"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" visualization "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Map'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visualization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WorldCover"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//导出数据到网盘")]),t._v("\nExport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDrive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\timage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tdescription"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESA_WC_China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tfolder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ESA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tregion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("China"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tscale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tcrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EPSG:4326'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\tmaxPixels"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e13")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("p",[t._v("  GEE处理后的地表覆盖。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/dc9525e31781494b970afe0bd135baf8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("  任务结束后，点击"),a("strong",[t._v("RUN")]),t._v("，简单设置后数据会导出至Google网盘，之后可在Google网盘中下载数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2a4b10d528ff476db2081c282770cd56.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),t._v("  任务结束后，点击"),a("strong",[t._v("RUN")]),t._v("，简单设置后数据会导出至Google网盘，之后可在Google网盘中下载数据。")]),t._v(" "),a("h1",{attrs:{id:"_3-下载数据示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载数据示例"}},[t._v("#")]),t._v(" 3 下载数据示例")]),t._v(" "),a("p",[t._v("   以下为从ESA官网下载的 ESA_WorldCover_10m_2020_v100_N33E111_Map 产品示例图，主要区域为河南省洛阳市。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/21120c28af1544a094e278afb2c4e0fb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5rSb55qE5Zyw55CG56CU5a2m,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),t._v("   从ESA官网下载的数据类型为 .tif 文件，数据类型为 8位无符号整型，且具有色彩映射表，色彩与值（地表覆盖类型）的对应关系见 表 0。")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);