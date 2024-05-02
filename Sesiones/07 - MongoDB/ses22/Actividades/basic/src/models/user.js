/* Esquema y modelo de usuario */
const { Schema, model } = require('mongoose');

// Esquema
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, required: true },
    sex: { type: String, enum: ['H', 'M'], required: true },
    image: { type: String, required: true},
    rol: { type: String, enum: ['ADMIN', 'USER', 'GUEST'] }
});

// Exportar esquema
module.exports = model('user', userSchema);
