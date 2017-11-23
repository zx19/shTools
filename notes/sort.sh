#!/bin/bash

#sort find.sh tr.sh 

# -n 数字排序

# -r 逆序

# -M 月份

# -m 合并已经排序过得文件

# sort ../data/args.txt | uniq

# sort -c ../data/args.txt
# sort -nk 1,1 ../data/data.txt

#-k 指定排序应该按照哪一个key进行
sort  -k 1,3 ../data/data.txt 

##uniq 

# -u 只显示唯一行

# -c 统计各行出现次数

# -d 找出重复行

#-s 跳过前n个字符 -w

uniq -z ../data/data.txt 
