const fs = require('fs').promises;
const path = require('path');

async function listMDFileNamesWithoutExtensions(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const mdFileNames = files
      .filter(file => path.extname(file) === '.md')
      .map(file => path.basename(file, '.md'));

    console.log('MD file names without extensions:', mdFileNames);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

const directoryPath = './content/articles';

listMDFileNamesWithoutExtensions(directoryPath);
