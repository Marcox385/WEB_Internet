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
    let user = await fetch(usersUrl + email);

    if (user.status == 200) {
        user = User.generateUser(await user.json());

        emailEditModal.value = user.email;
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        userDate.value = user.date;
        userUrl.value = user.image;

        if (user.sex == 'H') {
            checboxMale.setAttribute('checked', null);
            checboxFemale.removeAttribute('checked');
        } else {
            checboxFemale.setAttribute('checked', null);
            checboxMale.removeAttribute('checked');
        }
    }
}

function preloadDeleteModal(email) {
    // Precarga el usuario asociado al email actual en #emailDeleteModal
    emailDeleteModal.value = email;
}

function editUser() {
    // Obtiene la nueva información del usuario y actualiza en el servidor
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: userDate.value,
        sex: document.querySelector('#editModal input[checked]').value,
        image: userUrl.value
    }
    
    putUser(usersUrl + emailEditModal.value, user,
        response => {
            console.log(`Usuario ${user.firstName} actualizado (${response})`);
            displayUsers();
        },
        err => {
            console.log(`Error al actualizar usuario\n${err.status}: ${err.response}`);
        }
    );
}

function removeUser() {
    // Obtiene el email del modal de eliminación de usuario
    // y lo elimina del servidor
    const email = emailDeleteModal.value;

    deleteUser(usersUrl + email,
        response => {
            console.log(`Usuario ${email} eliminado (${response})`);
            displayUsers();
        },
        err => {
            console.log(`Error al eliminar usuario\n${err.status}: ${err.response}`);
        }
    );
}
