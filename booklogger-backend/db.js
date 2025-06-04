require('dotenv').config(); // Asegúrate de cargar las variables
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DB_FILE || './books.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      year INTEGER
    )
  `);
});

module.exports = db;