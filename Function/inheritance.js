"use strict";
const {
	log
} = console;


const Person = function (name) {
	this.name = name;
}

Person.prototype.getName = function () {
	console.log(this.name)
}

const Footballer = function (name, fanClub) {
	Person.call(this, name);
	this.fanClub = fanClub;
}

Footballer.prototype = {...Footballer.prototype,
	...Person.prototype
};

Footballer.prototype.getFanClub = function () {
	console.log(this.fanClub);
}

const sudhi = new Footballer('Sudhi', 'Manchester United');

log(sudhi);
log(Object.keys(sudhi));
log(sudhi.name);
log(sudhi.fanClub);
sudhi.getName();
sudhi.getFanClub();

console.log(Footballer.prototype.isPrototypeOf(sudhi));
console.log(Person.prototype.isPrototypeOf(sudhi));