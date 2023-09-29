'use strict';

/*
// A collection of unique values

const orderSet = new Set(['pasta', 'pizza', 'pasta', 'Risotto']);
console.log(orderSet);

console.log(new Set('Sudhi'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'))
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Garlic Bread');
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);*/

const Person = function (name) {
	this.name = name;
}

const person1 = new Person('Sudhi');
const person2 = new Person('Sudhi');
const person3 = person1;

console.log(person1 === person2);



const setObj = new Set([person1, person2, person3]);
console.log([...setObj]);