// Q1: greetUser with callback
// Usage: run this file with Node.js: node q1.js

// Callback function that shows the end message
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser takes a name and a callback function
function greetUser(name, callback) {
  console.log(`Hello ${name}`);

  // Now call the callback to show that it runs AFTER the greeting
  console.log("About to call the callback...\n");
  callback();
}

// Demonstrate the callback flow clearly
console.log("Starting greeting flow...\n");
greetUser("Parth", showEndMessage);
console.log("\nGreeting flow finished.");
