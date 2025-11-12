// Question 3: The Cinema Ticketing System
// This program calculates movie ticket prices with discounts and service fees

// Input variables - modify these to test different scenarios
let showType = "evening";     // Show type: "morning" or "evening"
let customerType = "student";  // Customer type: "student", "senior", or "regular"
let age = 22;                  // Age of customer (used for senior discount)
let numberOfTickets = 4;       // Number of tickets to purchase

// Determine base ticket price based on show timing
let ticketPrice = 0;
if (showType === "morning") {
    ticketPrice = 120;  // Morning show costs ₹120 per ticket
    console.log("Show Type: Morning Show (₹120 per ticket)");
} else if (showType === "evening") {
    ticketPrice = 180;  // Evening show costs ₹180 per ticket
    console.log("Show Type: Evening Show (₹180 per ticket)");
} else {
    console.log("Invalid show type. Using ₹0 base price.");
}

// Calculate base price for all tickets (before discount)
let basePrice = ticketPrice * numberOfTickets;
console.log("Number of Tickets: " + numberOfTickets);
console.log("Base Price (before discount): ₹" + basePrice);

// Determine discount percentage based on customer type
let discountPercentage = 0;

// Students get 10% discount
if (customerType === "student") {
    discountPercentage = 10;
    console.log("Customer Type: Student (10% discount)");
}
// Seniors (age > 60) get 20% discount
else if (customerType === "senior" || age > 60) {
    discountPercentage = 20;
    console.log("Customer Type: Senior Citizen (20% discount)");
}
// Regular customers get no discount
else {
    console.log("Customer Type: Regular (No discount)");
}

// Calculate discount amount and discounted total
let discountAmount = (basePrice * discountPercentage) / 100;
let discountedTotal = basePrice - discountAmount;

console.log("Discount Applied: " + discountPercentage + "% (₹" + discountAmount + ")");
console.log("Discounted Total: ₹" + discountedTotal);

// Initialize service fee
let serviceFee = 0;

// Apply ₹50 service fee if more than 3 tickets are booked
if (numberOfTickets > 3) {
    serviceFee = 50;
    console.log("Service Fee: ₹50 (More than 3 tickets)");
}

// Calculate final amount after adding service fee
let finalAmount = discountedTotal + serviceFee;

// Display complete breakdown in console
console.log("\n=== CINEMA TICKET BOOKING SUMMARY ===");
console.log("Base Price: ₹" + basePrice);
console.log("Discount (" + discountPercentage + "%): -₹" + discountAmount);
console.log("Discounted Total: ₹" + discountedTotal);
console.log("Service Fee: ₹" + serviceFee);
console.log("Final Amount: ₹" + finalAmount);
console.log("=====================================\n");
