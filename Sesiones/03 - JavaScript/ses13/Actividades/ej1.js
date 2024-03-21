/* Ejercicio 1 - Impresiones asíncronas */

// Mostrar Hola's
for (let i = 0; i < 5; i++) {
    setTimeout(_ => console.log(`Hola${i}`), (i + 1)*1000);
}

// Mostrar Mundo's
for (let i = 0; i < 4; i++) {
    setTimeout(_ => console.log(`Mundo${i}`), 1000);
}

// Alternativa -> for (let s of [1, 2, 3, 4, ...])
