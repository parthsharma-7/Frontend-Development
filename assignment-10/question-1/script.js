// Question 1: The E-Commerce Delivery Estimator
// This program calculates delivery fees and estimated delivery time for an e-commerce order

// Input variables - modify these to test different scenarios
let orderAmount = 450;      // Order amount in rupees
let isPremium = false;      // Premium membership status
let isRemote = true;        // Remote location flag

// Initialize delivery fee and delivery time variables
let deliveryFee = 0;        // Default delivery fee is 0
let deliveryTime = 3;       // Default delivery time is 3 days

// Rule 1: Check if delivery fee should be applied
// Delivery fee of ₹50 is added if order is below ₹500
if (orderAmount < 500) {
    deliveryFee = 50;
    console.log("Order is below ₹500, delivery fee of ₹50 applied");
}

// Rule 2: Check if user is premium member
// Premium members get delivery fee waived regardless of order amount
if (isPremium) {
    deliveryFee = 0;  // Waive delivery fee for premium members
    console.log("Premium member: Delivery fee waived");
}

// Rule 3: Calculate delivery time based on location
// Remote locations add 2 extra days to standard 3-day delivery
if (isRemote) {
    deliveryTime += 2;  // Add 2 days for remote location
    console.log("Remote location: Adding 2 extra days for delivery");
}

// Calculate total cost by adding order amount and delivery fee
let totalCost = orderAmount + deliveryFee;

// Display the results in console
console.log("\n=== E-COMMERCE DELIVERY ESTIMATE ===");
console.log("Order Amount: ₹" + orderAmount);
console.log("Premium Member: " + (isPremium ? "Yes" : "No"));
console.log("Remote Location: " + (isRemote ? "Yes" : "No"));
console.log("\n--- Calculation ---");
console.log("Delivery Fee: ₹" + deliveryFee);
console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time: " + deliveryTime + " days");
console.log("===================================\n");
