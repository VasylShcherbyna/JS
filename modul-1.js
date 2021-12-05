// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry','strawberry' ;

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}

// Пиши код выше этой строки

// const function = [3, 4, 1, 2, 7];
// function.sort((a, b) => a - b)

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace', 'Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   }
// ];
// const sortByDescendingFriendCount = users => users.sort((a, b) => b.localeCompare(a));
// console.log()
// const user = users.forEach(elem => elem.friends);
// console.log(user);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// 41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter(num => num.rating > MIN_BOOK_RATING)
//   .map(student => student.author)
//   .sort((a, b) => a.localeCompare(b));
//
// const phones = [
//   { name: 'Huawei', price: 800 },
//   { name: 'Apple', price: 1000 },
//   { name: 'Samsung', price: 900 },
//   { name: 'Apple', price: 1100 },
//   { name: 'Samsung', price: 700 },
// ];
// const remowDublicat = items => {
//   return items
//   .sort((a,b))
// }

// Пиши код выше этой строки
//   accessLevel;
//  constructor({email, accessLevel}) {
//       super(email);

//   };

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

// class Storage{
//   #items;

// getItems() {
//   return this.items;
// }

// addItem(newItem) {
//    this.items = newItem;
// }

// removeItem(item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
//  }
// }

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//   for(const pizza of pizzaPalace.pizzas){
//     if(pizza === pizzaName){
//     makePizza(pizzaName);
//       return;
//       }

//     }
//   },
// };
// 6-mod5
// function Storage(items){
// this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   this.items.splice(1, 1);
// };

// 7 - 4 modul
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// };
// const messages = orders.map(order => composeMessage.call(order, orders.indexOf(order)+1));

// 41
//   removePotion(potionName) {
//     const {potions} = this;
//     for(let i = 0; i < potions.length; i += 1  ){
//       const {name} = potions[i];
//     if(potionName === name){
//      potions.splice(i, 1);
//      }
//     }
//   }

//   removePotion(potionName) {
//     for(let i = 0; i < this.potions.length; i += 1  ){
//     if(potionName === this.potions[i].name){
//      this.potions.splice(i, 1);
//      }
//     }
//   }

//  updatePotionName(oldName, newName) {
//     const {potions} = this;
//     for(let i = 0; i < potions.length; i += 1  ){
//     if(oldName === potions[i].name ){
//       potions[i].name = newName;
//       }

//     }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   for (const product of products) {
//     if (productName !== product.name) {
//       return null;
//     }
//   }

//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
//12
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   return Object.keys(object).length;
//   // Пиши код выше этой строки
//   return propCount;
// }
// 14
//  function countProps(object) {
//    // Пиши код ниже этой строки
//    let propCount = 0;
//    const keys = Object.keys(object);
//    for (const key of keys) {
//      return Object.keys(object).length;
//    }

//    return propCount;
//    // Пиши код выше этой строки
//  }

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   for (let salary of Object.values(salaries)) totalSalary += salary;
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// 13
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// 32
// function includes(array, value) {
//   // Пиши код ниже этой строки
//   let message;
//   for (let arr of array) {
//     if (arr === value) {
//       message = true;
//       break;
//     } else {
//       message = false;
//     }
//   }
//   return message;
//   // Пиши код выше этой строки
// }
// const numbers = function (total, array2) {
//   let total = 0;
//   for (const number of numbers) {
//     if (number % 2 !== 0) {
//       total += number;
//     }
//   }
// };

// console.log(total);

//21
// function findLongestWord(string) {
//     // Пиши код ниже этой строки
//     let arrStr = string.split(' ');
//     let wordLength = 0;
//     let longestWord;

//     for (let i = 0; i < arrStr.length; i += 1) {
//         wordLength = arrStr[1].length;

//         if (arrStr[i].length > wordLength) {
//             longestWord = arrStr[i];

//             return longestWord;
//         }
//     }
// }
//   // Пиши код выше этой строки

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord)

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toLowerCase());

// function slugify(title) {
//     // Пиши код ниже этой строки
//     const words = title.split(' ');
//     return words.join('-');
// }
//     console.log(slugify('Массивы для новичков'));

// Пиши код выше этой строки

// 12 m - 2
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
// string = array.join(delimeter);

//   // Пиши код выше этой строки
//   return string;
// }

//36

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   if ((message.toLowerCase().includes('sale' || 'spam')) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Пиши код выше этой строки
//   return result;
// }

//33
// function formatMessage(message, maxLength) {
//   let result;
//   // Пиши код ниже этой строки
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   // Пиши код выше этой строки
//   return result;
// }
// Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.

//28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Отменено пользователем!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Добро пожаловать!';
//       break;
//     default:
//       message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// let num = prompt();
// let result;
// switch (num){
//     case 1:
//         result = console.log('зима');
//         break;
//     case 2:
//         result = 'wiesna';
//         break;
//         case 3:
//             result = 'leto';
//             break;
//         default:
//             result = 'nema';
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//     totalPrice = pricePerDroid * orderedQuantity;
//   if(totalPrice > customerCredits){
//   message = 'Недостаточно средств на счету!';
//   }

//     // Пиши код выше этой строки
//     return message;
//   }
//   console.log( makeTransaction(2000, 8, 10000));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Пиши код ниже этой строки

//     const message = `Вы заказали дроидов на сумму ${pricePerDroid * orderedQuantity + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа..`

//     // Пиши код выше этой строки
//     return message;
//   }
//   console.log(makeOrderMessage(2, 100, 50));
// Вы заказали дроидов на сумму 250 кредитов. Доставка (50 кредитов) включена в сумму заказа
