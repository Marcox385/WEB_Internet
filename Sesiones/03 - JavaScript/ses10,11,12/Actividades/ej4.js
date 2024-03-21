/* Ejercicio 4 - Creación de usuarios */

let curr_uid = 0;

function addUser(users, nombre, apellidos, email,
    password, fecha, genero) {
    for (let user of users) {
        if (user.email == email) {
            console.log('El usuario ya existe');
            return;
        }

        if (user.nombre == nombre) {
            if (user.apellidos[0] == apellidos[0] &&
                user.apellidos[1] == apellidos[1]) {
                console.log('El usuario ya existe');
                return;
            }
        }
    }

    let img = `https://randomuser.me/api/portraits/${(genero == 'M') ? 'men' : 'women'}/${++curr_uid%100}.jpg`
    users.push({
        uid: curr_uid, nombre, apellidos, email,
        password, fecha, genero, imagen: img
    });
}

let usuarios = [];
addUser(usuarios, 'Marco', ['Cordero', 'Hernández'],
    'marco.cordero@universidad-une.com', 'password',
    '13-12-00', 'M');
addUser(usuarios, 'Ricardo', ['Fernández'],
    'ricardo.fdz@universidad-une.com', 'password',
    '13-12-00', 'M');
console.log(usuarios);

/* Ejercicio 5 - Actualización de usuarios */

function updateUser(users, id, new_mods) {
    // Faltan verificaciones de new_mods
    let target = users.findIndex(u => u.uid == id);

    if (target == -1) {
        console.log('Usuario no encontrado');
        return;
    }

    Object.assign(users[target], new_mods);
    console.log('Usuario actualizado exitósamente');
}

updateUser(usuarios, 1, {
    nombre: 'Marcos',
    apellidos: ['Delfín']
});
console.log(usuarios);

function deleteUser(users, id) {
    let target = users.findIndex(u => u.uid == id);

    if (target == -1) {
        console.log('Usuario no encontrado');
        return;
    }

    // delete users[target];
    users.splice(target, 1);
    console.log('Usuario eliminado exitósamente');
}

deleteUser(usuarios, 5);
deleteUser(usuarios, 2);
console.log(usuarios);
