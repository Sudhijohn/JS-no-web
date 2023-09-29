 console.log(`Spread Operator`);

 const restaurant = {
 	name: 'Classico Italiano',
 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
 	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 }

 const arr = [7, 8, 9];

 const newArr = [1, 2, ...arr];

 console.log(newArr);
 console.log(...newArr);

 const newMenu = [...restaurant.mainMenu, 'Lazanige'];
 console.log(newMenu);

 //Shallow copy of Array
 const [item1, , item2] = restaurant.mainMenu;
 console.log(item1, item2);
 const main = [...restaurant.mainMenu];

 //Merge 2 arrays
 const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
 console.log(menu);

 function orderPasta(ing1, ing2, ing3) {
 	console.log(ing1, ing2, ing3);
 }
 const ingredients = ["pasta", "chilli flakes", "pepper"];
 orderPasta(...ingredients);

 //Objects
 const obj = {
 	a: 10
 };
 const newObj = {...obj,
 	b: 12
 };
 console.log(newObj, obj);

 //Shallow copy
 const obj1 = {...obj
 };
 obj1.a = 100;
 console.log(obj, obj1);

 //function spread

 function spreadTest(...args) {
 	console.log(...args);
 }

 spreadTest(1, 2, 3, 4);

 function spreadClosure(a) {
 	return function (...args) {
 		a(...args);
 	}
 }

 const getClosure = spreadClosure((...a) => {
 	console.log(...a);
 });
 getClosure(1, 3, 6, 8, 10);