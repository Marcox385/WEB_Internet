/* Ejercicio 2 - Eventos de tabla */

let btn = document.getElementById('agregar');
let tabla = document.getElementById('mainTable');
let chbx = document.getElementById('lock');

function generateRow(num, name) {
    return `
    <tr>
        <td scope="row">${num}</td>
        <td>${name}</td>
    </tr>`;
}

btn.addEventListener('click', (event) => {
    const num = document.getElementById('num').value;
    const name = document.getElementById('nombre').value;

    tabla.tBodies[0].insertAdjacentHTML('beforeend', generateRow(num, name));
});

chbx.addEventListener('change', (event) => {
    let num = document.getElementById('num');
    num.disabled = chbx.checked;
})
