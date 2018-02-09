let URL = require('url')
function log(...args) {
	console.log(...args)
}
// http://user:pass@host.com:8080/p/a/t/h?query=string#hash

// href: 解析前的完整URL 
// http://user:pass@host.com:8080/p/a/t/h?query=string#hash
// slash 协议的: 后 是否有 /

//pathname
//search
//path 
//query
//hash
//

//1. 将URL字符串转为对象 
var urlstring = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
var resu = URL.parse(urlstring, true)
log(resu)

var urlObj = {
	protocol: 'file',
	host: 'baidu.com:8080',
	hash: 'hash',
	search: 'query=string',
	path: '/nodejs?query=string'
}

let urlstr = URL.format(urlObj)
log(urlstr)

let reso = URL.resolve('http://example.com', '/one')
log(reso)