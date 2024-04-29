/* Uso de Mongoose */
// Importar módulo
const mongoose = require('mongoose');

// Importar modelo (esquema) de alumno
const alumnoModel = require('./src/models/alumno');

// Conexión a la base
let db_url = 'mongodb://localhost:27017/AlumnosDB'; // O tu URL
mongoose.connect(db_url, {}).then(() => {
    console.log('Conexión exitósa a MongoDB!');
}).catch(err => {
    console.log(`Error de conexión: ${err}`);
});

// Guardar documento en la colección de alumno
let newAlumno = {
    nombre: 'Marco C',
    edad: 23,
    carrera: 'IC'
};
alumnoModel.create(newAlumno);

/* Búsqueda de documentos */
// Buscar todos los documentos de una colección
alumnoModel.find({}).lean().then(response => {
    console.log('Todos los documentos');
    response.forEach(item => console.log(item));
});

// Buscar con criterio (regex para nombres que empiezan con M)
alumnoModel.find({
    nombre: /^M/
}).lean().then(response => {
    console.log('Documentos que empiezan con M');
    response.forEach(item => console.log(item));
});

// Edad en el rango de 18 a 21
alumnoModel.find({ edad: { $gte: 18, $lte: 21 } })
.lean().then(response => {
    console.log('Rango de edad de 18 a 21');
   response.forEach(item => console.log(item));
});
