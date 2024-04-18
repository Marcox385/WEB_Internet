/* Ejercicio 4 - Event handlers */

inc.onclick = () => {
    let val = document.getElementById('counter');
    val.innerText = parseInt(val.innerText) + 1;
}

dec.onclick = () => {
    let val = document.getElementById('counter');
    let holder = parseInt(val.innerText);
    val.innerText = holder - (holder ? 1 : 0);
}
