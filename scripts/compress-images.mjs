/**
 * Compress images in public/images for faster page loads.
 * - Photo assets: JPEG @ quality 78 (most .png files are JPEG data already)
 * - logo.png: optimised PNG
 * - Also writes .webp siblings for each raster image
 *
 * Run: npm run compress-images
 */
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import path from "path";

const ROOT = path.resolve("public/images");
const JPEG_QUALITY = 78;
const MAX_WIDTH = 1400;
const SKIP_WEBP = new Set(["logo.png"]);

const PRESERVE_PNG = new Set(["logo.png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function compressFile(file) {
  const rel = path.relative(ROOT, file);
  const before = (await stat(file)).size;
  const meta = await sharp(file).metadata();
  const tmp = `${file}.compress-tmp`;

  let pipeline = sharp(file).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (PRESERVE_PNG.has(path.basename(file)) || meta.hasAlpha) {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmp);
  }

  await rename(tmp, file);
  const after = (await stat(file)).size;

  let webpSaved = 0;
  if (!SKIP_WEBP.has(path.basename(file))) {
    const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
    await sharp(file)
      .webp({ quality: 76 })
      .toFile(`${webpPath}.compress-tmp`);
    await rename(`${webpPath}.compress-tmp`, webpPath);
    webpSaved = (await stat(webpPath)).size;
  }

  const pct = before ? Math.round((1 - after / before) * 100) : 0;
  return { rel, before, after, pct, webpSaved };
}

const files = await walk(ROOT);
let totalBefore = 0;
let totalAfter = 0;

console.log(`Compressing ${files.length} images in ${ROOT}...\n`);

for (const file of files) {
  const result = await compressFile(file);
  totalBefore += result.before;
  totalAfter += result.after;
  const webpNote = result.webpSaved ? ` + webp ${(result.webpSaved / 1024).toFixed(0)}K` : "";
  console.log(
    `${result.rel}: ${(result.before / 1024).toFixed(0)}K → ${(result.after / 1024).toFixed(0)}K (${result.pct >= 0 ? "-" : "+"}${Math.abs(result.pct)}%)${webpNote}`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
);
