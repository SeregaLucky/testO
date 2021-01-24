/*
 * 1. вывести в консоль елементы
 */
// const array1 = [22, 33, 44];
// array1.forEach(num => console.log(num));
//
//
//
//
/*
 * 2. ForEach. Увеличить возраст на 1 у всех
//  */
// const array2 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];
// array2.forEach(num => num.age =num.age+ 1)

// console.log(array2);

//
//
//
//
/*
 * 3. Увеличить значение всех елементов в 2 раза
 */
// const array3 = [20, 40, 50];

// const doubledNumbers = array3.map(num => num * 2);
// console.log(doubledNumbers);
// console.log(array3);
// //
//
//
/*
 * 4. Увеличить возраст на 1 у всех имутабельно
 */
// const array4 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

// const doubledNumbers = array4.map(num => ({ ...num, age:num.age+ 1 }));
// console.log(doubledNumbers);
// console.log(doubledNumbers===array4);

//
//
//
//
//
/*
 * 5. Создать то что можно будет вынести в DOM
 */
// const array5 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];

//
//
//
//
/*
 * 6. Отфильтровать массив что бы остались те которые старше 23 лет
 */
// const array6 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 22 },
//   { id: 3, name: 'Jerry', age: 29 },
// ];

// console.log(array6.filter(num => num.age > 23));
// //
//
//
//
/*
 * 7. Вернуть массив с уникальными цифрами
 */
// const array7 = [26, 27, 26, 26, 28, 28, 29, 29, 30];
// const set = new Set(array7);
// console.log(set);

//
//
//
/*
 * 8. Найти елемент по id = 2
 */
// const array8 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 8 },
//   { id: 3, name: 'Jerry', age: 6 },
// ];
// console.log(array8.find(item=>item.id===2));

//
//
//
//
/*
 * 9. Проверить все ли старше 21
 */
// const array9 = [
//   { id: 1, name: 'Alex', age: 24 },
//   { id: 2, name: 'Tom', age: 28 },
//   { id: 3, name: 'Jerry', age: 26 },
// ];

// const fn1 = (arr, age) => {
//   return arr.every(item => {
//     console.log('item', item);

//     return item.age > age;
//   });
// };
// const needAge = 27;
// console.log('fn1', fn1(arrayEveryObj, needAge));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
 * 10. Отсортировать массив от большего к меньшему
 */
const array10 = [20, 99, 40, 50, 30, 25];

//
//
//
//
/*
 * 11. Отсортировать массив по годам возрстанию
 */
const array11 = [
  { id: 3, name: 'Jerry', age: 16 },
  { id: 2, name: 'Tom', age: 38 },
  { id: 1, name: 'Alex', age: 24 },
];

//
//
//
//
/*
 * 12. Подщитать общую сумму ЗП (selery)
 */
const array12 = [
  { id: 1, name: 'Tom', selery: 900 },
  { id: 2, name: 'Alex', selery: 1000 },
  { id: 3, name: 'Tom', selery: 950 },
  { id: 4, name: 'Ania', selery: 1200 },
];

//
//
//
//
/*
 * 13. Должно выйти такое: [11, 22, 33, 55, 77, 99, 88, 22]
 * То есть раскрыить внутреннии
 */
const array13 = [
  [11, 22, 33],
  [55, 77, 99],
  [88, 22],
];

//

//
//
//
//
/*
 * 14. Должно выйти такое: [222, 444, 11, 22, 33, 55, 77, 99, 88, 666, 22]
 * То есть раскрыить внутреннии. Подсказка погугли про метод flat
 */
const array14 = [222, 444, [11, 22, 33, [55, 77, 99, [88, [666], 22]]]];

//
//
//
/*
 * 15. Должно выйти такое: [11, 22, 33, 55, 77, 99, 88, 22]
 * То есть раскрыить внутреннии. Тут реализовать через метод flatMap нужно погуглить:)
 */
const array15 = [
  [11, 22, 33],
  [55, 77, 99],
  [88, 22],
];

//
//
//
//
/*
 * 16. Подщитать общую сумму депозитов (deposit) и общую сумму снятых денен (withdrawn)
 */
const array16 = [
  { id: 1, name: 'Tom', deposit: 900 },
  { id: 2, name: 'Alex', withdrawn: 1000 },
  { id: 3, name: 'Tom', deposit: 950 },
  { id: 4, name: 'Ania', deposit: 1200 },
  { id: 5, name: 'Ania', withdrawn: 200 },
];
