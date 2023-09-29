"use strict";
const {
	log
} = console;

class Person {
	country = 'India'
	constructor(name) {
		this.name = name || 'John Doe';
	}

	getName() {
		console.log(this.name);
	}
}

class Footballer extends Person {
	constructor(name, fanClub) {
		super(name);
		this.fanClub = fanClub;
	}

	static printName(person) {
		return console.log(person.name);
	}

	getfanClub() {
		console.log(`Name : ${this.name}
			Fanclub :${this.fanClub} Country:${this.country}`);
	}
}



const fan = Object.freeze(new Footballer('Sudhi', 'Manchester United'));


log(Object.keys(fan));

for (let key in fan) {
	log(key);
}

const fan1 = new Footballer('Rintu', 'Manchester United')
Footballer.printName(fan1)
// console.log(fan1.getfanClub())