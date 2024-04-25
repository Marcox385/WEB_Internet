// CRUD de los datos
const fs = require('fs');
const User = require('./user');

let content = fs.readFileSync('./data/users.json');
let users = JSON.parse(content).map(User.generateUser);
// fs.writeFileSync('./data/users.json', JSON.stringify(users));

function getUsers() {
    content = fs.readFileSync('./data/users.json');
    users = JSON.parse(content).map(User.generateUser);
    return users;
}

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function createUser(user) {
    user = User.generateUser(user);
    if (isUserValid(user.firstName, user.lastName, user.email)) {
        users.push(user);
        fs.writeFileSync('./data/users.json', JSON.stringify(users));

        users = JSON.parse(fs.readFileSync('./data/users.json')).map(User.generateUser);
        return user;
    }
}

function updateUser(email, updatedUser) {
    let index = users.findIndex(user => user.email === email);
    if (index == -1) return;

    for (let property in updatedUser) {
        if (['firstName', 'lastName', 'password', 'date', 'sex', 'image'].includes(property)) continue;
        delete updatedUser[property];
    }
    
    Object.assign(users[index], updatedUser);
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    return users[index];
}

function deleteUser(email) {    
    let index = users.findIndex(user => user.email === email);
    if (index == -1) return;

    let user = users.splice(index, 1)[0];
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    return user;
}

function isUserValid(firstName, lastName, email) {
    if (users.find(user => user.firstName == firstName && user.lastName == lastName)) return false;
    if (users.find(user => user.email == email)) return false;
    return true;
}

module.exports = {
    getUsers, getUserByEmail, createUser,
    updateUser, deleteUser
};
