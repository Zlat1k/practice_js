//  lesson 1

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

//  mistake

// const pizza = {
//     sizes: SIZES,
//     stuffing: STUFFING,
//     sauces: SAUCES,
//     _pizza: {
//         stuffing: [],
//     },
//     get pizza() {
//         return this._pizza
//     },

//     getStuffing(stuffing) {
//         // if (this.pizza.stuffing.includes(stuffing)) {
//         //     console.log(`${stuffing} уже есть`);
//         // } else {
//         //     this.pizza.stuffing.push(stuffing);
//         // }
//         const keys = Object.keys(this.stuffing);
//         for (let key of keys) {
//             if (key.toLowerCase() === stuffing.toLowerCase()) return this._pizza.stuffing.includes(stuffing) ? `${stuffing} уже есть` : this._pizza.stuffing.push(stuffing);
//         }
//         return this._pizza;
//     },
//     // getSauces(sauces) {
//     //     const keys = Object.keys(this.sauces);
//     //     for (let key of keys) {
//     //         if (key.toLowerCase() === sauces.toLowerCase()) return this._pizza.sauces.includes(sauces) ? `${sauces} уже есть` : this._pizza.sauces.push(sauces);
//     //     }
//     //     return this._pizza;
//     // },

//     removeStuffing(stuffing) {
//         stuffing = stuffing.toLowerCase();
//         for (let i = 0; i < this._pizza.stuffing.length; i++) {
//             let stuff = this._pizza.stuffing[i].toLowerCase();
//             console.log(stuff);
//             if (stuff === stuffing) {
//                 this._pizza.stuffing.splice(i, 1);
//             }
//             // const indexStuff = this._pizza.stuffing.indexOf(stuffing);
//             // if (indexStuff >= 0) {
//             //     this._pizza.stuffing.splice(indexStuff, 1);
//             // }
//         }
//         return this._pizza;
//     },
//     removeSauces(sauces) {        
//         sauces = sauces.toLowerCase();
//         console.log(this._pizza.sauces);
//         for (let i = 0; i < this._pizza.sauces.length; i ++) {
//             console.log(this._pizza.sauces[i]);
//             let sauce = this._pizza.sauces[i].toLowerCase();

//         }
//         console.log(sauces);
//     },
// };
// pizza.getSauces('ketchup');
// pizza.removeSauces('ketchup');


// pizza.getStuffing('Beacon');
// pizza.getStuffing('Cheese');
// pizza.getStuffing('Cheese');
// // pizza.getSauces('Bolognese');
// pizza.removeStuffing('Beacon');
// // console.log(pizza.getSauces('Bolognese')); 
// console.log(pizza.pizza);

//  lesson 2

const SIZES = {
    BIG: { price: 25, cal: 100, time: 15 },
    SMALL: { price: 15, cal: 50, time: 7 },
    MEDIUM: { price: 15, cal: 50, time: 7 }
};
const STUFFING = {
    CHEESE: { price: 6.5, cal: 45, time: 2 },
    BEACON: { price: 10, cal: 70, time: 6 },
    TOMATO: { price: 12.1, cal: 4, time: 5 },
    CHICKEN: { price: 9.3, cal: 30, time: 5.1 }
};
const SAUCES = {
    MUSTARD: { price: 3, cal: 5, time: 1 },
    KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { price: 7.5, cal: 50, time: 3 }
};



const pizza = {
  sizes: SIZES,
  stuffing: STUFFING,
  sauces: SAUCES,
  _pizza: {
    stuffing: [],
    sauces: [],
  },
  get pizza() {
    return this._pizza;
  },
  getStuffing(stuffing) {
    const keys = Object.keys(this.stuffing);
    for (let key of keys) {
      if (key.toLowerCase() === stuffing.toLowerCase()) return this._pizza.stuffing.includes(stuffing) ? `${stuffing} уже есть` : this._pizza.stuffing.push(stuffing);
    }
    return this._pizza;
  },
  getSauces(sauces) {
    const keys = Object.keys(this.sauces);
      for (let key of keys) {
        const {sauces: mySause} = this._pizza
      if (key.toLowerCase() === sauces.toLowerCase()) return mySause.includes(sauces) ? `${sauces} уже есть` : mySause.push(sauces);
    }
    return this._pizza;
  },
  removeStuffing(stuffing) {
    stuffing = stuffing.toLowerCase();
    for (let i = 0; i < this._pizza.stuffing.length; i++) {
      let stuff = this._pizza.stuffing[i].toLowerCase();
      console.log(stuff);
      if (stuff === stuffing) {
        this._pizza.stuffing.splice(i, 1);
      }
    }
    return this._pizza;
    },
      removeSauces(sauces) {        
        sauces = sauces.toLowerCase();
        console.log(this._pizza.sauces);
        for (let i = 0; i < this._pizza.sauces.length; i ++) {
            console.log(this._pizza.sauces[i]);
            let sauce = this._pizza.sauces[i].toLowerCase();
            if (sauce === sauces) {
                this._pizza.sauces.splice(i, 1);
            }
          }
          return this._pizza;
        
    },
};

  
pizza.getSauces('ketchup');
pizza.removeSauces('ketchup');


pizza.getStuffing('Beacon');
pizza.getStuffing('Cheese');
pizza.getStuffing('Cheese');
pizza.getSauces('Bolognese');
pizza.removeStuffing('Beacon');
console.log(pizza.getSauces('Bolognese')); 
console.log(pizza.pizza);

