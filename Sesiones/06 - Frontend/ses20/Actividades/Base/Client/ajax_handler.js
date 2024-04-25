/* Completa las funciones de este archivo */

async function loadUsers(url) {
    // fetch desde localhost:3000/api/users
}

function storeUser(url, user, onSuccess, onError) {
    // POST XHR hacía localhost:3000/api/users/{email} con cuerpo 'user'
}

function putUser(url, user, onSuccess, onError) {
    // PUT XHR hacía localhost:3000/api/users/{email} con cuerpo 'user'
}

function deleteUser(url, onSuccess, onError) {
    // DELETE XHR de localhost:3000/api/users/{email}
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}