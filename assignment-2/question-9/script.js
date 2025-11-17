// Q9 - Odd–Even Number Analyzer
// Array to hold numbers from 1 to 30
let numbers = [];

// Fill array with numbers 1–30 using a loop
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Array to store analysis results
let resultArray = [];

// Analyze each number
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  let label;

  if (num % 3 === 0 && num % 5 === 0) {
    label = "FizzBuzz";
  } else if (num % 2 === 0) {
    label = "Even";
  } else {
    label = "Odd";
  }

  resultArray.push(label);
}

// Display results
console.log("Numbers:", numbers);
console.log("Analysis:", resultArray);
