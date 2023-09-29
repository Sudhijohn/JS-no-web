/*Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.*/


/**
 * @param {Function} fn
 */
function memoize(fn) {
	let cache = {}
	return function (...args) {
		let key = JSON.stringify(args);
		if (args.length === 0) return 1
		if (cache[key] || cache[key] === 0) {
			console.log('From cache')
			return cache[key];
		}
		cache[key] = fn(...args);
		console.log('Executed', cache, args, cache[key])
		return cache[key];
	}
}

const memoizedFn = memoize(function (a, b) {
	// callCount += 1;
	return a + b;
})

console.log(memoizedFn(0, 0))
console.log(memoizedFn(0, 0))
console.log(memoizedFn())