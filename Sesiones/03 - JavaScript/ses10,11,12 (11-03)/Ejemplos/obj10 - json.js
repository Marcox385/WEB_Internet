/* JSON */

let persona = {
    nombre: 'Antonio',
    edad: 57,
    idiomas: {
        español: '100%',
        inglés: '43%',
        latin: '0%',
        italiano: '75%'
    },
    hobbies: [
        'fútbol americano', 'ajedrez', 'patear niños'
    ]
};

// Visualización del objeto nativo
console.log(persona);

// Manejo de JSON
let json = JSON.stringify(persona);

// Visualización del objeto en formato JSON
console.log(json);
console.log(typeof json); // ?

// Conversión de JSON a objeto nativo
let obj = JSON.parse(json);
console.log(obj.edad); // ?
console.log(typeof obj); // ?

// Soporte integrado y conversión en línea
let strJSON = '{"nombre":"Juanito","nacimiento":"2001-05-23T12:00:00.000Z"}';
let obj2 = JSON.parse(strJSON, function(k, v) {
    return (k == 'nacimiento') ? new Date(v) : v;
});
console.log(obj2.nacimiento.getFullYear()); // ?
