// Numbers
const num1 = 10;
const num2 = 20;

let value;

// + * / - %
value = num1 + num2;
value += 100; // value = value + 100;

value = 4 % 2; // остаток от деления

value++;
value--;
++value;
--value;

value = 0.6 + 0.7; // 1.2999999999999998 - неточное вычисление
value = value.toFixed(1); // '1.3'
value = 0.6 + 0.7;
// value = +value.toFixed(1);
//value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10;

// Math
value = Math.PI;
value = Math.random(); // случайное число от 0 до 1
value = Math.round(2.4); // математическое округление
value = Math.ceil(2.1); // округление в большую сторону
value = Math.floor(2.1); // округление в меньшую сторону
value = Math.min(2,12, 5, 52, 0); // 

//random 0 - 10, не включая 10
value = Math.floor(Math.random() * 10);
//random 0 - 10, включая 10
value = Math.floor(Math.random() * 10 + 1);
//random для массива
const arr = ['black', 'white', 'yellow', 'green', 'blue', 'orange', 'red', 'pink'];
value = Math.floor(Math.random() * arr.length);

// Задачи
// Получить число pi из Math и округлить его до 2-х знаков после точки
value = parseFloat(Math.PI.toFixed(2));
// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
//Получить случайное число и округлить его до двух цифр после запятой
value = parseFloat(Math.random().toFixed(2));
//Получить случайное целое число от 0 до X. X - любое произвольное число
const x = 20;
value = Math.floor(Math.random() * x + 1);
//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = (0.6 * 10 + 0.7 * 10) / 10;
value = +(0.6 + 0.7).toFixed(1);
value = parseFloat((0.6 + 0.7).toFixed(1));
//Получить число из строки ‘100$’
value = parseInt('100$');

console.log(value, arr[value]);
console.log(typeof value);