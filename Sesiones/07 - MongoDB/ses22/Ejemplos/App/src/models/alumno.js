/* Modelo de Alumno */
// Importar mongoose
const { Schema, model } = require('mongoose');

// Esquema
const alumnoSchema = new Schema({
    nombre: String,
    edad: { type: Number, min: 18, max: 99, required: true },
    carrera: { type: String, enum: ['IE', 'PS', 'IC'], required: true }
});

// Exportar esquema
module.exports = model('alumno', alumnoSchema);
