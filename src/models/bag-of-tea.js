import RetailItem from './retail-item.js';

export class BagOfTea extends RetailItem {
  constructor(sku, price, mfg, leaf) {
    super(sku, price, mfg);
    this.leaf = leaf;
  }
}
