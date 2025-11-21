"use strict";
// Q4 - Debugging Mystery
// In strict mode, assigning to an undeclared variable causes a ReferenceError
// Original buggy code:
// function showMessage() {
//   greeting = "Welcome"; // undeclared -> would create global in sloppy mode, error in strict mode
//   console.log(greeting);
// }

// Fixed version with proper declaration inside function scope
function showMessage() {
  // Declare greeting with let so it lives in the function scope only
  let greeting = "Welcome";
  console.log(greeting);
}

// Watch variable suggestion: set a breakpoint on the next line and watch `greeting` in the debugger.
showMessage();
