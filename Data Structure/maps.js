'use strict';

const rest = new Map();
rest.set('name', 'Classico iTaliano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, "We are open")
	.set(false, "We are closed");

console.log(rest.get('name'));
console.log(rest.get(true));

console.log(rest.has('categories'));
console.log(rest.delete(2))
console.log(rest);
console.log(rest.size);
console.log(rest.clear());
console.log(rest)
console.log(typeof rest);

const question = new Map([['question', 'What is the best programming language?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'Python'],
	['correct', 3],
	[true, 'Correct '],
	[false, 'Try again']
	]);
console.log(question);

for (const [key, value] of question) {
	if (typeof key === 'number')
		console.log(`Answer ${key}:${value}`);
}
const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

console.log(Object.entries(openingHours))

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log('Entries: \n', [...hoursMap.entries()]);
// console.log('Entries wihout spread: \n', hoursMap.entries());
console.log('Map to Array: \n', [...hoursMap]);

for (const [key, value] of hoursMap) {
	console.log(key, value);
}

// hoursMap.forEach((key, value) => {
// 	console.log('From forEach', key, value)
// })