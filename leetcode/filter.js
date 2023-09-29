/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {

	const length = arr.length;
	const returnedArray = [];

	for (let i = 0; i < length; i++) {
		if (fn(arr[i], i)) {
			returnedArray.push(arr[i]);
		}
	}

	return returnedArray;

};

const arr = [0, 10, 20, 30];

function greaterThan10(n) {
	return n > 10;
}

console.log(filter(arr, greaterThan10));

const arr1 = [1, 2, 3];

function firstIndex(n, i) {
	return i === 0;
}

console.log(filter(arr1, firstIndex));

const arr2 = [-2, -1, 0, 1, 2]

function plusOne(n) {
	return n + 1
}

console.log(filter(arr2, plusOne));