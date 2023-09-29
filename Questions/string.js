const input = "Lorem ipsum dolor sit amet";
//utput: meroL muspi rolod tis tema

// console.log(input.split(' ')
// 	.reverse());

const output = input.split(' ')
	.map(str => str.split('')
		.reverse()
		.join(''))
	.join(' ')

console.log(output);