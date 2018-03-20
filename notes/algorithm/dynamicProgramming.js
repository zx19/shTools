


let map = new Map()
function getClimbingWays(n) {
	if (n < 1) {
		return 0
	}
	if (n == 1) {
		return 1
	}
	if (n == 2) {
		return 2
	}
	if (map.has(n)) {
		// console.log('----'+ n)
		return map.get(n)
	} else {
		console.log('----'+ n+ '---before')
		let value = getClimbingWays(n-1) + getClimbingWays(n-2)
		map.set(n, value)
		console.log('----'+ n+ '---' +value)
		return value
	}
}

function getClimbingWays2(n) {
	if (n < 1) {
		return 0
	}

	if (n == 1) {
		return 1
	}
	if (n == 2) {
		return 2
	}
	let f1 = 1;
	let f2 = 2;
	let fn = 0
	for (var i = 3; i <= n; i++) {
		temp = f1 + f2
		f1 = f2
		f2 = fn
	}
	return fn
}
// console.log(getClimbingWays(13))
// console.log(getClimbingWays2(13))



