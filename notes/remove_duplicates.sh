#!/bin/bash

#文件名: remove_duplicates.sh
#用途: 查找并删除重复文件, 每个文件只保留一份

ls -lS --time-style=long-iso | awk 'BEGIN {
	getline; getline;
	name1=$8; size=$5
}
{
	name2=$8;
	if [[ size==$5 ]]; then
		md5
	fi
}'
