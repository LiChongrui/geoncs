---
title: 集合
date: 2022-03-10 23:12:00
tags:

 - Python 基础
categories:
 - 数据类型
---

&emsp;&emsp;集合是一个无序的不重复的元素序列。可以使用 `{}`  来创建，也可使用或`set`来将其他数据强制转换为集合。例如：

```python
Set = {1, 3, 4, 'You', 'Me'}
```
::: warning 注意

1. 集合内的元素除了单元素之外仅支持元组。列表、字典、集合等其他类型的元素都会导致集合创建失败。

2. 创建空集合必须使用`set`，使用`{}`创建的是空字典。

:::

## 访问

&emsp;&emsp;由于集合是一个无序不重复的序列，集合不能通过索引来访问。因此，可以通过循环获得集合中的元素：

```python
Set = {1, 3, 4, 'You', 'Me'}
for ELE in Set:
    print('元素：', ELE)
```

> 执行结果：
>
> 元素：1
>
> 元素：3
>
> 元素：4
>
> 元素：You
>
> 元素：Me

::: tip 提示

可将集合转为列表或元组，然后利用索引访问元素。

:::

## 添加

&emsp;&emsp;添加一个元素：

```python
Set = {1, 3, 4, 'You', 'Me'}
Set.add('Luo')
print(Set)
```
> 执行结果：`{1, 3, 4, 'Luo', 'You', 'Me'}`

&emsp;&emsp;添加多个元素：

```python
Set = {1, 3, 4, 'You', 'Me'}
ADD1 = [2, 6]
ADD2 = (5, 7)
ADD3 = {8, 9}
# 添加一个列表、元组或集合
Set.update(ADD1, ADD2, ADD3)
print(Set)
```

> 执行结果：`{1, 2, 3, 4, 5, 6, 7, 8, 9, 'You', 'Me'}`

## 剔除

&emsp;&emsp;剔除一个元素：

```python
Set = {1, 3, 4, 'You', 'Me'}
Set.remove(3) # 或 Set.discard(3)
print(Set)
```

> 执行结果：`{1, 4, 'You', 'Me'}`

## 交集

&emsp;&emsp;取两个集合都含有的元素：

```python
Set1 = {1, 3, 4, 'You', 'Me'}
Set2 = {1, 3, 4, 'Luo'}
Set = Set1 & Set2 # 或 Set = Set1.intersection(Set2)
print(Set)
```

> 执行结果：`{1, 3, 4}`

## 并集

&emsp;&emsp;取两个集合的所有元素：

```python
Set1 = {'You', 'Me'}
Set2 = {1, 3, 4, 'Luo'}
Set = Set1 | Set2 # 或 Set = Set1.union(Set2)
print(Set)
```

> 执行结果：`{1, 3, 4, 'Luo', 'You', 'Me'}`

## 补集

&emsp;&emsp;取集合 1 中不含集合 2 的元素：

```python
Set1 = {1, 3, 4, 'You', 'Me'}
Set2 = {1, 3, 4, 'Luo'}
Set = Set1 - Set2 # 或 Set = Set1.difference(Set2)
print(Set)
```

> 执行结果：`{'You', 'Me'}`

::: tip 提示

相对补集（差集）：Set2 不为 Set1 的子集。

绝对补集：Set2 为 Set1 的子集。

:::

## 非交集

&emsp;&emsp;取集合 1 中有但集合 2 中没有 和 集合 2 中有但集合 1 中没有的所有元素的总和：

```python
Set1 = {1, 3, 4, 'You', 'Me'}
Set2 = {1, 3, 4, 'Luo'}
Set = Set1 ^ Set2 # 或 Set = Set1.symmetric_difference(Set2)
print(Set)
```

> 执行结果：`{'Luo', 'You', 'Me'}`

## 运算

| 方法       | 描述                       | 示例                           | 结果  |
| :--------- | :------------------------- | :----------------------------- | :---- |
| len        | 取集合长度                 | `len({1, 2})`                  | 2     |
| isdisjoint | 两个集合是否不相交         | `{1, 2}.isdisjoint({2, 3})`    | False |
| issubset   | 集合 1 是否为集合 2 的子集 | `{1, 2}.issubset({1, 2, 3})`   | True  |
| issuperset | 集合 2 是否为集合 1 的子集 | `{1, 2, 3}.issuperset({2, 3})` | True  |

## 集合解析式

&emsp;&emsp;与列表解析式类似，集合解析式是将一个可迭代对象（如列表）转换成集合的工具。示例：

```python
Set = {i for i in range(10000000)}
```
