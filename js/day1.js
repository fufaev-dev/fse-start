// 1. Переменные
let user = 'John';
let age = 25;
let message = 'Hello';
console.log(user, age, message); // Вместо alert используем console.log

const myBirthday = '18.04.1982';

// 2. Стиль констант
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
console.log("Красный цвет:", COLOR_RED);

// 3. Типы данных (typeof)
console.log(typeof undefined); // "undefined"
console.log(typeof 0);         // "number"
console.log(typeof 10n);       // "bigint"
console.log(typeof true);      // "boolean"
console.log(typeof "foo");     // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math);      // "object"
console.log(typeof null);      // "object" (это историческая особенность JS, запомните)
console.log(typeof console.log); // "function"

// 4. Преобразование типов
let str = "123";
console.log(typeof str); // string
let num = Number(str);   // превращаем в число
console.log(typeof num); // number

// 5. Конкатенация строк
let s = "моя" + "строка";
console.log(s); // моястрока

// 6. Условия (if/else)
// В Node.js нет prompt(), поэтому мы просто зададим год вручную.
// Поиграйтесь с этим значением: поставьте 2010, 2020 или 2015.
let year = 2015; 

if (year < 2015) {
  console.log('Это слишком рано...');
} else if (year > 2015) {
  console.log('Это поздновато');
} else {
  console.log('Верно!');
}