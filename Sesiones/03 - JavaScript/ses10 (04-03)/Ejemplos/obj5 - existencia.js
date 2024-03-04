/* Existencia de propiedades en un objeto */

class Auto {
    #año;
    constructor(color, año) {
        this.color = color;
        this.#año = año;
    }
};

let auto = new Auto('azul', 2024);

// Revisión de propiedades
if (auto.asientos === undefined) {
    console.log('Objeto auto no tiene esta propiedad');
}

if (!('asientos' in auto)) {
    console.log('Objeto auto no tiene esta propiedad');
}

// Recorrido del objeto
for (let key in auto) {
    console.log(`${key}: ${auto[key]}`);
} // ¿Qué imprimirá?

