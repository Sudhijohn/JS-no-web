function fact(n) {
	console.log(n)
	if (n === 0) {
		return 1;
	}
	return n * fact(n - 1);
}

console.log(fact(5))

function facts(n) {
	let fact = 1;

	for (let i = 1; i <= 5; i++) {
		fact *= i;
	}

	return fact;
}

// console.log(facts(5));