const arr = [{
	name: 'Sudhi'
}, {
	name: 'Rintu'
}];

const data = arr.forEach(user => user);
const data1 = arr.map(user => user.name);
console.log(data);
console.log(data1);

for (const {
		name
	}
	of arr) {
	console.log(name);
}

const [, , second = 'Jewel'] = arr;
console.log('second', second);