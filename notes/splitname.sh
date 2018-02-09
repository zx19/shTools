#!/bin/bash

file_jpg="same.jpg"
name=${file_jpg%.*}
echo $name
extension=${file_jpg#*}
echo $extension
#same
#jpg

${VAR%.*} 的含义如下
从 $VAR中删除位于 % 右侧的通配符(在前例中是.*)所匹配的字符串。通配符从右向左 进行匹配。


${VAR#*.}的含义

从$VAR中删除位于#右侧的通配符(即在前例中使用的*.)所匹配的字符串。通配
符从左向右进行匹配。