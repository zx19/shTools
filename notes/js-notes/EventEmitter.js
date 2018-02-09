var http = require('http')
let util = require('util')
var server = http.createServer()
let em = require('events').EventEmitter

function log(...args) {
	console.log(...args)
}

server.on('request', (req, res)=> {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('hello world')
})

// let re = server.listen(3000)

let MyClass = function () {
	// body...

}

util.inherits(MyClass, em)

MyClass.prototype.sendEvent = function () {
	this.emit('myEvent', 'arg1', 'sf')
}

let myIns = new MyClass()
myIns.on('myEvent', (...args)=>{
	log(...args)
})
myIns.once('myEvent', (...args)=>{
	log(`${args}--once`)
})

myIns.sendEvent()
// myIns.removeListener('myEvent')
myIns.removeAllListeners()
myIns.sendEvent()

