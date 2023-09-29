const a = {
	name: 'Sudhi',
	age: 37
}
const b = {
	name: 'Rintu',
	age: 30
}

console.log({...a,
	...b
})

const names = [a, b];

const persons = names.filter(person => person.age > 30);

console.log(persons);

console.log(Object.values(a))