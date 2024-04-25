/* Completa las funciones de este archivo */
// Nota: Si usas un puerto distinto a 3000, actualizalo aquí también

let userContainer = document.getElementById('userList');
const usersUrl = 'http://localhost:3000/api/users/';

function userToHTML(user) {
    return `
    <div class="media col-12 mt-2">
        <div class="media-left align-self-center mr-3">
            <img src="${user.image}">
        </div>
        <div class="media-body">
            <h4>${user.firstName} ${user.lastName}</h4>
            <p>Correo: ${user.email}</p>
            <p>Fecha de nacimiento: ${user.date}</p>
            <p>Sexo: ${user.sex}</p>
        </div>
        <div class="media-right align-self-center">
            <div class="row">
                <a href="#" class="btn btn-primary"><i class="fas fa-search"></i></a>
            </div>
            <div class="row">
                <a onclick="preloadEditModal('${user.email}')" href="#" class="btn btn-primary mt-2" data-toggle="modal" data-target="#editModal"><i class="fas fa-pencil-alt"></i></a>
            </div>
            <div class="row">
                <a onclick="preloadDeleteModal('${user.email}')" href="#" class="btn btn-primary mt-2" data-toggle="modal" data-target="#deleteModal"><i class="fas fa-trash-alt"></i></i></a>
            </div>
        </div>
    </div>
    `
}

function usersToHTML(users) {
    userContainer.innerHTML = users.map(userToHTML).join("\n");
}

async function preloadEditModal(email) {
    // Carga el usuario asociado al email actual y precargarlo en #emailEditModal
}

function preloadDeleteModal(email) {
    // Precarga el usuario asociado al email actual en #emailDeleteModal
}

function editUser() {
    // Obtiene la nueva información del usuario y actualiza en el servidor
}

function removeUser() {
    // Obtiene el email del modal de eliminación de usuario
    // y lo elimina del servidor
}