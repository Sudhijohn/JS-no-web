'use strict';
const obj = {
	name: 'Sudhi',
	hobby: 'football',
	team: 'Manchester United',
	getTeam() {
		function getHobby() {
			console.log(this.hobby)
		}
		getHobby = getHobby.bind(this);
		getHobby()

	}
};

const objMap = new Map(Object.entries(obj));

const arr = [1, 2, 3, 4, 5];

console.log(Object.entries(arr))
console.log(Object.values(arr))
console.log(Object.keys(arr))
obj.getTeam()

class User {
	name = 'user1';
	render() {
		return {
			name: this.name
		}

	}
}


const user = new User()
console.log(user.render())
console.log(user)