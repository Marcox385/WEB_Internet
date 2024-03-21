/* Destructuring de arreglos */

let arrNames = ['Jorge', 'Barbosa']
let [nombre, apellido] = arrNames;
console.log(nombre); // Jorge
console.log(apellido); // Barbosa

let [val1, val2] = "Hola,mundo,cruel".split(',');
console.log(val1); // ?
console.log(val2); // ?

let [,,tercero] = [1, 2, 1000, -99_000];
console.log(tercero); // ?
