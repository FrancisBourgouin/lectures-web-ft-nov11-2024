// WEIRD CALLBACKS !

const forEachElementDo = (list, action) => {
  for (let i = 0; i < list.length; i++) {
    const index = i;
    const element = list[index];

    action(element, index, list);
  }
};

const sayHi = (name, isYelling) => {
  const message = `Hi ${name}`;

  if (isYelling) {
    console.log(message.toLocaleUpperCase());
  } else {
    console.log(message);
  }
};

const listOfNames = ["Bill", "Vanessa", "Saurav", "Gustavo"];

const yellHi = (name) => sayHi(name, true);

forEachElementDo(listOfNames, (name) => sayHi(name, true)); // GOOD ADAPTER
// forEachElementDo(listOfNames, sayHi(name, true)); // CRASH WAITING TO HAPPEN
