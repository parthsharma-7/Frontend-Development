// Q10 - Departmental Employee Evaluator
// Nested array for departments and scores
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

// Loop through each department and evaluate performance
for (let i = 0; i < departments.length; i++) {
  let departmentName = departments[i][0];
  let score = departments[i][1];
  let evaluation;

  // Nested if-else for evaluation
  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75 && score <= 89) {
    evaluation = "Good";
  } else if (score >= 60 && score <= 74) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }

  console.log(
    "Department:",
    departmentName,
    "| Score:",
    score,
    "| Evaluation:",
    evaluation
  );
}
