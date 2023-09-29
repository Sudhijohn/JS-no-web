import total, { add } from './shoppingCart.mjs';
import * as cart from './shoppingCart.mjs';

await setTimeout(() => {
	console.log('Waited..')
}, 5000);

console.log(`Importing modules`);


console.log(cart.add(2,3));
console.log(cart.total);


console.log(total);
console.log(add(2,4));
