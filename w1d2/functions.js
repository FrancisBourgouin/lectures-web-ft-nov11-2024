// We will talk about functions in there !

// Why do we want functions ?

// DRY code is best code!

const a = 5;
const b = 10;

const result = b + a;

console.log(result);

// Primitive Data Types
// Numbers / Float / Int (parseInt, parseFloat) / NaN / Infinity
// Strings
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Data Structures
// EVERYTHING IS AN OBJECT (BUT THE PRIMITIVES)
// Arrays
// Objects
// Functions

const listOfNames = ["Bill", "Saurav", "Gustavo", "Vanessa"];
const otherListOfNames = ["Francis", "Andy", "Sandeep", "KV"];

// console.log("Hi " + listOfNames[0]);
// console.log("Hi " + listOfNames[1]);
// console.log("Hi " + listOfNames[2]);
// console.log("Hi " + listOfNames[3]);
// BAD BECAUSE OF REPETITION!

for (let i = 0; i < listOfNames.length; i++) {
  const name = listOfNames[i];
  console.log("Hi " + name);
}

for (const name of listOfNames) {
  console.log("Hi " + name);
}

for (const name of otherListOfNames) {
  console.log("Hi " + name);
}

// CODE IS WET!
// GOOD CODE = DRY CODE ( Dont repeat yourself )

const sayHiToList = function (listOfNames) {
  for (const name of listOfNames) {
    console.log("Hi " + name);
  }
};

sayHiToList(listOfNames)
sayHiToList(otherListOfNames)
