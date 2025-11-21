"use strict";
// Q7 - Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"]; // operations to test
const num1 = 25;
const num2 = 0;

// Function to perform a single operation with error handling
function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new Error("DivideByZeroError");
      }
      return a / b;
    case "power":
      return Math.pow(a, b || 2);
    case "root":
      if (a < 0) {
        throw new Error("NegativeRootError");
      }
      return Math.sqrt(a);
    default:
      throw new Error("InvalidOperationError");
  }
}

// Run through all operations and log formatted summary
for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op} | num1: ${num1} | num2: ${num2} | Result: ${result}`);
  } catch (error) {
    console.log(`Operation: ${op} | Error: ${error.message}`);
  }
}
