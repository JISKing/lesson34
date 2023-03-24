class Cola {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

class Whiskey {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

class Ice {
  constructor(price) {
    this.price = price;
  }
}

let mixin = {
  vat() {
    return (this.price = this.price + this.price * 0.2);
  },
  exciseDuty() {
    return (this.price = this.price + this.price * 0.3 + 10);
  },
  singleTax() {
    return (this.price = this.price + 1);
  },
};

Object.assign(Cola.prototype, mixin);
Object.assign(Whiskey.prototype, mixin);
Object.assign(Ice.prototype, mixin);

let cocaCola = new Cola("Coca-Cola", 10);
let johnwalker = new Whiskey("john walker", 100);
let ice = new Ice(2);

console.log(cocaCola.vat());
console.log(johnwalker.exciseDuty());
console.log(ice.singleTax());
