import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
/* eslint-enable class-methods-use-this */
}

export default EVCar;
