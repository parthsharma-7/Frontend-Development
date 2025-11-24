// Q5: Inheritance with Person and Student constructors using prototypes
// Usage: run this file with Node.js: node q5.js

// Base constructor
function Person(name) {
  this.name = name;
}

// Method on Person prototype
Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

// Student constructor that inherits from Person
function Student(name, branch) {
  // Call Person constructor to set 'name'
  Person.call(this, name);
  this.branch = branch;
}

// Inherit from Person.prototype
Student.prototype = Object.create(Person.prototype);
// Fix constructor reference
Student.prototype.constructor = Student;

// Add method specific to Student
Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// Add a method that prints both name and branch
Student.prototype.showDetails = function () {
  this.showName();
  this.showBranch();
};

// Demonstrate prototype chain
const student1 = new Student("Parth", "Computer Science");

console.log("--- Student details ---");
student1.showDetails();

console.log("\n--- Prototype chain checks ---");
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("Object.getPrototypeOf(Student.prototype) === Person.prototype:",
  Object.getPrototypeOf(Student.prototype) === Person.prototype);

console.log("Explanation: Student.prototype is created from Person.prototype, so\n" +
  "Student instances have access to methods defined on Person.prototype via the prototype chain.");
