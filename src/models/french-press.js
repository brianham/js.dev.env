import CoffeePress from './coffee-press';

export class FrenchPress extends CoffeePress {
  constructor(sizeInOz, material) {
    super(sizeInOz);
    this.material = material;
  }
}
