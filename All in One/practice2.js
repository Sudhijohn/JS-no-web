const input = [1, 4, 20, 3, 10, 5, 20]; //[20, 10, 1, 3] //[1, 4, 20, 3, 10, 5, 20];
const input1 = [20, 10, 1, 3];
const input2 = [1, 4, 20, 3, 10, 5, 20];

const expectedSum = 33;

function findNumbers(input, target) {
	const length = input.length;
	let sum = 0;
	let diff = target;
	const output = [];

	for (let i = 0; i < length; i++) {
		sum += input[i];
		diff -= input[i];

		if (sum <= target) {
			const ifIndex = input.indexOf(diff);

			output.push(input[i]);
			if (ifIndex !== -1) {
				output.push(ifIndex);
				break;
			}
		}
		if (sum > target) {
			sum -= input[i];
		}

	}

	console.log(output);
}

findNumbers(input, expectedSum);
findNumbers(input1, expectedSum);
findNumbers(input2, expectedSum);


/*Solution 2 */

// function findSum(input, target) {
// 	const inputSorted = [...input];
// 	inputSorted.sort((a, b) => a - b);




// }

// findSum(input, expectedSum);