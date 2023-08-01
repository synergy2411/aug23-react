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

// const friends = ["f1", "f2", "f3"];
// friends.push("f4");

// console.log(friends);

// friends = [];       // ERROR

// ---------------
// > Destructuring : "unpacking" the collection
// ---------------

// let friends = ["Jack", "Jill", "John", "Jenny"];

// let [f1, f3, f4] = friends;

// console.log(f3);

// let userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
// };

// let userTwo = {
//   firstName: "Jenny",
//   lastName: "Doe",
//   age: 28,
// };

// let {
//   firstName: userOneFirstName,
//   lastName: userOneLastName,
//   age: userOneAge,
// } = userOne;

// let {
//   firstName: userTwoFirstName,
//   lastName: userTwoLastName,
//   age: userTwoAge,
// } = userTwo;

// console.log(userOneFirstName, userTwoFirstName);
// let { age, firstName, lastName } = user;

// console.log(lastName); //

// let userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   friends: ["Jenny", "Jack", "Jill"],
// };

// let {
//   firstName,
//   lastName,
//   age,
//   friends: [f1, f2, f3],
// } = userOne;

// console.log(f2);

// let users = [
//   { name: "john", email: "john@test" },
//   { name: "jenny", email: "jenny@test" },
//   { name: "jack", email: "jack@test" },
// ];

// let [
//   { name: n1, email: e1 },
//   { name: n2, email: e2 },
//   { name: n3, email: e3 },
// ] = users;

// let [userOne, userTwo, userThree] = users;

// console.log(userTwo);

// -------
// Classes
// -------

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getDetails() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   // Private member
//   #enrolledCourse;

//   // Static Member
//   static numberOfStudent = 0;

//   constructor(studId, studName) {
//     super(studName);
//     this.studId = studId;
//     // this.studName = studName;
//     Student.numberOfStudent++;
//   }

//   // Accessor & Mutator
//   get course() {
//     return this.#enrolledCourse;
//   }

//   set course(value) {
//     this.#enrolledCourse = value;
//   }

//   getDetails() {
//     return this.studId + " - " + super.getDetails();
//   }
// }

// let jenny = new Student("S001", "Jenny Public");

// console.log(jenny.getDetails());

// jenny.course = "React 101";

// console.log(jenny.course);

// console.log("Enrolled Students -> ", Student.numberOfStudent);

// ------------
// Map / Set
// - any type of property name
// - various opertions
// - can be iterated using for loop
// ------------

// let john = { name: "John Doe" };

// let user = {
//   true: "1",
//   john: "the user",
// };

// console.log(user);

// let john = { name: "John Doe" };

// let map = new Map();

// map.set(true, "1");

// map.set(john, "the user");

// console.log(map.size);

// for (let key of map.keys()) {
//   console.log("Key : ", key);
// }

// for (let value of map.values()) {
//   console.log("Value : ", value);
// }

// for (let [key, value] of map.entries()) {
//   console.log(key + " - " + value);
// }

// let set = new Set();

// set.add("John");
// set.add("Jack");
// set.add("Jill");
// set.add("Jenny");
// set.add("Jenny");       // DISALLOWS THE DUPLICATE VALUES

// console.log(set.size);

// ----------
// Template Literals - " " | ' ' | ` ` (back tick)
// - write multiline string without (\n)
// - embed variables within string without (+)
// ----------

// let username = "Jenny Public";

// let userAge = 32;

// let greet = `

// Hello from ${username}!

// I'm ${userAge} years old.

// `;

// console.log(greet);

// -----------
// PROMISE
// - Placeholder for future values
// - Pending State
// - Settled State
// - Success (Resolved)
// - Failure (Reject)
// -----------

// Promise Producer

// const promiseProducer = (ms) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ms < 3000) {
//         resolve({ message: "SUCCESS" });
//       } else {
//         reject(new Error("Too high value"));
//       }
//     }, ms);
//   });

//   return promise;
// };

// Promise Consumer
// - then().catch()
// const promiseConsume = () => {
//   promiseProducer(2000)
//     .then((response) => {
//       console.log("FIRST PROMISE : ", response);
//       promiseProducer(4000)
//         .then(() => {})
//         .catch(console.erro);

//       return response.message;
//     })
//     .then((result) => {
//       console.log("SECOND PROMISE : ", result);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// promiseConsume();

// - Async...await
// async function promiseConsumer() {
//   try {
//     const responseOne = await promiseProducer(4000);
//     const responseTwo = await promiseProducer(1000);
//     console.log("RESPONSE : ", responseOne, responseTwo);
//   } catch (err) {
//     console.error(err);
//   }
// }

// promiseConsumer();

// PROMISE API
// - all
// - allSettled
// - race
// - any
// - resolved
// - rejected

// Promise.resolve({ message: "SUCCESS" }).then(console.log).catch(console.error);
// Promise.reject(new Error("Something went worng"))
//   .then(console.log)
//   .catch(console.error);

// const createPromise = (ms, data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ms === 2000) {
//         return reject(new Error("bad Code"));
//       } else {
//         resolve(data);
//       }
//     }, ms);
//   });
// };

// const p1 = createPromise(1000, "First Promise");
// const p2 = createPromise(2000, "Second Promise");
// const p3 = createPromise(3000, "Third Promise");

// let promiseArray = [p1, p2, p3];

// Promise.race(promiseArray)
//   .then((response) => {
//     console.log(response);
//   })
//     .catch(console.error);

// Promise.any(promiseArray)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(console.error);

// Promise.allSettled(promiseArray)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(console.error);

// Promise.all(promiseArray)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(console.error);

// --------------
// Rest API Call
// - using XHR
// - using fetch() API
// --------------

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (this.status === 200 && this.response) {
//     console.log(this.responseText);
//   }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// xhr.send();

// GET CALL
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//   .catch(console.error);

// POST CALL
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "Some title", body: "..." }),
})
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch(console.error);
