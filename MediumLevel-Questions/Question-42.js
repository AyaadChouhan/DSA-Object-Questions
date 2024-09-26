// Design Patterns I: JavaScript Classes?!?
// JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.

// Challenge
// Create a Book class using a JavaScript function - instantiable.
// It should have an author and published property.

// Create an Author class using a literal object - singleton.

// It should have a name and books property.

// Create a Publisher class by using the new constructor and an anonymous function - singleton.

// It should have an authors and books property.

// Create a Review class using a class declaration - instantiable.

// It should have a rating and user property.
// Bonus (optional)
// Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.

class book {
  constructor(author, published) {
    this.author = author;
    this.published = published;
  }
}

const Author = {
  name: "jk",
  books: ["js", "puthon"],
};

const Publisher = new (function () {
  this.authors = ["J.K. Rowling", "George R.R. Martin"];
  this.books = ["Harry Potter", "Game of Thrones"];
})();

class Review {
  constructor(rating, user) {
    this.rating = rating;
    this.user = user;
  }
}

const Bookstore = (function() {
  this.books = 'data Science';
  this.price = 200  
  return [this.books, this.price]
})()
console.log(Bookstore)