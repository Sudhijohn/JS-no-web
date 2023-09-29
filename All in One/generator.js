function* greetingGenerator() {
	const name = yield 'What is your name?';
	yield `Hello, ${name}!`;
}

const generator = greetingGenerator();
console.log(generator.next()
	.value); // 'What is your name?'
console.log(generator.next('John')
	.value); // 'Hello, John!'