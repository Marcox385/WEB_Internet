/* Clases y constructores */

// Método primitivo
function Auto(color, año) {
    this.color = color
    this._año = año;
}

let jetta = new Auto('plata', 2006);

// Uso de clases
class Auto {
    #año;
    constructor(color, año) {
        this.color = color;
        this.#año = año;
    }
};
let vento = new Auto('cafe', 2015);
