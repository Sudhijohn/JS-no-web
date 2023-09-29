function addNumbers(a, b) {
	console.log(this.a + a + b);
	return this.a + a + b;
};

const obj = {
	a: 10
};

addNumbers.call(obj, 1, 2);

addNumbers.apply(obj, [1, 2]);