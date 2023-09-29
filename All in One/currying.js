// function simpleFunction(greeting) {
// 	return function (name) {
// 		console.log(`Hello ${name}, ${greeting}`);
// 	}
// }


// const greeting = simpleFunction('How are you?');
// greeting('Sudhi');

/* Currying with multile arguments */
const curry = (fn) => {
	return curried = (...args) => {
		if (fn.length !== args.length) {
			return curried.bind(null, ...args)
		}
		return fn(...args);
	};
}
const totalNum = (x, y, z) => {
	return x + y + z
}
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));
/*End of curry*/



// const fetchProducts = ()=>{
// 	return async (dispatch)=>{
// 	}
// }

const addTax = (rate) => (value) => value + value * rate;

const addVAT = addTax(.23);

console.log(addVAT(100));
console.log(addVAT(23));