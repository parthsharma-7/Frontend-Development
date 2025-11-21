"use strict";
// Q1 - Dynamic Data Parser
// Mixed API data array
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to hold valid and invalid numeric values
const validNumbers = [];
const invalidNumbers = [];

// Loop over each item and attempt conversions
for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  // Convert to different types
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Log base conversions
  console.log(`Index ${i} -> Original:`, value, `| Number:`, numberValue, `| Boolean:`, booleanValue, `| String:`, stringValue);

  // Check if the numeric conversion is valid
  if (Number.isNaN(numberValue)) {
    // Track invalid numeric conversions separately
    console.log(`Invalid numeric value detected at index ${i}:`, value);
    invalidNumbers.push(value);
  } else {
    validNumbers.push(numberValue);
  }
}

// Final detailed report
console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
