webpackJsonp([5,12],{

/***/ "CgsV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _require=__webpack_require__("t67x"),ASTNodeTypes=_require.ASTNodeTypes,_exports={Document:ASTNodeTypes.Document,Paragraph:ASTNodeTypes.Paragraph,Str:ASTNodeTypes.Str,Break:ASTNodeTypes.Break};module.exports=_exports;

/***/ }),

/***/ "YnTJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function parseLine(n,e,r){return{type:Syntax.Str,raw:n,value:n,range:[r,r+n.length],loc:{start:{line:e,column:0},end:{line:e,column:n.length}}}}function createEndedBRNode(n){return{type:Syntax.Break,raw:"\n",value:"\n",range:[n.range[1],n.range[1]+1],loc:{start:{line:n.loc.end.line,column:n.loc.end.column},end:{line:n.loc.end.line,column:n.loc.end.column+1}}}}function createBRNode(n,e){return{type:Syntax.Break,raw:"\n",range:[e,e+1],loc:{start:{line:n,column:0},end:{line:n,column:1}}}}function createParagraph(n){var e=n[0],r=n[n.length-1];return{type:Syntax.Paragraph,raw:n.map(function(n){return n.raw}).join(""),range:[e.range[0],r.range[1]],loc:{start:{line:e.loc.start.line,column:e.loc.start.column},end:{line:r.loc.end.line,column:r.loc.end.column}},children:n}}function parse(n){var e=n.split(LINEBREAKE_MARK),r=0,t=e.length-1,a=function(n,e){return e===t&&""===n},l=function(n,e){return e!==t&&""===n},c=e.reduce(function(n,e,c){var o=c+1;if(a(e,c))return n;if(l(e,c)){var u=createBRNode(o,r);return r+=u.raw.length,n.push(u),n}var i=parseLine(e,o,r),g=createParagraph([i]);if(r+=g.raw.length,n.push(g),c!==t){var d=createEndedBRNode(g);r+=d.raw.length,n.push(d)}return n},[]);return{type:Syntax.Document,raw:n,range:[0,n.length],loc:{start:{line:1,column:0},end:{line:e.length,column:e[e.length-1].length}},children:c}}var Syntax=__webpack_require__("CgsV"),LINEBREAKE_MARK=/\r?\n/g;module.exports=parse;

/***/ }),

/***/ "t67x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var ASTNodeTypes;!function(e){e.Document="Document",e.Paragraph="Paragraph",e.BlockQuote="BlockQuote",e.ListItem="ListItem",e.List="List",e.Header="Header",e.CodeBlock="CodeBlock",e.HtmlBlock="HtmlBlock",e.ReferenceDef="ReferenceDef",e.HorizontalRule="HorizontalRule",e.Comment="Comment",e.Str="Str",e.Break="Break",e.Emphasis="Emphasis",e.Strong="Strong",e.Html="Html",e.Link="Link",e.Image="Image",e.Code="Code",e.Delete="Delete"}(ASTNodeTypes=exports.ASTNodeTypes||(exports.ASTNodeTypes={}));

/***/ }),

/***/ "t7cN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={parse:__webpack_require__("YnTJ"),Syntax:__webpack_require__("CgsV")};

/***/ })

});