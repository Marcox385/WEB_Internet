/* Propiedades de objetos */

let estudiante = {
    nombre: 'Ricardo',
    carrera: 'ICOM',
    'apellido paterno': 'Hernández'
}

// Acceso a propiedades
console.log(estudiante.nombre); // Ricardo
console.log(estudiante['nombre']); // Ricardo
console.log(estudiante['apellido paterno']); // Hernández

// Seteo de nuevas propiedades
estudiante.promedio = 9.85;
console.log(estudiante.promedio); // 9.85

// Eliminación de propiedades
delete estudiante.carrera;
console.log(estudiante.carrera); // ¿Error?

// Acceso dinámico al objeto
let ap = 'apellido paterno';
estudiante[ap] = 'Fernández';
console.log(estudiante[ap]); // Fernández
