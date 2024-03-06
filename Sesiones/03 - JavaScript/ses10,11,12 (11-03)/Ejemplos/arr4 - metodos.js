/* Métodos principales de arreglos */

// Básicos
let arr = ['uno', {
    nombre: 'Juan'
}, true, function () {
    console.log('Hola mundo');
}];

console.log(arr[1].nombre); // Acceso a objeto
arr[3](); // Llamada a función
console.log(arr.length); // ?
console.log(arr); // Impresión del arreglo

// Métodos iniciales
let arr2 = [1, 2, 3, ]; // Sintaxis válida

console.log(arr2); // Vista inicial
arr2.push(4);
arr2.push(5, 6);
arr2.shift(); // ?
arr2.pop(); // ?
arr2.unshift(-1);
arr2.unshift(-3, -2);
console.log(arr2); // ?
