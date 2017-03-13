import './index.css';
import numeral from 'numeral';
import CoffeeDataService from './services/coffee-data-service.js';
import inventory from './../seedData/inventory.js';
import Order from './models/order.js';

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Example: app config
const { config } = require('./common/util.js');
console.log(`Application port: ${config.port}`);

// Trigger breakpoint with dev tools open
//debugger;

//
// Example: data service
//
let dataService = new CoffeeDataService();
dataService.loadData(inventory);
console.log(`Bags of coffee: ${dataService.coffee.count()};`);
console.log(`Bags of tea: ${dataService.tea.count()};`);

//
// Arrow Functions
//
let add_v1 = function(x,y) { return x + y; }; // verbose
let add_v2 = (x,y) => x + y;                  // multiple params
let square = x => x * x;                      // single param
let three = () => 3;                          // no params

//
// Using arrow functions with strategy pattern
//
let numbers = [1,2,3,4];
let sum = 0; numbers.forEach(n => n += sum);
let doubled = numbers.map(n => n * 2);

// Notes
// - Use arrow functions as callback for async activity
// - Problem with callbacks is managing this pointer (context dependent on where invoked)
// - Dont have to worry about creating a self closure (let self = this;) or binding functions
// - Arrow functions capture the this value from the context of which they are inside (lexical binding)

//
// Iterators
//

// Notes
// - Calls .next() until value found or done = true. Iterable: { value: 1, done: false }
// - No length property (less options than array), lazy

// for loop
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// for in - enumerates the properties of an object, pull out available keys, in case of array, index into array
sum = 0;
for (let i in numbers) {
  sum += numbers[i];
}

// iterator - values() returns an iterator
let iterator = numbers.values();
let next = iterator.next();
while (!next.done) {
  sum += next.value;
  next = iterator.next();
}

// for of - looping over values
// - sometimes we dont' want to use keys or indexes, iterate over values
// - works on objects that are iterable, calls next()
// - it is the [Symbol.iterator]() function that every iterable must implement
for (let number of numbers) {
  sum += number;
}

// How does 'for of' get to iterator?
// Symbol - function object, can be invoked
// Symbol.iterator - think of as constant that js runtime sets up
count = 0;
let newOrder = new Order();
newOrder.addItems("1","2","3","4");

for (let item of newOrder) {
  count += Number.parseInt(item);
}






//
// Misc
//


// ES6 feature: use back ticks to allow es6 to parse variable placeholders
console.log(`Test: ${val}`); // eslint-disable-line no-console

// number formatting library
const val = numeral(1000).format('$0,0.00');


//
// Generators
//

// Notes:
// - Generator function generates an iterator
// - requires new yield keyword and special function syntax
// - use yield keyword to return multiple values
// - yields thread of execution back to caller
