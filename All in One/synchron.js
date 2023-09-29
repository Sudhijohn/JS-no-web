let arr = [1, 2, 3, 4];

console.log(arr.length);

arr[9] = 9;

console.log(arr.length);

function test() {
	var a = "1";
	let b = "2";
	if (true) {
		let a = "3";
		var b = "4";
		console.log(a, b);
	}
}

test()