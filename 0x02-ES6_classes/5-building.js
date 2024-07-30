export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Invalid attribute type');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter and setter for our attribute
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid attribute type');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
