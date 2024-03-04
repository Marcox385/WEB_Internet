/* Números */

let num1 = 1e4;                   // 10_000
let num2 = 1e-3                   // 0.001
let hex1 = 0xFF;                  // 255
hex1 = 0xff;                      // 255
let bin = 0b1010101;              // 85
let octal = 0o11;                 // 9
console.log(hex1.toString(16));   // ff
console.log(hex1.toString(2));    // 11111111

Math.random();                    // Aleatorio
Math.max(-10, 20, 5, 1, 255);     // 255
Math.min(-10, 20, 5, 1, 255);     // -10
Math.floor(3.1);                  // 3
Math.floor(-2.1);                 // -3
Math.ceil(3.1);                   // 4
Math.ceil(-2.1);                  // -2
Math.round(3.5);                  // 4
Math.trunc(3.8);                  // 3

let num3 = 1.3819;
console.log(num3.toFixed(2));     // 1.38
console.log(parseInt('100px'));   // 100
console.log(parseFloat('2.3em')); // 2.3
console.log(parseInt('2.3'));     // 2
console.log(parseFloat('2.3.4')); // 2.3
