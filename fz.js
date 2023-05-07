const range = r => [...Array(r).keys()]

let x = parseInt(process.argv[2])

let fz = (n) => {
	//let test = n % d == 0 ? _ => s + x("") : x // uden 0 check
	let test = (d, s, x) => n == 0 ? x : n % d == 0 ? _ => s + x("") : x

	let fizz = x => test(3, "Fizz", x)
	let buzz = x => test(5, "Buzz", x)

	return fizz(buzz(x => x))(n.toString())}


range(x).forEach(x => console.log(fz(x)))

