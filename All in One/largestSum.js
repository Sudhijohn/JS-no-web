/*Largest sum

Given an Array and a length, find the max sum of consecutive elements

for Eg: Sum of 1+2+3+4, 2+3+4+3,,,,4+6+7+8 
Ans:25

The length can change
*/


const input = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];



/*Solution -1*/
// function findLargestSum(input, n) {
// 	const length = input.length;
// 	const loopLength = length - (n - 1);
// 	let maxSum = 0;

// 	if (n > length) return;

// 	for (let i = 0; i < loopLength; i++) {
// 		const arr = input.slice(i, n + i);
// 		let sum = 0;

// 		for (val of arr) {
// 			sum += val;
// 		}

// 		if (sum > maxSum) maxSum = sum;
// 	}
// 	return maxSum;
// }


/*Solution -2*/
// function findLargestSum(input, n) {
// 	const length = input.length - (n - 1);;
// 	let maxSum = 0;

// 	if (n > length) return;

// 	for (let i = 0; i < length; i++) {
// 		const arr = input.slice(i, n + i);
// 		let sum = 0;

// 		for (let j = 0; j < n; j++) {
// 			sum += input[i + j];
// 		}

// 		if (sum > maxSum) maxSum = sum;
// 	}
// 	return maxSum;
// }

/*Solution 3 */

function findLargestSum(input, n) {
	const length = (input.length) - (n - 1);
	let maxSum = 0;


	for (let i = 0; i < length; i++) {
		let sum = input[i];

		for (let j = i + 1; j < n + i; j++) {
			sum += input[j];
		}

		if (sum > maxSum) maxSum = sum;

	}

	return maxSum;
}


console.log(findLargestSum(input, 4));
console.log(`*****************`)
console.log(findLargestSum(input, 3));