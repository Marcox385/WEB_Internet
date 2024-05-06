/* Manejo de almacenamiento local */

function generateRow(key, val) {
    return `
    <tr>
        <td>${key}</td>
        <td>${val}</td>
    </tr>
    `;
}

function setVariable() {
    let name = document.getElementById('nameVar').value;
    let val = document.getElementById('varValue').value;
    sessionStorage.setItem(name, val);

    let table = document.getElementById('variables');
    table.tBodies[0].insertAdjacentHTML('beforeend', generateRow(name, val));
}

setTimeout(() => {
    let table = document.getElementById('variables');
    
    for (let variable of Object.getOwnPropertyNames(sessionStorage)) {
        table.tBodies[0].insertAdjacentHTML('beforeend',
            generateRow(variable, sessionStorage[variable]));
    }
});
