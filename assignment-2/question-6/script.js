// Q6 - Event-Based Counter Simulation
// Global counter variable
let count = 0;

// Increment function simulating a click event
function increment() {
  // Nested function to demonstrate function scope and updating count
  function updateCount() {
    count = count + 1;
  }

  updateCount();
  console.log("Count after increment:", count);
}

// Decrement function simulating a click event
function decrement() {
  // Nested function to demonstrate function scope and updating count
  function updateCount() {
    count = count - 1;
  }

  updateCount();
  console.log("Count after decrement:", count);
}

// Simulated click events
increment(); // count = 1
increment(); // count = 2
decrement(); // count = 1
increment(); // count = 2
