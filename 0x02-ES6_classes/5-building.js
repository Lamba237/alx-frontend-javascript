export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter for square footage attribute
  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
