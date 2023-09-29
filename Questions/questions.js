'use strict';

/*console.log(`Question 1: Currying`);
const tripleAdd = input1 => input2 => input3 => console.log(input1 + input2 + input3);


// const tripleAdd1 = input1 => input2 => input3 => input1 + input2 + input3;

// const tripleAdd2 = tripleAdd1(10);
// const tripleAdd3 = tripleAdd2(20);
// console.log(tripleAdd3(30))

tripleAdd(10)(20)(30);

// function getProduct(num1, num2) {
//   return num1 * num2;
// }

function getProduct(num1) {
	return function (num2) {
		return num1 * num2;
	}
}

const getProduct1 = num1 => num2 => num1 * num2;

console.log(getProduct(1)(2));
console.log(getProduct1(2)(10));

function getTravelTime(distance, speed) {
	console.log(distance / speed);
	return distance / speed;
}

getTravelTime(600, 50);

const NyBnTraelTime = getTravelTime.bind(null, 400);
NyBnTraelTime(60);
NyBnTraelTime(100);


/*console.log(`Question 2:`)

function getTotal() {
	let total = 0;

	for (var i = 0; i < 10; i++) {
		let valueToAdd = i;
		var multiplier = 2;
		total += valueToAdd * multiplier;
	}

	return total;
}
console.log(getTotal());*/

/*console.log(`Question 3:`)
	var myCar = {
		color: "Blue",
		logColor: function () {
			var self = this;
			console.log("In logColor - this.color: " + this.color);
			console.log("In logColor - self.color: " + self.color);
			(function () {
				// console.log("In IIFE - this.color: " + this.color);
				console.log("In IIFE - self.color: " + self.color);
			})();
			(() => {
				console.log("In IIFE (Arrow Func) - this.color: " + this.color);
				console.log("In IIFE (Arrow Func)- self.color: " + self.color);
			})();
		}
	};

	myCar.logColor();*/

/*console.log(`Question 4: == vs ===`);

console.log('5' == 5);
console.log('5' === 5);*/

/*console.log(`Question 5:`);
var num = 50;

function logNumber() {
	console.log(num);
	var num = 100;
}

logNumber();*/

/*console.log(`Question 6:`);


// const myFunc = (function () {
// 	let count = 0;
// 	return function () {
// 		return ++count;
// 	}

// })();

function myFunc() {
	let count = 0;

	return function () {
		count++;
		return count;
	}

}


console.log(myFunc());
console.log(myFunc());
console.log(myFunc());*/


/*console.log(`Question 7:`);

(function () {
	var x = y = 200;
})();

console.log('y: ', y);
console.log('x: ', x);*/

/*console.log(`Question 8:`);

let list1 = [1, 2, 3];

const list2 = list1;

list1 = list1.reverse();
list1 = [10, 20];

console.log(list1, list2)*/

/*console.log('Question 9')
function getTotal(x, y) {
	return y ? x + y : (y) => x + y;

}

const getTotal = (x, y) => y ? x + y : (y) => x + y;
console.log(getTotal(10, 20));
console.log(getTotal(10)(20));*/

/*console.log(`Question 10 : Order logged out`);

function logNumbers() {
	console.log(1);
	setTimeout(function () {
		console.log(2)
	}, 1000);
	setTimeout(function () {
		console.log(3)
	}, 0);
	console.log(4);
}

logNumbers();*/

/*console.log(`Question 11: Data types`);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);*/

/*console.log('Question 12: Object comparison');

const user1 = {
	name: 'Jordan',
	age: 28,
};

const user2 = {
	name: 'Jordan',
	age: 28,
};

console.log(user1 == user2);
console.log(user1 === user2);*/
/*console.log(`Question 13 : Array constructor`);
var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);

console.log(arr2);*/
/*console.log(`Question 13 : Array Index`);
console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{
	name: 'Pam'
}, {
	name: 'Kent'
}].indexOf({
	name: 'Kent'
}));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));
//Works only with Primitive values*/

/*console.log(`Question:14 : `)
console.log(900.9 === 300.3 * 3);
console.log(900.9 === Number((300.3 * 3)
	.toFixed(1)));
console.log((300.3 * 3)
	.toPrecision(12))*/

/*console.log(`Question 15 : Objects and Strings(Non-Primitive vs Primitive`);
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2);


////////////////////////////////


var person1 = {
	name: 'Alex',
	age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1);*/

/*console.log(`Question 16 : Strings and Array`);
const data1 = 'Jordan Smith';


const data2 = [].filter.call(data1, function (elem, index) {
	return index > 6;
});

console.log(data2);*/

/*console.log(`Question 17 : Object Properties`);
const a = {};
const b = {
	name: 'b'
};
const c = {
	name: 'c'
};


a[b] = 200;
a[c] = 400;

console.log(a[b]);
console.log(a[{}]);
console.log(Object.keys(a))*/
/*var x = 10;

function y() {
	x = 100;
	return;
	// function x() {}

}

y();

console.log(x); * /

/*console.log(`Question 19 : `);
const account1 = {
	name: 'Jen',
	totalAmount: 5000,
	deductAmount: function (amount) {
		this.totalAmount -= amount;
		return 'Amount in account: ' + this.totalAmount;
	},
};

const account2 = {
	name: 'James',
	totalAmount: 8000,
};

const withdrawFromAccount = function (amount) {
	return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());
console.log(withdrawFromAccount(200)());*/