// // 

// const func = {
// 	counter: 1,
// 	arrow: () => {
// 		console.log(this); //undefined
// 		console.log(this.counter + 1); //type error
// 	},
// 	func: function () {
// 		console.log(this); //func
// 		console.log(this.counter + 1); //2
// 	}
// };

// func.arrow();
// func.func();

console.log(true + 1); // 2
console.log(true + false); //1
console.log('abc' + true); //'abctrue'
console.log(+1); //1
console.log(+'1');
console.log('1' + '2'); //'12'
console.log(+'1' + +'2');


// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, i * 1000);
// }

// (function(){}