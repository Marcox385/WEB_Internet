/* Archivo base del servidor */
// Módulos necesarios
const express = require('express');
const dataHandler = require('./controllers/data_handler');

const app = express();
const port = 3000;

// Usado para parsear todos los cuerpos
// de las peticionesen formato JSON
app.use(express.json());

// Rutas del servidor
app.get('/', (req, res) => res.send('Hola mundo!'));
app.route('/home').get((req, res) => res.send('Hola casita!'));

// Ejecutar el servidor
app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}`);
});
