/*
 Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
 */


// Check if there is a remainder 
// If yes, Check if the reminder is there in the input array
//If no, divide the number and return the number with divison result number of times.


const candidates = [2, 3, 6, 7];
const target = 7;

// function findCombinationSum(input, target) {
// 	const output = [];

// 	for (let i = 0; i < input.length; i++) {
// 		if (input[i]) {
// 			const num = input[i];
// 			const mod = target % num;
// 			const division = Math.floor(target / num);

// 			// console.log({
// 			// 	num,
// 			// 	mod,
// 			// 	division
// 			// })

// 			if (mod === 0) {
// 				output.push(Array.from({
// 					length: division
// 				}, () => num));
// 			} else {
// 				const modIndex = input.indexOf(mod);
// 				const divisionIndex = input.indexOf(division);

// 				if (modIndex !== -1 && divisionIndex === -1) {
// 					output.push(mod < num ? [mod, num] : [num, mod]);
// 				}

// 				if (divisionIndex !== -1) {

// 					// console.log({
// 					// 	division,
// 					// 	num,
// 					// 	target,
// 					// 	mod
// 					// })

// 					const numbers = Array.from({
// 							length: (target - division) / num
// 						},
// 						() => num
// 					);

// 					(division < num) ?
// 					numbers.unshift(division):
// 						numbers.push(division);



// 					output.push(numbers);
// 				}

// 			}
// 		}
// 	}

// 	return output;
// }


// console.log(findCombinationSum(candidates, target));
// console.log(findCombinationSum([2, 3, 5], 8));

// console.log(7 % 2, Math.floor(7 / 2))

// console.log(2 % 2)


var combinationSum = function (candidates, target) {
	let result = [];
	dfs(candidates, target, [], result);
	return result;

};

function dfs(nums, target, path, result) {
	console.log({
		nums,
		target,
		path,
		result
	});
	if (target < 0) {
		// Backtracking 
		return;
	}
	if (target === 0) {
		result.push(path);
		return;
	}
	for (let i = 0; i < nums.length; i++) {
		dfs(nums.slice(i), target - nums[i], [...path, nums[i]], result);
	}
}

console.log(combinationSum([2, 3], 8))
	// console.log(combinationSum([2, 3, 5], 8));