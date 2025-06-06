import React, { useEffect, useState } from 'react';
import { getBooks } from '../api.js';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  if (books.length === 0) return <p>No hay libros aún.</p>;

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> - {book.author} ({book.year})
        </li>
      ))}
    </ul>
  );
}

export default BookList;
