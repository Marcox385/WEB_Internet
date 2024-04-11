/* Lectura asíncrona de archivos locales */
// Importar módulo
const fs = require('fs');

// Manejo de la lectura
let p = new Promise(resolve => {
    fs.readFile('datosAlumnos.txt', (err, data) => {
        if (err) {
            resolve('No fue posible abrir el archivo');
            return;
        }

        resolve(JSON.parse(data));
    });
});

// Muestra de los resultados
p.then(datos => console.log(datos));
