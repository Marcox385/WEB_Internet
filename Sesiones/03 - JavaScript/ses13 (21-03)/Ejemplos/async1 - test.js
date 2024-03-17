/* ¿Qué imprimirá el siguiente código? */

console.log("inicio");
setTimeout(function() {console.log("A");}, 7000);
setTimeout(function() {console.log("B");}, 0);
setTimeout(function() {console.log("C");}, 2000);
setTimeout(function() {console.log("D");}, 1000);
console.log("fin");
