let zlib = require('zlib')
let http = require('http')
let fs = require('fs')

let request = http.get({
	host: 'itbilu.com',
	path:'/',
	port: 80,
	headers: {
		'accept-encoding': 'gzip'

	}
})
request.on('response', (response)=>{
	let output = fs.createWriteStream('itbilu.com_index.html')
	switch (response.headers['content-encoding']) {
		case 'gzip':
		response.pipe(zlib.createGunzip()).pipe(output)
		break;
		default:
		response.pipe(output)
		break;
	}
})

http.createServer( (req, res)=> {
	let raw = fs.createReadStream('itbilu.com_index.html')
	let acceptEncoding = req.headers['accept-encoding']
	if (!acceptEncoding) {
		acceptEncoding = ''
	}

	if (acceptEncoding.match(/\bgzip\b/)) {
		res.writeHead(200, {'content-encoding': 'gzip'})
		raw.pipe(zlib.createGzip()).pipe(res)
	}
})