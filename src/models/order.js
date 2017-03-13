/* eslint-disable no-undef */

//
// Order Class
//
export class Order {

  constructor() {
    this._items = new [];
  }

  addItems(...items) {
    this._items = this._items.concat(items);
  }

  [Symbol.iterator]() {
    return new ArrayIterator(this._items);
  }
}


//
// Hard way to build array iterator
//
class ArrayIterator {

  constructor(array) {
    this._array = array;
    this._index = 0;
  }

  next() {
    var result = { value: undefined, done: true };
    if (this._index < this._array.length) {
      result.value = this._array[this._index];
      result.done = false;
      this._index += 1;
    }

    return result;
  }
}
