const express = require('express');
const path = require('path');
const quizRoutes = require('./routes/quiz');

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// rutas
app.use('/', quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});
