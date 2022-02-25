---
title: 列表
date: 2022-02-25 23:12:00
tags:

 - Python 基础
categories:
 - 数据类型
---

&emsp;&emsp;列表是 Python 中最基本的数据结构，可以使用 `[]`  来创建列表，也可使用或`list`来将其他数据强制转换为列表。例如：

```python
LL = [1, 3, 4, 'You', 'Me'] 
```
&emsp;&emsp;列表内的每个元素都可以包括列表在内的其他任一类型的数据。

## 索引

&emsp;&emsp;列表中每个元素的索引位置从左至右起，第一位为 0；从右至左起，最后一位为 -1。

![](/python/listindex.svg)

## 提取

&emsp;&emsp;可根据列表索引提取对应位置的元素。

```python
Fetch2 = LL[2]
print(Fetch2)
```
> 执行结果：`4`

&emsp;&emsp;也可根据列表索引区间提取多个元素组成新列表（切片提取）。

```python
Fetch2_4 = Me[2:4]
print(Fetch2_4)
```
> 执行结果：`[4, 'You']`

## 修改

### 合并

```python
M = [1, 3] + [4, 'You', 'Me']
print(M)
```

> 执行结果：`[1, 3, 4, 'You', 'Me'] `

### 添加

&emsp;&emsp;利用`append`函数在列表末尾添加 `5`。

```python
A = LL.append(5)
print(A)
```

> 执行结果：`[1, 3, 4, 'You', 'Me', 5] `

### 插入

&emsp;&emsp;利用`insert`函数在索引为 0 的位置添加 `Insert` 。

```python
I = LL.insert(0, 'Insert')
print(I)
```

> 执行结果：`['Insert', 1, 3, 4, 'You', 'Me', 5] `

### 剔除

&emsp;&emsp;利用`del` 删除列表 `I `中索引为 0 的元素（Insert） 。

```python
def I[0]
print(I)
```

> 执行结果：`[1, 3, 4, 'You', 'Me', 5] `

&emsp;&emsp;继续利用 `pop`函数删除列表`I`末尾的元素（5）。

```python
I.pop(-1)
print(I)
```

> 执行结果：`[1, 3, 4, 'You', 'Me'] `

&emsp;&emsp;继续利用 `remove`函数删除列表`I`中指定元素`You`（若指定元素出现多次，则仅移除索引最靠前的元素）。

```python
I.remove('You')
print(I)
```

> 执行结果：`[1, 3, 4, 'Me'] `

::: warning 注意

这三种剔除均在原列表上修改，不需要重新赋值。

:::

### 替换

```python
LL[0] = 'She'
print(LL)
```

> 执行结果：`['She', 3, 4, 'You', 'You', 'Me'] `



## 排序

```python
# 正序
NUMList = [1, 4, 3, 5]
NUMList.sort() 
print(NUMList)
```

> 执行结果：`[1, 3, 4, 5] `

```python
# 倒序
NUMList.reverse() # 或 NUMList.sort(reverse=True)
print(NUMList)
```

> 执行结果：`[5, 4, 3, 1] `

## 去重

&emsp;&emsp;利用 set 将列表转为集合去重。

```python
# 去重后元素正序排列
NUMList = [4, 1, 1, 5]
SLL = list(set(NUMList))
print(SLL)
```

> 执行结果：`[1, 4, 5] `

```python
# 修正为原列表序列的顺序
SLL.sort(key = NUMList.index)
print(SLL)
```

> 执行结果：`[4, 1, 5] `

## 运算

| 方法         | 描述                             | 示例                                   | 结果             |
| :----------- | :------------------------------- | :------------------------------------- | :--------------- |
| len          | 取列表长度                       | `len([1,2])`                           | 2                |
| *            | 重复列表                         | `[1,2] * 2`                            | [1, 2, 1, 2]     |
| max          | 取最大值（仅对数字列表有效）     | `max([1,2,3])`                         | 3                |
| max(key=len) | 取嵌套列表元素中子元素最多的元素 | `max([['a','b'], [1,2,3,4]], key=len)` | [1, 2, 3, 4]     |
| min          | 取最小值（仅对数字列表有效）     | `min([1,2,3])`                         | 1                |
| min(key=len) | 取嵌套列表元素中子元素最少的元素 | `min([['a','b'], [1,2,3,4]], key=len)` | ['a', 'b']       |
| sum          | 取和（仅对数字列表有效）         | `sum([1,2,3])`                         | 6                |
| sum([])      | 展开嵌套列表                     | `sum([['a','b'], [1,2]], [])`          | ['a', 'b', 1, 2] |
| join         | 连接列表中的每个元素组成字符串   | `''.join(['a','b'])`                   | ab               |

## 列表解析式

&emsp;&emsp;列表解析式是将一个可迭代对象（如列表）转换成另一个列表的工具。示例：

```python
A = [i for i in range(10000000)] # 用列表解析式生成 1千万个简单序列
```

&emsp;&emsp;在转换过程中，也可以指定元素必须符合某一条件（if），并按照指定的表达式进行转换。例如：

```python
A = [i for i in range(10000000) if i <= 1000]
```

### 效率对比

&emsp;&emsp;生成 0~10000000 中每个自然数的平方。（`windows 10`，`内存：16GB`，`CPU：Intel Core i5-8265U`）

```python
import datetime as dt
```

&emsp;&emsp;简单 for 循环：

```python
T0 = dt.datetime.now()
A = []
for i in range(10000000):
    A.append(i**2)
T1 = dt.datetime.now()
print((T1 - T0).total_seconds())
```

> 耗时：4.065539 秒

&emsp;&emsp;列表解析式：

```python
T0 = dt.datetime.now()
A = [i**2 for i in range(10000000)]
T1 = dt.datetime.now()
print((T1 - T0).total_seconds())
```

> 耗时：3.151168 秒

&emsp;&emsp;numpy 向量化：

```python
import numpy as np
T0 = dt.datetime.now()
A = np.arange(10000000) ** 2
T1 = dt.datetime.now()
print((T1 - T0).total_seconds())
```

> 耗时：0.139675 秒

&emsp;&emsp;与 for 循环相比，列表解析式效率更高，但两者效率均远低于 numpy 的生成速率。处理纯数字型数据推荐使用 numpy，其他类型可优先使用列表解析式。

## 自由组合

&emsp;&emsp;若对列表元素顺序有需求，可对列表实现自由组合（数学）。

```python
PMT = list(permutations(['Name', 'Year', 'Month']))
print(PMT)
```

> 执行结果：[('Name', 'Year', 'Month'),
>  ('Name', 'Month', 'Year'),
>  ('Year', 'Name', 'Month'),
>  ('Year', 'Month', 'Name'),
>  ('Month', 'Name', 'Year'),
>  ('Month', 'Year', 'Name')]
