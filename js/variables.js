// let value = 1;
// let toString = String(value);
// console.log(toString);
// toString = value + '';
// console.log(toString);

// value = 'blabla';
// let toNumber = Number(value);
// console.log(toNumber);

// toNumber = +value;
// console.log(toNumber);

// value = '456';
// toNumber = Number(value);
// console.log(toNumber);

// value = '';
// console.log(Number(value));
// value = ' ';
// console.log(value.length);
// console.log(value.trim());
// console.log(Number(value.trim()));

// value = true;
// console.log(Number(value));

// value = false;
// console.log(Number(value));

// value = null;
// console.log(Number(value));

// value = undefined;
// console.log(Number(value));

// let number = 1;
// console.log(number);
// number = !number;
// console.log(number);

// number = !!number;
// console.log(number);

// value = false;
// console.log(value);
// console.log(Boolean(value));

// logical operators________

// &&

// console.log(1 && true && 'javascript'); // javascript
//        true && true && true

// console.log(0 && true && 'javascript'); //0
//         false && true && true

// ||

// console.log(1 || true || 'javascript'); //1
//         true

// console.log(0 || false || null); // nul
//                        false

// if___________

// let age = 15;
// if (age >= 12 || age <= 14) {
//   console.log('ok');
// }
// else {
//   console.log('no');
// }

// let age = 15;
// if (age >= 12 && age <= 14) {
//   console.log('ok');
// }
// else {
//   console.log('no');
// }

// let day = 'Saturday';
// if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
//   console.log('workDay');
// }
// else {
//   console.log('dayOff');
// }

// switch (day) {
//   case 'Monday':
//     console.log(`${day} - workDay`);
//     break;
//   case 'Tuesday':
//     console.log(`${day} - workDay`);
//     break;
//   case 'Wednesday':
//     console.log(`${day} - workDay`);
//     break;
//   case 'Thursday':
//     console.log(`${day} - workDay`);
//     break;
//   case 'Friday':
//     console.log(`${day} - workDay`);
//     break;
//   default: console.log(`${day} - dayOff`);
// }

// switch (day) {
//   case 'Monday':
//   case 'Tuesday':
//   case 'FWednesday':
//   case 'Thursday':
//   case 'Friday':
//     console.log(`${day} - workday`);
//     break;
//   default:
//     console.log(`${day} - dayOff`);
// }

// Проверить, является ли год високосным.

// let year = 2020;
// let result = year % 4;
// console.log(result);
// if (year % 4 === 0) {
//   console.log(`${year} - високосный`);
//  }
// else {
//   console.log(`${year} - не високосный`);
// }

// pattern guard clause_______
// function checkYear() {
//   if (year % 4 === 0) return console.log(`${year} - високосный`);
//   return console.log(`${year} -не високосный`);
// }
// checkYear();

// let compNumber;
// let userNumber = 5;
// function getplay() {
//   compNumber = Math.round(Math.random() * (10 - 1) + 1);
//   console.log(compNumber);
//   if (userNumber === compNumber) {
//     console.log('вы угадали!');    
//   }
//   else {
//     console.log('вы не угадали!');  
//   }
// }
// getplay()

// написать программу, которая будет +-*/ 2 значения, которые пользователь вводит через промт
// и выводить результат их +-*/.


// function getTotal() {
//   let num1 = Number(prompt('введите число 1'));
//   let num2 = Number(prompt('введите число 2'));
//   let symbol = prompt('введите оператор');
//   if (symbol === '+') {
//     console.log(num1 + num2);
//   }
//   else if (symbol === '-') {
//     console.log(num1 - num2);
//   }
//   else if (symbol === '*') {
//     console.log(num1 * num2);
//   }
//   else if (symbol === '/') {
//     console.log(num1 / num2);
//   }
//   else {
//     console.log('вы ввели неверный символ');
//   }
// }
// getTotal()

// температуру из С перевести в F

// (0 °C × 9/5) + 32 = 32 °F

// function temperatureToF(celsius) {
//   let result = celsius * 9 / 5 + 32;
//   return result  
// }

// let result = temperatureToF(5);
// console.log(result);

// function temperatureToC(Far) {
//   let result = Math.round((Far - 32) * 5 / 9);
//   return result  
// }

// let result = temperatureToC(40);
// console.log(result);

// function temperatureToC(Far) {
//   let result = (Far - 32) * 5 / 9;
//   return result  
// }

// let result = temperatureToC(41);
// console.log(result);

// function temperatureToC(Far) {
//   let result = Math.round(((Far - 32) * 5 / 9) * 100) / 100;
//   return result;
// }

// let result = temperatureToC(40);
// console.log(result);

console.log(student); // undefined
var student = 'Zlata';
console.log(student);

var count;
console.log(count); // undefined
count = 15;
console.log(count);
count = 19;
console.log(count);

// console.log(number); Error
let number = 29;
console.log(number);

let age;
console.log(age); //undefined
age = 32;
console.log(age);
age = 19;
console.log(age);

// console.log(userName); Error
const userName = 'Vova';
console.log(userName);
// userName = 'Vasya'; Error

// const user; Error

