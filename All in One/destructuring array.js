'use strict';

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [1, 2, 4];

const [a, b, c] = arr;
console.log(a, b, c);
console.log(typeof a);

const [x, y] = arr;
console.log(x, y);

//Skipping unwanted elements

const [food1, , food2] = restaurant.categories;
console.log(restaurant.categories);
console.log(food1, food2);

//function desturturing
function order(startIndex, mainIndex) {
	return [restaurant.starterMenu[startIndex], restaurant.mainMenu[mainIndex]];
}

console.log(order(2, 1));
let [starter, mainCourse] = order(2, 1);
console.log(starter, mainCourse);

//Swap Variables using destructring
[starter, mainCourse] = [mainCourse, starter];
console.log(starter, mainCourse);


//Nested destructing
const nested = [2, 4, [5, 6]];
//const [i,,j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
// const [p,q,r] = [8,9];
// console.log(p,q,r);

const [p = 1, q = 1, r = 0] = [8, 9];
console.log(p, q, r);