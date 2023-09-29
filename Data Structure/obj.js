const object = {
	who: 'World',
	greet() {
		return `Hello, ${this.who}!`;
	},
	farewell: () => {
		return `Goodbye, ${this.who}!`;
	}
};

// console.log(object.greet());
// console.log(object.farewell());

function abc() {
	try {
		throw new Error('Error!!')
	} catch (e) {
		console.error('Indise Catch', e);
	}
}
/******************/
try {
	console.log("Start");
	setTimeout(() => {
		console.log("Inside Timeout");
		// throw new Error('Error!!')
		abc()
	}, 10);
	console.log('Before Catch');
} catch (e) {
	console.log('Inside Catch');
}
console.log("end");