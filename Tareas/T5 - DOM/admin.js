/* Base de JavaScript */

let game = {
    rows: 0,
    cols: 0,
    title: "",
    topics: [], // arreglo de strings que tendrá los títulos de los temas
    questions: []
}

// Aquí obten el input de titulo
let title;

// Aquí busca y guarda el elemento del botón de Generar Tablero
let btnBoard

// Aquí busca y guarda el elemento del botón de Generar JSON
let btnJson;

// Aquí guarda la única tabla en el html (no tiene id)
let mainTable;

// Aquí guarda el botón de guardar de la ventana modal
let btnSave;

// Almacenará la celda actual (cuando den click en algún link a editar)
let cell;  // Esta variable se usará después en la función de requestData()


// Añade un handler a keyup para que cuando el título tenga texto se active el botón
// y si no tiene que se desactive (añade o quita la clase disabled)

// <<<


/**
 *  Aquí añadele al botón de btnBoard un handler del evento click a la función generateGameBoard
*/

// btnBoard.on

/** La función generar tablero:
 *  Guarda en el objeto game los valores de título, row y cols
 *  además muestra la tabla pero oculta los renglones y columnas no necesarios
 */
function generateGameBoard(event) {
    console.log('generateGameBoard');
    // Guarda en las variables title, rows, y cols los elementos correspondientes del html

    // let title = ;
    // let rows = ;
    // let cols = ;

    // Muestra la tabla (propiedad hidden)
    mainTable.removeAttribute('hidden');

    // Guarda el titulo en el objeto game

    // Guarda los valores  (si rows o cols es > 4 dejala en 4 si es menor a 2 dejala en 2)


    // Crea el arreglo de temas en el objeto game


    // Crea la matriz de preguntas en el objeto game


    // Oculta renglones y columnas innecesarios
    // tip: primero muestra todo (tr, td y th) puedes usar un forEach  (se puede en una línea de código)
    // Selecciona los reglones usando nth-of-type(n+ algo ) y oculta
    // Selecciona las columnas usando nth-of type(n+ algo ) para td y th



    // Activar botón de generateJson


    // Regresa falso o usa
    // event.preventDefault();
    // return false;
}

// Aquí asocia evento click a la función requestData(event)
// mainTable.on

// Completa la función requestData(event)
function requestData(event){
    // Filtrar, si no son tipo anchor Tag salirse de la función

    // Actualiza la variable cell (que sea una celda tipo td o th)
    // cell=;


    // Si están en un TH mostrar el modal solo la parte de la temática
    // Añade al valor el tema que se tiene guardado en el objeto

    // Si están en un TD mostrar el modal solo la parte de la pregunta
    // Muestra el Tema y el valor
    // Muestra el valor de la pregunta

}

// Aquí asocia al btnJson el handler al hacer click con la función generateJson
// btnJson.on


// Completa la función
function generateJson(event){
    // Que solo muestre lo necesario para ver el JSON en la ventana modal
    return false;
}

// Aquí asocia a btnSave
// btnSave.on

function saveData(event) {
    // Realiza las operaciones dependiendo en caso de pregunta o tema

}

// Para responder al click en los temas
// Elemento a con atributo data-darget dentro de un th
function clickOnTopic(event) {
    // event.target.innerText = 'Hola mundo';
    // event.preventDefault();
}
