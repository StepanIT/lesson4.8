  'use strict'

  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
      return this.totalPrice;
    },

    add(productName, priceProduct, quantityOfGoods = 1) {
      const product = {
        productName, 
        priceProduct, 
        quantityOfGoods
      };
      this.items.push(product);
      this.increaseCount();
      this.calculateItemPrice();
  },
    increaseCount() {
      this.count = this.items.reduce((acc, {quantityOfGoods}) => acc + quantityOfGoods, 0);
      console.log(this.count);
    },

    calculateItemPrice() {
      this.totalPrice = this.items.reduce((acc, {priceProduct}) => acc + priceProduct, 0);
    },

    clear() {
      this.items.length = 0;
      this.totalPrice = 0;
      this.count = 0;
    },

    print() {
      console.log(`${JSON.stringify(this.items)}
       ${this.totalPrice}`);
    },

  };


  const keys = Object.keys(cart);
  console.log(keys);

  cart.add('Микроволновка' , 7000, 15);
  cart.add('Чайник' , 2000, 5);
  cart.add('Диван' , 40000, 3);
  cart.add('Стул' , 6500, 4);
  cart.print();
