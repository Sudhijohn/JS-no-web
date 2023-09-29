console.log(`Object Destructuring`);

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
	}
};
//
restaurant.orderDelivery({
	time: '22:30',
	address: '#104',
	mainIndex: 2,
	starterIndex: 1
});


//Default values and renaming
const {
	name: restaurantName = 'Italian',
	starterMenu,
	mainMenu,
	openingHours
} = restaurant;
console.log(restaurantName, starterMenu, mainMenu);

//Mutating variables
let a = 111;
let b = 999;
const obj = {
	a: 23,
	b: 7,
	c: 100
};
console.log(a, b);
({
	a,
	b
} = obj);
console.log(a, b);

//nested objects

const {
	openingHours: {
		fri: {
			open,
			close
		}
	}
} = restaurant;
console.log(open, close);