/* JWT + Mongoose */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Definición de esquema
let userSchema = mongoose.Schema({
    email: {
        type: String, required: true, trim: true, minlength: 4, unique: true
    },
    password: {
        type: String, required: true, minlegth: 8
    },
    token: {
        type: String, required: true
    },
    acceso: {
        type: String, enum: ['GUEST', 'REGISTERED', 'ADMIN'], required: true
    }
});

// Binding de validador
const SECRET_KEY = 'M1_Cl4V3_5eCR3tA';
userSchema.methods.generateToken = () => {
    let user = this;
    let token = jwt.sign({
        _id: user._id.toHexString(),
        acceso: user.acceso
    }, SECRET_KEY,
    { expiresIn: 60*60 }).toString();
    return token;
};
// Puede ser llamado en cualquier momento de la ejecución

// Validar token en otro momento de la aplicación
jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
        if (err.name == 'TokenExpiredError')
            console.log('El token ya expiró');
        else
            console.log('Error inesperado: ', err);
        return;
    }

    // Manejar acciones subsecuentes
});
// Usado para sesiones de usuario y acceso a recursos
