/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
	const stack = [];
	const length = s.length;
	const validBrackets = '() {} []';
	let i = 0;

	while (i < length) {
		stack.push(s[i]);
		i++;

		let compareBrackets = stack[stack.length - 2] + stack[stack.length - 1];

		if (validBrackets.includes(compareBrackets)) {
			stack.pop();
			stack.pop();
		}
	}

	return stack.length === 0;

};

console.log(isValid('()'));
console.log(isValid('([])'));
console.log(isValid('([]))'));