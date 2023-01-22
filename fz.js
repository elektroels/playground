const lib = require('./lib');

// Ex: node fz.js 20
let x = parseInt(process.argv[2])

// Kevlin Henney fizz buzz nu med 0 check
let fz = (n) => {
	let test = (d, s, x) => 
		//n % d == 0 ? _ => s + x("") : x // uden 0 check
		n == 0 ? x : n % d == 0 ? _ => s + x("") : x // med 0 check

	let fizz = x => test(3, "Fizz", x)
	let buzz = x => test(5, "Buzz", x)

	return fizz(buzz(x => x))(n.toString())}

lib.range(x).forEach(x => console.log(fz(x)))

