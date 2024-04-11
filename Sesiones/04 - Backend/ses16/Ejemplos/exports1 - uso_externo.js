/* Uso de exports (requerir otro módulo) */
const importando = require('./modulo'); // No se necesita .js
importando.sumFunct(1, 24); // 25

// Importar solo unas funciones
const { sumFunct } = require('./modulo');
sumFunct(2, 5); // 7
