/* Promesas como retorno de funciones */

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(
            new Error("Script load error: " + src));
        
        document.head.append(script);
    });
}

let promise = loadScript('https://algunaLibreria.js');

promise.then(
    script => alert(`${script.src} cargado exitósamente`),
    error => alert(`Error -> ${error.message}`)
);

promise.then(script => alert('Algo extra por resolver...'));
