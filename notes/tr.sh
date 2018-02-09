#!/bin/bash
echo "HELLO wHO " | tr 'A-Z' 'a-z'

echo 12345 | tr '0-9' '9876543210'
echo 87654 | tr '9876543210' '0-9'

echo "tr came , tr saw , tr conquered" | tr 'a-zA-Z' 'n-za-mN-ZA-M'
echo "ge pnzr , ge fnj , ge pbadhrerq" | tr 'a-zA-Z' 'n-za-mN-ZA-M'

# tr '\t' ' ' < ../data/files.txt

echo "hello 123 world 456" | tr -d '0-9'
echo hello 1 char 2 next 4 |tr -d -c '0-9 \n'
echo "GUN is     1    not           UNIX.Reac" | tr -s ' '

cat ../data/example.txt | xargs | echo $[ $(tr ' ' '+')]

echo "line1 \n \nline2 " | tr -s '\n' 

# alnum
# alpha
# cntrl
# digit
# graph
# lower
# print
# punct
# upper
# xdigit

# echo "#!/bin/bash" > md5.sh

