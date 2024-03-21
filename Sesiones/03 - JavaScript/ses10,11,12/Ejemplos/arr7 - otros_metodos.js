/* Otros métodos de arreglos */

let names = ['Eliud', 'Alfredito', 'Chalino'];

// Map
// Sintaxis -> arr.map(function)
// Propósito -> "Mapear" un valor a otro
let tamaños = names.map(nombre => nombre.length);
console.log(tamaños); // [5, 9, 7]

// Sort
// Sintaxis -> arr.sort([function])
// Propósito -> Ordenar un arreglo
tamaños.sort();
console.log(tamaños); // [5, 7, 9]

names.sort((a, b) => {
    if (a.toUpperCase() < b.toUpperCase()) return -1;
    if (a.toUpperCase() > b.toUpperCase()) return 1;
    return 0;
});
console.log(names); // ['Alfredito', 'Chalino', 'Eliud']

// Join
// Sintaxis -> arr.join('sepString')
// Propósito -> Unir los elementos de un arreglo
let joined = names.join(', ');
console.log(joined); // 'Alfredito, Chalino, Eliud'

// Reduce
// Sintaxis -> arr.reduce(function, initialValue)
// Propósito -> Reducir un arreglo al acumularlo
let reduced = tamaños.reduce((a, b) => a + b);
console.log(reduced); // 21
let prefix = tamaños.reduce((a, b) => a + b, 42);
console.log(prefix); // 63

// Is Array
// Sintaxis -> Array.isArray(object)
// Propósito -> Determinar si un objeto es un arreglo
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// Todos los métodos disponibles con
//      Object.getOwnPropertyNames(Array.prototype)
