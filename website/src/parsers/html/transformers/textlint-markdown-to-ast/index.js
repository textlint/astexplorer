import compileModule from '../../../utils/compileModule';
import pkg from '@textlint/kernel/package.json';

const ID = 'textlint-plugin-html';

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
    
    defaultParserID: 'textlint-plugin-html',
    
    loadTransformer(callback) {
        require(['@textlint/kernel', "textlint-plugin-html"], ({ TextlintKernel }, plugin) => {
            callback({ TextlintKernel, plugin });
        })
    },
    
    transform({ TextlintKernel, plugin }, transformCode, code) {
        const kernel = new TextlintKernel();
        const rule = compileModule( // eslint-disable-line no-shadow
            transformCode
        );
        return kernel.lintText(code, {
            rules: [{
                ruleId: "astExplorerRule",
                rule: rule,
                options: true
            }],
            plugins: [{
                pluginId: "html",
                plugin: plugin,
                options: true
            }],
            ext: ".html"
        }).then(result => {
            return formatResults(result, code);
        });
    },
};

