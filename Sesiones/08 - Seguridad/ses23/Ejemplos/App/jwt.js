/* Uso de JSON Web Token */
const jwt = require('jsonwebtoken');

// Llave privada
const private_key = 'mi_llave_privada';
// Usualmente se lee de .env
// Se recomiendan llaves alfanuméricas
// de al menos 128 caracteres

// Datos
let payload = {
    llave: 'valor'
}

// Síncrono
let token = jwt.sign(payload, private_key);
console.log(token);
// Configuración adicional
token = jwt.sign(payload, private_key, { algorithm: 'HS512' });
console.log(token);

// Asíncrono
jwt.sign(payload, private_key, (err, token) => {
    console.log(token);
});

// Ejemplo
token = jwt.sign({ nombre: 'Marco' }, 'claveSecreta');
jwt.verify(token, 'claveSecreta', (err, decoded) => {
    console.log(decoded.nombre);
});

let decoded = jwt.decode(token);
console.log(decoded.nombre);
