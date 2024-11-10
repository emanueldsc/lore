const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/assets');
const outputFile = path.join(__dirname, 'src/assets/markdownLinks.json');

function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursivamente buscar em subpastas
      getMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === '.md') {
      // Identificar o caminho relativo
      const relativePath = path.relative(path.join(__dirname, 'src/assets'), filePath);
      
      // Extrair diretório, tipo, e nome do arquivo
      const dirName = path.dirname(relativePath).split(path.sep);
      const type = dirName[dirName.length - 2]; // Penúltima pasta do caminho
      const dir = `assets/${dirName.join('/')}`;
      const detail = path.basename(file, '.md');

      // Ler a primeira linha do arquivo para o nome
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const firstLine = fileContent.split('\n')[0].replace(/^#\s*/, '').trim(); // Remove o "#" inicial e espaços em branco

      // Procurar imagens na mesma pasta
      const imageDir = path.dirname(filePath);
      const images = fs.readdirSync(imageDir)
        .filter(imageFile => /\.(jpg|jpeg|png|gif)$/i.test(imageFile)) // Filtra apenas arquivos de imagem
        .map(imageFile => imageFile);

      // Adiciona o objeto com as informações ao array
      fileList.push({
        dir: `assets/${dirName.join('/')}`,
        detail: detail,
        name: firstLine,       // Nome extraído da primeira linha do markdown
        imagens: images,
        type: type
      });
    }
  });

  return fileList;
}

function generateJsonFile() {
  const markdownFiles = getMarkdownFiles(baseDir);
  const jsonContent = JSON.stringify(markdownFiles, null, 2);

  fs.writeFileSync(outputFile, jsonContent, 'utf8');
  console.log('Arquivo JSON gerado com sucesso:', outputFile);
}

generateJsonFile();
