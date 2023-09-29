/*Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.*/

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
	let counter = 0;

	return function (...args) {
		if (counter >= 1) return;
		counter += 1;
		return fn(...args)

	}
};

let fn = (a, b, c) => (a + b + c);
let calls = [[1, 2, 3], [2, 3, 6]];


const onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined, fn was not called