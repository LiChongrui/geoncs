---
title: 地心坐标系
date: 2022-01-10
tags:
 - 坐标系
categories:
 - 地信研学
---

&emsp;　本页对地心坐标系（Geocentric Coordinate System）的基础参数的进行介绍，并统计了 163 个地心坐标系的官方 ID（EPSG），坐标系名称，基准面，椭球体等参数。

<!-- more -->

## 简介

&emsp;　以地球质心为原点建立的空间直角坐标系，或以球心与地球质心重合的地球椭球面为基准面所建立的大地坐标系。通常分为地心空间直角坐标系(以 X，Y，Z 为其坐标元素)和地心大地坐标系(以 B，L，H 为其坐标元素)。

## 轴

&emsp;　地心坐标系是在大地体内建立的 O-XYZ 坐标系。原点 O 设在大地体的质量中心，用相互垂直的 X，Y，Z 三个轴来表示，X 轴与首子午面与赤道面的交线重合，向东为正。Z 轴与地球旋转轴重合，向北为正。Y 轴与 XZ 平面垂直构成右手系。

&emsp;　本页所统计的地心坐标系 X（Geocentric X）, Y（Geocentric Y）, Z（Geocentric Z）均为 0，0，0；单位为 metre（meter，米）；中央经线为 Greenwich（格林尼治，0°）。

## 基准面

&emsp;　地心坐标系的基准面及其对应的椭球体参见 [地理坐标系](GEOGCS.html)  相关内容。

## 主要坐标参数

| 官方 ID   | 坐标系名称                            | 基准面                                                                 | 椭球体             |
|:----------|:--------------------------------------|:-----------------------------------------------------------------------|:-------------------|
| EPSG:3822 | TWD97                                 | Taiwan_Datum_1997                                                      | GRS 1980           |
| EPSG:3887 | IGRS                                  | Iraqi_Geospatial_Reference_System                                      | GRS 1980           |
| EPSG:4000 | MOLDREF99                             | MOLDREF99                                                              | GRS 1980           |
| EPSG:4039 | RGRDC 2005                            | Reseau_Geodesique_de_la_RDC_2005                                       | GRS 1980           |
| EPSG:4073 | SREF98                                | Serbian_Reference_Network_1998                                         | GRS 1980           |
| EPSG:4079 | REGCAN95                              | Red_Geodesica_de_Canarias_1995                                         | GRS 1980           |
| EPSG:4328 | WGS 84                                | WGS_1984                                                               | WGS 84             |
| EPSG:4330 | ITRF88                                | International_Terrestrial_Reference_Frame_1988                         | GRS 1980           |
| EPSG:4331 | ITRF89                                | International_Terrestrial_Reference_Frame_1989                         | GRS 1980           |
| EPSG:4332 | ITRF90                                | International_Terrestrial_Reference_Frame_1990                         | GRS 1980           |
| EPSG:4333 | ITRF91                                | International_Terrestrial_Reference_Frame_1991                         | GRS 1980           |
| EPSG:4334 | ITRF92                                | International_Terrestrial_Reference_Frame_1992                         | GRS 1980           |
| EPSG:4335 | ITRF93                                | International_Terrestrial_Reference_Frame_1993                         | GRS 1980           |
| EPSG:4336 | ITRF94                                | International_Terrestrial_Reference_Frame_1994                         | GRS 1980           |
| EPSG:4337 | ITRF96                                | International_Terrestrial_Reference_Frame_1996                         | GRS 1980           |
| EPSG:4338 | ITRF97                                | International_Terrestrial_Reference_Frame_1997                         | GRS 1980           |
| EPSG:4340 | Australian Antarctic                  | Australian_Antarctic_Datum_1998                                        | GRS 1980           |
| EPSG:4342 | EST97                                 | Estonia_1997                                                           | GRS 1980           |
| EPSG:4344 | CHTRF95                               | Swiss_Terrestrial_Reference_Frame_1995                                 | GRS 1980           |
| EPSG:4346 | ETRS89                                | European_Terrestrial_Reference_System_1989                             | GRS 1980           |
| EPSG:4348 | GDA94                                 | Geocentric_Datum_of_Australia_1994                                     | GRS 1980           |
| EPSG:4350 | Hartebeesthoek94                      | Hartebeesthoek94                                                       | WGS 84             |
| EPSG:4352 | IRENET95                              | IRENET95                                                               | GRS 1980           |
| EPSG:4354 | JGD2000                               | Japanese_Geodetic_Datum_2000                                           | GRS 1980           |
| EPSG:4356 | LKS94                                 | Lithuania_1994_ETRS89                                                  | GRS 1980           |
| EPSG:4358 | Moznet                                | Moznet_ITRF94                                                          | WGS 84             |
| EPSG:4360 | NAD83(CSRS)                           | NAD83_Canadian_Spatial_Reference_System                                | GRS 1980           |
| EPSG:4362 | NAD83(HARN)                           | NAD83_High_Accuracy_Reference_Network                                  | GRS 1980           |
| EPSG:4364 | NZGD2000                              | New_Zealand_Geodetic_Datum_2000                                        | GRS 1980           |
| EPSG:4366 | POSGAR 98                             | Posiciones_Geodesicas_Argentinas_1998                                  | GRS 1980           |
| EPSG:4368 | REGVEN                                | Red_Geodesica_Venezolana                                               | GRS 1980           |
| EPSG:4370 | RGF93                                 | Reseau_Geodesique_Francais_1993                                        | GRS 1980           |
| EPSG:4372 | RGFG95                                | Reseau_Geodesique_Francais_Guyane_1995                                 | GRS 1980           |
| EPSG:4374 | RGR92                                 | Reseau_Geodesique_de_la_Reunion_1992                                   | GRS 1980           |
| EPSG:4376 | SIRGAS 1995                           | Sistema_de_Referencia_Geocentrico_para_America_del_Sur_1995            | GRS 1980           |
| EPSG:4378 | SWEREF99                              | SWEREF99                                                               | GRS 1980           |
| EPSG:4380 | Yemen NGN96                           | Yemen_National_Geodetic_Network_1996                                   | WGS 84             |
| EPSG:4382 | RGNC 1991                             | Reseau_Geodesique_Nouvelle_Caledonie_1991                              | International 1924 |
| EPSG:4384 | RRAF 1991                             | Reseau_de_Reference_des_Antilles_Francaises_1991                       | WGS 84             |
| EPSG:4385 | ITRF2000                              | International_Terrestrial_Reference_Frame_2000                         | GRS 1980           |
| EPSG:4387 | ISN93                                 | Islands_Net_1993                                                       | GRS 1980           |
| EPSG:4389 | LKS92                                 | Latvia_1992                                                            | GRS 1980           |
| EPSG:4465 | RGSPM06                               | Reseau_Geodesique_de_Saint_Pierre_et_Miquelon_2006                     | GRS 1980           |
| EPSG:4468 | RGM04                                 | Reseau_Geodesique_de_Mayotte_2004                                      | GRS 1980           |
| EPSG:4473 | Cadastre 1997                         | CADASTRE 1997                                                          | International 1924 |
| EPSG:4479 | China Geodetic Coordinate System 2000 | China_2000                                                             | CGCS2000           |
| EPSG:4481 | Mexico ITRF92                         | Mexico_ITRF92                                                          | GRS 1980           |
| EPSG:4556 | RRAF 1991                             | Reseau_de_Reference_des_Antilles_Francaises_1991                       | GRS 1980           |
| EPSG:4882 | Slovenia 1996                         | Slovenia_Geodetic_Datum_1996                                           | GRS 1980           |
| EPSG:4884 | RSRGD2000                             | Ross_Sea_Region_Geodetic_Datum_2000                                    | GRS 1980           |
| EPSG:4886 | BDA2000                               | Bermuda_2000                                                           | WGS 84             |
| EPSG:4888 | HTRS96                                | Croatian_Terrestrial_Reference_System                                  | GRS 1980           |
| EPSG:4890 | WGS 66                                | World_Geodetic_System_1966                                             | NWL 9D             |
| EPSG:4892 | NAD83(NSRS2007)                       | NAD83_National_Spatial_Reference_System_2007                           | GRS 1980           |
| EPSG:4894 | JAD2001                               | Jamaica_2001                                                           | WGS 84             |
| EPSG:4896 | ITRF2005                              | International_Terrestrial_Reference_Frame_2005                         | GRS 1980           |
| EPSG:4897 | DGN95                                 | Datum_Geodesi_Nasional_1995                                            | WGS 84             |
| EPSG:4899 | LGD2006                               | Libyan_Geodetic_Datum_2006                                             | International 1924 |
| EPSG:4906 | RGNC91-93                             | Reseau_Geodesique_de_Nouvelle_Caledonie_91-93                          | GRS 1980           |
| EPSG:4908 | GR96                                  | Greenland_1996                                                         | GRS 1980           |
| EPSG:4910 | ITRF88                                | International_Terrestrial_Reference_Frame_1988                         | GRS 1980           |
| EPSG:4911 | ITRF89                                | International_Terrestrial_Reference_Frame_1989                         | GRS 1980           |
| EPSG:4912 | ITRF90                                | International_Terrestrial_Reference_Frame_1990                         | GRS 1980           |
| EPSG:4913 | ITRF91                                | International_Terrestrial_Reference_Frame_1991                         | GRS 1980           |
| EPSG:4914 | ITRF92                                | International_Terrestrial_Reference_Frame_1992                         | GRS 1980           |
| EPSG:4915 | ITRF93                                | International_Terrestrial_Reference_Frame_1993                         | GRS 1980           |
| EPSG:4916 | ITRF94                                | International_Terrestrial_Reference_Frame_1994                         | GRS 1980           |
| EPSG:4917 | ITRF96                                | International_Terrestrial_Reference_Frame_1996                         | GRS 1980           |
| EPSG:4918 | ITRF97                                | International_Terrestrial_Reference_Frame_1997                         | GRS 1980           |
| EPSG:4919 | ITRF2000                              | International_Terrestrial_Reference_Frame_2000                         | GRS 1980           |
| EPSG:4920 | GDM2000                               | Geodetic_Datum_of_Malaysia_2000                                        | GRS 1980           |
| EPSG:4922 | PZ-90                                 | Parametry_Zemli_1990                                                   | PZ-90              |
| EPSG:4924 | Mauritania 1999                       | Mauritania_1999                                                        | GRS 1980           |
| EPSG:4926 | Korea 2000                            | Geocentric_datum_of_Korea                                              | GRS 1980           |
| EPSG:4928 | POSGAR 94                             | Posiciones_Geodesicas_Argentinas_1994                                  | WGS 84             |
| EPSG:4930 | Australian Antarctic                  | Australian_Antarctic_Datum_1998                                        | GRS 1980           |
| EPSG:4932 | CHTRF95                               | Swiss_Terrestrial_Reference_Frame_1995                                 | GRS 1980           |
| EPSG:4934 | EST97                                 | Estonia_1997                                                           | GRS 1980           |
| EPSG:4936 | ETRS89                                | European_Terrestrial_Reference_System_1989                             | GRS 1980           |
| EPSG:4938 | GDA94                                 | Geocentric_Datum_of_Australia_1994                                     | GRS 1980           |
| EPSG:4940 | Hartebeesthoek94                      | Hartebeesthoek94                                                       | WGS 84             |
| EPSG:4942 | IRENET95                              | IRENET95                                                               | GRS 1980           |
| EPSG:4944 | ISN93                                 | Islands_Net_1993                                                       | GRS 1980           |
| EPSG:4946 | JGD2000                               | Japanese_Geodetic_Datum_2000                                           | GRS 1980           |
| EPSG:4948 | LKS92                                 | Latvia_1992                                                            | GRS 1980           |
| EPSG:4950 | LKS94                                 | Lithuania_1994_ETRS89                                                  | GRS 1980           |
| EPSG:4952 | Moznet                                | Moznet_ITRF94                                                          | WGS 84             |
| EPSG:4954 | NAD83(CSRS)                           | NAD83_Canadian_Spatial_Reference_System                                | GRS 1980           |
| EPSG:4956 | NAD83(HARN)                           | NAD83_High_Accuracy_Reference_Network                                  | GRS 1980           |
| EPSG:4958 | NZGD2000                              | New_Zealand_Geodetic_Datum_2000                                        | GRS 1980           |
| EPSG:4960 | POSGAR 98                             | Posiciones_Geodesicas_Argentinas_1998                                  | GRS 1980           |
| EPSG:4962 | REGVEN                                | Red_Geodesica_Venezolana                                               | GRS 1980           |
| EPSG:4964 | RGF93                                 | Reseau_Geodesique_Francais_1993                                        | GRS 1980           |
| EPSG:4966 | RGFG95                                | Reseau_Geodesique_Francais_Guyane_1995                                 | GRS 1980           |
| EPSG:4968 | RGNC91-93                             | Reseau_Geodesique_de_Nouvelle_Caledonie_91-93                          | GRS 1980           |
| EPSG:4970 | RGR92                                 | Reseau_Geodesique_de_la_Reunion_1992                                   | GRS 1980           |
| EPSG:4972 | RRAF 1991                             | Reseau_de_Reference_des_Antilles_Francaises_1991                       | GRS 1980           |
| EPSG:4974 | SIRGAS 1995                           | Sistema_de_Referencia_Geocentrico_para_America_del_Sur_1995            | GRS 1980           |
| EPSG:4976 | SWEREF99                              | SWEREF99                                                               | GRS 1980           |
| EPSG:4978 | WGS 84                                | WGS_1984                                                               | WGS 84             |
| EPSG:4980 | Yemen NGN96                           | Yemen_National_Geodetic_Network_1996                                   | WGS 84             |
| EPSG:4982 | IGM95                                 | Istituto_Geografico_Militaire_1995                                     | GRS 1980           |
| EPSG:4984 | WGS 72                                | World_Geodetic_System_1972                                             | WGS 72             |
| EPSG:4986 | WGS 72BE                              | WGS_72_Transit_Broadcast_Ephemeris                                     | WGS 72             |
| EPSG:4988 | SIRGAS 2000                           | Sistema_de_Referencia_Geocentrico_para_las_AmericaS_2000               | GRS 1980           |
| EPSG:4990 | Lao 1993                              | Lao_1993                                                               | Krassowsky 1940    |
| EPSG:4992 | Lao 1997                              | Lao_National_Datum_1997                                                | Krassowsky 1940    |
| EPSG:4994 | PRS92                                 | Philippine_Reference_System_1992                                       | Clarke 1866        |
| EPSG:4996 | MAGNA-SIRGAS                          | Marco_Geocentrico_Nacional_de_Referencia                               | GRS 1980           |
| EPSG:4998 | RGPF                                  | Reseau_Geodesique_de_la_Polynesie_Francaise                            | GRS 1980           |
| EPSG:5011 | PTRA08                                | Autonomous_Regions_of_Portugal_2008                                    | GRS 1980           |
| EPSG:5244 | GDBD2009                              | Geocentric_Datum_Brunei_Darussalam_2009                                | GRS 1980           |
| EPSG:5250 | TUREF                                 | Turkish_National_Reference_Frame                                       | GRS 1980           |
| EPSG:5262 | DRUKREF 03                            | Bhutan_National_Geodetic_Datum                                         | GRS 1980           |
| EPSG:5322 | ISN2004                               | Islands_Net_2004                                                       | GRS 1980           |
| EPSG:5332 | ITRF2008                              | International_Terrestrial_Reference_Frame_2008                         | GRS 1980           |
| EPSG:5341 | POSGAR 2007                           | Posiciones_Geodesicas_Argentinas_2007                                  | WGS 84             |
| EPSG:5352 | MARGEN                                | Marco_Geodesico_Nacional_de_Bolivia                                    | GRS 1980           |
| EPSG:5358 | SIRGAS-Chile 2002                     | SIRGAS-Chile_realization_1_epoch_2002                                  | GRS 1980           |
| EPSG:5363 | CR05                                  | Costa_Rica_2005                                                        | WGS 84             |
| EPSG:5368 | MACARIO SOLIS                         | Sistema_Geodesico_Nacional_de_Panama_MACARIO_SOLIS                     | GRS 1980           |
| EPSG:5369 | Peru96                                | Peru96                                                                 | GRS 1980           |
| EPSG:5379 | SIRGAS-ROU98                          | SIRGAS-ROU98                                                           | WGS 84             |
| EPSG:5391 | SIRGAS_ES2007.8                       | SIRGAS_ES2007_8                                                        | GRS 1980           |
| EPSG:5487 | RGAF09                                | Reseau_Geodesique_des_Antilles_Francaises_2009                         | GRS 1980           |
| EPSG:5544 | PNG94                                 | Papua_New_Guinea_Geodetic_Datum_1994                                   | GRS 1980           |
| EPSG:5558 | UCS-2000                              | Ukraine_2000                                                           | Krassowsky 1940    |
| EPSG:5591 | FEH2010                               | Fehmarnbelt_Datum_2010                                                 | GRS 1980           |
| EPSG:5828 | DB_REF                                | Deutsche_Bahn_Reference_System                                         | Bessel 1841        |
| EPSG:5884 | TGD2005                               | Tonga_Geodetic_Datum_2005                                              | GRS 1980           |
| EPSG:6133 | CIGD11                                | Cayman_Islands_Geodetic_Datum_2011                                     | GRS 1980           |
| EPSG:6309 | CGRS93                                | Cyprus_Geodetic_Reference_System_1993                                  | WGS 84             |
| EPSG:6317 | NAD83(2011)                           | NAD83_National_Spatial_Reference_System_2011                           | GRS 1980           |
| EPSG:6320 | NAD83(PA11)                           | NAD83_National_Spatial_Reference_System_PA11                           | GRS 1980           |
| EPSG:6323 | NAD83(MA11)                           | NAD83_National_Spatial_Reference_System_MA11                           | GRS 1980           |
| EPSG:6363 | Mexico ITRF2008                       | Mexico_ITRF2008                                                        | GRS 1980           |
| EPSG:6666 | JGD2011                               | Japanese_Geodetic_Datum_2011                                           | GRS 1980           |
| EPSG:6704 | RDN2008                               | Rete_Dinamica_Nazionale_2008                                           | GRS 1980           |
| EPSG:6781 | NAD83(CORS96)                         | NAD83_Continuously_Operating_Reference_Station_1996                    | GRS 1980           |
| EPSG:6934 | IGS08                                 | IGS08                                                                  | GRS 1980           |
| EPSG:6978 | IGD05                                 | Israeli_Geodetic_Datum_2005                                            | WGS 84             |
| EPSG:6981 | IG05 Intermediate CRS                 | IG05_Intermediate_Datum                                                | GRS 1980           |
| EPSG:6985 | IGD05/12                              | Israeli_Geodetic_Datum_2005_2012                                       | WGS 84             |
| EPSG:6988 | IG05/12 Intermediate CRS              | IG05_12_Intermediate_Datum                                             | GRS 1980           |
| EPSG:7071 | RGTAAF07                              | Reseau_Geodesique_des_Terres_Australes_et_Antarctiques_ Francaises_2007 | GRS 1980           |
| EPSG:7134 | IGD05                                 | Israeli_Geodetic_Datum_2005                                            | WGS 84             |
| EPSG:7137 | IGD05/12                              | Israeli_Geodetic_Datum_2005_2012                                       | WGS 84             |
| EPSG:7371 | ONGD14                                | Oman_National_Geodetic_Datum_2014                                      | GRS 1980           |
| EPSG:7656 | WGS 84 (G730)                         | World_Geodetic_System_1984_G730                                        | WGS 84             |
| EPSG:7658 | WGS 84 (G873)                         | World_Geodetic_System_1984_G873                                        | WGS 84             |
| EPSG:7660 | WGS 84 (G1150)                        | World_Geodetic_System_1984_G1150                                       | WGS 84             |
| EPSG:7662 | WGS 84 (G1674)                        | World_Geodetic_System_1984_G1674                                       | WGS 84             |
| EPSG:7664 | WGS 84 (G1762)                        | World_Geodetic_System_1984_G1762                                       | WGS 84             |
| EPSG:7677 | PZ-90.02                              | Parametry_Zemli_1990_02                                                | PZ-90              |
| EPSG:7679 | PZ-90.11                              | Parametry_Zemli_1990_11                                                | PZ-90              |
| EPSG:7681 | GSK-2011                              | Geodezicheskaya_Sistema_Koordinat_2011                                 | GSK-2011           |
| EPSG:7684 | Kyrg-06                               | Kyrgyzstan_Geodetic_Datum_2006                                         | GRS 1980           |
| EPSG:7789 | ITRF2014                              | International_Terrestrial_Reference_Frame_2014                         | GRS 1980           |
| EPSG:7796 | BGS2005                               | Bulgaria_Geodetic_System_2005                                          | GRS 1980           |
| EPSG:7815 | WGS 84 (Transit)                      | World_Geodetic_System_1984_Transit                                     | WGS 84             |
| EPSG:7842 | GDA2020                               | Geocentric_Datum_of_Australia_2020                                     | GRS 1980           |
| EPSG:7879 | St. Helena Tritan                     | St_Helena_Tritan                                                       | WGS 84             |
| EPSG:7884 | SHGD2015                              | St_Helena_Geodetic_Datum_2015                                          | GRS 1980           |