import re
import requests

class spider(object):
	"""docstring for spider"""
	def __init__(self):
		super(spider, self).__init__()
	
	def changepage(self, url, total_page):
		now_page = int(re.search('pageNum=(\d+)',url,re.S).group(1))
		page_group = []
		for i in range(now_page, total_page + 1):
			link = re.sub('pageNum=\d+', 'pageNum=%s'%i,url,re.S)
			page_group.append(link)
		return page_group

	def getsource(self,url):
		html = requests.get(url)
		return html.text

	def geteveryclass(self,source):
		everyclass = re.findall('(<li id=.*?</li>)', source, re.S)
		return everyclass

	def getinfo(self,eachclass):
		info={}
		info['title'] = re.search('title="(.*?)"', eachclass, re.S).group(1)
		info['content'] = re.search('<p style="height: 0px; opacity: 0; display: none;">(.*?)</p>', eachclass, re.S).group(1)
		return info

	def saveinfo(self,classinfo):
		f = open('./demo/info.txt', 'w')
		for each in classinfo:
			f.writelines('title:' + each['title'] + '\n')
			f.writelines('content:' + each['content'] + '\n')

		f.close()

if __name__ == '__main__':
	classinfo = []
	url = 'http://www.jikexueyuan.com/course/?pageNum=1'
	jikespider = spider()
	all_links = jikespider.changepage(url, 3)
	for link in all_links:
		print('正在处理' + link)
		html = jikespider.getsource(url)
		everyclass = jikespider.geteveryclass(html)
		for each in everyclass:
			info = jikespider.getinfo(each)
			classinfo.append(info)
	jikespider.saveinfo(classinfo)

	print('done')