"use strict";
// Q8 - Strict Mode Showdown
// In strict mode, duplicate parameter names and implicit globals are not allowed.

// Fixed version using unique parameter names and proper declaration
function demo(a1, a2) {
  let total = 10; // properly declared local variable
  console.log("Total:", total, "Args:", a1, a2);
}

demo(5, 10);
