/* Ejercicio 2 - Uso de AJAX */
const jsonURL = 'https://jsonplaceholder.typicode.com/users';
const failStr = '<strong>No fue posible obtener los datos</string>';
const template = (obj) => {
    return `<p>#${obj.id} - ${obj.name} (${obj.username}) - ${obj.email} - 
    ${obj.address.suite}, ${obj.address.street}, ${obj.address.city} - 
    ${obj.phone}</p>`;
};

// Todos los usuarios
function getUsers() {
    usersContainer.innerHTML = '';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', jsonURL);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status != 200) {
            usersContainer.innerHTML = failStr;
            return;
        }

        let users = JSON.parse(xhr.response), holder = [];
        for (let user of users) {
            holder.push(template(user));
        }

        usersContainer.innerHTML = holder.join('\n');
    };
}

// Usuario por ID
function getUser() {
    userRes.innerHTML = '';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${jsonURL}/${userID.value}`);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status != 200) {
            userRes.innerHTML = failStr;
            return;
        }

        let res = JSON.parse(xhr.response);
        userRes.innerHTML = template(res);
    };
}
