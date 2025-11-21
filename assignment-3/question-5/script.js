"use strict";
// Q5 - Hoisting Lab: The Sequence Trap

// Fixed sequence so that variables are declared before use
var score = 50; // var is hoisted, initialized here

function announce() {
  console.log("Game started");
}

let status = "ready"; // let is hoisted but in TDZ until this line

function startGame() {
  console.log(status);
}

console.log(score); // 50
announce();         // "Game started"
startGame();        // "ready"

// Arrow function versions (not hoisted like function declarations)
const announceArrow = () => {
  console.log("Game started (arrow)");
};

const startGameArrow = () => {
  console.log(status);
};

announceArrow();
startGameArrow();
