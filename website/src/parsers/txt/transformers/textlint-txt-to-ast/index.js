import compileModule from '../../../utils/compileModule';
import pkg from 'textlint/package.json';

const ID = 'textlint:txt';

function formatResults(results, code) {
    const format = (message) => {
        return formatResult(message, code);
    };
    return results.messages.length === 0
        ? 'Lint rule not fired.'
        : results.messages.map(format).join('').trim();
}

function formatResult(result, code) {
    const pointer = '-'.repeat(result.column - 1) + '^';
    console.log(code.split('\n')[result.line - 1]);
    return `
| ${result.message} (at ${result.line}:${result.column})
   ${code.split('\n')[result.line - 1] || ''}
| ${pointer}
`;
}

export default {
    id: ID,
    displayName: ID,
    version: pkg.version,
    homepage: pkg.homepage,

    defaultParserID: 'textlint:txt-to-ast',

    loadTransformer(callback) {
        require(['textlint/lib/textlint-core'], (TextLintCore) => {
            callback({TextLintCore});
        })
    },

    transform({TextLintCore}, transformCode, code) {
        const textlintCore = new TextLintCore();
        let rule = compileModule( // eslint-disable-line no-shadow
            transformCode
        );
        textlintCore.setupRules({
            'astExplorerRule': rule,
        });
        return textlintCore.lintText(code, '.txt').then(result => {
            return formatResults(result, code);
        });
    },
};

