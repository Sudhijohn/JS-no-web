//Spread because of the left hand side
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 6];
console.log(others);

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
	orderDelivery: function ({
		starterIndex,
		mainIndex,
		address,
		time
	}) {
		console.log('Order received at ', time);
		console.log(address);
	},
	orderPizza: function (mainIng, ...otherIng) {
		console.log(mainIng, otherIng);
	},
};

restaurant.orderPizza('mushrooms', 'onion', 'chicken', 'olive');

//Destructuring

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

const {
	sat,
	...weekDays
} = restaurant.openingHours;
console.log(weekDays);

function add(...numbers) {
	return numbers.reduce((a, b) => {
		return a + b;
	})
}

console.log(add(1, 2, 3));

const input = [10, 20, 30];
console.log(add(...input));