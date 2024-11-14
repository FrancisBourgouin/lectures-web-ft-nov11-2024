// Why do we want to use functions?

// We don't want to repeat ourselves
// Enhance readability!
// Reduce complexity

const bob = Math.round(3.14159265358979323846 * 10000) / 10000;

console.log(bob);

const roundButBetter = function (number, precision) {
  const multiplicator = Math.pow(10, precision);

  return Math.round(number * multiplicator) / multiplicator;
};

console.log(roundButBetter(3.1415926, 2));
console.log(roundButBetter(3.1415926, 3));

const listOfNames = ["Bill", "Vanessa", "Saurav", "Gustavo"];

const sayHiToEveryone = (listOfNames) => {
  for(const name of listOfNames){
    console.log(`Good morning ${name}!`)
  }
};

sayHiToEveryone(listOfNames)

const sayBaiToEveryone = (listOfNames) => {
  for(const name of listOfNames){
    console.log(`KTHX BAI ${name}!`)
  }
};

sayBaiToEveryone(listOfNames)


const saySomethingToEveryone = (listOfNames, somethingBefore, somethingAfter) => {
  for(const name of listOfNames){
    console.log(`${somethingBefore} ${name}, ${somethingAfter}!`)
  }
}

saySomethingToEveryone(listOfNames, "Bonjour", "Have a nice day!")