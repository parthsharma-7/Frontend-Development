// Question 10: The Random Coupon Generator
// This program generates random discount coupons and checks for prime number bonuses

// Function to check if a number is prime
// A prime number is only divisible by 1 and itself
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    
    // Check if number is divisible by any number from 2 to square root of num
    // We only need to check up to square root for efficiency
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  // Found a divisor, so not prime
        }
    }
    
    return true;  // No divisors found, number is prime
}

// Generate a random number between 1 and 100 (inclusive)
let couponNumber = Math.floor(Math.random() * 100) + 1;

// Display coupon generation header
console.log("=== RANDOM COUPON GENERATOR ===");
console.log("🎲 Generating random coupon...");
console.log("\n--- Result ---");
console.log("Coupon Number: " + couponNumber);

// Initialize discount message variable
let discountMessage = "";

// Determine discount based on coupon number range
if (couponNumber >= 1 && couponNumber <= 30) {
    // Range 1-30: 10% discount
    discountMessage = "You won a 10% discount";
    console.log("Range: 1-30");
} else if (couponNumber >= 31 && couponNumber <= 60) {
    // Range 31-60: 20% discount
    discountMessage = "You won a 20% discount";
    console.log("Range: 31-60");
} else if (couponNumber >= 61 && couponNumber <= 90) {
    // Range 61-90: 30% discount
    discountMessage = "You won a 30% discount";
    console.log("Range: 61-90");
} else if (couponNumber >= 91 && couponNumber <= 100) {
    // Range 91-100: 50% Mega Offer
    discountMessage = "You won a 50% Mega Offer!";
    console.log("Range: 91-100 🎉");
}

// Display the main discount message
console.log("\n🎁 " + discountMessage);

// Check if the coupon number is a prime number
if (isPrime(couponNumber)) {
    console.log("\n✨ BONUS: Prime number bonus applied!");
    console.log("Your coupon number " + couponNumber + " is a prime number!");
    console.log("You get an additional special bonus!");
} else {
    console.log("\nNote: Coupon number " + couponNumber + " is not prime (no bonus)");
}

// Display final summary
console.log("\n=== COUPON SUMMARY ===");
console.log("Coupon Number: " + couponNumber);
console.log("Discount: " + discountMessage);
console.log("Prime Bonus: " + (isPrime(couponNumber) ? "Yes ✓" : "No"));
console.log("======================\n");

// Additional info: List some prime numbers in 1-100 range for reference
console.log("Prime numbers between 1-100:");
console.log("2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97");
