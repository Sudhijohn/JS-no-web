const arr = [{
	name: 'Sudhi'
}, {
	name: 'Rintu'
}];

const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* generator() {
	while (true)
		yield Math.floor(Math.random() * 6);
}

const it1 = generator();

// console.log(it1.next());
// console.log(it1.next());

//Practical Example 1

const company = {
	employees: ["kat", "manuel", "kris"],
  [Symbol.iterator]: function* employeeGenerator() {
		let curEmp = 0;
		while (curEmp < this.employees.length) {
			yield this.employees[curEmp];
			curEmp += 1;
		}
	}
}

for (const emp of company) {
	console.log(emp); // "kat", "manuel", "kris"
}
//Practical Example 2
const someIterable = {
	name: 'Car',
	model: 'Hyundai'
};

someIterable[Symbol.iterator] = function* () {
	console.log(Object.keys(someIterable))
	yield 1;
	yield 2;
	yield 3;
};

console.log([...someIterable]); // you can spread the object like this

//Practical Example 3

function* countFruit(phrase) {

	const fruits = ["apple", "banana", "peach"];
	let curIndex = 0;

	while (curIndex < fruits.length) {
		yield phrase + fruits[curIndex];
		curIndex += 1;
	}
}

const fruitIterator = countFruit("A nice: ");

console.log(fruitIterator.next()); // A nice apple...
console.log(fruitIterator.next()); // A nice banana...
console.log(fruitIterator.next()); // A nice peach...

//- iterators
//- multiple returns from function (events, progress ...)
//- chunk huge workload over multiple animation frames