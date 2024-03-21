/* Otros operadores */

// Asignación
var x = 27;
x += (8 + 5);
x *= 4;
x /= 2;
x -= 11;
console.log(x); // ?

// Lógicos
var y = false;
x ||= y; // valor de x
x &&= y; // ?
x != x; // ?

// Evaluaciones separados por comas
let a = (1 + 2, 3 + 4); // 7
let b, c = (1 + 5, 2 + 9); // ?

for (a = 1, b = 3, c = a * b; a < 10; a++) {}
