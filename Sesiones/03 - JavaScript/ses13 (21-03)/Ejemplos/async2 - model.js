/* Modelo asíncrono de JS */

console.log('Iniciando main()...');

function mostrarTexto(input) {
    setTimeout(() => console.log(input), 3000);
}

mostrarTexto("Hola mundo");
console.log("...Terminando main()");
