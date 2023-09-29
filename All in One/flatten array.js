const arr = [1, [2], [3, 4], 6];

const arr1 = [1, 2, [3], [3, [4, 5], [1]]];

function flatArray(arr, output) {
	const length = arr.length;

	for (let i = 0; i < length; i++) {
		if (Array.isArray(arr[i])) {
			flatArray(arr[i], output)

		} else {
			output.push(arr[i]);
		}
	}
	return output;
}

flatArray(arr, []);
console.log(flatArray(arr, []));
console.log(flatArray(arr1, []));


// console.log([].concat(...arr));