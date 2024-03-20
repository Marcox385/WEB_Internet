"use strict";

const fs = require('fs')
const User = require('./users')

// Leer el contenido de users.json
// Parsear y convertir a User el contenido de users.json
let users = [];

function getUsers() {
}

function getUserByEmail(email) {
}

function createUser(user) {
    if (isUserValid(user)) {
    }
}

function updateUser(email, updatedUser) {
}

function deleteUser(email) {    
}

function isUserValid(nombre, apellidos, email) {
    if (users.find(user => user.nombre == nombre && user.apellidos == apellidos)) return false;
    if (users.find(user => user.email == email)) return false;
    return true;
}

exports.getUsers = getUsers;
exports.getUserByEmail = getUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;