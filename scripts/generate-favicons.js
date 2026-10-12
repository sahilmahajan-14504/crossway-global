const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logo.jpeg");
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const APP_DIR = path.join(__dirname, "..", "src", "app");

// Logo's solid navy background color (sampled from a corner pixel) and the
// white/light-blue artwork color it needs to be keyed against.
const BG_COLOR = { r: 25, g: 49, b: 93 };

// Distance (0-1, normalized) below which a pixel is considered pure
// background -> fully transparent; above which it is considered pure
// artwork -> fully opaque. Pixels in between (anti-aliased edges) get a
// proportional alpha, keeping the white linework crisp while removing navy.
const FULLY_BG = 0.12;
const FULLY_FG = 0.38;
const MAX_DIST = Math.sqrt(3 * 255 * 255);

const NAVY = { r: 16, g: 34, b: 69, alpha: 1 }; // brand.DEFAULT, for flattening favicons

/**
 * Converts the solid navy background of the source JPEG into a true alpha
 * channel so the logo can sit on any background, while keeping the white
 * artwork itself fully opaque (only its own pixel color, not its alpha,
 * changes). Returns a PNG buffer.
 */
async function keyOutBackground(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const dist =
      Math.sqrt(
        (r - BG_COLOR.r) ** 2 + (g - BG_COLOR.g) ** 2 + (b - BG_COLOR.b) ** 2
      ) / MAX_DIST;

    let alpha;
    if (dist <= FULLY_BG) {
      alpha = 0;
    } else if (dist >= FULLY_FG) {
      alpha = 255;
    } else {
      alpha = Math.round(((dist - FULLY_BG) / (FULLY_FG - FULLY_BG)) * 255);
    }
    out[i + 3] = alpha;
  }

  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function run() {
  const meta = await sharp(SRC).metadata();

  // 1) Full logo, background removed, saved as the canonical transparent asset.
  const transparentFull = await keyOutBackground(await sharp(SRC).toBuffer());
  await sharp(transparentFull).toFile(path.join(PUBLIC_DIR, "logo-transparent.png"));

  // 2) Wide lockup crop (mark + wordmark), background removed, trimmed of
  //    surrounding empty space so it sits tight against its bounding box.
  const wordmarkTop = Math.round(meta.height * 0.22);
  const wordmarkBottom = Math.round(meta.height * 0.64);
  const wordmarkLeft = Math.round(meta.width * 0.14);
  const wordmarkRight = Math.round(meta.width * 0.86);

  const lockupCrop = await sharp(SRC)
    .extract({
      left: wordmarkLeft,
      top: wordmarkTop,
      width: wordmarkRight - wordmarkLeft,
      height: wordmarkBottom - wordmarkTop,
    })
    .toBuffer();
  const lockupTransparent = await keyOutBackground(lockupCrop);
  await sharp(lockupTransparent)
    .trim({ threshold: 10 })
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-lockup.png"));

  // 3) Square icon mark (ship + globe only, no wordmark), background
  //    removed — used for favicons and compact badges.
  const markLeft = Math.round(meta.width * 0.165);
  const markRight = Math.round(meta.width * 0.405);
  const markTop = Math.round(meta.height * 0.28);
  const markBottom = Math.round(meta.height * 0.6);

  const markCrop = await sharp(SRC)
    .extract({
      left: markLeft,
      top: markTop,
      width: markRight - markLeft,
      height: markBottom - markTop,
    })
    .toBuffer();
  const markTransparent = await keyOutBackground(markCrop);
  const markTrimmed = await sharp(markTransparent).trim({ threshold: 10 }).toBuffer();
  const markTrimmedMeta = await sharp(markTrimmed).metadata();
  const squareSide = Math.round(
    Math.max(markTrimmedMeta.width, markTrimmedMeta.height) * 1.15
  );

  const squareBuffer = await sharp(markTrimmed)
    .resize(squareSide, squareSide, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp(squareBuffer)
    .resize(512, 512, { fit: "cover" })
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-mark.png"));

  // 4) Mark on a solid navy chip (rounded square), for placement directly
  //    on light paper backgrounds where a transparent white mark would
  //    disappear. Padding so the mark doesn't touch the chip edge.
  const chipSize = 512;
  const chipPadding = Math.round(chipSize * 0.2);
  const markOnChip = await sharp(squareBuffer)
    .resize(chipSize - chipPadding * 2, chipSize - chipPadding * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  const chipMask = Buffer.from(
    `<svg width="${chipSize}" height="${chipSize}"><rect width="${chipSize}" height="${chipSize}" rx="${Math.round(
      chipSize * 0.22
    )}" fill="#fff"/></svg>`
  );

  await sharp({
    create: {
      width: chipSize,
      height: chipSize,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([
      { input: markOnChip, gravity: "center" },
      { input: chipMask, blend: "dest-in" },
    ])
    .png()
    .toFile(path.join(PUBLIC_DIR, "logo-chip.png"));

  // favicon.ico served from src/app/icon.png (Next.js app-icon convention).
  // Flatten onto brand navy since most browsers render favicons on a
  // light chrome background, and transparent + white art disappears.
  await sharp(squareBuffer)
    .resize(32, 32, { fit: "cover" })
    .flatten({ background: NAVY })
    .png()
    .toFile(path.join(APP_DIR, "icon.png"));

  // apple-touch-icon convention — also flattened (iOS ignores alpha anyway).
  await sharp(squareBuffer)
    .resize(180, 180, { fit: "cover" })
    .flatten({ background: NAVY })
    .png()
    .toFile(path.join(APP_DIR, "apple-icon.png"));

  console.log("Favicon + transparent logo assets generated.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
