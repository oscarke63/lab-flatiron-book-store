const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/41Zq9zKbDQL._SX400_BO1,204,203,200_.jpg",
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/51x+O0kP9dL._SX348_BO1,204,203,200_.jpg",
    },
  ],
};

// Update existing element
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// Create new elements for each book
const bookList = document.getElementById("book-list");

for (const book of bookStore.books) {
  const bookContainer = document.createElement("li");

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;

  const bookImage = document.createElement("img");
  bookImage.src = book.image;

  bookContainer.append(bookTitle, bookAuthor, bookImage);
  bookList.append(bookContainer);
}

// BONUS: delete element
document.getElementById("delete-this").remove();
