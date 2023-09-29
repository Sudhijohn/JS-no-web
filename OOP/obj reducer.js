const action = {
	resources: {
		name: 'Sudhi',
		age: 35,
		status: 'M'
	}
};

const state = {
	user: {}
}

const newUser = {...state.user,
	...Object.keys(action.resources)
	.reduce((obj, key) => {
		obj[key] = action.resources[key];
		return obj;
	}, {})
}

const newState = {...state,
	user: newUser
}

console.log(state);
console.log(newState);
console.log(state);

// const anotherState = {...state,
// 	...action.resources
// };
// console.log(anotherState);

// const data = [1, 2, 3, 4, 6, 1];

// let cache = {};

// data.forEach((num) => {
// 	cache[num] = (cache[num] || 0) + 1;;
// });

// console.log(cache);