"use strict";
// Q6 - Pyramid Pattern Generator

// Default height; can be changed to simulate user input
let height = 5;

for (let row = 1; row <= height; row++) {
  let pattern = "";
  for (let col = 1; col <= row; col++) {
    pattern += "* ";
  }
  console.log(pattern.trim());
}
