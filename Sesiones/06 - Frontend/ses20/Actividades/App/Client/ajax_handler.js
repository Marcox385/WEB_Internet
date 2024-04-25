/* Completa las funciones de este archivo */

async function loadUsers(url) {
    // fetch desde localhost:3000/api/users
    let users = await fetch(url);

    if (users.status == 200) {
        let json = await users.json();
        return json;
    }

    throw new Error(`Unable to get users: ${users.status}`);
}

function storeUser(url, user, onSuccess, onError) {
    // POST XHR hacía localhost:3000/api/users/{email} con cuerpo 'user'
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status != 200)
            return onError({status: xhr.status, response: xhr.responseText});
        onSuccess(xhr.responseText);
    };
    xhr.send(JSON.stringify(user));
}

function putUser(url, user, onSuccess, onError) {
    // PUT XHR hacía localhost:3000/api/users/{email} con cuerpo 'user'
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status != 200)
            return onError({status: xhr.status, response: xhr.responseText});
        onSuccess(xhr.responseText);
    };
    xhr.send(JSON.stringify(user));
}

function deleteUser(url, onSuccess, onError) {
    // DELETE XHR de localhost:3000/api/users/{email}
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.onload = () => {
        if (xhr.status != 200)
            return onError({status: xhr.status, response: xhr.responseText});
        onSuccess(xhr.responseText);
    };

    xhr.send();
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}