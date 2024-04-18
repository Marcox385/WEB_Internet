/* Ejercicio 1 - Operaciones */

// Obtener lista desordenada
let ul = document.body.getElementsByTagName('ul')[0];

// Crear dos párrafos
let p3 = document.createElement('p');
p3.innerText = 'Git';
let p4 = document.createElement('p');
p4.innerText = 'MongoDB';

// Insertar primer párrafo antes de la lista
ul.before(p3);

// Insertar segundo párrafo después de la lista
ul.after(p4);

// Crear tres elementos li
let liElems = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li')
];

// Insertar el primer elemento al inicio de la lista
ul.prepend(liElems[0]);

// Insertar entre los dos elementos originales
ul.insertBefore(liElems[1], ul.lastElementChild);

// Insertar al final de la lista
ul.append(liElems[2]);


/* Ejercicio 2 - Elementos HTML */

// Creación del elemento
let html = "<mark>Importante</mark>";

// Insertar al inicio de la lista
ul.insertAdjacentHTML('beforebegin', html);
