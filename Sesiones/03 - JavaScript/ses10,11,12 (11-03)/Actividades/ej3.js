/* Ejercicio 3 - Manejo de arreglos */

const users = [];

users.push('Usuario1', 'Usuario2', 'Usuario3');

console.table(users);
console.log(JSON.stringify(users));

users.length = "1";
console.table(users);
