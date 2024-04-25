/* Completa las funciones de este archivo */

let users;

function displayUsers() {
    // Obtiene usuarios desde el servidor y los muestra
    loadUsers(usersUrl).then(json => {
        users = json.map(User.generateUser);
        usersToHTML(users);
    }).catch(err => console.log(err));
}

let ximenaUser = new User("Ximena", "Ruis", "ximena.ruiz@xm.mx", "BestPassword2", "1997-08-08", "M");

function addUser(user) {
    // Almacena el usuario dado en el servidor y actualiza la
    // vista de usuarios previa
    storeUser(usersUrl, user,
        response => {
            console.log(`Usuario ${user.firstName} creado (${response})`);
            users.push(user);
            usersToHTML(users);
        },
        err => {
            console.log(`Error al crear usuario\n${err.status}: ${err.response}`);
        }
    );
}

displayUsers();
