// Higher order functions!

const drillHoleInMetal = () => {
  console.log("Spun drill once in metal");
};

const drillHoleInWood = () => {
  console.log("Spun drill once in wood");
};

const spinTheDrill = (amountOfTurns, type) => {
  for (let i = 0; i < amountOfTurns; i++) {
    if (type === "metal") {
      drillHoleInMetal();
    }
    if (type === "wood") {
      drillHoleInWood();
    }
  }
};

spinTheDrill(10, "wood"); // Drill in wood
spinTheDrill(15, "metal"); // Drill in metal


// We updated the raw count of 10 tu use the turn param/arg to know how many turns to do
// A function param, array, obj, number, string, etc, but most importantly, a function!
const spinTheDrillButKindaGreat = (turns, doSomething) => {
  for (let i = 0; i < turns; i++) {
    doSomething();
  }
};


spinTheDrillButKindaGreat(2, drillHoleInWood)
spinTheDrillButKindaGreat(2, drillHoleInMetal)

// What is a callback !?!?
// It's not a thing! It's a relationship status!

// By itself, drillHoleInWood is a normal function!
// But when it is passed as a parameter in the spinTheDrill function, it is THE callback of that function

// spinTheDrillButKindaGreat is SPECIAL!
// Because it doesn't work by itself
// Higher Order Function (HoF)
// 1. It is a higher order function if it needs a callback to work
// 2. If it returns a function definition
// 3. Or both!
const listOfNames = ["Bill", "Vanessa", "Saurav", "Gustavo"];

const sayHiToSomeone = (name) => console.log(`Hi ${name}! `)
const sayByeToSomeone = (name) => console.log(`Bye ${name}!`)
const sayPoliteGreetingToSomeone = (name) => console.log(`Well hello there ${name}!, I hope you are well!`)
const yellName = (name) => console.log(`${name.toUpperCase()}!!!!!`)

const saySomethingToEveryone = (listOfNames, sayMessage) => {
  for(const name of listOfNames){
    sayMessage(name)
  }
}

saySomethingToEveryone(listOfNames, sayPoliteGreetingToSomeone)
saySomethingToEveryone(listOfNames, yellName)