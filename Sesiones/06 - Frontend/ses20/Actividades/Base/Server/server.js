// Servidor de express (backend)
// Módulos requeridos
const express = require('express');
const router = require('./controllers/router');

// Configurar servidor
const app = express();
const port = 3000;
app.use(express.json()); // Para peticiones con JSON
app.use('/api/users', router);

// Rutas
app.get('/', (req, res) => res.send('Hola desde el backend!'));

app.route('/home').get((req, res) => res.send('Página Home'));

app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}!`);
});
