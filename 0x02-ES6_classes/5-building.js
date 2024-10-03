export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      return new TypeError('square footage must be a number');
    }
    this._sqft = sqft;
  }

  // getter for square footage attribute
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
