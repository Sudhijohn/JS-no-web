const startingTime = Date.now();
let func = () => console.log(Date.now() - startingTime);
setTimeout(func, 200);
setTimeout(func, 100);

let functions = [
	() => new Promise(res => setTimeout(res, 300)),
	() => new Promise(res => setTimeout(res, 400)),
	() => new Promise(res => setTimeout(res, 200))
];