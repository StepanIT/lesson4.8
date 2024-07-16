// 'use strict';

// const cart = {
//   items: [],
//   count: 0,

//   add(productName, priceProduct, quantityOfGoods = 1) {
//     const product = {
//       productName,
//       priceProduct,
//       quantityOfGoods,
//     };
//     this.items.push(product);
//     this.increaseCount();
//   },

//   increaseCount() {
//     this.count = this.items.reduce((acc, {quantityOfGoods}) =>
//       acc + quantityOfGoods, 0);
//   },

//   calculateItemPrice() {
//     return this.items.reduce((acc, item) =>
//       acc + (item.priceProduct * item.quantityOfGoods), 0);
//   },

//   get totalPrice() {
//     return this.calculateItemPrice();
//   },

//   clear() {
//     this.items.length = 0;
//     this.totalPrice = 0;
//     this.count = 0;
//   },

//   print() {
//     console.log(`${JSON.stringify(this.items)}
//        ${this.totalPrice}`);
//   },
// };


// const keys = Object.keys(cart);
// console.log(keys);

// cart.add('Микроволновка', 7000, 15);
// cart.add('Чайник', 2000, 5);
// cart.add('Диван', 40000, 3);
// cart.add('Стол', 10500, 6);
// cart.print();
