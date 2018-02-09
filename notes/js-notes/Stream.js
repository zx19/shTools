function log(...args) {
	console.log(...args)
}


function getReadableStream() {

}

let readStream = getReadableStream()
readStream.on('data', (chunk)=> {
readStream.pause()

setTimeout(()=>{
	readStream.resume()
},1000)
})
readStream.on('end', ()=>{

})

let http = require('http')
let fs = require('fs')

let server = http.createServer()
server.on('request', (req, res)=>{
	res.writeHead()
	let rs = fs.createReadStream('')
	rs.pipe(res)
})