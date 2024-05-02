/* Nuevos métodos de env */
let secret, db_url;

/** Método 1: parámetro --env-file (Node 20.6)
 *  No se necesita ninguna configuración
 *  adicional
 */
secret = process.env.SECRET;
console.log(secret);

db_url = process.env.DB_URL;
db_url = db_url.replace('<target>', process.env.TARGET_DB);
db_url = db_url.replace('<password>', process.env.DB_PWD);
db_url = db_url.replace('<user>', process.env.DB_USER);
console.log(db_url);

/** Método 2: process.loadEnvFile(path) (21.7.0)
 *  Similar a dotenv (configurar desde JS)
*/
// Configurar variables
process.loadEnvFile();
// Si no se le pasa un argumento, buscará .env
secret = process.env.SECRET;
console.log(secret);

db_url = process.env.DB_URL;
db_url = db_url.replace('<target>', process.env.TARGET_DB);
db_url = db_url.replace('<password>', process.env.DB_PWD);
db_url = db_url.replace('<user>', process.env.DB_USER);
console.log(db_url);
