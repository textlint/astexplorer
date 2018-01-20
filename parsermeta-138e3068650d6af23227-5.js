webpackJsonp([8,12],{

/***/ "LAP1":
/***/ (function(module, exports) {

module.exports = {
	"name": "markdown-to-ast",
	"description": "Parse Markdown to AST with location info.",
	"version": "4.0.0",
	"homepage": "https://github.com/textlint/textlint/tree/master/packages/markdown-to-ast/",
	"repository": {
		"type": "git",
		"url": "https://github.com/textlint/textlint.git"
	},
	"main": "lib/markdown-parser.js",
	"files": [
		"lib/",
		"src/"
	],
	"scripts": {
		"example:build": "browserify example/js/index.js -o example/app/app.js",
		"test": "mocha test/",
		"build": "cross-env NODE_ENV=production babel src --out-dir lib --source-maps",
		"watch": "babel src --out-dir lib --watch --source-maps",
		"prepublish": "npm run --if-present build"
	},
	"directories": {
		"test": "test/"
	},
	"author": "azu",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/textlint/textlint/issues"
	},
	"dependencies": {
		"@textlint/ast-node-types": "^1.1.2",
		"debug": "^2.1.3",
		"remark": "^7.0.1",
		"structured-source": "^3.0.2",
		"traverse": "^0.6.6"
	},
	"devDependencies": {
		"babel-cli": "^6.24.1",
		"babel-preset-env": "^1.4.0",
		"babel-preset-jsdoc-to-assert": "^4.0.0",
		"babel-preset-power-assert": "^1.0.0",
		"babel-register": "^6.24.1",
		"browserify": "^14.3.0",
		"cross-env": "^4.0.0",
		"mkdirp": "^0.5.1",
		"mocha": "^3.3.0",
		"power-assert": "^1.4.2",
		"textlint-ast-test": "^1.1.3",
		"txt-ast-traverse": "^1.2.1"
	}
};

/***/ }),

/***/ "d8LE":
/***/ (function(module, exports) {

module.exports = {
	"name": "txt-to-ast",
	"description": "Parse text to AST.",
	"version": "1.1.0",
	"homepage": "https://github.com/textlint/txt-to-ast/",
	"repository": {
		"type": "git",
		"url": "https://github.com/textlint/txt-to-ast.git"
	},
	"main": "index.js",
	"scripts": {
		"build": "browserify example/js/index.js -o example/app/app.js",
		"watch": "watchify example/js/index.js -o example/app/app.js",
		"test": "mocha test/*.js"
	},
	"directories": {
		"test": "test/"
	},
	"author": "azu",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/textlint/txt-to-ast/issues"
	},
	"devDependencies": {
		"browserify": "^12.0.1",
		"espower-loader": "^1.0.0",
		"intelli-espower-loader": "^1.0.0",
		"mocha": "^2.1.0",
		"power-assert": "^1.1.0",
		"watchify": "^3.5.0"
	}
};

/***/ }),

/***/ "fhjZ":
/***/ (function(module, exports) {

module.exports = {
	"name": "textlint",
	"description": "The pluggable linting tool for text and markdown.",
	"version": "8.0.0",
	"homepage": "https://github.com/textlint/textlint/",
	"keywords": [
		"plugable",
		"text",
		"textlint",
		"markdown",
		"lint",
		"linting",
		"AST"
	],
	"repository": {
		"type": "git",
		"url": "https://github.com/textlint/textlint.git"
	},
	"main": "lib/index.js",
	"files": [
		"bin/",
		"lib/",
		"src/",
		"typings/"
	],
	"bin": {
		"textlint": "./bin/textlint.js"
	},
	"scripts": {
		"build": "cross-env NODE_ENV=production babel src --out-dir lib --source-maps",
		"watch": "babel src --out-dir lib --watch --source-maps",
		"prepublish": "npm run --if-present build",
		"pretest": "npm run --if-present build",
		"lint:js": "eslint src/",
		"test:all": "npm-run-all test:js --parallel lint:* example:*",
		"test": "npm-run-all test:js --parallel lint:*",
		"test:js": "mocha test/",
		"perf": "cd perf && npm run perf"
	},
	"directories": {
		"test": "test/"
	},
	"author": "azu",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/textlint/textlint/issues"
	},
	"devDependencies": {
		"babel-cli": "^6.6.5",
		"babel-plugin-add-module-exports": "^0.2.1",
		"babel-plugin-espower": "^2.1.2",
		"babel-plugin-jsdoc-to-assert": "^3.0.1",
		"babel-preset-es2015": "^6.6.0",
		"babel-register": "^6.7.2",
		"clone": "^2.0.0",
		"cross-env": "^4.0.0",
		"eslint": "^3.1.1",
		"markdown-to-ast": "^4.0.0",
		"mocha": "^3.0.2",
		"npm-run-all": "^4.0.2",
		"power-assert": "^1.3.1",
		"textlint-plugin-html": "^0.1.2",
		"textlint-rule-helper": "^2.0.0",
		"textlint-rule-no-todo": "^2.0.0",
		"textlint-rule-preset-ja-spacing": "^2.0.0",
		"textlint-rule-preset-jtf-style": "^2.0.0"
	},
	"dependencies": {
		"bluebird": "^3.0.5",
		"carrack": "0.0.5",
		"chalk": "^1.1.1",
		"debug": "^2.1.0",
		"deep-equal": "^1.0.1",
		"diff": "^2.2.2",
		"file-entry-cache": "^2.0.0",
		"get-stdin": "^5.0.1",
		"glob": "^7.1.1",
		"interop-require": "^1.0.0",
		"is-file": "^1.0.0",
		"log-symbols": "^1.0.2",
		"map-like": "^1.0.1",
		"md5": "^2.2.1",
		"mkdirp": "^0.5.0",
		"object-assign": "^4.0.1",
		"optionator": "^0.8.0",
		"path-to-glob-pattern": "^1.0.1",
		"rc-config-loader": "^1.0.2",
		"read-pkg": "^1.1.0",
		"shelljs": "^0.7.6",
		"string-width": "^1.0.1",
		"structured-source": "^3.0.2",
		"text-table": "^0.2.0",
		"textlint-formatter": "^1.7.3",
		"textlint-plugin-markdown": "^2.0.1",
		"textlint-plugin-text": "^1.1.0",
		"traverse": "^0.6.6",
		"try-resolve": "^1.0.1",
		"txt-ast-traverse": "^1.2.0",
		"unique-concat": "^0.2.2"
	}
};

/***/ }),

/***/ "npXs":
/***/ (function(module, exports) {

module.exports = {
	"name": "textlint-plugin-html",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/textlint/textlint-plugin-html.git"
	},
	"author": "azu",
	"email": "azuciao@gmail.com",
	"homepage": "https://github.com/textlint/textlint-plugin-html",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/textlint/textlint-plugin-html/issues"
	},
	"version": "0.1.7",
	"description": "textlint HTML processsor plugin.",
	"main": "lib/index.js",
	"files": [
		"lib",
		"src"
	],
	"directories": {
		"test": "test"
	},
	"scripts": {
		"build": "NODE_ENV=production babel src --out-dir lib --source-maps",
		"watch": "babel src --out-dir lib --watch --source-maps",
		"prepublish": "npm run --if-present build",
		"test": "mocha"
	},
	"keywords": [
		"textlint",
		"plugin",
		"html",
		"lint"
	],
	"devDependencies": {
		"babel-cli": "^6.8.0",
		"babel-preset-es2015": "^6.6.0",
		"babel-preset-jsdoc-to-assert": "^4.0.0",
		"babel-preset-power-assert": "^1.0.0",
		"babel-register": "^6.8.0",
		"glob": "^7.1.1",
		"mocha": "^3.2.0",
		"power-assert": "^1.4.0",
		"textlint": "^7.2.2",
		"textlint-ast-test": "^1.1.3",
		"textlint-rule-no-todo": "^2.0.0"
	},
	"dependencies": {
		"hast": "0.0.2",
		"structured-source": "^3.0.2",
		"traverse": "^0.6.6"
	}
};

/***/ })

});