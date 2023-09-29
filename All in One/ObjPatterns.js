'use strict';

const obj = {
	name: 'Sudhi',
	age: 37,
	fetchName() {
		let fetchAge = function () {
			return this.age;
		}
		let fetchAgeAgain = () => this.age;
		fetchAge = fetchAge.bind(this);
		console.log(fetchAge())
		console.log(fetchAgeAgain())
		return this.name;
	}
}

console.log(obj.fetchName())