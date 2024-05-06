/* Prototipos */

// Prototipo (Clase padre)
let Persona = {
    "Nombre": null,
    "Apellido": null,
    "Caminar": function () {
        console.log('La persona está caminando');
    }
};

/* function Estudiante() {}
Estudiante.prototype = Persona;

let estudiante = new Estudiante();

estudiante.Caminar(); */

// Clase extendida
let Estudiante = {
    "Carrera": null,
    "HacerTarea": function () {
        console.log("El estudiante está haciendo tarea");
    }
};

// Asignación de prototipo
Estudiante.__proto__ = Persona;
Estudiante.Caminar();
