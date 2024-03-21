/* Resolución de Callback Hell */

// Formato con promesas
fase1().then(function(result) {
    return fase2(result);
}).then(function(newResult) {
    return fase3(newResult);
}).then(function(otherResult) {
    return fase4(otherResult);
}).then(function(finalResult) {
    console.log(`Resultado final promises ${finalResult}`);
}).catch(failureCallback);

// Otra sintaxis
fase1().then(result => fase2(result))
    .then(newResult => fase3(newResult))
    .then(otherResult => fase4(otherResult))
    .then(finalResult => console.log(`Resultado final promises ${finalResult}`))
    .catch(failureCallback);
