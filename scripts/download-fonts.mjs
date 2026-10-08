import fs from 'node:fs';
import path from 'node:path';

const fontsUrl = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';

const outputDir = path.resolve('src/fonts');
const cssOutputFile = path.resolve('src/styles/fonts.css');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Fetching Google Fonts CSS...');
const res = await fetch(fontsUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
});

const css = await res.text();

const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g;
let match;
let newCss = '/* Self-hosted fonts for DSGVO compliance */\n\n';
let fontIndex = 0;

while ((match = fontFaceRegex.exec(css)) !== null) {
  const block = match[1];
  
  const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
  const styleMatch = block.match(/font-style:\s*([^;]+);/);
  const weightMatch = block.match(/font-weight:\s*([^;]+);/);
  const urlMatch = block.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\(['"]?([^'"]+)['"]?\)/);
  const unicodeMatch = block.match(/unicode-range:\s*([^;]+);/);

  if (!urlMatch) continue;

  const family = familyMatch ? familyMatch[1].trim() : 'Font';
  const style = styleMatch ? styleMatch[1].trim() : 'normal';
  const weight = weightMatch ? weightMatch[1].trim() : '400';
  const remoteUrl = urlMatch[1];
  const format = urlMatch[2] || 'woff2';
  const unicodeRange = unicodeMatch ? unicodeMatch[1].trim() : null;

  const cleanFamily = family.replace(/\s+/g, '-').toLowerCase();
  const filename = `${cleanFamily}-${weight}-${style}-${fontIndex++}.${format}`;
  const localFilePath = path.join(outputDir, filename);

  console.log(`Downloading ${filename}...`);
  const fontRes = await fetch(remoteUrl);
  const buffer = await fontRes.arrayBuffer();
  fs.writeFileSync(localFilePath, Buffer.from(buffer));

  newCss += `@font-face {\n`;
  newCss += `  font-family: '${family}';\n`;
  newCss += `  font-style: ${style};\n`;
  newCss += `  font-weight: ${weight};\n`;
  newCss += `  font-display: swap;\n`;
  newCss += `  src: url('../fonts/${filename}') format('${format}');\n`;
  if (unicodeRange) {
    newCss += `  unicode-range: ${unicodeRange};\n`;
  }
  newCss += `}\n\n`;
}

fs.writeFileSync(cssOutputFile, newCss);
console.log(`Successfully saved fonts and generated fonts.css`);
