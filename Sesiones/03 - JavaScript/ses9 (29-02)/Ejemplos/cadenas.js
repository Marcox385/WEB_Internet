/* Cadenas */

let str = 'Hola mundo ';
console.log(str.length); // Longitud = 11
console.log(str[0]); // H
console.log(str.charAt(4)); // ' '
console.log(str[12]); // undefined
console.log(str.charAt(12)); // ''
console.log(str[-1]); // ?

for (let c of str)
    console.log(c);

str[0] = 'C'; // ?
console.log(str.toUpperCase()); // HOLA MUNDO 
console.log(str.toLowerCase()); // hola mundo 
console.log(str.trim()); // Hola mundo\0
