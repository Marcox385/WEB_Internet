/* Ejercicio 5 - Uso de arreglos */

// Crear y llenar usuarios
let usuarios = [];

for (let i = 0; i < 10; i++) {
    let gender = (parseInt(Math.random()*10) % 2) ? 'M' : 'F';
    let img = parseInt(Math.random()*100) - 1;

    usuarios.push({
        uid: i,
        nombre: `Nombre ${i}`,
        apellido: `Apellido ${i}`,
        email: `correo${i}@gmail.com`,
        password: ('' + parseInt(Math.random() * 1_000_000)).split('').map(
            c => String.fromCharCode(65 + parseInt(c))).join(''),
        fecha: new Date(), genero: gender,
        img: `https://randomuser.me/api/portraits/${(gender == 'M') ? 'men' : 'women'}/${img}.jpg`
    });
}

console.log(usuarios);

// Función para ordenar
function sortUsers(cb) {
    usuarios.sort(cb);
}

// Criterios de ordenamiento
function ordenApellido(u1, u2) {
    if (u1.apellido.toUpperCase() < u2.apellido.toUpperCase()) return -1;
    if (u1.apellido.toUpperCase() > u2.apellido.toUpperCase()) return 1;
    return 0;
}

function ordenCorreo(u1, u2) {
    if (u1.email.toUpperCase() < u2.email.toUpperCase()) return 1;
    if (u1.email.toUpperCase() > u2.apellido.toUpperCase()) return -1;
    return 0;
}

sortUsers(ordenApellido);
console.log('Primer ordenamiento\n', usuarios);
sortUsers(ordenCorreo);
console.log('\nSegundo ordenamiento\n', usuarios);

// Impresión de usuarios
usuarios.forEach(u => console.log(`${u.uid} - ${u.email}`));

// Impresión de una sola línea
sortUsers(ordenApellido);
console.log(usuarios.map(u => `${u.uid}->${u.nombre}`).join(', '));
