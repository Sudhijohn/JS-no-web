const createCounter = function (init) {
	const initialVal = init;
	let counter = initialVal;
	return {
		increment() {
			return counter += 1;
		},
		decrement() {
			return counter -= 1;
		},
		reset() {
			counter = initialVal;
			return counter;
		}
	}

}

const counter = createCounter(5)
console.log(counter.increment()); // 6
// console.log(counter)