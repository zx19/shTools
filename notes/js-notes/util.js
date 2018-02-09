function log(...args) {
	console.log(...args)
}

let util = require('util')
let events = require('events')


log(util.isArray(new Array))

function MyStream() {
	events.EventEmitter.call(this)
}

util.inherits(MyStream, events.EventEmitter)	

MyStream.prototype.write = function(data) {
	this.emit("data",data)
}

let steam = new MyStream()