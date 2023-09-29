/*
Count the Unique numbers in the given sorted array.
*/
//             c     i 
const input = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9];

/*Solution 1*/

function countUniqueNumbers(input) {
	let count = 0;
	const length = input.length;

	for (let i = 1; i < length; i++) {
		if (input[i] !== input[count]) {
			count++;
			input[count] = input[i]

		}
	}
	return count
}

console.time("Start");
console.log(countUniqueNumbers(input));
console.timeEnd("Start");