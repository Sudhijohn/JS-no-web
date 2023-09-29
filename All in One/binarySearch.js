'use strict';

const getInputArray = (length) => {
	const input = [];

	while (input.length < length) {
		input.push(Math.floor(Math.random() * 999));
	}
	return input;
}

const input = getInputArray(25);

console.log(input);

const sortArray = (a, b) => a - b;

const searchArray = (input, item) => {
	const array = [...input];
	array.sort(sortArray);
	const mid = Math.floor(array.length / 2);
	console.log(mid, array.length);



}

searchArray(input, 45);