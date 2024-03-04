/* Condicionales */

// if
if (condicion) {
    console.log(true);
}

if (condicion)
    console.log(true);

if (condicion) console.log(true);

// if-else
if (condicion) {
    console.log(true);
} else {
    console.log(false);
}

if (condicion) console.log(true);
else console.log(true);

// if-else if-else
if (condicion) console.log('Inicial');
else if (condicion2) console.log('Segundo');
else console.log('Alternativa');

// Ternario
console.log(condicion ? 'Válido' : 'Inválido');
let x = (cond1 & cond2) ? true :
    (cond1 & cond3) ? 'segundo' : false;

// Switch
switch (variable) {
    case 1:
        ...
        break;
    case 2:
        ...;
        break;
    case 'algo_más':
        ...x;
        break;
    default:
        ...
}
