import sharp from 'sharp';

const inputPath = 'public/DSC_0033.JPG';
const outputPath = 'public/hotel-hero.jpg';

async function enhance() {
  console.log('Processing image with iPhone-style computational photography enhancements...');

  await sharp(inputPath)
    .rotate() // auto-orient based on EXIF
    .modulate({
      brightness: 1.28, // Lift exposure significantly
      saturation: 1.22, // Vivid warm colors
    })
    .gamma(1.22) // Lift dark shadows while preserving highlights
    .sharpen({
      sigma: 1.2,
      m1: 1.4,
      m2: 0.6,
    })
    .jpeg({
      quality: 95,
      mozjpeg: true
    })
    .toFile(outputPath);

  console.log('Saved enhanced image to', outputPath);
}

enhance().catch(console.error);
