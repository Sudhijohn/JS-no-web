// const arr = [{
// 		identifier: 'plan2',
// 		body: 'abc'
// }, {
// 		identifier: 'plan3',
// 		body: 'abc'
// }, {
// 		identifier: 'plan4',
// 		body: 'abc',
// 		xyz: 1234
// },
// ];
// const obj = {};
// const identifiers = arr.map((ele, index) => {
// 		return ele.identifier;
// 	})
// 	.forEach(ele => obj[ele] = {});

// console.log(obj)

// arr.map((ele) => {
// 	const {
// 		identifier,
// 		...rest
// 	} = ele;
// 	obj[ele.identifier] = rest;
// })

// console.log(obj)





// // console.log(Object.entries(obj));
// // const {
// // 	identifier
// // } = obj;



const obj = {
	categorie1: {
		plan1: ['002', '003'],
		plan2: ['001', '004'],
	},
	categorie2: {
		plan3: ['122', '234'],
		plan4: ['006', '345'],
	},
}

// console.log(obj['categorie1']['plan1'].includes('002'));


const getPlans = (argument) => {
	for (key in obj) {
		for (plan in obj[key]) {
			if (obj[key][plan].includes(argument)) {
				return {
					key,
					plan
				}
			}
		}
	}
};

console.log(getPlans('006'));
console.log(getPlans('122'));
console.log(getPlans('1423'));