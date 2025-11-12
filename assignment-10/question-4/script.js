// Question 4: The Marks Analyzer
// This program analyzes student marks, calculates grades, and determines pass/fail status

// Input: Array of 5 subject marks (out of 100) - modify to test different scenarios
let marks = [85, 72, 38, 91, 65];

// Display the marks for each subject
console.log("=== STUDENT MARKS ANALYSIS ===");
console.log("Subject Marks:");
for (let i = 0; i < marks.length; i++) {
    console.log("Subject " + (i + 1) + ": " + marks[i]);
}

// Initialize variables for calculation
let totalMarks = 0;        // Sum of all marks
let failedSubjects = 0;    // Counter for subjects with marks < 40

// Loop through each subject to calculate total and count failures
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];  // Add current subject marks to total
    
    // Check if student failed in this subject (marks < 40)
    if (marks[i] < 40) {
        failedSubjects++;  // Increment failure counter
        console.log("Subject " + (i + 1) + " is FAILED (below 40)");
    }
}

// Calculate average marks
let average = totalMarks / marks.length;

// Calculate percentage (out of total 500 marks for 5 subjects)
let percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("\n--- Calculation Results ---");
console.log("Total Marks: " + totalMarks + " / " + (marks.length * 100));
console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Failed Subjects: " + failedSubjects);

// Determine grade based on percentage
let grade = "";

if (percentage >= 90 && percentage <= 100) {
    grade = "A+";  // Excellent performance
} else if (percentage >= 75 && percentage < 90) {
    grade = "A";   // Very good performance
} else if (percentage >= 60 && percentage < 75) {
    grade = "B";   // Good performance
} else if (percentage >= 40 && percentage < 60) {
    grade = "C";   // Average performance
} else {
    grade = "Fail"; // Below minimum passing marks
}

console.log("Grade: " + grade);

// Determine final status: Check if student needs to repeat the year
// Student must repeat year if they fail in 2 or more subjects, regardless of average
let finalStatus = "";

if (failedSubjects >= 2) {
    finalStatus = "Repeat Year";  // Failed in multiple subjects
    console.log("\n*** FINAL STATUS: REPEAT YEAR ***");
    console.log("Reason: Failed in " + failedSubjects + " or more subjects");
} else if (grade === "Fail") {
    finalStatus = "Fail";  // Overall percentage below 40%
    console.log("\n*** FINAL STATUS: FAIL ***");
    console.log("Reason: Overall percentage below 40%");
} else {
    finalStatus = "Pass";  // Student passed all requirements
    console.log("\n*** FINAL STATUS: PASS ***");
}

// Display final summary
console.log("\n=== FINAL SUMMARY ===");
console.log("Total Marks: " + totalMarks + " / " + (marks.length * 100));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Status: " + finalStatus);
console.log("=====================\n");
