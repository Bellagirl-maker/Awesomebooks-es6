// import { DateTime } from 'luxon';
import Book from './modules/book.js';
import domElement from './modules/dom-elements.js';
import showPage from './modules/page.js';

const theBook = new Book();
console.log(domElement.removeBtn);
domElement.addBtn.addEventListener('click', () => {
  let size;
  if (theBook.books.length == null) {
    size = 0;
  } else {
    size = theBook.books.length;
  }
  theBook.addBooks(domElement.titleInput.value, domElement.authorInput.value, size);
  domElement.titleInput.value = '';
  domElement.authorInput.value = '';
});

domElement.listPage.addEventListener('click', () => {
  const arr = ['.title-author-box', '.contact-box'];
  showPage(' .book-list-box', arr);
  location.reload();
});

domElement.addPage.addEventListener('click', () => {
  const arr = ['.book-list-box', '.contact-box'];
  showPage('.title-author-box', arr);
});

domElement.contactPage.addEventListener('click', () => {
  const arr = ['.title-author-box', '.book-list-box'];
  showPage(' .contact-box', arr);
});

// const addBtn = document.querySelector('#btn');
// const titleInput = document.querySelector('#title');
// const authorInput = document.querySelector('#author');
// const listPage = document.querySelector('#list');
// const addPage = document.querySelector('#add');
// const contactPage = document.querySelector('#contact');

// class Book {
//   constructor() {
//     this.books = JSON.parse(localStorage.getItem('books')) || [];
//   }

//   addBooks(title, author, id) {
//     const newBook = { id, title, author };
//     this.books.push(newBook);
//     localStorage.setItem('books', JSON.stringify(this.books));
//   }

//   deleteBook(id) {
//     const { books } = this;
//     const filtered = books.filter((book) => book.id !== id);
//     localStorage.setItem('books', JSON.stringify(filtered));
//   }

//   displayBooks() {
//     return this.books;
//   }
// }

// addBtn.addEventListener('click', () => {
//   let size;
//   if (theBook.books.length == null) {
//     size = 0;
//   } else {
//     size = theBook.books.length;
//   }
//   theBook.addBooks(titleInput.value, authorInput.value, size);
//   titleInput.value = '';
//   authorInput.value = '';
// });

// function removeBook(id) {
//   theBook.deleteBook(id);
//   location.reload();
// }

// function showBooks() {
//   const booksContainer = document.querySelector('.books-container');
//   const bookData = theBook.displayBooks();
//   let cardId = 'odd';
//   for (let i = 0; i < bookData.length; i++) {
//     if (i % 2 === 0) {
//       cardId = 'even';
//     } else {
//       cardId = 'odd';
//     }
//     booksContainer.innerHTML += `<div class="bookcard" id= "${cardId}"><p>
//         "${bookData[i].title}" by
//         ${bookData[i].author}
//       </p>
//       <button onclick="removeBook(${bookData[i].id})">Remove</button>
//     </div>`;
//   }
// }

// function showPage(show, hide) {
//   const showElement = document.querySelector(show);
//   showElement.classList.remove('hide');
//   for (let i = 0; i < Object.keys(hide).length; i++) {
//     const hideElement = document.querySelector(hide[i]);
//     if (hideElement.classList.contains('hide') === false) {
//       hideElement.classList.add('hide');
//     }
//   }
// }

// listPage.addEventListener('click', () => {
//   const arr = ['.title-author-box', '.contact-box'];
//   showPage(' .book-list-box', arr);
//   location.reload();
// });

// addPage.addEventListener('click', () => {
//   const arr = ['.book-list-box', '.contact-box'];
//   showPage('.title-author-box', arr);
// });

// contactPage.addEventListener('click', () => {
//   const arr = ['.title-author-box', '.book-list-box'];
//   showPage(' .contact-box', arr);
// });

// window.addEventListener('load', () => {
//   showBooks();
// });
