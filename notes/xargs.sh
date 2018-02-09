 #!/bin/bash

cat ../data/example.txt | xargs

# -n 指定参数数量 将来自stdin的文本划分成多行
cat ../data/example.txt | xargs -n 3

#
# echo "splitXsplitXsplitXsplitX" | xargs -d X

cat ../data/args.txt | xargs  -I {} echo {} '#' 

# find .. -type f -name "*.txt" -print0 | xargs -0 echo

# find .. -type f -name "*.sh" -print0 | xargs -0 wc -l


cat ../data/files.txt | (while read arg ; do cat "../data/$arg"; done)

cat ../data/files.txt | xargs -I {} cat ../data/{}

# echo "#!/bin/bash" > sort.sh
 
