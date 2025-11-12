// Question 7: The Restaurant Billing with Tips
// This program calculates restaurant bill with GST, service tax, and tips

// Input variables - modify these to test different scenarios
let baseFoodCost = 2500;    // Base food cost in rupees
let isDiningIn = true;      // Whether customer is dining in or taking out

// Display order details
console.log("=== RESTAURANT BILLING SYSTEM ===");
console.log("Order Details:");
console.log("Base Food Cost: ₹" + baseFoodCost);
console.log("Dining Type: " + (isDiningIn ? "Dine-In" : "Takeout"));

console.log("\n--- Bill Calculation ---");

// Calculate GST - 5% of base cost (applies to all orders)
let gst = (baseFoodCost * 5) / 100;
console.log("1. Base Amount: ₹" + baseFoodCost);
console.log("2. GST (5%): ₹" + gst.toFixed(2));

// Calculate Service Tax - 10% if dining in, 0% for takeout
let serviceTax = 0;
if (isDiningIn) {
    serviceTax = (baseFoodCost * 10) / 100;  // 10% service tax for dine-in
    console.log("3. Service Tax (10% - Dine-In): ₹" + serviceTax.toFixed(2));
} else {
    console.log("3. Service Tax: ₹0.00 (Takeout - No service tax)");
}

// Calculate subtotal after adding GST and service tax
let subtotal = baseFoodCost + gst + serviceTax;
console.log("\nSubtotal (Base + GST + Service Tax): ₹" + subtotal.toFixed(2));

// Calculate tip - 8% recommended if total bill exceeds ₹2000
let tipAmount = 0;
if (subtotal > 2000) {
    tipAmount = (subtotal * 8) / 100;  // 8% tip on subtotal
    console.log("4. Recommended Tip (8% - Bill > ₹2000): ₹" + tipAmount.toFixed(2));
} else {
    console.log("4. Recommended Tip: ₹0.00 (Bill ≤ ₹2000)");
}

// Calculate final total by adding tip to subtotal
let finalTotal = subtotal + tipAmount;

// Round final total to 2 decimal places
finalTotal = parseFloat(finalTotal.toFixed(2));

// Display complete bill summary
console.log("\n=== BILL SUMMARY ===");
console.log("1. Base Amount:        ₹" + baseFoodCost.toFixed(2));
console.log("2. GST (5%):           ₹" + gst.toFixed(2));
console.log("3. Service Tax (10%):  ₹" + serviceTax.toFixed(2));
console.log("   ------------------------");
console.log("   Subtotal:           ₹" + subtotal.toFixed(2));
console.log("4. Tip (8%):           ₹" + tipAmount.toFixed(2));
console.log("   ------------------------");
console.log("   FINAL TOTAL:        ₹" + finalTotal.toFixed(2));
console.log("====================\n");
