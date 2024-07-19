'use strict';

const array = [30, 2];

const recursFoo = (arr = []) => {
  const randomInteger = Math.round(Math.random() * 10);

  arr.push(randomInteger);

  const sum = arr.reduce((a, b) => a += b, 0);
  console.log(sum);

  if (sum < 50) {
    return recursFoo(arr);
  }
  return arr;
};

console.log(recursFoo(array));
