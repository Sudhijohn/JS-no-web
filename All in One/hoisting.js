'use strict';
var a = 10; {
	var a = -10;
	// let a = 11;
}

let b = a; {
	let b = -20;
}

console.log(b);

let c = 20;

{
	let c = 30;
	console.log(c)
}

console.log(c)