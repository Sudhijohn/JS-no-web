/*Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
	if (!nums) return;
	const length = nums.length;
	if (length === 0) return init;
	let sum = init;

	for (let i = 0; i < length; i++) {
		sum = fn(sum, nums[i]);
	}

	return sum;
};

let nums = [1, 2, 3, 4]

function sum(accum, curr) {
	return accum + curr;
}
let init = 0

console.log(reduce(nums, sum, init));

nums = [1, 2, 3, 4]
fn = function sum(accum, curr) {
	return accum + curr * curr;
}
init = 100

console.log(reduce(nums, fn, init));

nums = []
fn = function sum(accum, curr) {
	return 0;
}
init = 25

console.log(reduce(nums, fn, init));