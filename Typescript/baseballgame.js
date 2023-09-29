const calPoints = function (ops) {
	let result = null;
	const length = ops.length;
	const arr = [];

	for (let i = 0; i < length; i++) {
		switch (ops[i]) {
		case 'D':
			arr.push(2 * Number(arr[arr.length - 1]));
			break;
		case 'C':
			arr.pop();
			break;
		case '+':
			arr.push(Number(arr[arr.length - 1] + Number(arr[arr.length - 2])));
			break;
		default:
			arr.push(Number(ops[i]));
		}
	}

	result = arr.reduce((acc, key) => acc += key, 0);

	return result;
}

console.log(calPoints(['5', '2', 'C', 'D', '+']));

//5, 10, 15