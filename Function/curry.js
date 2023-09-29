function curried(x) {
	return function (y) {
		return function (z) {
			console.log(x + y + z);
			return x + y + z;
		}
	}
}

// curried(1)(2)(3);

function tryDestructring({
	name = 'Test name',
	age
}) {
	console.log({
		name,
		age
	})
}

// tryCurried({
// 	name: 'Sudhi',
// 	age: 36
// });

// tryCurried({
// 	age: 37
// });


function restParametes(name, ...rest) {
	console.log({
		name,
		rest
	})

}

restParametes('Sudhi', 1, 2, 4567);