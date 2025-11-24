// Q2 – Task Scheduler: Micro vs Macro Challenge
// Run with: node q2.js

console.log("Start");

// Macrotask: scheduled in the macrotask queue
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: placed in the microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// Synchronous log (runs immediately on the call stack)
console.log("Synchronous log");

console.log("End");

/*
Explanation:
1. All synchronous code runs first: "Start", then the setTimeout is scheduled,
   then the Promise.then is scheduled as a microtask, then "Synchronous log",
   and finally "End".
2. After the call stack is empty (all synchronous code finished),
   the JavaScript engine first flushes the microtask queue (Promise callbacks),
   and only then processes macrotasks (like setTimeout callbacks).
3. That is why the output order is:
   Start
   Synchronous log
   End
   Promise.then callback (microtask)
   setTimeout callback (macrotask)
*/
