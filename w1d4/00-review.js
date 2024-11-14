// Existential questions!

// I'm lost ?!

// Learning a language
// How to think

// CLARIFY QUESTION

// Define inputs
// Define outputs

// Loops!

// C-Style For Loop

for (let i = 0; i < 10; i++) {
  //
}

for (let i = 10; i > 0; i--) {
  //
}

const list = [1, 2, 3, 4];

for (let i = 0; i < list.length; i++) {
  const item = list[i];
}

// For..of
// For the current element of the list
// Useful for structures (iterable structures)

for (const value of list) {
  //
}

// For..in
// For the current index/key in the list/object

const obj = { name: "Pequeno Pollo", type: "Chicken!" };

for (const key in obj) {
  const value = obj[key];
}

for (const value of Object.values(obj)) {
  //
}

for (const index in list) {
  const value = list[index];
}

// .forEach

// list.forEach() ????

someOtherFunction();
// Function definition
// 1. HOISTING!
// 2. NOT PROTECTED!
function someOtherFunction(params) {
  console.log("Hello!");
}

// Function declaration
const someFunction = function (param) {
  // return ...
};

// const someFunction = function(){

// }

// Function declaration ARROW STYLE!

const someArrowFunction = (params) => {
  return "...";
};

const babyArrowFunction = (a, b) => a + b;

// function someOtherFunction(params){
//   console.log("MWAHAHAHAHHAHA 👿👿👿👿👿")
// }
