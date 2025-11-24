// Q3: Arrow function vs normal function for methods and 'this'
// Usage: run this file with Node.js: node q3.js

console.log("--- Using arrow function (this will be undefined) ---");

const userArrow = {
  name: "Parth",
  // Arrow function DOES NOT get its own 'this';
  // it uses 'this' from the outer (lexical) scope.
  showName: () => {
    console.log("Inside arrow function, this.name is:", this.name);
  },
};

userArrow.showName();
console.log("Explanation: In the arrow function, 'this' does not refer to 'userArrow'.\n" +
  "It refers to the surrounding scope (global/module), where there is no 'name' property, so this.name is undefined.\n");

console.log("--- Using normal function (this works correctly) ---");

const userNormal = {
  name: "Parth",
  // Normal function gets 'this' from the object on which it is called.
  showName: function () {
    console.log("Inside normal function, this.name is:", this.name);
  },
};

userNormal.showName();
console.log("Explanation: With a normal function, 'this' refers to 'userNormal',\n" +
  "so this.name correctly prints 'Parth'.");
