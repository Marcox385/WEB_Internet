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

// Rutas de API
app.get('/api/users', (req, res) => {
  dataHandler.getUsers().then(response => {
    if (response == -1) { // Error en lectura
      res.header('Content-Type', 'text/plain');
      res.status(500).send('Error en petición');
      return;
    }

    res.header('Content-Type', 'application/json');
    res.status(200).send(response);
  });
});

app.post('/api/users', (req, res) => {
  let userData = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    fecha: req.body.fecha,
    sexo: req.body.sexo,
    imagen: req.body.imagen
  };

  dataHandler.createUser(userData).then(response => {
    if (response) {
      res.status(201).send({nombre: response.nombre});
      return;
    }
  
    res.status(500).send('No se pudo agregar al usuario');
  });
});

app.get('/api/users/:email', (req, res) => {
  let userEmail = req.params.email;

  dataHandler.getUserByEmail(userEmail).then(response => {
    if (response == -1) { // Error en lectura
      res.header('Content-Type', 'text/plain');
      res.status(500).send('Error en petición');
      return;
    }

    res.header('Content-Type', 'application/json');
    res.status(200).send(response ? response : {});
  });
});

app.put('/api/users/:email', (req, res) => {
  let userEmail = req.params.email;
  let newData = req.body;

  dataHandler.updateUser(userEmail, newData).then(response => {
    if (response) {
      res.status(200).send(response);
      return;
    }

    res.status(404).send(`Usuario ${userEmail} no encontrado`);
  });
});

app.delete('/api/users/:email', (req, res) => {
  let userEmail = req.params.email;

  dataHandler.deleteUser(userEmail).then(response => {
    if (response) {
      res.status(200).send(response);
      return;
    }

    res.status(404).send(`Usuario ${userEmail} no encontrado`);
  });
});

// Ejecutar el servidor
app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}`);
});
