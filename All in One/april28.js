//https://codesandbox.io/s/interesting-shape-ic2p42?file=/src/App.js:1902-1944
const input = [5, 3, '2', 1, 4, 3];

//[5, 4, 3, 2, 1];

// const arr = [];

// const sortArray = (input) => {

// 	const sortedArray = input.sort((a, b) => {
// 		if (typeof b !== 'number') {
// 			arr.push(b);
// 		}
// 		return b - a;
// 	});
// 	console.log([...new Set(sortedArray)])
// 	return [...new Set(sortedArray)]

// }

// const another = (input) => [...new Set(input.sort((a, b) => {
// 	if (typeof b !== 'number') {
// 		console.log([Number(b)])
// 		b = new Number(b);

// 	}
// 	return b - a;
// }))]

// console.log(another(input));

// sortArray(input);
// console.log([...new Set(arr)]);

function sortedArray(input) {
	return [...new Set(input.map((val) => Number(val))
		.sort()
		.reverse())];
}

console.log(sortedArray(input));