function log(...args) {
	// process.stdout.write(...args)
	console.log(...args)
}
function defer(fns) {
	setTimeout(()=>{
		fns()
	}, 0)
}

defer(()=>{
	log('defer')
	process.exit()
})
process.on('exit', ()=> {
	setTimeout(()=>{
		log('exit-after')
	}, 0)
	log('exit')
})

process.stdin.resume()
process.on('SIGINT', ()=>{
	log('sigint')
})

function gets(cb) {
	process.stdin.resume();
	process.stdin.setEncoding('utf8')
	process.stdin.on('data', (chunk)=>{
		process.stdin.pause()
		cb(chunk)
	})
}

gets((...args)=>{
	log(...args)
})

log(...process.argv)

process.nextTick(()=>{
	log('回调')
})






