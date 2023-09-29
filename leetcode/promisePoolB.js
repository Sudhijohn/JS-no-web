const promisePool = async function (functions, n) {
		const startTime = Date.now();
		const totalPromises = functions.length;
		let count = 0;
		return new Promise(resolve => {
			for (func of functions) {
				func()
					.then(() => {
						count += 1;
						console.log(Date.now() - startTime);
						let isAllPromisesExecuted = count === totalPromises;
						if (isAllPromisesExecuted) {
							resolve("All Promises Resolved");
						}

					})
			}
		})
	}
	/*******************************************************************************/

const promisePool1 = async function (functions, n) {
	const startTime = Date.now();
	const totalPromises = functions.length;
	let count = 0;
	return new Promise(resolve => {
		executePromises();

		function executePromises(funcs = functions) {
			for (let index = 0; index < n; index++) {
				if (!funcs[index]) return;
				funcs[index]()
					.then(() => {
						if (count > totalPromises) return
						count += 1;
						console.log(Date.now() - startTime);
						console.log({
							count,
							totalPromises
						})
						let isAllPromisesExecuted = count >= totalPromises;
						if (isAllPromisesExecuted) {
							resolve("All Promises Resolved");
							return;
						} else {
							executePromises(functions.slice(count));
						}
					})
			}
		}

	})
}

let functions = [
	() => new Promise(res => setTimeout(res, 300)),
	() => new Promise(res => setTimeout(res, 400)),
	() => new Promise(res => setTimeout(res, 200))
];

// promisePool(functions, 2)
// 	.then(console.log);
promisePool1(functions, 2)
	.then(console.log);