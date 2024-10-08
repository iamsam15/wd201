// const readLine = require("readline");

// const lineDeatil = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDeatil.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!!`);
//   lineDeatil.close();
// });

const minimist = require("minimist");
const args = minimist(process.argv.slice(2), {
  default: {
    num1: 1,
    num2: 2,
    operation: "add",
  },
});

const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);
const operation = args.operation;

if (operation === "add") {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === "subtract") {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === "multiply") {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log("Unknown operation");
}
