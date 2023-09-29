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

Footballer.prototype = {...Person.prototype,
	...Footballer.prototype
};

Footballer.prototype.getFanClub = function () {
	console.log(this.fanClub);
}

const sudhi = new Footballer('Sudhi', 'Manchester United');

// log(sudhi);
log(Object.keys(sudhi));
// log(sudhi.name);
// log(sudhi.fanClub);
// sudhi.getName();
// sudhi.getFanClub();

// console.log('Footballer.prototype.isPrototypeOf(sudhi) : ', Footballer.prototype.isPrototypeOf(sudhi));
// console.log('Person.prototype.isPrototypeOf(sudhi) : ', Person.prototype.isPrototypeOf(sudhi));
for (let key in sudhi) {
	log(key);
}

const User = function () {
	this.user = 'fan';
}

const Fans = function () {
	User.call(this);
	this.getFanType = function () {
		console.log(this.user);
	}
}

const fan = new Fans();

console.log(fan)