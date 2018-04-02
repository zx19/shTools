import re
import requests

old_url = 'http://www.jikexueyuan.com/course/android/?pageNum=2'
url2 = 'https://www.jianshu.com/p/e3dd34b635ce'

html = requests.get(url2)
html.encoding = 'utf-8'
html = html.text
# print (html)

title = re.findall('<p class="description">(.*?)</p>', html, re.S)
for each in title:
	print(each)

total_page = 20
# pic_url = re.findall('img src="(https.*?)" class="lessonimg"',html,re.S)
# print(pic_url)

	

# i = 0
# for each in pic_url:
# 	if (i < 2): 
# 		print ('now downloading:' + each)
# 		pic = requests.get(each)
# 		fp = open('./demo/' + str(i)+'.jpg','wb')
# 		print(fp)
# 		fp.write(pic.content)
# 		fp.close()
# 	i += 1



# title = re.search('<title>(.*?)</title>', html, re.S).group(1)
# print (title)

# links = re.findall('href="(.*?)"', html, re.S)

# # 
# for each in links:
# 	print(each)


# text_field = re.findall('<ul>(.*?)</ul>',html,re.S)[0]
# print (text_field)

# the_text = re.findall('">(.*?)</a>', text_field,re.S)
# for every_text in the_text:
# 	print (every_text)

# for i in range(2,total_page+1):
# 	new_link = re.sub('pageNum=\d+', 'pageNum=%d'%i, old_url,re.S)
# 	print (new_link)




