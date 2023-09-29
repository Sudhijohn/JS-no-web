const {
	log
} = console;

/**********************************************************/
function countTrue(arr) {
	return arr.reduce((sum, item) => {
		if (item) {
			sum = sum + 1;
		}
		return sum;
	}, 0)
}

// console.log(countTrue([true, true, false]))

/**********************************************************/

function howManySeconds(hours) {
	return hours * 60 * 60;
}

// console.log(howManySeconds(2));
/**********************************************************/
function matchHouses(step) {
	return step ? ((step * 6) - (step - 1)) : 0;
}

// console.log(matchHouses(0));
// console.log(matchHouses(1));
// console.log(matchHouses(2));
// console.log(matchHouses(3));
// console.log(matchHouses(4));
/**********************************************************/

function whichIsLarger(f, g) {
	if (f() === g()) {
		return "neither";
	}
	return f() > g() ? 'f' : 'g';
}


// console.log(whichIsLarger(() => 5, () => 10))
// console.log(whichIsLarger(() => 25, () => 25))
// console.log(whichIsLarger(() => 505050, () => 5050))
/*********************************************************
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
**********************************************************/
function addUp(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i
	}
	return sum;
}

// log(addUp(4));
// log(addUp(13));
// log(addUp(600));

// log(new Number(7)
// 	.toString(2) && new Number(6)
// 	.toString(2));

/**********************************************************/


/**********************************************************/