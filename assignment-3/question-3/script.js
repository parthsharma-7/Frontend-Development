"use strict";
// Q3 - Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];

  try {
    if (tx === null) {
      throw new Error(`Null transaction at index ${i}`);
    }

    if (tx.id === undefined || tx.amount === undefined) {
      throw new Error(`Missing id or amount at index ${i}`);
    }

    if (tx.amount < 0) {
      throw new Error(`Negative amount for transaction id ${tx.id}`);
    }

    // If all checks pass, consider transaction valid
    validTransactions.push(tx);
    console.log(`Valid transaction: id=${tx.id}, amount=${tx.amount}`);
  } catch (error) {
    console.log(`Transaction error at index ${i}:`, error.message);
    invalidTransactions.push({ index: i, transaction: tx, error: error.message });
  }
}

console.log("Total successful transactions:", validTransactions.length);
console.log("Total failed transactions:", invalidTransactions.length);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
