/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputLogo = path.join(__dirname, '..', 'public', 'logo.png');
const iconsDir = path.join(__dirname, '..', 'public', 'icons');

const sizes = [72, 96, 128, 144, 152, 180, 192, 384, 512];

async function generateIcons() {
  // Load original logo
  const logo = sharp(inputLogo);
  const meta = await logo.metadata();
  console.log(`Source: ${meta.width}x${meta.height} ${meta.format}`);

  // For each size, create a white square canvas and center the logo
  for (const size of sizes) {
    const padding = Math.floor(size * 0.1); // 10% padding
    const innerSize = size - padding * 2;

    // Resize logo to fit within inner area
    const resized = await sharp(inputLogo)
      .resize(innerSize, innerSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toBuffer();

    // Compose on white square
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 250, g: 248, b: 245, alpha: 1 }, // brand-beige #FAF8F5
      }
    })
      .composite([{ input: resized, gravity: 'center' }])
      .png()
      .toFile(path.join(iconsDir, `icon-${size}x${size}.png`));

    console.log(`✓ icon-${size}x${size}.png`);
  }

  // Maskable icon (192) — more padding for safe zone
  const maskableSize = 512;
  const maskablePadding = Math.floor(maskableSize * 0.2); // 20% safe zone
  const maskableInner = maskableSize - maskablePadding * 2;

  const maskableResized = await sharp(inputLogo)
    .resize(maskableInner, maskableInner, { fit: 'contain', background: { r: 250, g: 248, b: 245, alpha: 1 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: maskableSize,
      height: maskableSize,
      channels: 4,
      background: { r: 250, g: 248, b: 245, alpha: 1 },
    }
  })
    .composite([{ input: maskableResized, gravity: 'center' }])
    .png()
    .toFile(path.join(iconsDir, `icon-maskable-512x512.png`));

  console.log('✓ icon-maskable-512x512.png');

  // Apple touch icon (180)
  await sharp(path.join(iconsDir, 'icon-180x180.png'))
    .toFile(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'));

  console.log('✓ apple-touch-icon.png');

  // Also create favicon-32 and favicon-16
  for (const sz of [16, 32]) {
    const favPadding = Math.floor(sz * 0.1);
    const favInner = sz - favPadding * 2;
    const favResized = await sharp(inputLogo)
      .resize(favInner, favInner, { fit: 'contain', background: { r: 250, g: 248, b: 245, alpha: 1 } })
      .png()
      .toBuffer();

    await sharp({
      create: { width: sz, height: sz, channels: 4, background: { r: 250, g: 248, b: 245, alpha: 1 } }
    })
      .composite([{ input: favResized, gravity: 'center' }])
      .png()
      .toFile(path.join(__dirname, '..', 'public', `favicon-${sz}x${sz}.png`));

    console.log(`✓ favicon-${sz}x${sz}.png`);
  }

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);
