/* Tipos de datos */

// Declaración
let number1 = 3;
let number2 = 1.4556;
let str1 = "cadena1";
let str2 = 'cadena2';
let str3 = `cadena${number1}`;
let boolean1 = true;
let boolean2 = false; // !boolean1
let array1 = [1, 'texto', "otro", 1.34, true, ['celda0', 'celda1']];
let valArray = array1[0];

// Tipos de las variables en tiempo de ejecución
console.log(typeof number1); // number
console.log(typeof number2); // number
console.log(typeof str1); // string
console.log(typeof str2); // string
console.log(typeof str3); // string
console.log(typeof boolean1); // boolean
console.log(typeof boolean2); // boolean
console.log(typeof array1); // object
console.log(typeof valArray); // number

// Reasignacion por tipado dinámico
let dato = "texto";
dato = 234; // Correcto
dato = true; // Correcto

// Números especiales
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log('hola' / 2); // NaN
console.log(typeof Infinity); // number
console.log(typeof - Infinity); // number
console.log(typeof NaN); // number ¿?

// Casos especiales de typeof
console.log(typeof undefined); // undefined
console.log(typeof alert); // function
console.log(typeof noExiste); // undefined
console.log(typeof typeof (noExiste)); // ?
console.log(typeof null); // ?