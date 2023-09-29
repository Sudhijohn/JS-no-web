/*Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
	const length = functions.length;
	return function (x) {
		if (length === 0) return x;
		executedFunction = functions[length - 1](x);
		for (i = length - 2; i >= 0; i--) {
			executedFunction = functions[i](executedFunction)
		}
		return executedFunction;
	}
};

const compose1 = function (functions) {
	return function (x) {
		let result = x;

		for (let fn of functions.reverse()) {
			result = fn(result);
		}

		return result;
	}
};

let functions = [x => x + 1, x => 2 * x];
let y = 4;

let fn = compose(functions);
let fn1 = compose1(functions);

console.log(fn(y)) // 9
console.log(fn1(y)) // 9

functions = [x => 10 * x, x => 10 * x, x => 10 * x];
let x = 1;

fn = compose(functions);
fn1 = compose1(functions);
console.log(fn(x)) // 1000
console.log(fn1(x)) // 1000

functions = [], x = 42

fn = compose(functions);
fn1 = compose1(functions);
console.log(fn(x)) // 1000
console.log(fn1(x)) // 1000