/* Uso de closures */

let c = 10;

function sumaC(a) {
    return c + a;
}

c = 5;
c = sumaC(2);
console.log(c);
