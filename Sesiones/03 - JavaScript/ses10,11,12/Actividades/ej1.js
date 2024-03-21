/* Ejercicio 1 - Creación de objetos */

// Creación de objeto
let user0 = {
    uid: 1,
    nombre: 'Marco',
    apellidos: [
        'Cordero', 'Hernández'
    ],
    email: 'marco.cordero@universidad-une.com',
    password: 'c0ntr53n14_53gur4',
    fecha: '13-12-00',
    sexo: 'M',
    imagen: 'https://randomuser.me/api/portraits/men/0.jpg'
};

// Función generadora
function newUser(uid, nombre, apellidos, email,
    password, fecha, sexo, imagen) {
        return {
            uid, nombre, apellidos, email,
            password, fecha, sexo, imagen
        };
}

let user2 = newUser(2, 'Ricardo', ['O', 'Farrill'],
    'richie@sanatorio.gob', 'c1ud4d_4n0', '01-08-90',
    'M', 'https://randomuser.me/api/portraits/men/3.jpg');

// Clase User
class User {
    #uid;
    #password;

    constructor(uid, nombre, apellidos, email,
        password, fecha, sexo, imagen) {
            this.#uid = uid;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.email = email;
            this.#password = password;
            this.fecha = fecha;
            this.sexo = sexo;
            this.imagen = imagen;
    }
}

let user3 = new User(3, 'KanYe', ['West'],
    'god@kan.ye.be', 'n0rth_s41nt_ch1c4g0_ps4lm',
    '08-06-77', 'M', 'https://randomuser.me/api/portraits/men/24.jpg');

console.log('Impresión de propiedades en usuario 3');
for (let key in user3) {
    console.log(`\tPropiedad (${key}) = ${user3[key]}`);
}

// Revisión de propiedades
function hasProperty(obj, prop) {
    return prop in obj ?
        obj[prop] :
        `El objeto no tiene la propiedad "${prop}"`;
}

console.log(hasProperty(user3, 'nombre'));
console.log(hasProperty(user3, 'username'));
