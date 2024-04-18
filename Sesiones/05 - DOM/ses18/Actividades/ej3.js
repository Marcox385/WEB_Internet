/* Ejercicio 3 - Operaciones adicionales */

// Lista de elementos
let ul = document.createElement('ul');

// Llenar la lista
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.innerText = `Elemento ${i + 1}`;
    ul.append(li);
}

// Agregar ids
ul.setAttribute('id', 'identificador');
ul.firstElementChild.setAttribute('id', 'idLI');

// Clonar lista de elementos
let nLista = ul.cloneNode(true);

// Elementos con id
let nListaID = Array.from(nLista.children).filter(
    elem => elem.hasAttribute('id')
);

// Quitar ids
nListaID.forEach(n => n.removeAttribute('id'));

// Agregar ambas listas
document.body.append(ul);
document.body.append(nLista);

// Eliminar segundo elemento de la primera lista
ul.childNodes.item(1).remove();
