/*Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.

Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.

For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.*/

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
const promisePool = async function (functions, n) {
	const startTime = Date.now();
	const totalPromises = functions.length;
	let count = 0;
	let executedPromises = 0;

	/**************************************************************/
	return new Promise(res => {
			resolvePromises(functions.slice(0, n));
			/**************************************************************/
			function resolvePromises(funcs) {
			executedPromises += funcs.length;
				console.log({
					executedPromises,
					totalPromises
				})
				if (executedPromises < totalPromises) {
					resolvePromises(functions.slice(executedPromises))
				}
				for (let i = 0; i < n; i++) {
					return funcs[i]()
						.then(() => {
							count += 1;
							console.log('Executed Time', Date.now() - startTime);
							if (count === totalPromises) {
								return res("All promises resolved")
							}

						});
				}

			}
			/**************************************************************/
		})
		/**************************************************************/

};


let functions = [
	() => new Promise(res => setTimeout(res, 300)),
	() => new Promise(res => setTimeout(res, 400)),
	() => new Promise(res => setTimeout(res, 200))
];

const functions1 = [() => sleep(500), () => sleep(400)];

let n = 2;

const sleep = (t) => new Promise(res => setTimeout(res, t));


promisePool(functions, 2)
	.then(console.log) // After 900ms