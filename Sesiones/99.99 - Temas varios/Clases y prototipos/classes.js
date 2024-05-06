/* Clases y prototipos */

/* Método 1 */
function Estudiante() {
    this.Carrera = null;
    this.HacerTarea = function () {
        console.log('El estudiante está haciendo tarea');
    };
}

let estudiante = new Estudiante();
estudiante.HacerTarea();

/* Método 2 */
function Estudiante() {
    Carrera = null;
    function HacerTarea() {
        console.log('El estudiante está haciendo tarea');
    }

    return {
        Carrera, HacerTarea
    };
}

/* let */ estudiante = Estudiante();
estudiante.HacerTarea();
