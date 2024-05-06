/* Clases a partir de prototipos */

// Clase padre
function Persona() {
    this.Nombre = null;
    this.Apellido = null;
}

// Método a heredar
Persona.prototype.Caminar = function () {
    console.log('La persona está caminando');
}

// Clase hijo
function Estudiante() {
    this.Carrera = null;
}

// Método especializado
Estudiante.prototype.HacerTarea = function () {
    console.log('El estudiante está haciendo tarea');
}

// Herencia
Estudiante.prototype.__proto__ = Persona.prototype;

// Instanciar clase
let estudiante = new Estudiante();
estudiante.Caminar();
estudiante.HacerTarea();
