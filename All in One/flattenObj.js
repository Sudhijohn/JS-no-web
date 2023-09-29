const obj = {
	'1': 1,
	'2': 2,
	'3': {
		'4': 3,
		'5': 4
	},
	'4': 5
}

// console.log(obj)

function flattenObj(input, output = []) {
	for (key in input) {
		if (typeof input[key] === 'object') {
			flattenObj(input[key], output);
		} else {
			output.push(input[key]);
		}
	}
	console.log(output)
}

flattenObj(obj);