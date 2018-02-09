#!/bin/bash

username='zhang'
password=''

SHOW_COUNT=5

echo ''

curl -u $username:$password --slient "https://mail.google.com/mail/feed/atom" | \
