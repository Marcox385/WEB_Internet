/* Funciones */

// Declaración de una función
function saludarA(nombre) {
    console.log(`Hola ${nombre}`);
}

// Invocación de una función
saludarA('Chuyita');

// Función con parámetros predefinidos
function pre(param1 = true, param2 = false) {
    if (param1)
        console.log('Parámetro 1 definido');

    if (param2)
        console.log('Párametro 2 definido');
}
pre(false, true);

// ¿Qué regresaría?
let v3 = 3;

function scopout(v1, v2) {
    return v1 + v2 + v3;
}

// Expresiones
let mensaje = function mostrarMensaje(texto) {
    console.log(texto);
};
mensaje('Hola');
console.log(mensaje); // Muestra el código ¿?
console.log(typeof mensaje); // function

// Callbacks
function crearNuevoUsuario(id, usuario, guardarDatos) {
    if (id > 0 && id < 10 _000) {
        return guardarDatos(id, usuario);
    }

    console.log(`ID incorrecto (${id})`);
}
let base1 = function (id, usuario) {
    console.log(`Usuario ${usuario} guardado en base normal`);
};
let base2 = function (ID, username) {
    console.log(`User with ID ${ID} saved as ${username}`);
};

crearNuevoUsuario(1, 'master_chief', base1);
crearNuevoUsuario(100, 'mf_d00m', base2);

// Arrow functions
/*
    let func = (arg1, arg2, ..., argN) => expresion;

    --- EQUIVALE A ---

    let func = function(arg1, arg2, ..., argN) {
        return expresion;
    }
*/
let suma = (a, b) => a + b;
console.log(suma(20, 30)); // ?

// Si la función recibe un solo argumento, pueden omitirse los paréntesis
let doble = n => n * 2;
console.log(doble(210)); // ?

let saludar = () => console.log('Hola mundo');
saludar();

let concat = (a, b) => {
    let resultado = '';
    resultado += a + b;
    return resultado;
}
console.log(concat('Adiós', 'mundo')); // ?