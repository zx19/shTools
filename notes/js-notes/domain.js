function log(...args) {
	console.log(...args)
}
let domain = require('domain')


//. try catch 不能处理异步异常
function callbackError() {
	setTimeout(()=>{
		throw new Error("一个异步异常")
	},0)
}

try {
// callbackError()
} catch (e) {

}

let d = domain.create()
d.on('error', (err)=>{
	log('err'+err)
})
d.run(callbackError)

process.on('uncaughtException', (err)=>{
	log('err'+err)
})

