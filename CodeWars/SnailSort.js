'use strict'

//Inputs
const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const input1 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
const input2 = [[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];


function snailSort(array) {
	const [one, ...rest] = array;

	const traverse = (rest) => {
		const restArray = [];
		rest.forEach((ele, ind) => {
			if (ind < rest.length - 1) {
				one.push(ele[rest.length]);
				restArray.push(ele.slice(0, rest.length));
			} else {
				one.push(...[...ele].reverse());
				if (restArray.length === 1) {
					one.push(...restArray[0]);
				} else {
					const rest = restArray.map(ele => ele.reverse())
						.reverse();
					traverse(rest);
				}
			}
		})
	}
	traverse(rest);
	return one;
}


console.log(snailSort(input2));
snailSort(input1);
snailSort(input);