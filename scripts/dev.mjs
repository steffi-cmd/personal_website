import { dev } from 'astro';

console.log('Starte Astro Entwicklungsserver...');
const server = await dev({ root: '.' });
const basePath = server.base || '/';
console.log(`Server läuft unter: http://localhost:${server.address.port}${basePath}`);
