let value;

// Number to string
value = String(10);       // '10'
value = String(10 + 40);  // '50'

value = value.toString(); // '50'
value = (40).toString();  // '40'

// Boolean to string
value = String(false); // 'false'

// Array to string
value = String([1, 2, 3]); // '1,2,3'

// Object to string
value = String({ name : 'Britney' }); // '[object Object]'

// +
// только при сложении числа и строки результатом будет строка
value = 30 + '' + 30; // '3030'
// при остальных операциях результатом будет число или NaN
value = 30 - 'asdd'; // NaN
value = 30 - '25';  // 5
value = 30 * '5';  // 150

// Null неявно преобразовывается к 0
value = null + 10; // 10
// false неявно преобразовывается к 0
value = false + 10; // 10
// true неявно преобразовывается к 1
value = true + 10; // 11
// результат операций с undefined всегда будет NaN
value = false + undefined; // NaN

// String to number
value = Number('23'); // 23
value = Number(false); // 0
value = Number(true); // 1
value = Number(null); // 0
value = Number('false'); // NaN

value = Number([1, 2, 3]); // NaN

value = parseInt('200'); // 200
value = parseInt('200sdfgsdf'); // 200
value = parseInt('200px'); // 200
value = parseInt('ddd200sdfgsdf'); // NaN

value = parseFloat('200.21px'); // 200.21

// Boolean
value = Boolean('ffgfgfgf'); // true
value = Boolean(' '); // true
value = Boolean(''); // false
value = Boolean(100); // true
value = Boolean(-100); // true
value = Boolean(0); // false
value = Boolean(undefined); // false
value = Boolean(null); // false

value = Boolean({}); // true - пустой объект
value = Boolean([]); // true - постой массив

console.log(value);
console.log(typeof value);