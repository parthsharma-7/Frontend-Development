// Q3 - Math Utility Dashboard
// Base number for dashboard calculations
let x = 16.75;

// Rounded value
let roundedValue = Math.round(x);

// Square root
let squareRoot = Math.sqrt(x);

// Power x^3
let powerValue = Math.pow(x, 3);

// Random number between 10 and 50 (inclusive)
let randomInRange = Math.floor(Math.random() * 41) + 10;

// Formatted result summary using template literals
let summary = `
Math Utility Dashboard
----------------------
Original value: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
x^3 (power): ${powerValue}
Random number between 10 and 50: ${randomInRange}
`;

console.log(summary);
