/* Middleware de logging (independiente de contexto) */

function log(req, res, next) {
    console.log(`Método: ${req.method}`);
    console.log(`URL: ${req.originalUrl}`);
    console.log(`Fecha: ${new Date(Date.now()).toString()}`);

    // Extraer header
    console.log(`Accept: ${req.get('Accept')}`);

    // Siguiente paso de la cadena
    next();
}

module.exports = log;
