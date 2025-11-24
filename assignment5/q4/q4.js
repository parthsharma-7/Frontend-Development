// Q4: Car constructor with prototype method getDetails
// Usage: run this file with Node.js: node q4.js

// Constructor function
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Prototype method shared by all Car instances
Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

// Demonstrate method sharing via prototype
console.log("\nAre car1.getDetails and car2.getDetails the same function?",
  car1.getDetails === car2.getDetails);
console.log("Explanation: Both instances share the same getDetails method\n" +
  "through Car.prototype, so the function reference is identical.");
