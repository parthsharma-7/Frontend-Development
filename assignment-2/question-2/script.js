// Q2 - String Manipulation Report
// Original product name with extra spaces and inconsistent casing
let rawProductName = " wireless headphones PRO ";

// Step 1: Trim spaces and convert to lowercase
let trimmedName = rawProductName.trim().toLowerCase();

// Step 2: Capitalize first letter of each word using split-map-join
let words = trimmedName.split(" ");

let capitalizedWords = words.map(function (word) {
  // Handle possible empty strings (if any)
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1);
});

let cleanedTitle = capitalizedWords.join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
let finalTitle = cleanedTitle.replace("Pro", "Pro Edition");

// Step 4: Display cleaned title and its length
console.log("Cleaned Product Title:", finalTitle);
console.log("Title Length:", finalTitle.length);
