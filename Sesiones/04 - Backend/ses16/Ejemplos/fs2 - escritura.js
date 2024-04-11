/* Uso de módulo fs (file system) para escritura */
// Importar módulo
const fs = require('fs');

// Datos a escribir
let newData = [
    { nombre: 'test1', carrera: 'ISC' },
    { nombre: 'test2', carrera: 'PSI' }
];
newData.push({ nombre: 'test3', carrera: 'ICD' });

// Escribir archivos (local)
fs.writeFileSync('datosAlumnos.txt', JSON.stringify(newData));
