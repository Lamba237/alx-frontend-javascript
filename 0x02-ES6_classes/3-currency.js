export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('Invalid attribute type');
    }
  }

  // Implementing getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Implementing setter methods

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid attribute type');
    }
    this._code = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid attribute type');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
