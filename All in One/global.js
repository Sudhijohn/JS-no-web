'use strict';
var firstName = 'Sudhi';

const Sudhi = {
	firstName: 'Sudhi',
	lastName: 'John',
	printName: () => {
		console.log(`${this.firstName}`);
	},
	print() {
		console.log(`${this.firstName}`)
	}
}

Sudhi.printName();
Sudhi.print();

/*this keyword*/


function testThis() {
	console.log(this);
}

testThis();

const map = new Map([
	['name', 'Sudhi'],
	['lastName', 'John'],
	]);

for (const [key, index] of map) {
	console.log('Key', key);
}