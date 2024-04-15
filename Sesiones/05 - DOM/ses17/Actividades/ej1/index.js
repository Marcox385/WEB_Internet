/* Ejercicio 1 */

let p1 = document.getElementById('p1'); // Redundante

// Todos los nodos en el último elemento
for (let node of document.body.childNodes) {
    if (node != p1)
        p1.innerText += node.textContent;

    console.log(node.nodeType);
    console.log(node);
}

// Todos los elementos (sin nodos) en el último elemento
for (let element of document.body.children) {
    if (element != p1)
        p1.innerText += element.innerText + '\n';

    if (element.tagName == 'H1')
        element.style.color = 'yellow';

    console.log(element)
}
