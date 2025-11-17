// Q4 - Array Performance Analyzer
// Generate an array of 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, function () {
  return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
});

console.log("Scores:", scores);

// Highest and lowest score
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Average score using reduce
let totalScore = scores.reduce(function (sum, score) {
  return sum + score;
}, 0);

let averageScore = totalScore / scores.length;

// Number of students who passed (>= 50) using filter
let passedStudents = scores.filter(function (score) {
  return score >= 50;
});
let passedCount = passedStudents.length;

// Formatted summary
let summary = `
Array Performance Analyzer
--------------------------
Scores: ${scores.join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Number of Students Passed (>= 50): ${passedCount}
`;

console.log(summary);
