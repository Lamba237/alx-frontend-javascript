import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Implementing getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Implementing setter
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid attribute type');
    }
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
