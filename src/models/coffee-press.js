import RetailItem from './retail-item.js';

export class CoffeePress extends RetailItem {
  constructor(sku, price, mfg, sizeInOz) {
    super(sku, price, mfg);
    this.sizeInOz = sizeInOz;
  }
}
