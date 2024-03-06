/* Fundamentos adicionales de arreglos */

/* Modificación de longitud */
let arr1 = [3, 4, 5, 1, 2, 10];
console.log(arr1.length); // ?
arr1.length = 3;
console.log(arr1); // ?
arr1.length = 6;
console.log(arr1[4]); // ?

// Limpiar el arreglo
arr1.length = 0;


/* Definición de matrices */
let mat1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(mat1[2][0]); // ?


/* Concatenación */
console.log([] + 2); // ?
console.log([2] + 2); // ?
console.log([2, 3] + 2); // ?
