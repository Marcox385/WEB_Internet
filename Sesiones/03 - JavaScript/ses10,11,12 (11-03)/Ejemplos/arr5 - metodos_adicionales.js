/* Métodos adicionales de arreglos */

// Delete
// Sintaxis -> delete arr[index]
let array1 = ['uno', 'dos', "tres"];
delete array1[1];
console.log(array1); // ?
console.log(array1.length); // ?

// Splice
// Sintaxis -> arr.splice(start_index[, deleteCount, e1, e2, ..., eN])
array1.splice(1, 1); // Desde index 1 eliminar 1 elemento
console.log(array1); // ['uno', 'tres']
array1.splice(2, 0, 'cuatro', 'cinco'); // En el índice 2 inserta 2 elementos
console.log(array1); // ['uno', 'tres', 'cuatro', 'cinco']
array1.splice(-1, 0, "v1", "v2"); // Inserta en la penúltima posición
console.log(array1); // ['uno', 'tres', 'cuatro', 'v1', 'v2', 'cinco']
console.log(array1.splice(2)); // Regresa ['cuatro', 'v1', 'v2', 'cinco']
console.log(array1); // ['uno', 'tres']

// Slice
// Sintaxis -> arr.slice(start, end)
let array2 = [1, 2, 3, 5, 8, 13, 21]
console.log(array2.slice(1, 5)); // [2, 3, 5, 8]
console.log(array2); // ?

// Concat
// Sintaxis -> arr.concat(arr1, arr2, ..., arrN)
let array3 = array2.concat(array2, array1);
console.log(array3);
/**
        [
        1,  2,  3,     5,
        8,  13, 21,    1,
        2,  3,  5,     8,
        13, 21, 'uno', 'tres'
        ]
 */

// forEach
// Sintaxis -> arr.forEach(function(item, index, array) {...})
array3.forEach(function(item, index, array) {
    console.log(item, index, array);
});

array3.forEach((item, index, array) => { // Función flecha
    console.log(item);
});

array3.forEach(item => console.log(item)); // Solo los elementos
