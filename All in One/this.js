'use strict'
console.log(`This`);

const obj = {
	a: 10,
	printA: function () {
		console.log(this.a);
		const addA = () => {
			this.a += 1;
		};
		addA();
		console.log(this.a);
		const self = this;

		function subtractA() {
			self.a -= 1;
		}
		subtractA();
		console.log(this.a);
	}
};

//obj.printA();

function add(argument) {
	console.log(`From Add function: `);
	console.log(this);
	console.log(argument ? argument : 'No input');
	this ? this.name = argument + ' Shumacker' : null;
}

// add();
add.call(obj, 'Michael');
//console.log(obj)