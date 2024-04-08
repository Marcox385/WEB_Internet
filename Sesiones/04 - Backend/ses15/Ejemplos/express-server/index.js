/* Entry point del servidor */
// Librerías externas
const express = require('express');

// Middlewares
const log = require('./middlewares/log');

// Configuración de Express
const app = express();
const port = 3000;

// Configuración de middlewares
app.use(log); // Middleware para todas las rutas
app.use('/alumnos', log); // Middleware exclusivo de alumnos

// Rutas del servidor
app.get('/', (req, res) => {
    // Configuración de headers
    res.set('Content-Type', 'text-plain');
    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
    });

    res.send('Hola mundo!');
});

// Ruta con middleware
app.get('/alumnos', log, (req, res) => {
    res.send('Mostrando alumnos...');
});

app.route('/home').get((req, res) => {
    // Lectura de headers
    console.log(req.header('User-Agent'));

    res.send('Hola casita!');
});

// Ejecución del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
