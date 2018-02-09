let net = require('net')
let HOST = '127.0.0.1'
let PORT = 2345
require('ws')
// let client = net.connect({port: 2345}, ()=>{
// 	console.log('已经连接到服务器')
// 	client.write('hello')
// })

let server = net.createServer((connect)=>{
	connect.on('data', (data)=>{
		console.log('Data'+data)
		connect.write('you said' +Data)
	})
	connect.on('close', (data)=>{
		console.log('close'+connect.remoteAddress + ' ' + connect.remotePort)
	})
	console.log('connect:'+connect.remoteAddress + ' ' + connect.remotePort)
	connect.write('服务端发出: 连接成功')
})

// server.listen(PORT, HOST, ()=>{
// 	let address = server.address()
// 	console.log('Tcp服务启动', address)
// })