"use strict";
// Q2 - Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

// Process each employee with strict validation and error handling
for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];

  try {
    // Basic property existence checks
    if (!emp.name || emp.salary === undefined || emp.years === undefined) {
      throw new Error(`Missing property in employee at index ${i}`);
    }

    // Convert salary and years to numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error(`Invalid numeric conversion for employee ${emp.name}`);
    }

    // Bonus logic: 10% if years > 3 else 5%
    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;

    // Template string output with formatted details
    const report = `Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus Rate: ${bonusRate * 100}% | Bonus: ${bonus}`;
    console.log(report);
  } catch (error) {
    // Handle conversion or missing property errors
    console.log(`Error processing employee at index ${i}:`, error.message);
  }
}
