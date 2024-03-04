/* Arrow functions */

// Correcto
let artista3 = {
    nombre: 'Peso Lápiz',
    mostrarNombre() {
        let mostrar = () => console.log(this.nombre);
        mostrar();
    }
};

artista3.mostrarNombre(); // ?

// Incorrecto
let artista4 = {
    nombre: 'Peso Plumón',
    mostrarNombre() {
        let mostrar = function () {
            console.log(this.nombre);
        };
        mostrar();
    }
}

artista4.mostrarNombre(); // ?

// Argumentos
function crearArtista(nombre, genero) {
    console.log(arguments);
}
crearArtista('Frank Ocean', 'Dance');

function conFlecha(prueba) {
    let crearOtroArtista = (nombre, genero) => {
        console.log(arguments);
    };
    crearOtroArtista('(José)²', 'Regional');
}
conFlecha('prueba');
