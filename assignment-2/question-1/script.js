// Q1 - Scope Conflict Resolver
// Global variable declaration (available in global scope)
let bonus = 5000;

// Function to calculate salary based on employment status
function calculateSalary(isPermanent) {
  // Local salary variable (function scope)
  let salary = 40000;

  // Add bonus only if employee is permanent
  if (isPermanent === true) {
    salary += bonus;
  }

  console.log("Is permanent:", isPermanent);
  console.log("Total salary inside function:", salary);
}

// Demonstrate how changing isPermanent affects only local logic
console.log("Global bonus before function calls:", bonus);

calculateSalary(true);  // permanent employee
calculateSalary(false); // non-permanent employee

// Global variable still unchanged, demonstrating scope separation
console.log("Global bonus after function calls (unchanged):", bonus);
