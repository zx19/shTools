#!/bin/bash

# 文件名 grep.sh

# 1 多个文件搜索

#grep "echo" filestat.sh md5.sh

# 2 --color 着重标记
# grep "echo" filestat.sh md5.sh --color=auto

# 3 正则
#grep -E 或 egrep
# 4 只输出文件中匹配到的文本 -o
# grep "echo" filestat.sh md5.sh -o

# 5 -v 匹配到之外的所有行
# 6 -c count 匹配到的字符串行数 只匹配行数不匹配次数


# 匹配数量
# echo -e "1 2 3 4\nhello\n5 6" | egrep -o "[0-9]" | wc -l

# -n 行号

# -b 打印匹配的字符偏移
# echo "gnu is inot unix" | grep -b -o "not"

# 当前目录中对文本进行递归搜索
# grep "echo" . -R -n

# 匹配多样式

# -e "pattern1" -e "pattern2"
# -f 指定匹配格式文件
# grep -f pattern_filesource_filename

# -q 静默 

# -A n 打印之后n行
seq 10 | grep 5 -A 3

# -B n 打印之前 n 行

# -C n  打印之前之后 n 行




