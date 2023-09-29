'use strict';
const input = [1, 4, 20, 3, 10, 5];




// getSumElements(input, 33);

const getSumElements = (input, sum) => {
	let tempSum = 0;
	let diff = 0;

	console.log('Sum and tempSum at the Start', sum, tempSum);

	for (let index = 0; index < input.length; index++) {
		tempSum = input[index];
		const rest = [];
		for (let innerIndex = index + 1; innerIndex < input.length; innerIndex++) {
			tempSum += input[innerIndex];
			if (tempSum > sum) {
				console.log(tempSum)
					// return;
				diff = tempSum - sum;
				const hit = input.slice(0, innerIndex + 1)
					.filter(num => num === diff);
				if (hit.length > 0) {
					console.log(input.slice(0, innerIndex + 1)
						.filter(num => num !== diff));
					return input.slice(0, innerIndex + 1)
						.filter(num => num !== diff);
				}
				// input = input.slice(0, innerIndex)
				// 	.filter(num => num !== diff);
				//tempSum = tempSum - diff;
				//input.splice(innerIndex, 1);
				//console.log(diff, tempSum);
				tempSum = tempSum - input[innerIndex];
				console.log(tempSum);
				rest.push(input[innerIndex]);
				continue;
			}
			if (tempSum === sum) {
				if (rest.length > 0) {
					console.log(input.filter(num => !rest.includes(num)));
					return input.filter(num => !rest.includes(num));
				} else {
					console.log(input.splice(0, innerIndex + 1));
					return input.splice(0, innerIndex + 1)
				}

			}
		}
	}

};


getSumElements(input, 33);
getSumElements(input, 24);
getSumElements(input, 5);
getSumElements(input, 7);
// getSumElements(input, 24);
// getSumElements(input, 5);
//getSumElements(input, 24);