"use strict";

// Implementa la clase User
class User {
    constructor(nombre, apellidos, email, password, fecha, sexo, imagen) {
        this.uid = User.generateUid(10);
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.fecha = fecha;
        this.sexo = sexo;
        if (imagen == undefined) {
            this.imagen = User.generateImgUrl(this.uid, this.sexo);
        }
    }

    get uid() {
        return this._uid;
    }
    set uid(val) {
        this._uid = val;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(val) {
        this._nombre = val;
    }

    get apellidos() {
        return this._apellidos;
    }
    set apellidos(val) {
        this._apellidos = val;
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

    get fecha() {
        return this._fecha;
    }
    set fecha(val) {
        this._fecha = val;
    }

    get sexo() {
        return this._sexo;
    }
    set sexo(val) {
        this._sexo = val;
    }

    get imagen() {
        return this._imagen;
    }
    set imagen(val) {
        this._imagen = val;
    }

    static generateUser(user) {
        let nombre = user.nombre != undefined ? user.nombre : user._nombre;
        let apellidos = user.apellidos != undefined ? user.apellidos : user._apellidos;
        let email = user.email != undefined ? user.email : user._email;
        let password = user.password != undefined ? user.password : user._password;
        let fecha = user.fecha != undefined ? user.fecha : user._fecha;
        let sexo = user.sexo != undefined ? user.sexo : user._sexo;
        let imagen = user.imagen != undefined ? user.imagen : user._imagen;

        return new User(nombre, apellidos, email, password, fecha, sexo, imagen);
    }
    
    static generateUid(len) {
        let uid = '';
        for (let i = 0; i < len; i++) {
            uid += Math.trunc(Math.random() * 10);
        }
        return uid;
    }
    
    static generateImgUrl(uid, sexo) {
        if (sexo == 'H') {
            return 'https://randomuser.me/api/portraits/men/' + (uid % 100) + '.jpg';
        } else {
            return 'https://randomuser.me/api/portraits/women/' + (uid % 100) + '.jpg';
        }
    }
}

module.exports = User;