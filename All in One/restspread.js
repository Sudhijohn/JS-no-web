function add(...numbers) {
	return numbers.reduce((a, b) => {
		return a + b;
	})
}
const input = [10, 20, 30];

console.log(add(1, 2, 3));
console.log(add(...input));