require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const bookRoutes = require('./routes/books');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
