#!/bin/bash

tempfoo=`basename ${0}`
filename1=`mktemp -t ${tempfoo}`
filename2=`mktemp  /tmp/${tempfoo}.XXXX`
echo $filename1
echo $filename2qq
