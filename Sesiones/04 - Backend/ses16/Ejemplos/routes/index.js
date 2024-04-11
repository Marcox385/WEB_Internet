/* Uso de router - Integración de las rutas */
const express = require('express');
const router = express.Router();
const users = require('./users');

router.get('/', (req, res) => {
    res.send('Ruta raíz');
});

// Uso del router
router.use('/users', users);

// Exportar router (usar desde app)
module.exports = router;
