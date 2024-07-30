export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error();
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
