// More Callbacks

const listOfNumbers = [1, 42, 1337, 9001];

const doubleUp = (number) => number * 2;
const tripleUp = (number) => number * 3;

const forEachNumberDoSomething = (listOfNumbers, action) => {
  for (const number of listOfNumbers) {
    const modifiedNumber = action(number);
    console.log(modifiedNumber);
  }
};

forEachNumberDoSomething(listOfNumbers, doubleUp);
forEachNumberDoSomething(listOfNumbers, tripleUp);

forEachNumberDoSomething([1, 2, 3], tripleUp);
// [1,2,3] is the array with no name
// [1,2,3] is an anonymous array
// [1,2,3] for a few values more
forEachNumberDoSomething([1, 2, 3], function (number) {
  return number * 5;
});
forEachNumberDoSomething([1, 2, 3], (number) => number * 5);
// (number) => number * 5 // is an anonymous arrow function!
// Anonymous functions are often throwaway functions!

const betterForEachNumberDoSomething = (listOfNumbers, action) => {
  for (let i = 0; i < listOfNumbers.length; i++) {
    const index = i;
    const number = listOfNumbers[index];

    action(number, index, listOfNumbers);
  }
};

// ALL YOU CAN EAT BUFFET PARADIGM
// If you go to an AYCE BUFFET, do you need to eat everything?
// If you go to the buffet, and they don't have something, then you're sad

betterForEachNumberDoSomething([3, 4, 5], (number, index) => console.log(number * index));
betterForEachNumberDoSomething([3, 4, 5], (number, index, arr) =>
  console.log(`The value ${number} is at index ${index} in the array ${arr}`)
);

const forEachElementDo = (list, action) => {
  for (let i = 0; i < list.length; i++) {
    const index = i;
    const element = list[index];

    action(element, index, list);
  }
};

forEachElementDo(["Bob", "Bobby"], (name) => console.log(`Hey there ${name}`));

forEachElementDo([3, 4, 5], (number, index, arr) =>
  console.log(`The value ${number} is at index ${index} in the array ${arr}`)
);

[3, 4, 5].forEach((number) => console.log(`The number is ${number}`));

const result = [3, 4, 5].map((number) => number * number);
console.log(result);
