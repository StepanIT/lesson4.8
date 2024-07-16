// 'use strict'


// const foo = (number) => {
//     const randomNumber = Math.round(Math.random() * 100);
//     console.log(randomNumber);
//     var number = prompt('Введите число от 1 до 100');

//     if (randomNumber === null) {
//         return foo(number);
//     }

//     if (isNaN(number)) {
//         alert('Введи число!');
//         return foo(number);
//     }

//     if (number > randomNumber) {
//         alert('Меньше! ' + ' Введите новый вариант ');
//         return foo(number);
//     }

//     if (number < randomNumber) {
//         alert('Больше! ' + ' Введите число ');
//         return foo(number);
//     }
//     alert('Правильно!');
//     return 'Вы победили';
// }

// console.log(foo());

//     let arr = [];

// const recursFoo = (array) => {

//     const randomInteger = Math.round(Math.random() * 10);

//     arr.push(randomInteger);

//     let sum = arr.reduce((a, b) => a += b, 0);

//     if (sum < 50) {
//         return recursFoo();
//     }
//     return arr;
    
// };

// console.log(recursFoo());