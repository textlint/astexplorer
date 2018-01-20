// const localRequire = require.context('./', true, /^\.\/(?!utils)[^/]+\/(transformers\/([^/]+)\/)?(codeExample\.txt|[^/]+?\.js)$/);
const localRequire = require.context('./', true, /^\.\/(md|html|txt)\/(transformers\/([^/]+)\/)?(codeExample\.txt|[^/]+?\.js)$/);

const files =
  localRequire.keys()
  .map(name => name.split('/').slice(1));
console.log("files", files);
const categoryByID = {};
const parserByID = {};
const transformerByID = {};

const restrictedParserNames = new Set([
  'index.js',
  'codeExample.txt',
  'transformers',
  'utils',
]);

export const categories =
  files
  .filter(name => name[1] === 'index.js')
  .map(([catName]) => {
    let category = localRequire(`./${catName}/index.js`);

    console.log(category)
    categoryByID[category.id] = category;

    category.codeExample = localRequire(`./${catName}/codeExample.txt`);

    let catFiles =
      files
      .filter(([curCatName]) => curCatName === catName)
      .map(name => name.slice(1));

    category.parsers =
      catFiles
      .filter(([parserName]) => !restrictedParserNames.has(parserName))
      .map(([parserName]) => {
        let parser = localRequire(`./${catName}/${parserName}`);
        parser = parser.__esModule ? parser.default : parser;
        parserByID[parser.id] = parser;
        parser.category = category;
        return parser;
      });

    category.transformers =
      catFiles
      .filter(([dirName, , fileName]) => dirName === 'transformers' && fileName === 'index.js')
      .map(([, transformerName]) => {
        let transformerDir = `./${catName}/transformers/${transformerName}`;
        let transformer = localRequire(`${transformerDir}/index.js`);
        transformer = transformer.__esModule ? transformer.default : transformer;
        transformerByID[transformer.id] = transformer;
        transformer.defaultTransform = localRequire(`${transformerDir}/codeExample.txt`);
        return transformer;
      });

    return category;
  });

export function getDefaultCategory() {
  return categoryByID["markdown"];
  // return categoryByID.javascript;
}

export function getDefaultParser(category = getDefaultCategory()) {
  return category.parsers[0];
}

export function getCategoryByID(id) {
  return categoryByID[id];
}

export function getParserByID(id) {
  return parserByID[id];
}

export function getTransformerByID(id) {
  return transformerByID[id];
}
