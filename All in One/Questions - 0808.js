const input = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]], [11, 12]];

// const input = [[6, 7], 1, 2, 3, 4, 5];

const output = input.flat(2);

// console.log(output);

// console.log(Array.isArray(input))
let flattenedArray = [];

const flatArray = (input) => {
	if (!input) {
		return
	}

	for (let i = 0; i < input.length; i++) {
		if (Array.isArray(input[i])) {
			// console.log(input[i])

			const innerArray = input[i];
			//input.splice(i, input[i].length);
			flattenedArray = flattenedArray.concat(innerArray);
			console.log(flattenedArray)
			
		}
	}
}

// console.log(flatArray(input));
flatArray(input)


/*

1. iterate
2. if array = assign and iterate over the array
3. club all together

*/