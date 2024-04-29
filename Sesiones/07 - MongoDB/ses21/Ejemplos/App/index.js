/* Uso de librería nativa de MongoDB */
const { MongoClient } = require('mongodb');

// Configuración preliminar
const uri = 'mongodb://localhost:27017';
const db_client = new MongoClient(uri);

// Función manejadora
async function run() {
    try {
        // Conectar a la base
        await db_client.connect();
        const db = db_client.db('base_prueba');
        const collection = db.collection('coleccion_prueba');

        // Verificar conexión
        await db.command({ ping: 1 });
        console.log('Conexión exitosa a MongoDB!');

        // Imprimir documentos
        const cursor = collection.find();
        for await (const doc of cursor) {
            console.log(doc);
        }
    } finally {
        await db_client.close();
    }
}

run().catch(console.dir);
