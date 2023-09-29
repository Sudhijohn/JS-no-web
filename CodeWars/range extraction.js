'use strict';
/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*/

const rangeExtract = (list) => {
	let str = '';
	let count = 0;
	for (let index = 0; index < list.length; index++) {
		if (list[index + 1] - list[index] === 1) {
			count++;
		} else {
			count >= 2 ? str += list[index - count] + '-' + list[index] : count === 1 ? str += list[index - 1] + ',' + list[index] : str += list[index];
			(index === list.length - 1) ? str += '': str += ',';
			count = 0;
		}
	}
	console.log(str)
	return str;
}

rangeExtract([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);