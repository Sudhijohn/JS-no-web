'use strict';
const input = [1, 4, 20, 3, 10, 5];

// getSumElements(input, 33);

const getSumElements = (input, sum) => {
	let accSum = 0;
	let indexes = [];

	if (accSum === sum || sum < 0) {
		return accSum;
	} else {
		for (let index = 0; index < input.length; index++) {
			const currentVal = input[index];
			const diff = sum - accSum;
			accSum += currentVal;
			if (accSum < sum || accSum === sum) {
				indexes.push(currentVal);
				if (accSum === sum) {
					break;
				}
			} else {
				const temp = accSum - sum; +
				accSum -= currentVal;
				continue;
			}

		}
	}
	return console.log(indexes);
};

getSumElements(input, 33);

getSumElements(input, 5);
getSumElements(input, 21);