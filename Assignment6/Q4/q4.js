// Q4 – DevOps Delay: Async Timeout Race
// Run with: node q4.js

function serverA() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.2; // 20% chance of failure for this server

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Server A deployment failed"));
      } else {
        console.log("Server A deployed.");
        resolve("Server A");
      }
    }, 2000); // 2 seconds
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.2; // 20% chance of failure for this server

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Server B deployment failed"));
      } else {
        console.log("Server B deployed.");
        resolve("Server B");
      }
    }, 3000); // 3 seconds
  });
}

const aPromise = serverA();
const bPromise = serverB();

// Promise.all – waits for both servers to complete successfully
Promise.all([aPromise, bPromise])
  .then(() => {
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.error("Deployment error:", error.message);
  });

// Promise.race – the first server to respond (resolve or reject)
Promise.race([aPromise, bPromise])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((error) => {
    console.error("Fastest response resulted in error:", error.message);
  });
