import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floor = floors;
  }

  get floors() {
    return this._floor;
  }

  set floors(newFloor) {
    if (typeof this.floor !== 'number') {
      throw new TypeError('floor value must be a number');
    }
    this._floor = newFloor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}

export default SkyHighBuilding;
