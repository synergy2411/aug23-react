import { sum } from "./maths.js";

console.log(sum(2, 4));

// // Explicit Type
// let x: string | number;

// x = "Hello Again!";

// x = 201;

// // Implicit Type
// let y = 201;
// // y = "";
// // y = true;

// type myType = {
//   id: string;
//   name: string;
//   age?: number;
// };

// let user: myType = {
//   id: "S001",
//   name: "John",
// };

// interface Animal {
//   species: string;
//   legs: number;
// }

// let bunny: Animal = {
//   species: "Rabbit",
//   legs: 4,
// };

// let varFn: Function = () => {};

// let varObject: object = {};

// let varArray: Array<string> = ["John", "Jenny", "Jack"];

// let varAny: any = "Hello";
// varAny = true;
// varAny = 1323;

// let unknownVar: unknown = "Hello World";

// let varString = unknownVar;

// unknownVar = varString;

// console.log(varString, unknownVar);

// function neverReturnAnything() : never {
//     throw new Error("Always throing error")
// }

// function add(n1: number, n2: number): number;
// function add(n1: number, n2: number, n3?: number): number;
// function add(n1: number, n2: number, n3?: number): number {
//   if (typeof n3 === "number") {
//     return n1 + n2 + n3;
//   }
//   return n1 + n2;
// }

// console.log(add(3, 3, 3));
// console.log(add(3, 3));

// interface Person {
//   //   firstName: string;
//   //   lastName: string;
//   getDetails(): string;
// }

// class Student implements Person {
//   //   firstName: string;
//   //   lastName: string;

//   constructor(private firstName: string, private lastName: string) {
//     // this.firstName = firstName;
//     // this.lastName = lastName;
//   }

//   getDetails(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// let john = new Student("John", "Doe");
// console.log(john.getDetails());

// GENERICS

function insertAtBeginning<T>(val: T, arr: Array<T>): Array<T> {
  return [val, ...arr];
}

// const stringArr = insertAtBeginning("Jack", ["Jenny", "John"]);

let stringArr = insertAtBeginning<string>("Jack", ["Jenny", "Jill"]);

let numberArr = insertAtBeginning<number>(101, [102, 103, 104]);

let userOne = {
  email: "john@test",
  age: 32,
};

let userArray = [
  { email: "jenny@test", age: 28 },
  { email: "jill@test", age: 26 },
];

const newUserArray = insertAtBeginning<{ email: string; age: number }>(
  userOne,
  userArray
);

class Employee<T, U> {
  constructor(private empId: T, private empName: T, private empAge: U) {}
}

let john = new Employee<string, number>("S001", "John Doe", 32);

interface Resource<T, K> {
  resourceId: T;
  resourceName: K;
}

let serverOne: Resource<number, string> = {
  resourceId: 101,
  resourceName: "Server One",
};

let serverTwo: Resource<string, string> = {
  resourceId: "201",
  resourceName: "Server Two",
};
