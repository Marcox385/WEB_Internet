/* Base para manejo del DOM */

let userContainer = document.getElementById('userList');

function userToHTML(user) { // Plantilla de HTML
    return `
    <div class="border row col-12 mt-2 p-3 align-items-center">
        <div class="col">
            <img src="${user.image}">
        </div>
        <div class="col-10">
            <h4>${user.firstName} ${user.lastName}</h4>
            <p>Correo: ${user.email}</p>
            <p>Fecha de nacimiento: ${user.date}</p>
            <p>Sexo: ${user.sex}</p>
        </div>
        <div class="col">
            <div class="row">
                <a href="#" class="btn btn-primary"><i class="fas fa-search"></i></a>
            </div>
            <div class="row">
                <a href="#" class="btn btn-primary mt-2"><i class="fas fa-pencil-alt"></i></a>
            </div>
            <div class="row">
                <a href="#" class="btn btn-primary mt-2"><i class="fas fa-trash-alt"></i></i></a>
            </div>
        </div>
    </div>
    `
}

function userListToHTML(userList) { // Convertir varios usuarios a HTML
    userContainer.innerHTML = userList.map(userToHTML).join("\n");
}

const users = [];

users.push(generateUser('Juan', 'Perez', 'juan.perez@correo.mx', 'ImpossibleToHack', '1980-10-10', 'H'));
users.push(generateUser('Diego', 'Lopez', 'diego.lopez@correo.mx', 'BestPassword', '1993-02-06', 'H'));
users.push(generateUser('Diana', 'Gomez', 'diana.gomez@correo.mx', 'pass1234', '1991-12-08', 'M'));
userListToHTML(users);

userContainer.querySelectorAll('img').forEach(img => img.className = 'rounded-circle');
