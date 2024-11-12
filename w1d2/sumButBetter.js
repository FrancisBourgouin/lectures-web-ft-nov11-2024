// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// FCT: Extract args from the terminal

// FCT: Filter data from a list

// FCT: Add numbers from a list

const extractArgsFromCommandLine = function (skipNodeAndFile) {
  const commandLineArgs = process.argv;

  if (skipNodeAndFile) {
    return commandLineArgs.slice(2);
  }

  return commandLineArgs;
};

// console.log(extractArgsFromCommandLine(true))

const parseToNumberAndFilterElementsFromList = function (list) {
  const listBuffer = [];

  for (const value of list) {
    const parsedNumber = Number(value);
    if (!Number.isNaN(parsedNumber)) {
      // sumBuffer = sumBuffer + value
      listBuffer.push(parsedNumber);
    }
  }
  return listBuffer;
};

// console.log(parseToNumberAndFilterElementsFromList([1, "2", 3, 4, "pollo"]));


const calculateSumOfList = function(list){
    let sumBuffer = 0;

    for(const number of list){
        sumBuffer += number
    }

    return sumBuffer
}

// console.log(calculateSumOfList([3,4,5]))

const fancyOutput = function(value){
    console.log("✨🥔✨🥔✨🥔✨🥔")
    console.log(value)
    console.log("✨🥔✨🥔✨🥔✨🥔")
}

// fancyOutput("YEAAAAAH")

const valuesFromTerminal = extractArgsFromCommandLine(true)
const cleanedValues = parseToNumberAndFilterElementsFromList(valuesFromTerminal)
const sum = calculateSumOfList(cleanedValues)
fancyOutput(sum)


// OUTPUT IN A FANCY WAY THE COMMAND LINES ARGS


fancyOutput(valuesFromTerminal)


const listOfNumbers = [123,32,32,41,42,14365,36,467,426,2]
const sumAgain = calculateSumOfList(listOfNumbers)