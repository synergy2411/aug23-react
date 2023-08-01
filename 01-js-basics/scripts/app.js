// var x = "Hello World";

// console.log(typeof x);

// x = 201;

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// x = function () {};

// x = [];

// x = {};

// console.log("Start");

// // 10ms -
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((resp) => resp.json())
//   .then((result) => console.log(result));

// //   10ms
// setTimeout(function () {
//   console.log("10 seconds left");
// }, 0);

// setTimeout(function () {
//   console.log("20 seconds left");
// }, 0);

// Promise.resolve().then(() => console.log("RESOLVED"));

// console.log("End");

// ES6+ features
// > Arrow function (argsList) => functionBody

// Limitations
// - 'this' keyword
// - 'new' operator
// - 'arguments' keyword

// console.log(add(2, 4));
// Function Declaration
// function add(n1, n2) {
//   return n1 + n2;
// }

//  Function expression
// var addTwo = function (n1, n2) {
//   return n1 + n2;
// };

// Arrow Function

// var addThree = (n1, n2) => n1 + n2;

// var user = {
//   username: "John Doe",
//   age: 32,
//   getDetails: function () {
//     var self = this;
//     function nestedFn() {
//       return self.username + " - " + self.age;
//     }
//     return nestedFn();
//   },
// };

// var user = {
//   username: "John Doe",
//   age: 32,
//   getDetails: function () {
//     var nestedFn = () => {
//       return this.username + " - " + this.age;
//     };
//     return nestedFn();
//   },
// };

// console.log(user.getDetails());

// Constructor Function
// function Student(studId, studName) {
//   this.studId = studId;
//   this.studName = studName;
//   this.getDetails = function () {
//     return this.studId + " - " + this.studName;
//   };
// }

// var john = new Student("S001", "John Doe");

// console.log(john.getDetails());

// var demo = () => {
//   console.log(arguments);
// };

// demo("test@test.com", 32, true);

// function mystry() {
//   var chooseNumber = function () {
//     return 7;
//   };

//   return chooseNumber;

//   var chooseNumber = function () {
//     return 12;
//   };
// }

// var nestedFn = mystry();

// console.log(nestedFn());

// ---------
// Rest / Spread Operator (...)

// - Rest create the collection from individual items
// - Rest will always be present as the last argument in the function argument list

// - Spread expand the collection into individual items

// ---------

// function demo(email, ...args) {
//   console.log(args[0]); // ?
// }

// demo("test@test", 32, true);

// var numbers = [3, 4, 5];

// var moreNumber = [1, 2, ...numbers, 6, 7, 8];

// console.log(moreNumber); // []

// var userOne = {
//   name: "John",
//   company: "Invesco",
//   age: 32,
// };

// var userTwo = {
//   ...userOne,
//   name: "Jenny",
//   age: 28,
// };

// console.log(userTwo); // ?

// var arr = [
//   "Hello",
//   32,
//   true,
//   function () {
//     console.log("Called");
//   },
//   [],
//   {},
// ];

// arr[3]();

// console.log(typeof arr);

// var arr = ["book1", "book2", "book3"];
// var counter = 0;

// var box = {
//   count: counter,
//   books: arr,
//   addBook: function (newBook) {
//     this.books.push(newBook);
//   },
// };

// box.addBook("book4");

// console.log(arr.length); // 4

// box.count++;

// console.log(counter); // PRIMITIVE 0
// console.log(box.count); // 1

// var userOne = {
//   name: "John",
// };

// var userTwo = userOne;

// userTwo.name = "Jenny";

// console.log(userOne); // ?

// var userOne = {
//   name: "John",
//   address: {
//     city: "Pune",
//     street: "201, Main Road, Wakad",
//   },
//   friends: ["f1", "f2"],
// };

// var userTwo = {
//   ...userOne,
// };

// userTwo.friends.push("f3");

// console.log(userOne.friends.length); // ?

// userTwo.address.city = "Mumbai";

// console.log(userOne.address); // ?

// Shallow Copy -> original reference still connected with clone
// Deep Copy -> no relationsip between clone and original

// DEEP COPY
// var userThree = JSON.parse(JSON.stringify(userOne));

// userThree.address.street = "101, Marathahalli Road";

// console.log(userOne);

// function demo(email, ...args){}

// demo("email", "", 32, {}, [])

// --------------
// Block scoping (let & const)
// --------------

// function demo(arr) {
//   if (arr.length > 2) {
//     let LOADING = "LOADING";
//     console.log(FLASH); // ?
//   } else {
//     let FLASH = "FLASHING";
//   }
// }

// demo([1, 2, 3, 4]);

// const username = "John Doe";

// username = "Jenny";

// const user = {
//   name: "John",
// };

// user.name = "Jenny"; //?

// console.log(user);

// user = {         // ERROR
//   name: "Jack",
// };

const friends = ["f1", "f2", "f3"];
friends.push("f4");

console.log(friends);

// friends = [];       // ERROR
