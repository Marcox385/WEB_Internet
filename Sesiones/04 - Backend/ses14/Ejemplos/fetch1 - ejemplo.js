/* Uso de función fetch */

const urlJSON = 'https://jsonplaceholder.typicode.com/users';

// GET simple
async function leerDatosDeJSON() {
    let response = await fetch(urlJSON);

    if (response.status != 200) return [];

    let arreglo = await response.json();
    console.log(arreglo);
    return arreglo;
}

leerDatosDeJSON();

// POST
fetch(url, { // Reemplazar url por urlJSON para un ejemplo real
    method: 'POST',
    mode: 'cors',
    body: {"id": 9, "name": 'Ricardo'},
    // headers: {'Content-Type': 'application/json; charset=UTF-8'}
}).then(res => res.json())
.then(json => console.log(json));
