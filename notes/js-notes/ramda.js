var R = require('/usr/local/lib/node_modules/ramda')
function log(...args) {
	console.log(...args)
}
log(R.flatten(['2','3',3,['e']]))
log(R.reduce(R.subtract, 0, [1,2,3,4]))

let sort = R.sortBy(R.compose(R.toLower, R.prop('name')))

var people = [
{name: 'fdWF'},
{name: 'ddWF'}
]
log(sort(people))

// string
log(R.split('/','user/~/zd'))
log(R.splitAt('2', "eeee"))
log(R.map(R.trim, R.split(',', '1, 3, 3  ')))

//Math
let clock = R.mathMod(R.__, 2)
log(clock(12))
let square = n => n*n
log(R.maxBy(square, 3, -4))

R.reduce(R.maxBy(square), 0, [2, -3, 4])

log(R.dropRepeatsWith(R.eqBy(Math.abs), R.sortBy((v)=>v,[1,-1,3,4,1])))

log(R.groupWith(R.equals)([0, 1, 1, 2, 3, 5, 8, 13, 21,1]))



let o1 = {a: 1}
let o2 = {a: 10}
log(R.eqProps('a')(o1)(o2))

log(R.join('|', [0, 1, 1, 2, 3, 5, 8, 13, 21,1]))