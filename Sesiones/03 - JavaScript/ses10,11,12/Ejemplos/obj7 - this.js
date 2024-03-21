/* Uso de this */

let artista = {
    nombre: 'MF DOOM',
    edad: 49,

    // Equivalente a mostrarNombre: function () {...}
    mostrarNombre() {
        console.log(this.nombre);
        // Equivalente a...
        console.log(artista.nombre);
    }
};

// Muestra del nombre
artista.mostrarNombre(); // ?

// Sobrescritura 
let otroArtista = artista;
artista = null;
otroArtista.mostrarNombre(); // ?

// Asignación de métodos
let artista2 = { nombre: 'Lng/SHT' };
function mostrarNombre() {
    console.log(this);
}
artista2.otraFuncion = mostrarNombre;
artista2.otraFuncion(); // ?
artista2['otraFuncion'](); // ?
mostrarNombre(); // ?
