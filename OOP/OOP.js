'use strict';

const Person = function (name) {
	this.name = name;
}

Person.prototype.getName = function () {
	return this.name;
}

const Sudhi = new Person('Sudhi');

console.log(Sudhi.getName());
console.log(Sudhi.__proto__)

console.log(Person.prototype.isPrototypeOf(Sudhi));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.__proto__);