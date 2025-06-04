const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });
console.log("NODE_ENV:", process.env.NODE_ENV); // <-- aquí
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
