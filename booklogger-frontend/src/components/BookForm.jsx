import React, { useState } from 'react';
import { addBook } from '../api.js';

function BookForm({ onNewBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addBook({ title, author, year: Number(year) });
      onNewBook(res.data);
      setTitle('');
      setAuthor('');
      setYear('');
    } catch (error) {
      console.error('Error al agregar libro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Autor" 
        value={author} 
        onChange={e => setAuthor(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Año" 
        value={year} 
        onChange={e => setYear(e.target.value)} 
        required 
      />
      <button type="submit">Agregar Libro</button>
    </form>
  );
}

export default BookForm;
