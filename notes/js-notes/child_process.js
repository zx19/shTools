function log(...args) {
	console.log(...args)
}

let exec = require('child_process').exec
let spawn = require('child_process').spawn


exec('cat *.js | wc -l', (error, stdout, stderr)=>{
	log('stderr',stderr)
	log('stdout',stdout)
	if (error) {
		log('error', error)
	}
})