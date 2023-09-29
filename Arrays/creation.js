/*Array from constructor and Fill*/
const arr = new Array(4);

arr.fill('abc');

console.log(arr);

/*Array from */

// console.log(Math.floor(Math.random()*10))

const newArr = Array.from({
	length: 10
}, () => Math.floor(Math.random() * 100));

console.log(newArr);