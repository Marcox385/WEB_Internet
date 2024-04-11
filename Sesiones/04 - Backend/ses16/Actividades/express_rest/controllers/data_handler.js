/* Manejo de datos de la API */
const fs = require('fs');
const path = require('path');
const User = require('./users');

// Leer el contenido de users.json
// Parsear y convertir a User el contenido de users.json
let users = []; // No se necesita
let users_file = path.join(__dirname, '..', 'data', 'users.json');

function getUsers() {
    return new Promise(resolve => {
        fs.readFile(users_file,
        (err, data) => {
            if (err) {
                resolve(-1);
                return;
            }

            resolve(JSON.parse(data));
        });
    });
}

function getUserByEmail(email) {
    return new Promise(resolve => {
        fs.readFile(users_file,
        (err, data) => {
            if (err) {
                resolve(-1);
                return;
            }

            let users = JSON.parse(data);
            resolve(users.find(user => user._email == email));
        }
        );
    });
}

// Duplica usuarios ¿Cómo se resolvería?
function createUser(user) {
    let users = [];

    return getUsers().then(response => {
        users = response;

        if (isUserValid(user)) {
            const newUser = User.generateUser(user);
    
            users.push(newUser);
            fs.writeFileSync(users_file, JSON.stringify(users));
            return {nombre: newUser.nombre};
        }
    
        return;
    });
}

function updateUser(email, updatedUser) {
    let users = [];

    return getUsers().then(response => {
        users = response;
        let idx = users.findIndex(user => user._email == email);

        if (idx != -1) {
            Object.assign(users[idx], updatedUser);
            let target = users[idx];
            fs.writeFileSync(users_file, JSON.stringify(users));

            return {nombre: target._nombre};
        }

        return;
    });  
}

function deleteUser(email) {
    let users = [];

    return getUsers().then(response => {
        users = response;
        let idx = users.findIndex(user => user._email == email);

        if (idx != -1) {
            let target = users[idx];
            users.splice(idx, 1);
            fs.writeFileSync(users_file, JSON.stringify(users));

            return {nombre: target._nombre};
        }

        return;
    });  
}

function isUserValid(nombre, apellidos, email) {
    if (users.find(user => user.nombre == nombre && user.apellidos == apellidos)) return false;
    if (users.find(user => user.email == email)) return false;
    return true;
}

module.exports = {
    getUsers, getUserByEmail, createUser,
    updateUser, deleteUser
}
