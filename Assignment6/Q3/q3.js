// Q3 – Bug Tracker: Callback to Promise Migration
// Run with: node q3.js

// Original (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.3; // 30% chance of failure

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch bugs from API"));
      } else {
        const bugs = ["UI glitch", "API timeout", "Login failure"];
        resolve(bugs);
      }
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    console.table(bugs);
  })
  .catch((error) => {
    console.error("Error while fetching bugs:", error.message);
  });
