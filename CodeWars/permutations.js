'use strict';

const input = 'a'; // ['a']
const input1 = 'ab'; // ['ab', 'ba'] 
const input2 = 'aabb'; // ['aabb', 'abab', 'abba', 'baab', 'baba', 'baba`']


function permutations(input) {
	return input.split('')
		.map(letter => letter);
}
console.log(permutations(input2));