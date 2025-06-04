const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los libros
router.get('/', (req, res) => {
  db.all('SELECT * FROM books', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Agregar un libro
router.post('/', (req, res) => {
  const { title, author, year } = req.body;
  db.run(
    'INSERT INTO books (title, author, year) VALUES (?, ?, ?)',
    [title, author, year],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Eliminar un libro
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
