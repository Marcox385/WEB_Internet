/* Ejercicio 2 - Getters y Setters */

class User {
    #uid;
    #password;

    constructor(uid, nombre, apellidos, email,
        password, fecha, sexo, imagen) {
            this.uid = uid;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.email = email;
            this.#password = password;
            this.fecha = fecha;
            this.sexo = sexo;
            this.imagen = imagen;
    }

    /* Setters */
    set uid(val) { this.#uid = val; }
    set nombre(val) { this._nombre = val; }
    set apellidos(val) { this._apellidos = val; }
    set email(val) { this._email = val; }
    set password(val) { this.#password = val; }
    set fecha(val) { this._fecha = val; }
    set sexo(val) { this._sexo = val; }
    set imagen(val) { this._imagen = val; }

    /* Getters */
    get nombre() { return this._nombre; }
    get apellidos() { return this._apellidos.join(' '); }
    get email() { return this._email; }
    get fecha() { return this._fecha; }
    get sexo() { return this._sexo; }
    get imagen() { return this._imagen; }
}

let instancia = new User(
    1, 'Marco', ['Cordero', 'Hernández'], 'marco@correo.com',
    'contraseña', '13-12-00', 'M', 'url_provisional'
);

for (let key in instancia) {
    console.log(instancia[`${key.replace('_', '')}`]);
}
