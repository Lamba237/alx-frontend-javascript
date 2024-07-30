export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;

    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error();
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
