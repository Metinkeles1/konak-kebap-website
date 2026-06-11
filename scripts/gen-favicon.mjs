// Markalı favicon.ico üretir — icon.tsx ile aynı tasarım (KK monogram, terracotta zemin).
// Kullanım: node scripts/gen-favicon.mjs  (sharp gerekli: npm i sharp --no-save)
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const svg = (s) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#C04A26"/>
  <text x="50%" y="50%" dy="0.02em" text-anchor="middle" dominant-baseline="central"
        font-family="Georgia, 'Times New Roman', serif" font-weight="700"
        font-size="290" letter-spacing="-12" fill="#FAF7F2">KK</text>
</svg>`;

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(Buffer.from(svg(s))).resize(s, s).png().toBuffer())
);

// ICO konteyneri (her giriş gömülü PNG) — saf Node, ek bağımlılık yok.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);

const entries = [];
let offset = 6 + 16 * sizes.length;
pngs.forEach((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 0); // width
  e.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 1); // height
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // color planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(png.length, 8); // size
  e.writeUInt32LE(offset, 12); // offset
  offset += png.length;
  entries.push(e);
});

const ico = Buffer.concat([header, ...entries, ...pngs]);
writeFileSync(new URL('../src/app/favicon.ico', import.meta.url), ico);
console.log('favicon.ico yazildi:', ico.length, 'bytes,', sizes.join('/'), 'px');
