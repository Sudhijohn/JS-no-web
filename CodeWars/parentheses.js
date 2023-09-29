'use strict'
console.log(`Valid Parentheses`);

// function validParentheses(str) {
// 	let isValid;
// 	((str.length % 2) === 0) ? isValid = true: isValid = false;
// 	str.split('')
// 		.forEach((element, index) => {
// 			(index % 2 === 0 && element === '(') ? isValid = true: isValid = false;
// 			(index % 2 !== 0 && element === ')') ? isValid = true: isValid = false;
// 			if (isValid === false) return;
// 		});
// 	return isValid;
// };

function validParentheses(str) {
	const each = [];
	let isValid;
	((str.length % 2) === 0) ? isValid = true: isValid = false;
	str.split('')
		.forEach((element, index) => {
			(index % 2 === 0 && element === '(') ? isValid = true: isValid = false;
			(index % 2 !== 0 && element === z ``) ? isValid = true: isValid = false;
			each.push(isValid);
			if (isValid === false) return;
		});
	console.log(each);
	return isValid;
};


//Check if the length of the parenthese is a even number else return false

//Check if it contains some other letters, if yes return false
//To check this, iterate through string and find if, see any position, there are anyother value than (||)

//Check odd index is open and even index is close

//console.log(validParentheses('())'));
//console.log(validParentheses('(())((()())())'));

//Working solution
function validParentheses(parens) {
	if (parens.length % 2 === 0) {
		const parensElements = [...parens];
		const count = {};
		count['(index'] = [];
		count[')index'] = [];

		parensElements.forEach((ele, ind) => {
			count[ele] = (count[ele] || 0) + 1;
			count[ele + 'index'].push(ind);
		});
		if (parensElements[0] === ')') return false;
		if (parensElements[parensElements.length - 1] === '(') return false;
		if (count['('] !== count[')']) return false;
		const closeIndexes = [...count[')index']];
		const openIndexes = [...count['(index']];
		console.log(closeIndexes, openIndexes);
		for (
			let openIndex = 0; openIndex <= openIndexes.length; openIndex++
		) {
			for (let closeIndex = openIndex; closeIndex <= closeIndexes.length; closeIndex++) {
				if (openIndexes[openIndex] > closeIndexes[closeIndex]) {
					return false;
				}
			}
		}
		return true;
	} else {
		return false;
	}
}

console.log(validParentheses('())(()'));
console.log(validParentheses('())(()'));