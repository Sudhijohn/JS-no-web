/*
Compare Each element and move them till the whole Array is sorted
*/

const input = [20, 10, 30, 5, 100];



function bubbleSort(input) {

	const output = [...input];

	for (let i = 0; i < output.length - 1; i++) {

		for (let j = i + 1; j < output.length; j++) {

			if (output[i] > output[j]) {
				[output[i], output[j]] = [output[j], output[i]]
			}

		}
	}

	return output;
}

console.log(bubbleSort(input));