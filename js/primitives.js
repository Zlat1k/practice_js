// string

let stringData = 'string data';
console.log(stringData);
console.log(typeof stringData);

stringData = '';
console.log(typeof stringData);

stringData = ' ';
console.log(typeof stringData);

// number

let number = 1;
console.log(number);
console.log(typeof number);

number = 2e53;
console.log(number);
console.log(typeof number);

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN;
console.log(number);
console.log(typeof number);

// boolean true || false

let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);

// Undefined

let message;
console.log(message);
console.log(typeof message);

// null

let user = null;
console.log(user);
console.log(typeof user); // специфльная ошибка js: object