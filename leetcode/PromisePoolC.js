const promisePool = async function (functions, n) {
	const results = [];
	let inProgress = 0;
	return new Promise((resolve, reject) => {
		for (let i = 0; i < functions.length; i++) {
			functions[i]()
				.then(() => {
					results.push('resolved - ' + i);
					inProgress += 1;
					if (inProgress === functions.length) {
						resolve(results);
					}
				});
		}

	});

}

let functions = [
	() => new Promise(res => setTimeout(res, 300)),
	() => new Promise(res => setTimeout(res, 400)),
	() => new Promise(res => setTimeout(res, 200))
];


// promisePool(functions, 2)
// 	.then(console.log);

const sleep = (t) => new Promise(res => setTimeout(res, t));
const functions1 = [() => sleep(500), () => sleep(400)];

promisePool(functions1, 1)
	.then(console.log);