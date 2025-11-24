// Q1: E-Commerce Product Manager
// Product class with id, name, price, category

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Apply a percentage discount (e.g., 10 for 10%)
  applyDiscount(percentage) {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount percentage must be between 0 and 100');
    }
    const discountAmount = (this.price * percentage) / 100;
    this.price = this.price - discountAmount;
  }

  // Return formatted product details
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: Rs. ${this.price.toFixed(2)}, Category: ${this.category}`;
  }
}

// Sample products
const products = [
  new Product(1, 'Laptop', 55000, 'Electronics'),
  new Product(2, 'Headphones', 1500, 'Electronics'),
  new Product(3, 'Notebook', 80, 'Stationery'),
  new Product(4, 'Mobile Phone', 12000, 'Electronics'),
  new Product(5, 'Watch', 900, 'Accessories')
];

// Apply 10% discount to all products (just as an example)
products.forEach((product) => product.applyDiscount(10));

// Filter products with price > 1000
const expensiveProducts = products.filter((product) => product.price > 1000);

console.log('Products with price > 1000 after discount:');
expensiveProducts.forEach((product) => {
  console.log(product.getDetails());
});
