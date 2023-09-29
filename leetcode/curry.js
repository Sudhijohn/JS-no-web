/*Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.*/

/**
 * @param {Function} fn
 * @return {Function}
 */

const curry = function (fn) {
	return function curried(...args) {
		if (args.length < fn.length) {
			return function (...args2) {
				return curried(...args, ...args2);
			}
		}
		return fn(...args);
	};
};


function sum(a, b, ...rest) {
	console.log(rest)
	let restSum = rest.reduce((acc, num) => acc + num, 0);
	return a + b + restSum;
}
const csum = curry(sum);
// csum(1)(2) // 3
console.log(csum(1, 2));
// console.log(sum.length)

/*     *                              Trials*/

/*const curryTest = a => b => a + b;

const first = curryTest(1);
console.log(first(1));

console.log(curryTest(1)(1));*/

/*const curryFn = fn => a => b => fn(a, b);
const second = curryFn(sum);
console.log(second(1)(1));*/

let x = 20;
let y = x++;
console.log(x) //21
console.log(y) //20