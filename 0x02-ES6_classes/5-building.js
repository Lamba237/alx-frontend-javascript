class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Implementing a getter and setter for our sqft attribute
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('square footage must be a number');
    }
    this._sqft = newSqft;
  }

  // An abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
