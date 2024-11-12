// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// INPUT: List of things from the terminal

// STEPS: Read values from the command line (FIGURE THAT OUT) EVERYTHING IS A STRING IN THE ARRAY!
// STEPS: A place to store our temporary sum
// STEPS: Loop over the values that we receive from the command line
// STEPS:  store & convert the value to a number
// STEPS:  conditional to check if it is a valid value (pos/neg number), check if it is not a nan
// STEPS:    we want to add it to the temp sum
// STEPS: Return the temporary sum

// OUTPUT: A number

// console.log(process.argv)
// OUTPUT OF PROCESS.ARGV
[
  "/home/francis/.nvm/versions/node/v20.12.2/bin/node",
  "/home/francis/lighthouse/lectures/web-ft-nov11-2024/w1d2/sum.js",
  "hello",
  "chicken",
  "1",
  "2",
  "3",
  "4",
];

const sumOfEverythingInTheTerminal = function () {
  const commandLineValues = process.argv;
  let sumBuffer = 0;

  for (const value of commandLineValues) {
    const parsedNumber = Number(value);
    if (!Number.isNaN(parsedNumber)) {
      // sumBuffer = sumBuffer + value
      sumBuffer += parsedNumber;
    }
  }

  return sumBuffer;
};

const result = sumOfEverythingInTheTerminal();
console.log(result);
