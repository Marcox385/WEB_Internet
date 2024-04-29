/* Ejercicio 1 - Operaciones básicas */
const { MongoClient } = require('mongodb');

// Configuración preliminar
const uri = 'mongodb://localhost:27017';
const db_client = new MongoClient(uri);

// Función manejadora
async function run() {
    try {
        // Conectar a la base
        await db_client.connect();
        console.log('Conexión exitosa a MongoDB!');

        const usuarios_db = db_client.db('UsuariosDB');
        usuarios_db.createCollection('usuarios');

        const usuarios = usuarios_db.collection('usuarios');
        await usuarios.insertOne({
            nombre: "Marco Cordero",
            email: "mar.cordero@outlook.com"
        });
        
        const usuario = await usuarios.findOne({
            email: "mar.cordero@outlook.com"
        });
        console.log(usuario);
    } finally {
        await db_client.close();
    }
}

run().catch(console.dir);
