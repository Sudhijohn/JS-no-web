/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
	const map = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	const romanArray = s.split('');
	const len = romanArray.length;
	let sum = 0;

	for (let i = len - 1; i >= 0; i--) {
		if (romanArray[i - 1] && map[romanArray[i]] > map[romanArray[i - 1]]) {
			sum += map[romanArray[i]] - map[romanArray[i - 1]];
			i--;
		} else {
			sum += map[romanArray[i]];
		}

	}
	console.log(sum)
	return sum;
};

// romanToInt('VIII');
// romanToInt('IX');
// romanToInt('XI');
// romanToInt('X');
// romanToInt('XL');


// romanToInt("III");
// romanToInt("LVIII");
// romanToInt("MCMXCIV");
romanToInt('XIX');