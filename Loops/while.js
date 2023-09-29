const employees = [
	{
		name: 'Sunil'
	},
	{
		name: 'Anil'
	},
	{
		name: 'Subhash'
	},
	{
		name: 'Aneesh'
	}];

const length = employees.length;
let index = 0;

while (index < length) {
	console.log(employees[index]['name']);
	index += 1;
}