/* Ejercicio 1 - Servidor local */
const http = require('http');
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Chalk
const chalk = require('chalk');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    res.end('Hola mundo\n');
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
    console.log(chalk.blue.bold('Hola mundo'));
});
