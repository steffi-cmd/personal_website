import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import convert from 'heic-convert';

const IMG_DIR = path.resolve('public/img');

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function processImages() {
  await ensureDir(IMG_DIR);
  const files = await fs.readdir(IMG_DIR);

  console.log(`Checking ${files.length} files in ${IMG_DIR}...`);

  for (const file of files) {
    const filePath = path.join(IMG_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) continue;

    // 1. Convert HEIC files to JPG
    if (ext === '.heic') {
      console.log(`Converting HEIC file: ${file}...`);
      try {
        const inputBuffer = await fs.readFile(filePath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.85
        });

        const newFileName = file.replace(/\.heic$/i, '.jpg');
        const newFilePath = path.join(IMG_DIR, newFileName);

        // Also resize and optimize with sharp
        await sharp(outputBuffer)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toFile(newFilePath);

        // Remove old HEIC file
        await fs.unlink(filePath);
        console.log(`  -> Converted & optimized: ${file} -> ${newFileName}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
      continue;
    }

    // 2. Optimize large JPG / JPEG / PNG
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const origSizeMB = (stat.size / (1024 * 1024)).toFixed(2);

      // If file is larger than 400KB, optimize it
      if (stat.size > 400 * 1024) {
        console.log(`Optimizing large image: ${file} (${origSizeMB} MB)...`);
        try {
          const tempPath = filePath + '.tmp';
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tempPath);

          const newStat = await fs.stat(tempPath);
          const newSizeMB = (newStat.size / (1024 * 1024)).toFixed(2);

          await fs.unlink(filePath);
          await fs.rename(tempPath, filePath);
          console.log(`  -> Compressed ${file}: ${origSizeMB} MB -> ${newSizeMB} MB`);
        } catch (err) {
          console.error(`Error optimizing ${file}:`, err.message);
        }
      }
    }
  }

  console.log('Image optimization finished!');
}

processImages().catch(console.error);
