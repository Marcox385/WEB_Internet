/* Comparación y clonación */

class Auto {
    #año;
    constructor(color, año, km) {
        this.color = color;
        this.km = km;
        this.#año = año;
    }
};

// Copia por referencia
let auto1 = new Auto('negro', 2000, 42_000);
let auto2 = auto1;
auto2.km = 0;
console.log(auto1.km); // ?

// Alternativa (Object.assign(target, source1, source2, ...))
Object.assign(auto2, auto1);
auto2.km = 42_000;
console.log(auto2);
console.log(auto1.km); // ?

// Comparativas
if (auto1 == auto2) { /* ¿Entrará? */ }
if (auto1 === auto2) { /* ¿Entrará? */ }

let a = {}, b = {};
if (a == b) { /* ¿Entrará? */ }
if (a === b) { /* ¿Entrará? */ }
