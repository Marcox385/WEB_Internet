/* Getters y Setters */

let alumno = {
    nombre: 'Pedro Genérico',
    calificacion: 5.9,

    get reporte() {
        return `${this.nombre} -> ${this.calificacion >= 6 ? "a" : "re"}probado`;
    },

    set reporte(valores) {
        let [nombre, calificacion] = valores.split(" ");
        this.nombre = nombre;
        this.calificacion = Number(calificacion);
    }
};

console.log(alumno.reporte); // Uso de getter -> ?
alumno.reporte = 'Marco 8.35';
console.log(alumno.reporte); // ?

// Dentro de una clase
class Alumno {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(val) {
        this._nombre = val
    }
}
