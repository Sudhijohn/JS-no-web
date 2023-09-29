const account = {
	name: 'Sudhi',
	transactions: [300, -500, 400, 600, -900],
	details: {
		IFSE: ''
	},
	get latest() {
		return this.transactions.slice(-1)
			.pop();
	},
	set latest(mov) {
		this.transactions.push(mov);
	},
	set name(name) {
		this._name = name;
	},
	get name() {
		return this._name;
	}
};

console.log(account.latest);

account.latest = 50;
console.log(account.latest);


const propNames = Object.getOwnPropertyNames(account);
console.log(propNames)

const value = account[propNames[0]];
console.log(account[propNames[2]])

query {
	user(id: 23) {
		friends {
			company {
				name
			}
		}
	}
}