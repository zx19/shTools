let querystring = require('querystring')

function log(...args) {
	console.log(...args)
}
//querystring.stringify方法可以将对象序列化为一个querystring
//不指定后面三个可选参数时，默认用"&"（分割符）连接参数，"="（分配符）符号连接参数名和参数值，并用encodeURIComponent方法对参数进行编码。序列化对象时，可以指定分割符和分配符。示例如下：


let query = querystring.stringify({site: 'www.baidu.com', url: '//baidu'})
log(query)

let escape = querystring.escape(query)
log(escape)
//
let queryOb = querystring.parse('site=www.baidu.com&url=%2F%2Fbaidu')
log(queryOb)