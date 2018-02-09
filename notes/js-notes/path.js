let path = require("path")

function log(...args) {
	console.log(...args)
}


//1. 规范化路径 path模块中的normalize()方法用来规范化路径字符串。可用于处理路径中的"//"、".."、"."等字符。例如：
let normal = path.normalize('/foo/bar//baz/sas')
log(normal)

//2.链接路径  path.join()方法可以连接任意多个路径字符串。要连接的多个路径可做为参数传入。path.join()方法在接边路径的同时也会对路径进行规范化。例如
let join = path.join('/foo', 'bar', 'baz/sad')

log(join)
//3. 路径解析 
//path.resolve()方法可以将多个路径解析为一个规范化的绝对路径。其处理方式类似于对这些路径逐一进行cd操作，与cd操作不同的是，这引起路径可以是文件，并且可不必实际存在（resolve()方法不会利用底层的文件系统判断路径是否存在，而只是进行路径字符串操作）。例如：
let absolute = path.resolve('/foo/bar', '/foo')
log(absolute)
// 4. 相对路径关系 path.relative
// path.relative()方法可以找出一个绝对路径到另一个绝对路径的相对关系。例如
let relative = path.relative('/user/foo', '/user/foo/bar/bzs')
log(relative)

//5. 提取 path.dirname()方法可以提取出一个文件路径中的目录的部分。path.basename()方法可以提取出一个文件路径中的文件的部分。path.extname()方法可以提取文件的扩展名。例如
let dirname = path.dirname('/users/zh/document.js')
log(dirname)
let basename = path.basename('/users/zh/document.js')
log(basename)
let extname = path.extname('/users/zh/document.js')
log(extname)
//path.basename()方法还可以指定第二个参数：文件的扩展名，指定后可以提取文件名。指定扩展名不合法时将返回文件全名。例如
path.basename('/Users/liuht/code/itbilu/demo/path.js', '.js')
// 结果'path'

path.basename('/Users/liuht/code/itbilu/demo/path.js', '.html')
// 结果'path.js'