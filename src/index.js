import './index.css';
import numeral from 'numeral';

// Trigger breakpoint with dev tools open
//debugger;

const val = numeral(1000).format('$0,0.00');

// ES6 feature: use back ticks to allow es6 to parse variable placeholders
console.log(`Test: ${val}`); // eslint-disable-line no-console
