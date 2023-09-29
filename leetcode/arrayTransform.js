/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.*/

const map = function (arr, fn) {
	let length = arr.length;
	const returnedArray = [];

	for (let i = 0; i < length; i++) {
		returnedArray[i] = fn(arr[i], i);
	}

	return returnedArray;

};

// arr = [1, 2, 3];

// function plusI(n, i) {
// 	return n + i;
// }

// console.log(map(arr, plusI))

arr = [1, 2, 3];

function plusI(n) {
	return n + 1;
}

console.log(map(arr, plusI))