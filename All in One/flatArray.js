const input = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]], [11, 12]];

const output = [];

const flatArray = (inputArray) => {
	for (let index = 0; index < inputArray.length; index++) {
		Array.isArray(inputArray[index]) ? flatArray(inputArray[index]) : output.push(inputArray[index]);
	}
};

flatArray(input);
console.log('output', output);

function getFlat(inputArray) {
	const output = [];

	function flatArray(inputArray) {
		for (let index = 0; index < inputArray.length; index++) {
			Array.isArray(inputArray[index]) ? flatArray(inputArray[index]) : output.push(inputArray[index]);
		}

	}
	flatArray(inputArray);
	return output;
}

console.log(getFlat(input));