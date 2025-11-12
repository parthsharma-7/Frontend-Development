// Question 9: The Library Fine Calculator
// This program calculates library fines for overdue books with tiered penalties

// Input: Array of delay days for each late book - modify to test different scenarios
let delayedBooks = [3, 8, 15, 2];  // Days delay for each book

// Display library fine rules
console.log("=== LIBRARY FINE CALCULATOR ===");
console.log("Fine Structure:");
console.log("• Days 1-5:   ₹10 per day");
console.log("• Days 6-10:  ₹20 per day");
console.log("• Days 11+:   ₹50 per day");
console.log("• Additional penalty: ₹200 if more than 3 books are delayed");

console.log("\n--- Book Details ---");
console.log("Number of Delayed Books: " + delayedBooks.length);

// Initialize variables for calculation
let totalFine = 0;          // Total fine amount
let delayCount = delayedBooks.length;  // Number of delayed books

// Loop through each delayed book to calculate individual fines
for (let i = 0; i < delayedBooks.length; i++) {
    let days = delayedBooks[i];  // Get delay days for current book
    let bookFine = 0;             // Fine for this specific book
    
    console.log("\nBook " + (i + 1) + ": " + days + " days late");
    
    // Calculate fine based on tiered delay structure
    if (days >= 1 && days <= 5) {
        // Tier 1: Days 1-5 at ₹10 per day
        bookFine = days * 10;
        console.log("  Tier: 1-5 days (₹10/day)");
        console.log("  Fine: " + days + " × ₹10 = ₹" + bookFine);
    } 
    else if (days >= 6 && days <= 10) {
        // Tier 2: Days 6-10 at ₹20 per day
        bookFine = days * 20;
        console.log("  Tier: 6-10 days (₹20/day)");
        console.log("  Fine: " + days + " × ₹20 = ₹" + bookFine);
    } 
    else if (days >= 11) {
        // Tier 3: Days 11+ at ₹50 per day
        bookFine = days * 50;
        console.log("  Tier: 11+ days (₹50/day)");
        console.log("  Fine: " + days + " × ₹50 = ₹" + bookFine);
    }
    
    // Add book fine to total
    totalFine += bookFine;
}

console.log("\n--- Fine Summary ---");
console.log("Subtotal Fine (all books): ₹" + totalFine);

// Apply additional penalty if more than 3 books are delayed
let additionalPenalty = 0;
if (delayCount > 3) {
    additionalPenalty = 200;
    console.log("⚠️ Additional Penalty: ₹200 (More than 3 delayed books)");
    totalFine += additionalPenalty;
} else {
    console.log("No additional penalty (3 or fewer delayed books)");
}

// Display final fine breakdown
console.log("\n=== FINAL FINE BREAKDOWN ===");
console.log("Number of Delayed Books: " + delayCount);

// Display each book's delay details
for (let i = 0; i < delayedBooks.length; i++) {
    console.log("Book " + (i + 1) + ": " + delayedBooks[i] + " days late");
}

console.log("\nSubtotal Fine: ₹" + (totalFine - additionalPenalty));
console.log("Additional Penalty: ₹" + additionalPenalty);
console.log("----------------------------");
console.log("TOTAL FINE: ₹" + totalFine);
console.log("============================\n");
