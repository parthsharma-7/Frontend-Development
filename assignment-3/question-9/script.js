"use strict";
// Q9 - JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const cleanData = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);

    // Check for required keys
    if (parsed.user === undefined || parsed.age === undefined) {
      throw new Error(`Missing required keys at index ${i}`);
    }

    // Convert age to number and filter under-18 users
    const ageNumber = Number(parsed.age);
    if (Number.isNaN(ageNumber)) {
      throw new Error(`Invalid age value at index ${i}`);
    }

    if (ageNumber < 18) {
      console.log(`Skipping under-18 user at index ${i}:`, parsed.user);
      continue;
    }

    parsed.age = ageNumber;
    cleanData.push(parsed);
  } catch (error) {
    console.log(`Error parsing entry at index ${i}:`, error.message);
  }
}

console.log("Clean valid entries:", cleanData);
