console.log('Test Started');
setTimeout(() => {
	console.log('Timeout');
}, 0);
Promise.resolve('Promise resolve')
	.then((data) => console.log(data));
Promise.resolve('Promise resolve2')
	.then((data) => {
		for (let i = 0; i < 1000000000; i++) {}
		console.log(data)
	});
console.log('Test End');