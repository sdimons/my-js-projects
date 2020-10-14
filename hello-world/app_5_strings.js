// Strings

const firstName = 'Britney';
const lastName = 'Spears';
const age = 35;
const str = 'Is Britney bitch';

let value;

//Конкатинация +
value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I\'m ' + age;

//Свойства строки (JS создает временные объекты-оберттки для примитивных типов)
value = value.length;
value = firstName[2];
value = firstName[firstName.length - 1]; // последний символ/элемент строки

// Методы (JS создает временные объекты-оберттки для примитивных типов)
value = firstName.toUpperCase(); // BRITNEY
value = firstName.concat(' ', lastName, 'I\'m 35');

value = str.indexOf('n'); // возвращает индекс первого вхождения символа в строке (-1, если не найдено), регистрочувствительный
value = str.indexOf('n', 5); // индекс первого вхождения символа в строке, начиная с позиции/индекса 5
value = str.indexOf('bitch');
value = str.includes('bitch'); // возвращает true или false, регистрочувствительный

//вырезание подстроки из строки
value = str.slice(0, 2); // 'Is' - вырезает строку с 0 индекса по 2, не включая 2
value = str.slice(3); // 'Britney bitch' - вырезает оставшуюся строку с 3 индекса
value = str.slice(0, -3); // 'Is Britney bi' - вырезает строку с 0 индекса до 3 индекса с конца строки

value = str.replace('Britney', 'Madonna');

// Задачи
let string = 'some test string';
// Получить первую и последнюю буквы строки
value = string[0] + string[string.length - 1];
// Сделать первую и последнюю буквы в верхнем регистре
value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();
// Найти положение слова ‘string’ в строке
value = string.indexOf('string');
// Найти положение второго пробела
value = string.indexOf(' ', string.indexOf(' ') + 1);
// Получить строку с 5-го символа длиной 4 буквы
value = string.substr(5, 4);
// Получить строку с 5-го по 9-й символы
value = string.slice(5, 9);
// Получить новую строку из исходной путем удаления последних 6-и символов
value = string.slice(0, -6);
//  Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20, b = 16;
value = a.toString() + b;
value =  '' + a + b;
value = String(a) + b;

console.log(value);