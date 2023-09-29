'use strict'

const mainMenu = ['Pizza', 'Pasta', 'Risotto'];
const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];

const menu = [...mainMenu, ...starterMenu];

console.log(`For of simple`)
for (const item of menu) {
	console.log(item);
}
console.log(`**************************************`);

console.log(`For of using entries`);
for (const [index, item] of menu.entries()) {
	console.log(`Index : ${index} and Item : ${item}`);
}
console.log(`**************************************`);



const Persons = {
	person1: {
		name: 'Sudhi',
		age: 35
	},
	person2: {
		name: 'Rintu',
		age: 32
	}
};
console.log(Persons);

for (const person in Persons) {
	console.log(person, Persons[person]);
}
console.log(`**************************************`);
for (const [key, value] of Object.entries(Persons)) {
	console.log(key, value);
}