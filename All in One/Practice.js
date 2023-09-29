const testPromise = new Promise((resolve, reject) => {
	resolve(10);
});

testPromise.then((data) => console.log(data));
testPromise.then((data) => console.log(data));

const fact = (n) => {
	if (n <= 1) {
		return 1;
	} else {
		return n * fact(n - 1);
	}
}

console.log(fact(5));