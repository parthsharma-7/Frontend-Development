"use strict";
// Q10 - Nested Hoisting and Closures

function outer() {
  // Due to hoisting, `count` exists here but is undefined until this line
  console.log("Outer before declaration:", count); // undefined
  var count = 5;

  // Inner function has its own `count` variable due to hoisting
  function inner() {
    console.log("Inner before declaration:", count); // undefined (inner's own count)
    var count = 10;
    console.log("Inner after declaration:", count); // 10
  }

  inner();
  console.log("Outer after inner call:", count); // 5
}

outer();
