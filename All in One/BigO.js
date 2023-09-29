function addUpto(n) {
	return n * (n + 1) / 2;
}

console.log(addUpto(5))

function fact(n) {
	if (n == 1) return n;
	else return n * fact(n - 1);
}

console.log(fact(5))