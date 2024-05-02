/* Ejercicio 1 - Conexión inicial */
const mongoose = require('mongoose');

// Modelo de usuario
const userModel = require('./src/models/user');

// Conexión a la base
let db_url = 'mongodb://localhost:27017/UsuariosDB';
mongoose.connect(db_url, {}).then(() => {
    console.log('Conexión exitósa a MongoDB!');
}).catch(err => {
    console.log(`Error de conexión: ${err}`);
});

// Crear usuario
userModel.create({
    firstName: 'Marco',
    lastName: 'Cordero',
    email: 'mar.co@cordero.com',
    password: 'M1_C0ntr453n1a',
    date: '2000-12-13',
    sex: 'H',
    image: 'url.a.mi/imagen/3/85',
    rol: 'ADMIN'
});

/* Ejercicio 2 - Buscar usuarios */
// Usuarios adicionales
userModel.create({
    firstName: 'Ricardo', lastName: 'Hdez',
    email: 'ricardito@herdez.mx',
    password: 'CONTRASEÑASEGURA',
    date: '2001-09-11', sex: 'H',
    image: 'google.img/3qw452893h',
    rol: 'GUEST'
});

userModel.create({
    firstName: 'Señora', lastName: 'Gaga',
    email: 'gaga@gaga.ga',
    password: 'VESTIDO_DE_CARNE',
    date: '1986-03-28', sex: 'M',
    image: 'walmart.com/meat',
    rol: 'USER'
});

// Buscar a todos los usuarios
userModel.find({}).lean().then(response => {
    console.log('Todos los usuarios');
    response.forEach(item => console.log(item));
});

// Buscar a los usuarios hombres
userModel.find({ sex: 'H' }).lean().then(response => {
    console.log('Usuarios hombres');
    response.forEach(item => console.log(item));
});

// Buscar por ID específico
let id = '66048bd13be93b8841395270'; // Obtenido de forma externa
userModel.findById(id).lean().then(response => {
    console.log(`Usuario con ID ${id}`);
    console.log(response);
});
// Node ejecutará este query antes que los anteriores

/* Ejercicio 3 - Modificar documento */
userModel.findOneAndUpdate(
    { firstName: 'Ricardo' },
    { lastName: 'Hernández' },
    { new: true, omitUndefined: true }
).then(response => {
    console.log('Usuario actualizado correctamente');
    console.log(response);
});
