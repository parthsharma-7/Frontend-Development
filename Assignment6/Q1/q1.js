// Q1 – The Startup Morning: Async Coffee Maker
// Run with: node q1.js

// Helper to simulate random step failure
function maybeFail(stepName) {
  if (Math.random() < 0.3) { // 30% chance of failure
    throw new Error(stepName + " failed!");
  }
}

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      try {
        maybeFail("Boiling water");
        console.log("Water boiled.");
        resolve("hot water");
      } catch (err) {
        reject(err);
      }
    }, 1000 + Math.random() * 1000); // 1–2 seconds
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee with", water, "...");
    setTimeout(() => {
      try {
        maybeFail("Brewing coffee");
        console.log("Coffee brewed.");
        resolve("fresh coffee");
      } catch (err) {
        reject(err);
      }
    }, 1000 + Math.random() * 1000);
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    console.log("Pouring", coffee, "into cup...");
    setTimeout(() => {
      try {
        maybeFail("Pouring into cup");
        console.log("Coffee poured into cup.");
        resolve();
      } catch (err) {
        reject(err);
      }
    }, 1000 + Math.random() * 1000);
  });
}

// Promise chaining
boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.error("Coffee process failed:", error.message);
  });
