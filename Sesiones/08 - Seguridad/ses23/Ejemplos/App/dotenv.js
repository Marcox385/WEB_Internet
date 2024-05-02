/* Paquete DOTENV */
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();
// Buscará el archivo .env a nivel raíz de la aplicación
// Equivalente -> require('dotenv').require();

// Acceder a variables de entorno
const secret = process.env.SECRET;
console.log(secret);

// Ejemplo de base de datos
let db_url = process.env.DB_URL;
db_url = db_url.replace('<target>', process.env.TARGET_DB);
db_url = db_url.replace('<password>', process.env.DB_PWD);
db_url = db_url.replace('<user>', process.env.DB_USER);
console.log(db_url);
// Pd. Este no es el mejor método (investigar dotenvExpand)

