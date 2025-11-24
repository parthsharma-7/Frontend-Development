// Q2: applyOperation on an array using a callback
// Usage: run this file with Node.js: node q2.js

// applyOperation takes an array of numbers and a callback function (operation)
function applyOperation(numbers, operation) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const processedValue = operation(numbers[i]);
    result.push(processedValue);
  }

  return result;
}

// Callback to double a number
const double = (num) => num * 2;

// Callback to square a number
const square = (num) => num * num;

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, double);
const squaredNumbers = applyOperation(numbers, square);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);
