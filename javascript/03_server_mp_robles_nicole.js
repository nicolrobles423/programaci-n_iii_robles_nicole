import { createServer } from 'node:http';
const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Bienvenidos a la Veterinaria Patitas Felices!\n');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto - Patitas Felices</h1><p>Agenda tu cita con la Dra. Nicole, el Dr. Romeo o Belki escribiendo a citas@patitasfelices.com</p>');
    }
    else {
        // Si la ruta no existe, devolvemos un Error 404
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Esta página se escapó como un gatito</h1>');
    }
});

// inicia un servidor http local en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Patitas Felices escuchando en 127.0.0.1:3000');
});
