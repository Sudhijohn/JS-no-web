const input = [1, 4, 20, 3, 10, 5, 20]; //[20, 10, 1, 3] //[1, 4, 20, 3, 10, 5, 20];

const expectedSum = 33;

const {
	log
} = console;


isExpectedSumGreater = (sum, num) => (expectedSum >= (sum + num)) ? false : true;

function getNumbers() {
	let sum = 0;
	const numbers = [];
	for (let index = 0; index < input.length; index++) {
		const num = input[index];
		if (sum < expectedSum && !isExpectedSumGreater(sum, num)) {
			sum = sum + num;
			numbers.push(num);
		} else if (sum === expectedSum) {
			break;
		} else if (sum < expectedSum && isExpectedSumGreater(sum, num)) {
			continue
		}
	}

	return {
		numbers,
		sum
	};

}

log(getNumbers());