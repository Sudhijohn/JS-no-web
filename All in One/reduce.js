console.log(`Reduce`);

const sample = [1, 4, 5, 6, 7];

//The final result of running the reducer across all elements of the array is a single value.

const output = sample.reduce((a, b) => {
	return a * b
}, 1);
console.log(output);