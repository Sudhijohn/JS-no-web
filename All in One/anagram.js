/*
Check if the given 2 strings are anagram
*/


/*Solution - 1*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	const length = str1.length;
	const obj1 = {};
	const obj2 = {};

	for (i = 0; i < length; i++) {
		obj1[str1[i].toLowerCase()] = obj1[str1[i]] + 1 || 1;
		obj2[str2[i].toLowerCase()] = (obj2[str2[i]] || 0) + 1;
	}

	for (key in obj1) {
		return obj1[key] === obj2[key];
	}

}

console.time("Start");
console.log(isAnagram('hello', 'olleh'));
console.timeEnd("Start");

console.time("Start");
console.log(isAnagram('231Hello', 'olleh123'));
console.timeEnd("Start");