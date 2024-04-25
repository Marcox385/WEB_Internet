/* Repaso de Async/Await */

// GET simple
async function leerDatosDeJSON(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

const urlJSON = 'https://jsonplaceholder.typicode.com/users';
leerDatosDeJSON(urlJSON)
    .then(json => console.log(json))
    .catch(err => console.log(err));
