// Question 6: The Game Reward System
// This program calculates player rewards based on level, performance, and mission completion

// Input variables - modify these to test different scenarios
let level = 12;                      // Player's game level
let performanceScore = 85;           // Performance score (0-100)
let missionsCompleted = true;        // Whether all missions are completed

// Display player stats
console.log("=== GAME REWARD SYSTEM ===");
console.log("Player Statistics:");
console.log("Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("All Missions Completed: " + (missionsCompleted ? "Yes" : "No"));

// Calculate base coins using the formula: coins = (level * 50) + (performanceScore * 10)
let coins = (level * 50) + (performanceScore * 10);

console.log("\n--- Reward Calculation ---");
console.log("Base Coins (Level × 50): " + (level * 50));
console.log("Performance Bonus (Score × 10): " + (performanceScore * 10));
console.log("Initial Coins Earned: " + coins);

// Double the coins if player completed all missions
if (missionsCompleted) {
    coins = coins * 2;  // Double the coins as bonus for mission completion
    console.log("All Missions Bonus: Coins DOUBLED!");
    console.log("Updated Coins: " + coins);
}

// Determine player rank based on total coins earned
let rank = "";

if (coins > 1000) {
    rank = "Elite";     // Elite rank for high performers
    console.log("\n🏆 Rank Achieved: ELITE (Coins > 1000)");
} else {
    rank = "Regular";   // Regular rank for others
    console.log("\n⭐ Rank Achieved: REGULAR (Coins ≤ 1000)");
}

// Display final reward summary
console.log("\n=== REWARD SUMMARY ===");
console.log("Player Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("Missions Completed: " + (missionsCompleted ? "Yes" : "No"));
console.log("Total Coins Earned: " + coins);
console.log("Player Rank: " + rank);
console.log("======================\n");
