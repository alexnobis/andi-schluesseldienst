const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input and output directories
const inputDir = './src/images/originals'; // Folder with original images
const outputDir = './src/images/optimized';

// Ensure output directories exist
const createOutputDirectories = () => {
  ['desktop', 'tablet', 'mobile'].forEach((subDir) => {
    const dir = path.join(outputDir, subDir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Resize image to specific dimensions
const resizeImage = (file, outputPath, width, height) => {
  return sharp(file)
    .resize(width, height, { fit: 'cover' })
    .toFormat('webp', { quality: 80 }) // Convert to WebP and set quality
    .toFile(outputPath);
};

// Process images
const processImages = async () => {
  createOutputDirectories();

  const files = fs.readdirSync(inputDir).filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
  for (const file of files) {
    const inputFile = path.join(inputDir, file);
    const baseName = path.parse(file).name;

    // Resize for desktop
    await resizeImage(inputFile, path.join(outputDir, 'desktop', `${baseName}-desktop.webp`), 1920, 1080);

    // Resize for tablet
    await resizeImage(inputFile, path.join(outputDir, 'tablet', `${baseName}-tablet.webp`), 1536, 2048);

    // Resize for mobile
    await resizeImage(inputFile, path.join(outputDir, 'mobile', `${baseName}-mobile.webp`), 1080, 1920);

    console.log(`Processed: ${file}`);
  }

  console.log('All images have been resized and optimized!');
};

processImages().catch((err) => console.error(err));
