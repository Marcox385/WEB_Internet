/* Ejemplo más complejo */

function salutare() {
    let greeting = "Hola mundo!";

    return function() {
        console.log(greeting);
    }
}

let greeting = 'Hello world!';
let greet = salutare();
greet();
