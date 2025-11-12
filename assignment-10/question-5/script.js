// Question 5: The Weather Alert System
// This program checks weather conditions and determines event safety status

// Input variables - modify these to test different weather scenarios
let temperature = 32;   // Temperature in Celsius
let humidity = 75;      // Humidity percentage
let windSpeed = 25;     // Wind speed in km/h

// Display current weather conditions
console.log("=== WEATHER ALERT SYSTEM ===");
console.log("Current Weather Conditions:");
console.log("Temperature: " + temperature + "°C");
console.log("Humidity: " + humidity + "%");
console.log("Wind Speed: " + windSpeed + " km/h");
console.log("\n--- Safety Check ---");

// Initialize event status variable
let eventStatus = "";

// Check for dangerous weather conditions
// Condition 1: Heat Alert - High temperature with high humidity
if (temperature > 35 && humidity > 70) {
    eventStatus = "Cancel: Heat Alert";
    console.log("⚠️ DANGER: High temperature (>" + temperature + "°C) with high humidity (>" + humidity + "%)");
    console.log("Event Status: " + eventStatus);
}
// Condition 2: Cold/Windy Alert - Low temperature or strong winds
else if (temperature < 10 || windSpeed > 40) {
    eventStatus = "Cancel: Cold/Windy Alert";
    
    // Provide specific reason for cancellation
    if (temperature < 10 && windSpeed > 40) {
        console.log("⚠️ DANGER: Temperature too low (<10°C) AND wind speed too high (>40 km/h)");
    } else if (temperature < 10) {
        console.log("⚠️ DANGER: Temperature too low (<10°C)");
    } else {
        console.log("⚠️ DANGER: Wind speed too high (>40 km/h)");
    }
    
    console.log("Event Status: " + eventStatus);
}
// Condition 3: Safe conditions for event
else {
    eventStatus = "Event Approved";
    console.log("✓ Weather conditions are safe for outdoor event");
    console.log("Event Status: " + eventStatus);
}

// Provide temperature-based clothing/activity recommendations
console.log("\n--- Weather Advisory ---");

if (temperature < 20) {
    console.log("🧥 Recommendation: Wear Jacket");
    console.log("Temperature is below 20°C - dress warmly");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("😊 Recommendation: Comfortable");
    console.log("Temperature is pleasant (20-30°C)");
} else if (temperature > 30) {
    console.log("💧 Recommendation: Stay Hydrated");
    console.log("Temperature is above 30°C - drink plenty of water");
}

// Display final summary
console.log("\n=== FINAL DECISION ===");
console.log("Event Status: " + eventStatus);
console.log("======================\n");
