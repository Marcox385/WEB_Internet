/* Uso de promesas */

// Se usan promesas (promises) para representar objetos que
// podrían estar disponibles de inmediato, en el futuro o ahora

// Instanciación
let p = new Promise(/* Ejecutor */ function(resolve, reject) {});

// Una promesa se cumple (resolve(value))
// o se rechaza (reject(error))
Promise.then(cbExito, cbError);

// Una promesa necesita ser resuelta
Promise.resolve();

// Para esperar la resolución de múltiples promesas, se usa...
Promise.all([pr1, pr2, pr3]).then();

// Ejemplos reales
let promise = new Promise(function (resolve, reject) {
    //  Después de 1 segundo, indicar estatus de la promesa
    setTimeout(() => {
        console.log('Procesando la promesa...');
        if (Math.random() < 0.5) {
            resolve("Promesa correcta");
        } else {
            reject(new Error("Promesa errónea"))
        }
    }, 1000);
});

promise.then(function success(result) {
    console.log(result);
}, function failure(error) {
    console.log('Promesa completada con error ->', error);
});
