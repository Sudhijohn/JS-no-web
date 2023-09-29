/*Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.

A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
/*const timeLimit = function (fn, t = 0) {
	return async function (...args) {
		console.log(...args)
		const startTime = Date.now();
		return new Promise((resolve, reject) => {
			const timeOutId = setTimeout(() => {
				const endTime = Date.now();
				const isTimeExceeded = (endTime - startTime) > t;
				if (isTimeExceeded) {
					clearTimeout(timeOutId);
					reject("Time Limit Exceeded");
				}
			}, t);
			fn(...args)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err)
				})
		})
	}
};*/


const timeLimit = function (fn, t = 0) {
	return async function (...args) {
		const givenPromise = fn(...args);
		const rejectPromise = new Promise((_, reject) => {
			setTimeout(reject, t, "Time Limit Exceeded");
		});
		return Promise.race([givenPromise, rejectPromise]);
	}
}


/******************************************************************************************************/
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);

// limited(150)
// 	.catch(console.log) // "Time Limit Exceeded" at t=100ms

// new Promise((res, rej) => rej("Rejected"))
// 	.catch(console.log)

const limited1 = timeLimit(async() => {
	throw "Error";
});
// limited1()
// 	.catch(console.log);

const limited2 = timeLimit(async(n) => {
	await new Promise(res => setTimeout(res, 100));
	return n * n;
}, 50);
limited2(5)
	.catch(console.log);