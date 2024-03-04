/* Ciclos */

// while
while (cond1 || cond2) {
    ...

    if (cond1 == 20 && cond2 == -1) continue;
    if (cond1 == 20) break;
}

// do-while
let i = 0;
do {
    console.log(i);
} while (++i < 10);

// for -> inicio; condiciones; paso
for (let i = 20; i != 0; i--) {
    ...
}

// Romper un ciclo específico
loop1: while (true) {
    loop2: while (--i) {
        if (i == 2) break loop1;
    }
}
