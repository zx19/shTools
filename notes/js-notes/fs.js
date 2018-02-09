let fs = require('fs')

function log(...args) {
	console.log(...args)
}
// log(process)
//1. 文件信息
fs.stat('./path.js', (err, stat) => {
	// log(stat.isFile())
	// log(stat.isDirectory())
})
/*
stats类中的方法有：

stats.isFile() 如果是标准文件，返回true。是目录、套接字、符号连接、或设备等返回false
stats. isDirectory() 如果是目录，返回true
stats. isBlockDevice() 如果是块设备，返回true，大多数情况下类UNIX系统的块设备都位于/dev目录下
stats. isCharacterDevice() 如果是字符设备，返回true
stats. isSymbolicLink() 如果是符号连接，返回true。（fs.lstat()方法返回的stats对象才有此方法）
stats.isFIFO() 如果是FIFO，返回true。FIFO是UNIX中的一种特殊类型的命令管道
stats. isSocket() 如果是UNIX套接字，返回true
*/

// 2.打开文件

fs.open('./path.js', 'r', (err, fd) => {

})
/*
fs.open()方法第一个参数是文件路径。每二个参数是标志位，标志位表示文件的打开模式。标志含义与UNIX中fopen的标识位相同：

r 打开文本文件进行读取，数据流位置在文件起始处
r+ 打开文本文件进行读写，数据流位置在文件起始处
w 如果文件存在，将其清零，不存在创建写入文件。数据流位置在文件起始处
w+ 打开文件进行读写，如果文件存在，将其清零，不存在创建写入文件。数据流位置在文件起始处
a 打开文件写入数据，如果文件存在，将其清零，不存在创建写入文件。数据流位置在文件结尾处，此后的写操作都将数据追加到文件后面
a+ 打开文件进行文件读写，如果文件存在，将其清零，不存在创建写入文件。数据流位置在文件结尾处，此后的写操作都将数据追加到文件后面
*/

/*
fs.read(fd, buffer, offset, length, position, callback)
从文件描述符fd中读取文件数据。

buffer是一个缓冲区，读取的数据将会写入到这里。

offset是开始向缓冲区 buffer 写入数据时的偏移量。

length是一个整型值，指定了读取的字节数。

position是一个整型值，指读取的文件起始位置，如果position为null，将会从文件当前的位置读取数据。

callback中回调函数，其中包含了三个参数(err, bytesRead, buffer)，分别表示：错误、读取的字节数、缓冲区。

使用fs.read()方法读取文件内容时，首先需要一个文件描述符fd，创建文件描述符fd可以使用fs.open()方法。

fs.read()方法可以实现部分文件内容的读取。通过length和position参数可以指定读取文件内容的长度和读取内容的起始位置。
*/

// 6 

log(__dirname)
log(__filename)


// 文件 目录重命名与移动
