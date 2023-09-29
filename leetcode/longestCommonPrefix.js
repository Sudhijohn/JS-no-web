/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const input1 = ["flower", "flow", "flight"];
const input2 = ["dog", "racecar", "car"];

/*Solution - 1*/
/*const longestCommonPrefix = function (strs) {
    const len = strs.length;
    if (!len || len > 200) return;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            console.log(strs[i][j])
        }
    }

};*/

console.log(input1[1].indexOf("flower"))
console.log("flower".substring(0, "flower".length - 1))

/*Solution - 2*/
const longestCommonPrefix = function (strs) {
	if (!strs || strs.length === 0) {
		return '';
	}

	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (!prefix) {
				return '';
			}
		}
	}

	return prefix

};

console.log(longestCommonPrefix(input1));