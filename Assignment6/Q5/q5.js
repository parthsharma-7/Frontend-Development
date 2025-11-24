// Q5 – Frontend Rush: Avoiding Callback Hell
// Run with: node q5.js

// --- Version 1: Nested callbacks (Callback Hell) ---

function design(callback) {
  setTimeout(() => {
    console.log("Stage 1: Design complete");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    console.log("Stage 2: Build complete");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    console.log("Stage 3: Test complete");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    console.log("Stage 4: Deploy complete");
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(() => {
    console.log("Stage 5: Celebrate! 🎉");
    callback();
  }, 1000);
}

// Callback hell pipeline
function runPipelineWithCallbacks() {
  console.log("Running pipeline with nested callbacks (callback hell)...");

  design(() => {
    build(() => {
      test(() => {
        deploy(() => {
          celebrate(() => {
            console.log("Pipeline finished (callbacks).\n");
          });
        });
      });
    });
  });
}

// --- Version 2: Async/Await (Cleaner Flow) ---

function delayStage(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

async function runPipelineAsync() {
  console.log("Running pipeline with async/await (cleaner)...");

  await delayStage("Stage 1: Design complete");
  await delayStage("Stage 2: Build complete");
  await delayStage("Stage 3: Test complete");
  await delayStage("Stage 4: Deploy complete");
  await delayStage("Stage 5: Celebrate! 🎉");

  console.log("Pipeline finished (async/await).\n");
}

// Execute both versions sequentially
runPipelineWithCallbacks();

// Start async/await version a bit later so logs are readable
setTimeout(() => {
  runPipelineAsync().catch((err) => {
    console.error("Pipeline error:", err.message);
  });
}, 7000);

/*
Why async/await improves readability:
- With nested callbacks, the code becomes deeply indented and harder to follow,
  especially as more stages are added (the classic "callback hell").
- async/await lets us write asynchronous code in a top-to-bottom, synchronous style.
  Each await clearly shows the order of operations without extra nesting.
- Error handling is also simpler: we can use try/catch around await calls instead of
  passing error callbacks through many layers.
*/
