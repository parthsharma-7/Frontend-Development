// Question 2: The Banking Interest Calculator
// This program calculates compound interest for savings accounts and fixed deposits

// Input variables - modify these to test different scenarios
let accountType = "fixed";   // Account type: "savings" or "fixed"
let amount = 150000;          // Principal amount in rupees
let years = 5;                // Investment duration in years

// Initialize interest rate variable
let interestRate = 0;

// Determine base interest rate based on account type
if (accountType === "savings") {
    interestRate = 4;  // Savings account gets 4% annual interest
    console.log("Account Type: Savings Account (4% base interest)");
} else if (accountType === "fixed") {
    interestRate = 6.5;  // Fixed deposit gets 6.5% annual interest
    console.log("Account Type: Fixed Deposit (6.5% base interest)");
} else {
    console.log("Invalid account type. Using 0% interest.");
}

// Apply bonus interest if amount exceeds ₹1,00,000
// Customers depositing more than ₹1,00,000 get an additional 1% bonus interest
if (amount > 100000) {
    interestRate += 1;  // Add 1% bonus to the interest rate
    console.log("Bonus applied: Amount exceeds ₹1,00,000 (+1% interest)");
}

// Calculate final balance using compound interest formula
// Formula: total = amount * (1 + rate/100)^years
let totalBalance = amount * Math.pow((1 + interestRate / 100), years);

// Round the result to 2 decimal places for currency display
totalBalance = totalBalance.toFixed(2);

// Calculate the total interest earned
let interestEarned = (totalBalance - amount).toFixed(2);

// Display the results in console
console.log("\n=== BANKING INTEREST CALCULATOR ===");
console.log("Principal Amount: ₹" + amount);
console.log("Account Type: " + accountType);
console.log("Duration: " + years + " years");
console.log("Final Interest Rate: " + interestRate + "%");
console.log("\n--- Calculation ---");
console.log("Total Interest Earned: ₹" + interestEarned);
console.log("Final Balance: ₹" + totalBalance);
console.log("===================================\n");
