const promise1 = new Promise((resolve) => {
	resolve('abc');
});

const promise2 = new Promise((resolve) => {
	resolve('xyz');
});

const pr = Promise.allSettled([promise1, promise2]);
//const pr = Promise.all([promise1, promise2]);

pr.then((data) => {
	const [a, b] = data;
	console.log(a, b);
})