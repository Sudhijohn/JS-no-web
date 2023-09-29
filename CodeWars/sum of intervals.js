const input1 = [
   [1, 4],
   [7, 10],
   [3, 5]
];

const input2 = [
   [1, 2],
   [6, 10],
   [11, 15]
];

const input3 = [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
];

const sort = (a, b) => a - b;

//console.log(input1.flat())
//.sort((a, b) => a - b));

// const sumOfInterval = (interval) => {
// 	const arr = interval.flat();
// 	let isOveLapping = arr.splice(2)
// 		.every(num => arr[1] < num)
// 	console.log(isOveLapping);
// 	const sum = interval.reduce((acc, ele) => {
// 		return isOveLapping ? acc += ele[1] - ele[0] : 0;
// 	}, 0);
// 	console.log(sum)
// }

// sumOfInterval(input2);
// const sum = (intervals) => {
// 	// console.log(interval);
// 	// for (let index = 0; index < interval.length; index++) {
// 	// 	for (let iIndex = index + 1; iIndex < interval.length; iIndex++) {
// 	// 		console.log(interval[index], interval[iIndex]);
// 	// 		if (interval[index][1] >= interval[iIndex][0] && interval[index][1] <= interval[iIndex][1]) {
// 	// 			console.log(interval[index][0], interval[iIndex][1])
// 	// 		}
// 	// 	}
// 	// }
// 	// const first = [];
// 	// const second = [];
// 	// const third = [];

// 	// interval.forEach(((arr, index) => {

// 	// 	first.push(arr[0])
// 	// 	first.sort(sort);
// 	// 	second.push(arr[1]);
// 	// 	second.sort(sort);
// 	// }));
// 	// console.log(first, second);


// 	const loop = (intervals) => {
// 		intervals.map((interval, index, array) => {
// 			array.slice(index + 1)
// 				.forEach(rest => {
// 					if (interval[1] >= rest[0] && interval[1] <= rest[1]) {
// 						[interval[1], rest[1]] = [rest[1], interval[1]];
// 					}
// 				})
// 		});
// 		intervals.map((interval, index, array) => {
// 			array.slice(index + 1)
// 				.forEach(rest => {
// 					if (interval[1] >= rest[0] && interval[1] <= rest[1]) {
// 						[interval[1], rest[0]] = [rest[0], interval[1]];
// 					}
// 				})
// 		});
// 	}

// 	loop(intervals);
// 	return intervals.flat()
// 		.filter((num, ind, arr) => {
// 			const max = arr.reduce((acc, ele) => {
// 				return ele > acc ? acc = ele : acc;
// 			}, arr[0]);
// 			return ind <= arr.indexOf(max);
// 		})
// 		.reduce((acc, ele, index, arr) => {
// 			// console.log(ele, arr[index + 1])
// 			return ele < arr[index + 1] ? acc = acc + (arr[index + 1] - ele) : acc = acc + 0;
// 		}, 0)
// };

// const max = [10, 20, 30, 50, 88, 1];
// const highest = max.reduce((acc, ele) => {
// 	return ele > acc ? acc = ele : acc;
// }, max[0]);
// console.log(highest)

// const sum = (intervals) => {
/*MyFlat function
Array.prototype.myFlat = function () {
	const newArr = [];
	this.forEach(ele => {
		newArr.push(ele[0]);
		newArr.push(ele[1]);
	})
	return newArr;
};

console.log(`**************************`)
console.log((input1.myFlat()));
console.log(`**************************`)*/
const sortInnerArray = (a, b) => a[0] - b[0];

function sum(intervals) {
	intervals.sort(sortInnerArray);
	const loop = (intervals, iteration) => {
		intervals.map((interval, index, array) => {
			array.slice(index + 1)
				.forEach((rest, ind) => {
					if (interval[1] >= rest[0] && interval[1] <= rest[1]) {
						!iteration ? [interval[1], rest[1]] = [rest[1], interval[1]] : rest[0] = interval[1];
					}
					if (rest[0] >= interval[0] && rest[1] <= interval[1]) {
						console.log(intervals.indexOf(rest))
						intervals.splice(intervals.indexOf(rest), 1);
					}
				})
		});
	}
	loop(intervals);
	loop(intervals, true);
	console.log(intervals)
	return intervals.flat()
		.filter((num, ind, arr) => {
			const max = arr.reduce((acc, ele) => {
				return ele > acc ? acc = ele : acc;
			}, arr[0]);
			return ind <= arr.indexOf(max);
		})
		.reduce((acc, ele, ind, arr) => {
			if (ind % 2 !== 0) {
				return acc += ele - arr[ind - 1]
			} else
				return acc;
		}, 0)

};

// console.log(sum(input3));
// console.log(sum(input2));
// console.log(sum(input1));

var test1 = [[1, 5]];
var test2 = [[1, 5], [6, 10]];
var test3 = [[1, 5], [1, 5]];
var test4 = [[1, 4], [7, 10], [3, 5]];
var test5 = [[11, 15], [6, 10], [1, 2]];

// console.log(test5.sort((a, b) => a[0] - b[0]))
//console.log(test4.sort((a, b) => a[0] - b[0]))

// const test6 = [[414, 492],
//   [-396, 402],
//   [55, 135],
//   [-484, 496],
//   [222, 376],
//   [-398, -155],
//   [-478, 69],
//   [-446, 318],
//   [264, 429],
//   [-178, -143],
//   [413, 496]];

// console.log(sum(test1));
// console.log(sum(test2));
// console.log(sum(test3));
// console.log(sum(test4));
// console.log(sum(test5));
// console.log(sum(test6));

function sumIntervals(intervals) {
	const ranges = new Set();

	intervals.forEach(([start, end]) => {
		console.log(ranges);
		console.log(start, end);
		for (let i = start; i < end; i++) ranges.add(i);
	});

	return ranges.size;
}

console.log(sumIntervals(test4));