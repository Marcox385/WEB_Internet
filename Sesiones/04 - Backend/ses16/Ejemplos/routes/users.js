/* Uso de router - Rutas de usuario */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola desde usuarios');
});

module.exports = router;
