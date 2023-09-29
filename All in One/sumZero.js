/*
Zero Sum Problem
Find the first pair of values which gives a sum of 0*/

const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

/*Solution 1 - Works only on sorted Array*/
// function findSumZeroPair(input) {
// 	const output = [];
// 	const length = input.length;

// 	for (let i = 0; i < length; i++) {
// 		if (output.length) break;
// 		for (let j = i + 1; j < length; j++) {
// 			if (output.length) break;
// 			if (input[i] + input[j] === 0) {
// 				output.push(input[i], input[j]);
// 				break;
// 			}
// 		}
// 	}

// 	return output;
// }


/*Solution 2*/

// function findSumZeroPair(input) {
// 	const length = input.length;

// 	for (i = 0; i < length; i++) {
// 		const index = input.indexOf(0 - input[i]);
// 		if (index !== -1) {
// 			return [input[i], input[index]]
// 		}
// 	}
// }

/*Solution 3 - Works only on sorted Array*/

function findSumZeroPair(input) {
	let left = 0;
	let right = input.length - 1;

	while (left < right) {
		let sum = input[left] + input[right];

		if (sum === 0) {
			return [input[left], input[right]]
		} else if (sum > 0) {
			right--;
		} else {
			left++
		}
	}
}


console.log(findSumZeroPair(input));