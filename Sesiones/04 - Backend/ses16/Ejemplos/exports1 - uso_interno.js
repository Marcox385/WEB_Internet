/* Uso de exports (exportar desde un archivo) */

function sumar(a,b) {
    return a + b;
}

class AlgunaClase {
    ...
}

// Ejemplo 1 - Todo el objeto
module.exports = AlgunaClase;

// Ejemplo 2 - Algunas propiedades
exports.sumar = sumar;
exports.clase = AlgunaClase;

// Ejemplo 3 - Uso de objetos
module.exports = {
    sumFunct: sumar,
    clase: AlgunaClase
};
