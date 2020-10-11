// var, let, const

/**
 * Объявление переменных через var
 */
var name = 'Britney';
console.log(name); // 'Britney'
name = 'Dua';
console.log(name); // 'Dua'

var age;
console.log(age); // undefined
age = 30;
console.log(age); // 30

/**
 * Именование переменных:
 * - Имя может состоять из: букв, цифр, символов $ и _
 * - Первый символ не должен быть цифрой
 * - Обычная переменная начинается с маленькой буквы
 * - Регистр букв имеет значение easycode и EasyCode это разные переменные
 * - В имени переменной используем строго английские буквы
 * - Именоваться переменная должна строго по смыслу (сообщение -> message или msg)
 * - Существует список зарезервированных слов, которые нельзя использовать для переменных (var, class, return, export и др.)
 * - Используйте только один стиль именования camelCase или через _
 */
var $name = 'Clean Bandit';
var _name = 'Ilan Mask';
// var 1name = 'Donald Trump'; // Ошибка!

var userAge = 30;   // стиль camelCase
var user_age = 20;  // стиль через _
var UserAge = 40;   // только для классов, поэтому для объявления переменных не используется
var userage = 10;   // плохо проименованная переменная

// Проблемы var, можно объявлять одну и ту же переменную несколько раз
var car = 'bmw';
var car = 'audi'; // переопределили существующую переменную, объявленную кем-то другим
console.log(car);

/**
 * Hoisting (подъём, всплытие)
 * - Вне зависимости от места объявления переменной, она стремится “всплыть” вверх
 * - Действительно только для переменных объявленных через var
 */
console.log(message); // undefined, если ниже есть var message, иначе ошибка
var message = 'Hello World';
console.log(message); // 'Hello World'
/* Этот код равносилен коду выше:
var message;
console.log(message);
message = 'Hello World';
console.log(message);
*/

// очитска консоли
console.clear();

/**
 * let
 * - всплытие (hoisting) не работает
 * - блочная видимость
 * - не может быть двух одинаковых let
 */
let nickname = 'Britney';
// let nickname = 'Dua'; // ошибка, не может быть двух одинаковых let
console.log(nickname);

/* всплытие (hoisting) не работает:
console.log(nickname);
let nickname = 'Britney';
console.log(nickname);
*/

/**
 * const
 * - все то же самое что и у let + невозможность изменить
 * - нельзя создать пустую const
 * - Константы именуются все в верхнем регистре, например: const PI; но если константа это не какое то число которое не должно меняться то может именоваться с маленькой буквы, например const array = [1, 2, 3];
 */
const firstName = 'Tom';
// firstName = 'John'; // ошибка, невозможность изменить
// const lastName; // ошибка, нельзя создать пустую const
console.log(firstName);

// Ссылку на объект поменять нельзя, но содержимое объекта можно поменять
const user = {
  name : 'Britney',
  age: 35
};
console.log(user); // {name: "Britney", age: 35}
user.age = 36;
console.log(user); // {name: "Britney", age: 36}