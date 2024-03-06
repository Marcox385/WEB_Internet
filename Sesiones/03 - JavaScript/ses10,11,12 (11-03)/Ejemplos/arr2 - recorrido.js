/* Recorrido de arreglos */

let arr1 = [1, 2, 5, 20, -99, 2000];

// Con for tradicional
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Con for-each
for (let i of arr1) {
    console.log(i);
}
