import RetailItem from './retail-item.js';

export class BagOfCoffee extends RetailItem {
  constructor(sku, price, mfg, blend) {
    super(sku, price, mfg);
    this.blend = blend;
  }
}
