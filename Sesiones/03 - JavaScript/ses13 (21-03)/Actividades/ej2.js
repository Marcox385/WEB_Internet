/* Ejercicio 2 - Mensaje por tiempos */

/* Uso de callbacks (Solo llega hasta 5 hola's) */
let flags = [false, false]; // Hola, Mundo

function elInfiernoDelHola() {
    setTimeout(function hola1() {
        console.log('Hola1');

        setTimeout(function hola2() {
            console.log('Hola2');

            setTimeout(function hola3() {
                console.log('Hola3');

                setTimeout(function hola4() {
                    console.log('Hola4');

                    setTimeout(function hola5() {
                        console.log('Hola5');

                        // ...

                        flags[0] = true;
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function elInfiernoDelMundo() {
    setTimeout(function Mundo1() {
        console.log('Mundo1');

        setTimeout(function Mundo2() {
            console.log('Mundo2');

            setTimeout(function Mundo3() {
                console.log('Mundo3');

                setTimeout(function Mundo4() {
                    console.log('Mundo4');

                    setTimeout(function Mundo5() {
                        console.log('Mundo5');

                        // ...

                        flags[1] = true;
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

function revisar() {
    if (flags.every(_ => _)) console.log("FIN");
    else setTimeout(revisar, 100);
}

// elInfiernoDelHola();
// elInfiernoDelMundo();
// setTimeout(revisar, 5000);


/* Uso de callbacks y recursividad */
function printHola(value) {
    console.log(`Hola${value}`);

    if (value < 10)
        setTimeout(printHola, 1000, value + 1);
    else flags[0] = true;
}

function printMundo(value) {
    console.log(`Mundo${value}`);

    if (value < 5)
        setTimeout(printMundo, 2000, value + 1);
    else flags[1] = true;
}

// setTimeout(printHola, 1000, 1);
// setTimeout(printMundo, 2000, 1);
// setTimeout(revisar, 2000);


/* Uso de promesas */
function pPrintHola(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola${value}`);
            resolve(value + 1);
        }, 1000);
    });
}

function pPrintMundo(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Mundo${value}`);
            resolve(value + 1);
        }, 2000);
    });
}

// let pH = pPrintHola(1)
//     .then(res => pPrintHola(res))
//     .then(res => pPrintHola(res))
//     .then(res => pPrintHola(res))
//     .then(res => pPrintHola(res))
//     .then(() => Promise.resolve());

// let pM = pPrintMundo(1)
//     .then(res => pPrintMundo(res))
//     .then(res => pPrintMundo(res))
//     .then(res => pPrintMundo(res))
//     .then(res => pPrintMundo(res))
//     .then(() => Promise.resolve());

// Promise.all([pH, pM]).then(
//     () => console.log('FIN')
// );
// Alternativa -> pH.then(() => pM).then(() => console.log('FIN'))


/* Promesas con ciclo */
function showHolaLoop() {
    return new Promise((resolve, reject) => {
        for (let i = 1, p = Promise.resolve(); i <= 10; i++) {
            p = p.then(() => new Promise(res => 
                setTimeout(() => {
                    console.log(`Hola${i}`);
                    res();
                    if (i == 10) resolve();
                }, 1000)
            ));
        }
    });
}

function showMundoLoop() {
    return new Promise((resolve, reject) => {
        for (let i = 1, p = Promise.resolve(); i <= 5; i++) {
            p = p.then(() => new Promise(res => 
                setTimeout(() => {
                    console.log(`Mundo${i}`);
                    res();
                    if (i == 5) resolve();
                }, 2000)
            ));
        }
    });
}

// let pLoopH = showHolaLoop();
// let pLoopM = showMundoLoop();

// Promise.all([pLoopH, pLoopM]).then(
//     () => console.log('FIN')
// );


/* Promesas recursivas */
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms);
    });
}

function template(msg, time, qty, curr) {
    return delay(time).then(() => {
        console.log(msg + curr);

        if (curr >= qty) return Promise.resolve();

        return template(msg, time, qty, curr+1);
    })
}

// let pHr = template('Hola ', 1000, 10, 1);
// let pMr = template('Mundo ', 2000, 5, 1);
// Promise.all([pHr, pMr]).then(
//     () => console.log('FIN')
// );


/* Async/Await */
async function aaPrintHola() {
    for (let i = 0; i < 10; i++) {
        await delay(1000);
        console.log(`Hola${i+1}`);
    }

    return Promise.resolve();
}

async function aaPrintMundo() {
    for (let i = 0; i < 5; i++) {
        await delay(2000);
        console.log(`Mundo${i+1}`);
    }

    return Promise.resolve();
}

(async () => {
    await Promise.all([aaPrintHola(), aaPrintMundo()]);
    console.log("FIN");
})(); // IIFE
