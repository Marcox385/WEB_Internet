/* Clase auxiliar para manejo de usuarios */

/**
 * Datos de usuarios
 * Usuario 1:
 *      - Nombre: Juan
 *      - Apellido: Perez
 *      - Correo: juan.perez@correo.mx
 *      - Contraseña: ImpossibleToHack
 *      - Fecha: 1980-10-10
 *      - Sexo: H
 * 
 * Usuario 2:
 *      - Nombre: Diego
 *      - Apellido: Lopez
 *      - Correo: diego.lopez@correo.mx
 *      - Contraseña: BestPassword
 *      - Fecha: 1993-02-06
 *      - Sexo: H
 * 
 * Usuario 3:
 *      - Nombre: Diana
 *      - Apellido: Gomez
 *      - Correo: diana.gomez@correo.mx
 *      - Contraseña: pass1234
 *      - Fecha: 1991-12-08
 *      - Sexo: N
 */

class User {
    constructor(uid, firstName, lastName, email, password, date, sex, image) {
        this.uid = uid
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.date = date
        this.sex = sex
        this.image = image
    }

    get uid() {
        return this._uid;
    }
    set uid(val) {
        this._uid = val;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(val) {
        this._firstName = val;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(val) {
        this._lastName = val;
    }

    get email() {
        return this._email;
    }
    set email(val) {
        this._email = val;
    }

    get password() {
        return this._password;
    }
    set password(val) {
        this._password = val;
    }

    get date() {
        return this._date;
    }
    set date(val) {
        this._date = val;
    }

    get sex() {
        return this._sex;
    }
    set sex(val) {
        this._sex = val;
    }

    get image() {
        return this._image;
    }
    set image(val) {
        this._image = val;
    }
}

function generateUser(firstName, lastName, email, password, date, sex, image) {
    let uid = generateUid(10);
    if (!image) {
        image = generateImgUrl(uid, sex);
    }
    return new User(uid, firstName, lastName, email, password, date, sex, image);
}

function generateUid(len) {
    let uid = '';
    for (let i = 0; i < len; i++) {
        uid += Math.trunc(Math.random() * 10);
    }
    return uid;
}

function generateImgUrl(uid, sex) {
    if (sex == 'H') {
        return 'https://randomuser.me/api/portraits/men/' + (uid % 100) + '.jpg';
    } else {
        return 'https://randomuser.me/api/portraits/women/' + (uid % 100) + '.jpg';
    }
}

function addUser(firstName, lastName, email, password, date, sex, image) {
    if (isUserValid(firstName, lastName, email)) {
        let newUser = generateUser(firstName, lastName, email, password, date, sex, image);
        users.push(newUser);
    }
}

function isUserValid(firstName, lastName, email) {
    if (users.find(user => user.firstName == firstName && user.lastName == lastName)) return false;
    if (users.find(user => user.email == email)) return false;
    return true;
}

function updateUser(uid, userInfo) {
    if (!users.find(user => user.uid == uid)) {
        return;
    }
    for (let property in userInfo) {
        if (['firstName', 'lastName', 'password', 'date', 'sex', 'image'].includes(property)) continue;
        delete userInfo[property];
    }
    let index = users.findIndex(user => user.uid == uid);
    Object.assign(users[index], userInfo);
}

function deleteUser(uid) {
    if (!users.find(user => user.uid == uid)) {
        return;
    }
    let index = users.findIndex(user => user.uid == uid);
    users.splice(index, 1);
}

function sortUsers(users, cb) {
    return [...users].sort(cb);
}