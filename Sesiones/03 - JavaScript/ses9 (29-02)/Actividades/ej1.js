/* Ejercicio 1 - Creación de funciones */

// Método 1
function fnAprobado(nombre) {
    console.log('Alumn@ ' + nombre + ' aprobado');
}

function fnReprobado(nombre) {
    console.log('Alumn@ ' + nombre + ' reprobado');
}

function generarReporte(nombre, calificacion) {
    if (calificacion < 60 && calificacion >= 0)
        fnReprobado(nombre);
    else if (100 <= calificacion && calificacion >= 60)
        fnAprobado(nombre);
    else console.log('Calificación inválida');
}

generarReporte('Ricardo', 85);

// Método 2
let fnAprobado = function aprobado(nombre) {
    console.log('Alumn@ ' + nombre + ' aprobado');
};

let fnReprobado = function reprobado(nombre) {
    console.log('Alumn@ ' + nombre + ' reprobado');
};

let generarReporte = function (nombre, calificacion) {
    if (calificacion < 60 && calificacion >= 0)
        fnReprobado(nombre);
    else if (100 <= calificacion && calificacion >= 60)
        fnAprobado(nombre);
    else console.log('Calificación inválida');
};

generarReporte('Hernández', 43);

// Método 3
let generarReporte = function (fnAprobado, fnReprobado, nombre, calificacion) {
    if (calificacion < 60 && calificacion >= 0)
        fnReprobado(nombre);
    else if (100 <= calificacion && calificacion >= 60)
        fnAprobado(nombre);
    else console.log('Calificación inválida');
};

generarReporte(
    function (nombre) {
        console.log('Alumn@ ' + nombre + ' aprobado');
    },
    function (nombre) {
        console.log('Alumn@ ' + nombre + ' reprobado');
    },
    'Díaz', 100
);
