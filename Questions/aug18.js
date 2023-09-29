//[]
//
/*
Rotate an array right with given number of places.
    var arr= [6,5,9,2,1]
    n=3
    rotated arr= [2,1,6,5,9]*/

// [5,9,2,1,6] -1
// [9,2,1,6,5] -2
// [2,1,6,5,9] -3
//[1,6,5,9,2] - 4
//[6,5,9,2,1] - 5
//[5,9,2,1,6] -6
//[9,2,1,6,5] - 7


function rotateArray(input, n) {
	let i = 0;
	const output = [...input];
	while (i < n) {
		output.push(output.shift())
		i++;
	}
	return output;
}

const input1 = [6, 5, 9, 2, 1];
const n1 = 1;

// console.log(rotateArray([6, 5, 9, 2, 1], 3));
// console.log(rotateArray([6, 5, 9, 2, 1], 4));
// console.log(rotateArray([6, 5, 9, 2, 1], 5));
// console.log(rotateArray([6, 5, 9, 2, 1], 7));
console.log(rotateArray(input1, 3));
console.log(rotateArray(input1, 7));