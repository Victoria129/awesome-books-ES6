import Book from './book.js';

export default class Utility {
    static getBooks = () => {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    static addBook = (book) => {
      const books = this.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook = (title, author) => {
      const books = this.getBooks();
      books.forEach((book, index) => {
        if (book.title === title && book.author === author) {
          books.splice(index, 1);
        }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks = () => {
      const books = this.getBooks();
      books.forEach((book) => this.addBookToList(book));
    }

    static addBookToList = (book) => {
      const list = document.querySelector('#book-list');

      const datavalue = document.createElement('li');

      datavalue.innerHTML = `
          <li class="book-item">
          <p><q>${book.title}</q> by <i>${book.author}</i></p>
          <button type="button" class= "delete">Remove </button></li>
          `;

      list.appendChild(datavalue);
    }

    static deleteBook = (el) => {
      if (el.classList.contains('delete')) {
        el.parentElement.remove();
      }
    }

    static clearFields = () => {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }

    static createBook = (title, author) => {
      const book = new Book(title, author);
      this.addBookToList(book);
      this.addBook(book);
      this.clearFields();
    }
}
