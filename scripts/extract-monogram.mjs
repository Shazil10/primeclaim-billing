import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../public/logo.png");
const OUT = path.resolve(__dirname, "../public/monogram.png");

const img = sharp(SRC);
const meta = await img.metadata();
const { width: W, height: H } = meta;

const { data } = await img
  .clone()
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const channels = 4;

const rowDarkness = new Array(H).fill(0);
const colDarkness = new Array(W).fill(0);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) * (a / 255);
    const darkness = Math.max(0, 230 - lum);
    rowDarkness[y] += darkness;
    colDarkness[x] += darkness;
  }
}

const ROW_THRESHOLD = Math.max(...rowDarkness) * 0.04;

const inkRows = rowDarkness.map((d) => d > ROW_THRESHOLD);

const segments = [];
let start = -1;
for (let y = 0; y < H; y++) {
  if (inkRows[y] && start === -1) start = y;
  else if (!inkRows[y] && start !== -1) {
    segments.push({ start, end: y - 1, height: y - 1 - start });
    start = -1;
  }
}
if (start !== -1)
  segments.push({ start, end: H - 1, height: H - 1 - start });

segments.sort((a, b) => a.start - b.start);
console.log("Vertical ink segments:", segments);

const monogramSeg = segments[0];
if (!monogramSeg) {
  throw new Error("Could not detect monogram region.");
}

const monoColDarkness = new Array(W).fill(0);
for (let y = monogramSeg.start; y <= monogramSeg.end; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) * (a / 255);
    monoColDarkness[x] += Math.max(0, 230 - lum);
  }
}

const COL_THRESHOLD = Math.max(...monoColDarkness) * 0.04;
let leftX = 0;
let rightX = W - 1;
while (leftX < W && monoColDarkness[leftX] <= COL_THRESHOLD) leftX++;
while (rightX > 0 && monoColDarkness[rightX] <= COL_THRESHOLD) rightX--;

const padY = Math.round(H * 0.06);
const padX = Math.round(W * 0.06);

const cropTop = Math.max(0, monogramSeg.start - padY);
const cropBottom = Math.min(H - 1, monogramSeg.end + 4);
const cropLeft = Math.max(0, leftX - padX);
const cropRight = Math.min(W - 1, rightX + padX);

const cropW = cropRight - cropLeft + 1;
const cropH = cropBottom - cropTop + 1;
const side = Math.max(cropW, cropH);

let offsetX = Math.round(cropLeft - (side - cropW) / 2);
let offsetY = Math.round(cropTop - (side - cropH) / 2);
offsetX = Math.max(0, Math.min(offsetX, W - side));
offsetY = Math.max(0, Math.min(offsetY, H - side));

console.log("Square crop:", { offsetX, offsetY, side });

const cropped = await sharp(SRC)
  .extract({
    left: offsetX,
    top: offsetY,
    width: side,
    height: side,
  })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const buf = Buffer.from(cropped.data);
const cw = cropped.info.width;
const ch = cropped.info.height;

const samplePoints = [
  [2, 2],
  [cw - 3, 2],
  [2, ch - 3],
  [cw - 3, ch - 3],
  [Math.floor(cw / 2), 2],
  [Math.floor(cw / 2), ch - 3],
];

let br = 0;
let bg = 0;
let bb = 0;
for (const [x, y] of samplePoints) {
  const i = (y * cw + x) * 4;
  br += buf[i];
  bg += buf[i + 1];
  bb += buf[i + 2];
}
br = Math.round(br / samplePoints.length);
bg = Math.round(bg / samplePoints.length);
bb = Math.round(bb / samplePoints.length);
console.log(`Sampled background: rgb(${br}, ${bg}, ${bb})`);

const NEAR = 14;
const FAR = 70;

for (let i = 0; i < buf.length; i += 4) {
  const dr = buf[i] - br;
  const dg = buf[i + 1] - bg;
  const db = buf[i + 2] - bb;
  const dist = Math.sqrt(dr * dr + dg * dg + db * db);

  let alpha;
  if (dist <= NEAR) {
    alpha = 0;
  } else if (dist >= FAR) {
    alpha = buf[i + 3];
  } else {
    const t = (dist - NEAR) / (FAR - NEAR);
    alpha = Math.round(t * buf[i + 3]);
  }
  buf[i + 3] = alpha;
}

await sharp(buf, { raw: { width: cw, height: ch, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`Wrote ${OUT}`);
