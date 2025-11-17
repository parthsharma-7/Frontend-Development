// Q7 - Customer Feedback Processor
// Feedback string from customer
let feedback =
  "Great product! Fast delivery and amazing sound quality!";

// Count words using split
let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

// Check if feedback includes "bad" or "poor" (case-insensitive)
let lowerFeedback = feedback.toLowerCase();
let hasBad = lowerFeedback.includes("bad");
let hasPoor = lowerFeedback.includes("poor");

// Decide positivity
let resultMessage;
if (!hasBad && !hasPoor) {
  resultMessage = "Positive Feedback";
} else {
  resultMessage = "Needs Improvement";
}

// Display analysis
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);
console.log("Contains 'bad' or 'poor'? ->", hasBad || hasPoor);
console.log("Overall Analysis:", resultMessage);
