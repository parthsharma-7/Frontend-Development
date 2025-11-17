// Q8 - Dynamic Discount Evaluator
// Cart with items and categories
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

// Apply category-based discount for each item
let discountedCart = cart.map(function (product) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.1; // 10%
  } else if (product.category === "fashion") {
    discountRate = 0.05; // 5%
  } else {
    discountRate = 0; // no discount
  }

  let discountedPrice = product.price - product.price * discountRate;

  return {
    ...product,
    discountRate: discountRate,
    discountedPrice: discountedPrice,
  };
});

// Calculate total after category discounts
let totalAfterCategoryDiscount = discountedCart.reduce(function (
  sum,
  product
) {
  return sum + product.discountedPrice;
}, 0);

// Apply extra 5% overall discount if total > 50000
let extraDiscountRate = 0;
if (totalAfterCategoryDiscount > 50000) {
  extraDiscountRate = 0.05;
}

let finalTotal =
  totalAfterCategoryDiscount -
  totalAfterCategoryDiscount * extraDiscountRate;

// Output details
console.log("Original Cart:", cart);
console.log("Discounted Cart (per item):", discountedCart);
console.log(
  "Total after category discounts:",
  totalAfterCategoryDiscount.toFixed(2)
);
console.log("Extra overall discount rate:", extraDiscountRate * 100, "%");
console.log("Final Total after all discounts:", finalTotal.toFixed(2));
