// Q3: Library Management System

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book with ISBN ${this.isbn} is already issued.`);
      return;
    }
    this.isIssued = true;
    console.log(`Book "${this.title}" has been issued.`);
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book with ISBN ${this.isbn} is not currently issued.`);
      return;
    }
    this.isIssued = false;
    console.log(`Book "${this.title}" has been returned.`);
  }
}

// Sample books array
const books = [
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565'),
  new Book('To Kill a Mockingbird', 'Harper Lee', '9780061120084', true),
  new Book('1984', 'George Orwell', '9780451524935'),
  new Book('Clean Code', 'Robert C. Martin', '9780132350884'),
  new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748', true)
];

// Display all available (not issued) books
console.log('Available books (not issued):');
books
  .filter((book) => !book.isIssued)
  .forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
  });

// Function to issue a book by ISBN
function issueBookByIsbn(searchIsbn) {
  const foundBook = books.find((book) => book.isbn === searchIsbn);

  if (!foundBook) {
    console.log(`No book found with ISBN: ${searchIsbn}`);
    return;
  }

  foundBook.issueBook();
}

// Example usage:
// issueBookByIsbn('9780451524935');
// issueBookByIsbn('9780596517748');

// To test, run this file with Node.js and call issueBookByIsbn() in the console.
