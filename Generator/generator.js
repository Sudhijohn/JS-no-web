/****************************************************************************/
function* infinite() {
	let index = 0;

	while (true) {
		yield index++;
	}
}

const generator = infinite(); // "Generator { }"

// console.log(generator.next()
// 	.value); // 0
// console.log(generator.next()
// 	.value); // 1
// console.log(generator.next()
// 	.value); // 2
/****************************************************************************/
function* abc() {
	yield 'a';
	yield 'b';
	yield 'c';
}

// console.log(...abc())
// console.log([...abc()]);
/****************************************************************************/

function* infinity() {
	let num = 0;
	while (num < 100) {
		num++;
		yield num;
	}
}

const num = infinity();

// console.log(num.next()
// 	.value);
// console.log(num.next()
// 	.value);
// console.log(num.next()
// 	.value);

console.log([...infinity()])

/****************************************************************************/