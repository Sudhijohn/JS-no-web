function curry(param1) {
	return function curried(param2) {
		if (!param2) return param1;
		console.log({
			param1,
			param2
		});
		return curry(param1 + param2);
	}
}

const sum = param => param1 => {
	if (!param1) return param;
	return sum(param + param1);
}

console.log(curry(1)(2)(4)(5)());
console.log(sum(1)(2)(4)(5)());