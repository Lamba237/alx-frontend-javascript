import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    this._floor = floor;
  }

  get floor() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floor} floors`;
  }
}

export default SkyHighBuilding;
