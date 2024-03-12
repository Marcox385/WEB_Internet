/* Utilidad para generar UUIDs aleatorios de longitud 32 (sin guiones) */

function generateUUID() {
    return 'xxxxxxxx-x3xx-8xxx-yxxx-xxxxx5xxxxxx'.replace(/[xy]/g, c => {
        let r = Math.random() * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
