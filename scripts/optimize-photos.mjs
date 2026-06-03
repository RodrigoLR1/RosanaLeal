// One-shot — comprime as 4 fotos do ensaio para tamanhos razoáveis de web.
// Roda com: node scripts/optimize-photos.mjs
import sharp from "sharp";
import { stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const base = path.resolve("public/images");

const jobs = [
  { file: "rosana-hero-green.jpg", maxW: 1600, quality: 82 },
  { file: "rosana-about.jpg",      maxW: 1200, quality: 82 },
  { file: "rosana-service.jpg",    maxW: 1000, quality: 82 },
  { file: "rosana-book.jpg",       maxW: 1000, quality: 82 },
];

function mb(n) {
  return (n / 1024 / 1024).toFixed(2);
}

for (const j of jobs) {
  const p = path.join(base, j.file);
  const before = (await stat(p)).size;
  const buf = await readFile(p);

  const out = await sharp(buf)
    .rotate() // respeita EXIF orientation
    .resize({ width: j.maxW, withoutEnlargement: true })
    .jpeg({ quality: j.quality, progressive: true })
    .toBuffer();

  await writeFile(p, out);
  const after = (await stat(p)).size;
  console.log(`${j.file}: ${mb(before)} MB -> ${mb(after)} MB`);
}
