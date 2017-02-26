import './index.css';
import numeral from 'numeral';
import CoffeeDataService from './services/coffee-data-service.js';
import inventory from './../seedData/inventory.js';

/* eslint-disable no-console */
// Allow writes to console for entire file

// create data service and load from seed data
let dataService = new CoffeeDataService();
dataService.loadData(inventory);
console.log(`Bags of coffee: ${dataService.coffee.count()};`);
console.log(`Bags of tea: ${dataService.tea.count()};`);



// Trigger breakpoint with dev tools open
//debugger;

// number formatting library
const val = numeral(1000).format('$0,0.00');

// ES6 feature: use back ticks to allow es6 to parse variable placeholders
console.log(`Test: ${val}`); // eslint-disable-line no-console
