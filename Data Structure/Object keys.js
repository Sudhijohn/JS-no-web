'use strict';

const data = {
	'plan1': ['001', '1010', '2000'],
	'plan2': ['003', '2010', '2000'],
	'plan3': ['341', '1340', '4567'],
	'plan4': ['021', '1010', '7867'],
	'plan5': ['301', '1010', '2345'],
};
console.log(Object.values(data));
const searchString = '7867'

const values = Object.values(data);

let dataIndex = -1;
values.forEach((value, index) => {
	if (value.includes(searchString)) {
		dataIndex = index;
	}
});

const keys = Object.keys(data);
console.log(keys[dataIndex]);

const entries = Object.entries(data);
console.log(entries);

for (const [index, value] of Object.entries(data)) {
	if (value.includes(searchString)) {
		dataIndex = index;
	}
}

console.log(dataIndex);