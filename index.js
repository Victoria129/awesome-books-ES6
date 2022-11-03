import Book from "./modules/bookModel";

const bookList = document.querySelector('#displayed-books');
const bookAdd = document.querySelector('.add-awesombooks');
const contactMe = document.querySelector('.contact-me');
const link = document.querySelectorAll('.link');
const link2 = document.querySelector('.addbookform');
const link1 = document.querySelector('.listofbook');
const link3 = document.querySelector('.contactInfo');

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('listofbook')) {
      bookAdd.style.display = 'none';
      contactMe.style.display = 'none';
      bookList.style.display = 'block';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('addbookform')) {
      contactMe.style.display = 'none';
      bookList.style.display = 'none';
      bookAdd.style.display = 'flex';
      e.target.classList.add('active');
      link1.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('contactInfo')) {
      bookAdd.style.display = 'none';
      bookList.style.display = 'none';
      contactMe.style.display = 'flex';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link1.classList.remove('active');
    }
  });
});

window.addEventListener('load', () => {
  link1.classList.add('active');
});

/* eslint-disable no-undef */
setInterval(() => {
  const dt = luxon.DateTime.now();
  const time = document.querySelector('.time-div');
  time.textContent = dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
}, 1);

// class Book {
//     constructor(title, author) {
//       this.title = title;
//       this.author = author;
//     }
  
//     static getBooks() {
//       let books;
//       if (localStorage.getItem('books') === null) {
//         books = [];
//       } else {
//         books = JSON.parse(localStorage.getItem('books'));
//       }
//       return books;
//     }
  
//     static addBook(book) {
//       const books = Book.getBooks();
//       books.push(book);
//       localStorage.setItem('books', JSON.stringify(books));
//     }
  
//     static removeBook(title, author) {
//       const books = Book.getBooks();
//       books.forEach((book, index) => {
//         if (book.title === title && book.author === author) {
//           books.splice(index, 1);
//         }
//       });
//       localStorage.setItem('books', JSON.stringify(books));
//     }
  
//     static displayBooks() {
//       const books = Book.getBooks();
//       books.forEach((book) => Book.addBookToList(book));
//     }
  
//     static addBookToList(book) {
//       const list = document.querySelector('#book-list');
  
//       const datavalue = document.createElement('li');
  
//       datavalue.innerHTML = `
//           <li class="book-item">
//           <p><q>${book.title}</q> by <i>${book.author}</i></p>
//           <button type="button" class= "delete">Remove </button></li>
//           `;
  
//       list.appendChild(datavalue);
//     }
  
//     static deleteBook(el) {
//       if (el.classList.contains('delete')) {
//         el.parentElement.remove();
//       }
//     }
  
//     static clearFields() {
//       document.querySelector('#title').value = '';
//       document.querySelector('#author').value = '';
//     }
//   }
  
  document.addEventListener('DOMContentLoaded', Book.displayBooks);
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const book = new Book(title, author);
    Book.addBookToList(book);
    Book.addBook(book);
    Book.clearFields();
  });
  
  document.querySelector('#book-list').addEventListener('click', (e) => {
    Book.deleteBook(e.target);
    const fe = e.target.previousSibling.previousSibling;
    Book.removeBook(fe.firstChild.textContent, fe.lastChild.textContent);
  });