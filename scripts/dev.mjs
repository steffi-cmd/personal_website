import { dev } from 'astro';

console.log('Starte Astro Entwicklungsserver...');
const server = await dev({ root: '.' });
console.log(`Server läuft unter: http://localhost:${server.address.port}/steffi_personal_website/`);
