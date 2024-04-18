/* Ejercicio 1 - Event listeners */

// Funciones previas
inc.onclick = () => {
    let val = document.getElementById('counter');
    val.innerText = parseInt(val.innerText) + 1;
}

dec.onclick = () => {
    let val = document.getElementById('counter');
    let holder = parseInt(val.innerText);
    val.innerText = holder - (holder ? 1 : 0);
}

// Listeners
function incCounter() {
    let counter = document.getElementById('clickCounter');
    counter.innerText = parseInt(counter.innerText) + 1;
}

inc.addEventListener('click', incCounter);
dec.addEventListener('click', incCounter);
