---
title: 字典
date: 2022-02-25 23:12:00
tags:
 - Python 基础
categories:
 - 数据类型
---

&emsp;&emsp;字典是另一种可变容器模型，且可存储任意类型对象。可以采用`{}`或`dict`来创建，其中每个元素均包含一个键（key）和一个值（value），并以 `:` 分割。例如：

```python
Dict = {'Name':'Luo','Year':2022} 
```


## 键值

![](/python/dict.svg)

&emsp;&emsp;字典的每个值都可以为包括字典在内的其他任一类型的数据。

::: warning 注意

字典内键是唯一的，不能重复。

:::

### 获取键

```python
Keys = Dict.keys()
print(Keys)
```

> 执行结果：dict_keys(['Name', 'Year'])

### 获取值

```python
Values = Dict.values()
print(Values)
```

> 执行结果：dict_values(['Luo', 2022])

### 访问值

```python
Value = Dict['Name'] # 或 Value = Dict.get('Name')
print(Value)
```

> 执行结果：Luo

## 转化

&emsp;&emsp;返回一个嵌套元组的列表，每个元组的内的子元素为字典的每个元组对应的键和值。

```python
Items = Dict.items() 
print(Items)
```

> 执行结果：dict_items([('Name', 'Luo'), ('Year', 2022)])

## 修改

### 更新

```python
Dict.update({'Month':2}) 
print(Dict)
```

> 执行结果：{'Name': 'Luo', 'Year': 2022, 'Month': 2}

### 剔除

```python
Dict.pop('Year')
print(Dict)
```

> 执行结果：{'Name': 'Luo', 'Month': 2}

### 替换值

```python
Dict['Month'] = 3
print(Dict)
```

> 执行结果：{'Name': 'Luo', 'Month': 3}

### 增加

```python
Dict['Love'] = 'Time'
print(Dict)
```

> 执行结果：{'Name': 'Luo', 'Moth': 3, 'Love': 'Time'}

## 组装字典

&emsp;&emsp;利用`dict`和`zip`实现两个列表快速组合为字典。

```python
NewDict = dict(zip(['Luo','Suppe'],['Name','Pseudonym']))
print(NewDict)
```

> 执行结果：{'Luo': 'Name', 'Suppe': 'Pseudonym'}

## 解包键值

&emsp;&emsp;将所有的键值返回到一个列表里。

```python
KV = list(sum(NewDict.items(), ()))
print(KV)
```

> 执行结果：['Luo', 'Name', 'Suppe', 'Pseudonym']

## 字典解析式

&emsp;&emsp;与列表解析式相似，字典解析式是将一个可迭代对象（如列表）转换成字典的工具。示例：

```python
# 将列表元素值与其对应的索引组成字典
List = ['Luo', 'Year', 'Suppe']
NDict = {List[i]:i for i in range(len(List))} 
print(NDict)
```

> 执行结果：{'Luo': 0, 'Year': 1, 'Suppe': 2}





