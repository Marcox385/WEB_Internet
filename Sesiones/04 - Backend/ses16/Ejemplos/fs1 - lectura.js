/* Uso de módulo fs (file system) para lectura */
// Importar módulo
const fs = require('fs');

// Leer archivo (local)
let data = JSON.parse(fs.readFileSync('./fs1 - lectura.json'));
console.log(data);
