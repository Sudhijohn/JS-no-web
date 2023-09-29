function add(num1, num2) {
	if (num2) {
		return num1 + num2;
	}
	return function (num2) {
		return num1 + num2;
	}
}


console.log(add(2, 3));
console.log(add(2)(3));

const input = [4, 2, 1, 6, 7, 6, 7];

const sortedArray = [...new Set(input.sort((a, b) => a - b))];

console.log(sortedArray.at(-2));

// https://codesandbox.io/s/broken-thunder-1dvomt?file=/src/DisplayName.jsx