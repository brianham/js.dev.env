export class RetailItem {

  constructor(sku, price, mfg) {
    this._sku = sku;
    this._price = price;
    this._mfg = mfg;
  }

  get sku() {
    return this._sku;
  }

  set sku(newVal) {
      this._sku = newVal;
  }

  get price() {
    return this._price;
  }

  set price(newVal) {
      this._price = newVal;
  }

  get mfg() {
    return this._mfg;
  }

  set mfg(newVal) {
      this._mfg = newVal;
  }
}
