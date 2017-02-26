import BagOfCoffee from './../models/bag-of-coffee.js';
import BagOfTea from '../models/bag-of-tea.js';
import FrenchPress from './../models/french-press.js';

export class CoffeeDataService {

  constructor() {
    this.coffee = [];
    this.tea = [];
    this.accessories = [];
  }

  loadData(inventory) {
    for (let item of inventory) {
      switch(item.type) {
        case 'BagOfCoffee': {
          let bagOfCoffee = new BagOfCoffee(item.sku, item.price, item.mfg, item.blend);
          this.coffee.push(bagOfCoffee);
          break;
        }
        case 'BagOfTea': {
          let bagOfTea = new BagOfTea(item.sku, item.price, item.mfg, item.leaf);
          this.tea.push(bagOfTea);
          break;
        }
        case 'FrenchPress': {
          let frenchPress = new FrenchPress(item.sku, item.price, item.mfg, item.material);
          this.accessories.push(frenchPress);
          break;
        }
      }
    }
  }
}
