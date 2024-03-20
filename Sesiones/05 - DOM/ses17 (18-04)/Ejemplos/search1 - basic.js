/* Métodos de búsqueda de elementos */

// Búsqueda por ID
console.log(document.getElementById("miParrafo"));
console.log(miParrafo); // Equivalentes

// Búsqueda por tipo de elemento
console.log(document.getElementsByTagName('p'));

// Búsqueda por clase
console.log(document.getElementsByClassName('pinkText'));

// Búsqueda por nombres
console.log(document.getElementsByName('nombreInput'));

// Queries de CSS
console.log(document.querySelectorAll('div p > span'));
console.log(document.querySelector('span + strong'));
