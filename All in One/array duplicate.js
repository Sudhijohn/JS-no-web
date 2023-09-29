const sample = [
      33, 33, 33, 40, 33, 33, 45, 33, 17, 31, 40, 33, 45, 45, 20, 33, 20, 31,
      20, 17, 45, 20, 20, 17, 20, 17, 17, 45, 20, 45, 17, 17, 45, 45, 45, 31,
      45, 45, 33, 33, 45, 33, 45, 17, 40, 31, 45, 31, 33, 20, 31, 31, 20, 45,
      20, 10, 32
    ];

//Find the occurance of an Element inside the array
const cache = {};
const x = 1;
const output = sample.filter((ele) => {
	cache[ele] = (cache[ele] || 0) + 1;
	return cache[ele] <= x;
});
console.log(cache);
console.log(output);