// однострочный комментарий (ctrl + /)
/*
  многострочные комментарии
*/
/**
 * JSDoc комментарии
 */

 /**
  * Типы данных:
  * 1. Примитивные
  * - Number: 2020, 1.5, NaN, Infinity
  * - String: "Hello", 'Hello', `Hello`
  * - Boolean: true, false
  * - Null: null (значение неизвестно, считается отдельным типом)
  * - Undefined: undefined (не присвоено значение переменной)
  * - Symbol()
  */

  console.log(2020, 1.5); // 2020 1.5
  console.log(20 * 'start'); // NaN
  console.log(1 / 0); // Infinity

  console.log("Hello", 'Hello', `Hello`); // Hello Hello Hello

  console.log(true, false); // true false

  console.log(null); // null

  console.log(undefined);
  let und;
  console.log(und); // undefined
  
  console.log(Symbol());

 /**
  * Типы данных:
  * 2. Обьекты (Reference type). Передаются по ссылке.
  * - Object: { name : 'Britney', age : 35 }
  * * Array: [1, 2, 3]
  * * Function: function foo() {}
  * * Date: new Date()
  * * ....
  */

  console.log({name : 'Britney', age : 35});
  console.table({name : 'Britney', age : 35});

  console.log([1, 2, 3, 4]);

/**
 * Особенности:
 * 1. JS динамически типизированный язык (тип определяется динамически при присвоении)
 * 2. Одна и та же переменная может хранить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
 */

 /**
  * Динамическая типизация:
  * JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов
  */
 var foo = 42;  // сейчас foo типа Number
 foo = "bar";   // а теперь foo типа String
 foo = true;    // foo становится типа Boolean