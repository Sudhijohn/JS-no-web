'use strict';
console.log(`Modern Advanced Operators`);
// Data needed for first part of the section
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

  order: function (mainIndex, starterIndex) {
    console.log(this.mainMenu[mainIndex])
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  orderDelivery: function ({
    mainIndex = 0,
    startIndex = 0,
    time,
    address
  }) {
    console.log(`Order received at ${time} from address ${address} for ${this.mainMenu[mainIndex]} and ${this.starterMenu[startIndex]}`);
  }
};
/*Destrucuring*/
console.log('***************************************');
console.log('Destructuring..');
console.log('***************************************');
//Destructure to variable array and Object
console.log('Destructuring to variable...');
const arr = [2, 3, 5];
const [a, b, c] = arr;
console.log('Example 1 :', a, b, c);

const [first, second] = restaurant.categories;
console.log('Example 2 :', first, second);


//Variable Swapping without temp..
console.log('Variable Swapping...');
let firstName = 'Rintu'
let lastName = 'Thomas';
console.log('Before Swapping: ', firstName, lastName);

[firstName, lastName] = [lastName, firstName];
console.log('After Swapping: ', firstName, lastName);

//Function destructuring

const [main, starter] = restaurant.order(0, 2);
console.log('Example of Function Destructuring: ', main, ', ', starter);

//Nested destructure
const arr1 = [1, 2, 3, [7, 9, 19]];
const [x, y, , [d, e]] = arr1;
console.log('Nested destructuring example', d, e);

/*Object Destructring*/
console.log('*******************************************');
console.log(`Object Destructuring`);
const obj = {
  firstName: 'Sudhi',
  lastName: 'John',
  age: 35
};
const {
  firstName: name
} = obj;
console.log(name);

//Nested destructure
const {
  openingHours: {
    thu,
    fri
  }
} = restaurant;
console.log(thu);

//Swapping variables
let restaurantName = 'Little Italy';
console.log(restaurantName);
({
  name: restaurantName
} = restaurant);
console.log(restaurantName);

//function
restaurant.orderDelivery({
  time: '22:30',
  address: '#104',
  mainIndex: '2',
  startIndex: '1'
});
restaurant.orderDelivery({
  time: '22:30',
  address: '#104'
});

/*End of  Destrucuring*/

/*Spread Operators*/

const eplTeams = ['Manchester United', 'Manchester City', 'Liverpool'];
//epl = eplTeams;
const epl = [...eplTeams];
console.log(epl);
epl.push('Chelsea');
console.log(eplTeams);
console.log(epl);
console.log(typeof epl);
const duplicate = [77, 89, 77, 75, 76, 77, 45];
const newLeagues = Object.assign({}, epl);
console.log(newLeagues);

let cache = {}

duplicate.forEach((ele, ind) => {
  cache[ele] = (cache[ele] || 0) + 1;
});
console.log(cache);

const obj1 = {
  a: 10,
  b: 11,
  a: 12
};