// Question 8: The Employee Bonus Distribution
// This program calculates employee annual bonus based on performance and experience

// Input variables - modify these to test different scenarios
let performanceRating = 5;   // Performance rating (1-5 scale)
let experience = 7;          // Years of experience
let baseSalary = 120000;     // Base annual salary in rupees

// Display employee details
console.log("=== EMPLOYEE BONUS DISTRIBUTION ===");
console.log("Employee Details:");
console.log("Base Salary: ₹" + baseSalary);
console.log("Performance Rating: " + performanceRating + "/5");
console.log("Years of Experience: " + experience);

console.log("\n--- Bonus Calculation ---");

// Initialize bonus percentage
let bonusPercentage = 0;

// Determine base bonus percentage based on performance rating
if (performanceRating === 5) {
    bonusPercentage = 20;  // Exceptional performance - 20% bonus
    console.log("Performance Bonus: 20% (Rating 5 - Exceptional)");
} else if (performanceRating === 4) {
    bonusPercentage = 15;  // Excellent performance - 15% bonus
    console.log("Performance Bonus: 15% (Rating 4 - Excellent)");
} else if (performanceRating === 3) {
    bonusPercentage = 10;  // Good performance - 10% bonus
    console.log("Performance Bonus: 10% (Rating 3 - Good)");
} else if (performanceRating < 3) {
    bonusPercentage = 0;   // Below expectations - no bonus
    console.log("Performance Bonus: 0% (Rating below 3 - No bonus)");
}

// Add extra 5% bonus if experience exceeds 5 years
if (experience > 5) {
    bonusPercentage += 5;  // Add 5% for experienced employees
    console.log("Experience Bonus: +5% (Experience > 5 years)");
    console.log("Total Bonus Percentage: " + bonusPercentage + "%");
}

// Calculate the bonus amount based on base salary and bonus percentage
let calculatedBonus = (baseSalary * bonusPercentage) / 100;
console.log("Calculated Bonus Amount: ₹" + calculatedBonus.toFixed(2));

// Initialize final bonus variable
let finalBonus = calculatedBonus;

// Apply cap: If base salary exceeds ₹1,00,000, cap the bonus at ₹25,000
if (baseSalary > 100000 && calculatedBonus > 25000) {
    finalBonus = 25000;  // Cap the bonus at ₹25,000
    console.log("\n⚠️ Bonus Cap Applied!");
    console.log("Reason: Salary > ₹1,00,000 and calculated bonus > ₹25,000");
    console.log("Capped Final Bonus: ₹" + finalBonus.toFixed(2));
} else {
    console.log("\nNo cap applied - using calculated bonus");
}

// Calculate total salary after adding final bonus
let totalSalary = baseSalary + finalBonus;

// Display final summary
console.log("\n=== BONUS SUMMARY ===");
console.log("Base Salary: ₹" + baseSalary.toFixed(2));
console.log("Bonus Percentage: " + bonusPercentage + "%");
console.log("Calculated Bonus: ₹" + calculatedBonus.toFixed(2));
console.log("Final Bonus (after cap): ₹" + finalBonus.toFixed(2));
console.log("Total Salary (Base + Bonus): ₹" + totalSalary.toFixed(2));
console.log("=====================\n");
