class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  // Getter and Setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newName;
  }

  // Implementing a method displayFullCurrency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
