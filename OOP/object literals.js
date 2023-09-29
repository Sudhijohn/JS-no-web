'use strict';

const covidStop = ['forceStop']

const hours = {
	start: "10.00",
	stop: "18.00",
	[covidStop[0]]: "13.00"
};

const restaurant = {
	name: 'Italia',
	hours,
	isOpen() {
		console.log(`Currently in progress`);
	}
}

console.log(restaurant);
console.log(restaurant.isOpen());

console.log(`Optional Chaining`);
//console.log(restaurant.hours ? .start);
console.log(typeof restaurant.isOpen())