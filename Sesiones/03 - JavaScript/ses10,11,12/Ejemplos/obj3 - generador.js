/* Flexibilidad y función generadora de objetos */

let exp = 'expediente';
let estudiante2 = {
    [exp]: 727272, // Equivalente a expediente: 727272
    nombre: 'Hassan', // Pueden haber comas al final
};
console.log(estudiante2.expediente); // 727272

// Uso de palabras reservadas dentro de objetos
let valido = {
    let: 'variable',
    for: 'ciclo',
    return: 'retorno de función'
};
console.log(valido.for); // ciclo

// Función generadora
function nuevoEstudiante(nombre, carrera) {
    return {
        nombre: nombre,
        carrera: carrera
    };
}

// ... Equivalente a 
function nuevoEstudiante(nombre, carrera) {
    return {
        nombre, carrera
    };
}
