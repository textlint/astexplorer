import defaultParserInterface from '../utils/defaultParserInterface';

import pkg from 'textlint-plugin-html/package.json';

const ID = 'textlint-plugin-html';

export default {
    ...defaultParserInterface,
    id: ID,
    displayName: "textlint-plugin-html",
    version: pkg.version,
    homepage: pkg.homepage,
    locationProps: new Set(['loc', 'range']),
    
    loadParser(callback) {
        require(['textlint-plugin-html/module/html-to-ast'], callback);
    },
    
    parse(parser, text) {
        return parser.parse(text);
    },
    
    opensByDefault(node, key) {
        return key === 'rules';
    },
    
    _ignoredProperties: new Set(['location', 'position'])
};
