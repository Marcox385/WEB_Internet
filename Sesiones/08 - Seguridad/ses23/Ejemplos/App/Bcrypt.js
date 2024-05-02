/* Uso de Bcrypt */
const bcrypt = require('bcrypt');

/* Encriptar contraseñas */
// Número de iteraciones
const SALT_ROUNDS = 12; // Usualmente se lee de .env

// Dato a encriptar
let password = 'Mi_Contraseña_En_Texto_Plano';
console.log(`Dato original: ${password}`);

// Encriptar el dato (asíncrono)
bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {
    if (err) {
        console.log('No fue posible encriptar el dato...');
        return;
    }

    console.log(`Dato encriptado de forma asíncrona: ${hash}`);
});

// Encriptar el dato (síncrono)
let hash = bcrypt.hashSync(password, SALT_ROUNDS);
console.log(`Dato encriptado de forma síncrona: ${hash}`);

/* Comparar datos encriptados */
// Método asíncrono
bcrypt.compare(password, hash, (err, res) => {
    if (err) {
        console.log('No fue posible comparar el dato...');
        return;
    }

    if (res) console.log('Correcto');
    else console.log('Incorrecto');
});

// Ambos son métodos booleanos

// Método síncrono
let match = bcrypt.compareSync(password, hash);
console.log((match ? 'Inc' : 'C') + 'orrecto');
