class Book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBooks(title, author, id) {
    const newBook = { id, title, author };
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  deleteBook(id) {
    const { books } = this;
    const filtered = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filtered));
  }

  displayBooks() {
    return this.books;
  }
}

const theBook = new Book();

function showBooks() {
  const booksContainer = document.querySelector('.books-container');
  const bookData = theBook.displayBooks();
  let cardId = 'odd';
  for (let i = 0; i < bookData.length; i++) {
    if (i % 2 === 0) {
      cardId = 'even';
    } else {
      cardId = 'odd';
    }
    booksContainer.innerHTML += `<div class="bookcard" id= "${cardId}"><p>
        "${bookData[i].title}" by 
        ${bookData[i].author} 
      </p>
      
      <button class="remove">Remove</button>
    </div>`;
  }
}

window.addEventListener('load', () => {
  showBooks();
});

export default Book;