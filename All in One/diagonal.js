function printDiaggonal(input) {
	const length = input.length;
	const diaggOne = new Set();
	let sum = 0;

	function add(number) {
		if (!diaggOne.has(number)) {
			sum += number;
			diaggOne.add(number);
		}
	}

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {

			if (i === j) {
				add(input[i][j])
			}

			if (i + j === length - 1) {
				add(input[i][j])

			}
		}

	}
	console.log(diaggOne, sum)
}



const input = [
	[1, 2, 3, 4],
	[1, 2, 3, 4],
	[4, 5, 6, 7],
	[7, 8, 9, 10]
	];

const input1 = [
	[1, 2, 3],
	[1, 2, 3],
	[4, 5, 6],
	];

printDiaggonal(input);
printDiaggonal(input1);