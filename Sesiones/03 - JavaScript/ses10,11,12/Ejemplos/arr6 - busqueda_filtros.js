/* Métodos de búsqueda y filtro */

/* Métodos resumidos */
let array = [1, 2, 3, 2, 1, 5];

// Index of
// Sintaxis -> arr.indexOf(item, start)
console.log(array.indexOf(2, 0)); // 1
console.log(array.indexOf(1, 1)); // ?

// Last Index Of
// Sintaxis -> arr.lastIndexOf(item, start)
console.log(array.lastIndexOf(1)); //4

// Includes
// Sintaxis -> arr.includes(item, from)
console.log(array.includes(4, 0)); // false
console.log(array.includes(3, 0)); // true

/* Métodos avanzados */
let users1 = [
    {id: 1, nombre: 'Jesús'}, {id: 2, nombre: 'María'},
    {id: 3, nombre: 'Jaime'}
];

// Find
// Sintaxis -> arr.find(function)
let mUser = users.find(item => item.nombre.startsWith('M'));
console.log(mUser); // ?
console.log(users.find(user => user.id == 4)); // ?

// Find Index
// Sintaxis -> arr.findIndex(function)
let nonUser = users.findIndex(u => u.id == 32);
console.log(nonUser); // -1

// Filter
// Sintaxis -> arr.filter(function)
let jUsers = users.filter(usrs => usrs.nombre.startsWith('J'));
console.log(jUsers, jUsers.length); // ?
