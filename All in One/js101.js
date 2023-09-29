//const addNumbers = (num) =>
'use strict';

const addNumbers = (num) => (num2) => num + num2;

const add = addNumbers(2);

console.log(add(3));

function compareAge(data) {
	if (data === {
			age: 18
		}) {
		console.log('if block');
	} else if (data == {
			age: 18
		}) {
		console.log('Else if block')
	} else {
		console.log('Else');
	}

}

compareAge({
	age: 18
});

let a = 20;
let a = 30;


const sum = input.reduce((acc, num) => acc += num, 10);
const diff = input.reduce((acc, num) => acc -= num, 0);
console.log(sum);
console.log(diff);

console.log(10 > 20 < 30);

input.sort((a, b) => );
console.log(input);