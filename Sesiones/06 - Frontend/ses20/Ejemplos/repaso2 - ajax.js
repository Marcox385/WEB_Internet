/* Repaso de AJAX */

let urlJSON = 'https://url.de.servicio.valida/usuarios';

function guardarEnJSON(datos) {
    // 1. Crear objeto de tipo XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Configurar método (PUT = Actualizar)
    xhr.open('PUT', urlJSON);

    // 3. Indicar tipo de datos (JSON)
    xhr.setRequestHeader('Content-Type', 'application/json');

    // 4. Enviar solicitud a la red
    xhr.send([JSON.stringify(datos)]);

    // 5. Definir comportamiento de recepción de respuesta
    xhr.onload = () => {
        if (xhr.status != 200) { // Fallo de solicitud
            console.log('Ocurrió un error...');
            console.log(`${xhr.status}: ${xhr.statusText}`);
        } else { // Solicitud exitosa
            console.log(xhr.responseText);
        }
    };
}

const datos = {};

guardarEnJSON(datos);
