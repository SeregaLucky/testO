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

//
//
//
//
/*
 * 17. Произвести общий подсчет кроме чисел которые идут под четными индексами массива
 */
const array17 = [10, 20, 30, 40, 50];

//
//
//
//
/*
 * 18. Вернуть массив только положительные числа
 */
const array18 = [2, -3, 4, 7, 2, -99, 3, -7];

//
//
//
//
/*
 * 19. Вернуть только массив без объекта у которого id === 2
 */
const array19 = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Маша' },
];

//
//
//
//
/*
 * 20. Дан массив с числами. Найдите сумму первых N элементов до первого нуля.Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0
 */
const array20 = [1, 2, 3, 0, 4, 5, 6];

//
//
//
//
/*
 * 21. Вернуть массив в котором будут персонажи которые родились с 1850 года и прожили 80 или больше лет
 */
const scientist = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];

//
//
//
//
/*
 * 22. Пользователь хочет изменить в телефонной книге имя номер друга
 */
const array22 = [
  { id: 1, name: 'Alex', phone: 101 },
  { id: 2, name: 'Bob', phone: 102 },
  { id: 3, name: 'Ania', phone: 103 },
  { id: 4, name: 'Tom', phone: 104 },
  { id: 5, name: 'Liza', phone: 105 },
];
