/* Uso de archivos estáticos */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Archivos estáticos
app.use(express.static(`${__dirname}/public/home`));
app.use('/admin', express.static(`${__dirname}/public/admin`));

// Rutas
app.get('/generic', (req, res) => {
    let page = path.join(__dirname, 'public', 'generic.html');
    res.sendFile(page);
});

// Ejecutar servidor
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});
