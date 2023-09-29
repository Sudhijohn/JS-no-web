/*Infinite Currying*/


function curriedSum(a) {
	return function (b) {
		if (!b) {
			return a;
		}
		return curriedSum(a + b);
	}
}

// console.log(curriedSum(1)(2)(4)(5)());

const input = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]], [11, 12]];
const output = [];

function flatArray(input) {

	for (let i = 0; i < input.length; i++) {
		if (Array.isArray(input[i])) {
			flatArray(input[i]);
		} else {
			output.push(input[i]);
		}
	}
}
flatArray(input)
console.log(output)

queueMicrotask(() => {
	console.log(2);
});

// requestAnimationFrame(() => console.log(5));