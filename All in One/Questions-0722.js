const arr = [{
		name: 'name',
		class: 4,
		marks: 90
},
	{
		name: 'name-1',
		class: 4,
		marks: 90
}, {
		user: 'p'
	},
	{
		name: 'name-4',
		class: 4,
		marks: 90
},

	{
		name: 'name-2',
		class: 6,
		marks: 90
},
	{
		name: 'name-78',
		class: 6,
		marks: 90
},
	{
		name: 'name-3',
		class: 5,
		marks: 90
}];
let obj = {};
const classes = arr.map(item => item.class)

classes.forEach(item => {
	if (!item) return;
	obj[item] = obj[item] + 1 || 1;
});

// console.log(obj);

const classCounts = arr.reduce((countObj, item) => {
	if (item.class) {
		countObj[item.class] = countObj[item.class] + 1 || 1;
	}
	return countObj;
}, {});



console.log(classCounts);