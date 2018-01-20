webpackJsonp([2,12],{

/***/ "+A91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(t,e){for(var r=t.indexOf("\n",e);r>e&&" "===t.charAt(r-1);)r--;return r}module.exports=locate;

/***/ }),

/***/ "+DZ4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function blockquote(r,e,t){for(var i,o,n,u,c,C,l,_,f,h=this,s=h.offset,A=h.blockTokenizers,E=h.interruptBlockquote,k=r.now(),a=k.line,p=e.length,N=[],T=[],b=[],q=0;q<p&&((o=e.charAt(q))===C_SPACE||o===C_TAB);)q++;if(e.charAt(q)===C_GT){if(t)return!0;for(q=0;q<p;){for(u=e.indexOf(C_NEWLINE,q),l=q,_=!1,u===-1&&(u=p);q<p&&((o=e.charAt(q))===C_SPACE||o===C_TAB);)q++;if(e.charAt(q)===C_GT?(q++,_=!0,e.charAt(q)===C_SPACE&&q++):q=l,c=e.slice(q,u),!_&&!trim(c)){q=l;break}if(!_&&(n=e.slice(q),interrupt(E,A,h,[r,n,!0])))break;C=l===q?c:e.slice(l,u),b.push(q-l),N.push(C),T.push(c),q=u+1}for(q=-1,p=b.length,i=r(N.join(C_NEWLINE));++q<p;)s[a]=(s[a]||0)+b[q],a++;return f=h.enterBlock(),T=h.tokenizeBlock(T.join(C_NEWLINE),k),f(),i({type:"blockquote",children:T})}}var trim=__webpack_require__("QYuf"),interrupt=__webpack_require__("lHNd");module.exports=blockquote;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_GT=">";

/***/ }),

/***/ "+TXw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function bail(i){if(i)throw i}module.exports=bail;

/***/ }),

/***/ "+oRu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){return e.indexOf("~~",t)}module.exports=locate;

/***/ }),

/***/ "/Abr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function hexadecimal(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}module.exports=hexadecimal;

/***/ }),

/***/ "/EOA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function decimal(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=48&&t<=57}module.exports=decimal;

/***/ }),

/***/ "/Rpd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function trough(){function n(){function n(o){var e=l[++t],c=slice.call(arguments,0),i=c.slice(1),a=r.length,f=-1;if(o)return void u(o);for(;++f<a;)null!==i[f]&&void 0!==i[f]||(i[f]=r[f]);r=i,e?wrap(e,n).apply(null,r):u.apply(null,[null].concat(r))}var t=-1,r=slice.call(arguments,0,-1),u=arguments[arguments.length-1];if("function"!=typeof u)throw new Error("Expected function as last argument, not "+u);n.apply(null,[null].concat(r))}function t(n){if("function"!=typeof n)throw new Error("Expected `fn` to be a function, not "+n);return l.push(n),r}var l=[],r={};return r.run=n,r.use=t,r}function wrap(n,t){function l(){var t,l=slice.call(arguments,0),e=n.length>l.length;e&&l.push(r);try{t=n.apply(null,l)}catch(n){if(e&&o)throw n;return r(n)}e||(t&&"function"==typeof t.then?t.then(u,r):t instanceof Error?r(t):u(t))}function r(){o||(o=!0,t.apply(null,arguments))}function u(n){r(null,n)}var o;return l}module.exports=trough;var slice=[].slice;

/***/ }),

/***/ "15wF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function emphasis(e,r,i){var t,a,c,s,h,o,n,p=this,u=0,m=r.charAt(u);if(!(m!==C_ASTERISK&&m!==C_UNDERSCORE||(a=p.options.pedantic,h=m,c=m,o=r.length,u++,s="",m="",a&&whitespace(r.charAt(u)))))for(;u<o;){if(n=m,!((m=r.charAt(u))!==c||a&&whitespace(n))){if((m=r.charAt(++u))!==c){if(!trim(s)||n===c)return;if(!a&&c===C_UNDERSCORE&&word(m)){s+=c;continue}return!!i||(t=e.now(),t.column++,t.offset++,e(h+s+c)({type:"emphasis",children:p.tokenizeInline(s,t)}))}s+=c}a||"\\"!==m||(s+=m,m=r.charAt(++u)),s+=m,u++}}var trim=__webpack_require__("QYuf"),word=__webpack_require__("Nh09"),whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("Xs1Y");module.exports=emphasis,emphasis.locator=locate;var C_ASTERISK="*",C_UNDERSCORE="_";

/***/ }),

/***/ "18WG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function setextHeading(E,e,t){for(var A,_,r,n,S,C=this,i=E.now(),N=e.length,T=-1,a="";++T<N;){if((r=e.charAt(T))!==C_SPACE||T>=MAX_HEADING_INDENT){T--;break}a+=r}for(A="",_="";++T<N;){if((r=e.charAt(T))===C_NEWLINE){T--;break}r===C_SPACE||r===C_TAB?_+=r:(A+=_+r,_="")}if(i.column+=a.length,i.offset+=a.length,a+=A+_,r=e.charAt(++T),n=e.charAt(++T),r===C_NEWLINE&&SETEXT_MARKERS[n]){for(a+=r,_=n,S=SETEXT_MARKERS[n];++T<N;){if((r=e.charAt(T))!==n){if(r!==C_NEWLINE)return;T--;break}_+=r}return!!t||E(a+_)({type:"heading",depth:S,children:C.tokenizeInline(A,i)})}}module.exports=setextHeading;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_EQUALS="=",C_DASH="-",MAX_HEADING_INDENT=3,SETEXT_MARKERS={};SETEXT_MARKERS[C_EQUALS]=1,SETEXT_MARKERS[C_DASH]=2;

/***/ }),

/***/ "1P8C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function collapse(e){return String(e).replace(/\s+/g," ")}module.exports=collapse;

/***/ }),

/***/ "1fab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function indentedCode(e,r,t){for(var C,i,E,N=-1,a=r.length,_="",n="",A="",l="";++N<a;)if(C=r.charAt(N),E)if(E=!1,_+=A,n+=l,A="",l="",C===C_NEWLINE)A=C,l=C;else for(_+=C,n+=C;++N<a;){if(!(C=r.charAt(N))||C===C_NEWLINE){l=C,A=C;break}_+=C,n+=C}else if(C===C_SPACE&&r.charAt(N+1)===C&&r.charAt(N+2)===C&&r.charAt(N+3)===C)A+=CODE_INDENT,N+=3,E=!0;else if(C===C_TAB)A+=C,E=!0;else{for(i="";C===C_TAB||C===C_SPACE;)i+=C,C=r.charAt(++N);if(C!==C_NEWLINE)break;A+=i+C,l+=C}if(n)return!!t||e(_)({type:"code",lang:null,value:trim(n)})}var repeat=__webpack_require__("dVck"),trim=__webpack_require__("ZEGH");module.exports=indentedCode;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",CODE_INDENT_COUNT=4,CODE_INDENT=repeat(C_SPACE,CODE_INDENT_COUNT);

/***/ }),

/***/ "2GwR":
/***/ (function(module, exports) {

function Traverse(e){this.value=e}function walk(e,t,r){var o=[],n=[],a=!0;return function e(i){function c(){if("object"==typeof l.node&&null!==l.node){l.keys&&l.node_===l.node||(l.keys=objectKeys(l.node)),l.isLeaf=0==l.keys.length;for(var e=0;e<n.length;e++)if(n[e].node_===i){l.circular=n[e];break}}else l.isLeaf=!0,l.keys=null;l.notLeaf=!l.isLeaf,l.notRoot=!l.isRoot}var s=r?copy(i):i,u={},f=!0,l={node:s,node_:i,path:[].concat(o),parent:n[n.length-1],parents:n,key:o.slice(-1)[0],isRoot:0===o.length,level:o.length,circular:null,update:function(e,t){l.isRoot||(l.parent.node[l.key]=e),l.node=e,t&&(f=!1)},delete:function(e){delete l.parent.node[l.key],e&&(f=!1)},remove:function(e){isArray(l.parent.node)?l.parent.node.splice(l.key,1):delete l.parent.node[l.key],e&&(f=!1)},keys:null,before:function(e){u.before=e},after:function(e){u.after=e},pre:function(e){u.pre=e},post:function(e){u.post=e},stop:function(){a=!1},block:function(){f=!1}};if(!a)return l;c();var p=t.call(l,l.node);return void 0!==p&&l.update&&l.update(p),u.before&&u.before.call(l,l.node),f?("object"!=typeof l.node||null===l.node||l.circular||(n.push(l),c(),forEach(l.keys,function(t,n){o.push(t),u.pre&&u.pre.call(l,l.node[t],t);var a=e(l.node[t]);r&&hasOwnProperty.call(l.node,t)&&(l.node[t]=a.node),a.isLast=n==l.keys.length-1,a.isFirst=0==n,u.post&&u.post.call(l,a),o.pop()}),n.pop()),u.after&&u.after.call(l,l.node),l):l}(e).node}function copy(e){if("object"==typeof e&&null!==e){var t;if(isArray(e))t=[];else if(isDate(e))t=new Date(e.getTime?e.getTime():e);else if(isRegExp(e))t=new RegExp(e);else if(isError(e))t={message:e.message};else if(isBoolean(e))t=new Boolean(e);else if(isNumber(e))t=new Number(e);else if(isString(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},o=function(){};o.prototype=r,t=new o}return forEach(objectKeys(e),function(r){t[r]=e[r]}),t}return e}function toS(e){return Object.prototype.toString.call(e)}function isDate(e){return"[object Date]"===toS(e)}function isRegExp(e){return"[object RegExp]"===toS(e)}function isError(e){return"[object Error]"===toS(e)}function isBoolean(e){return"[object Boolean]"===toS(e)}function isNumber(e){return"[object Number]"===toS(e)}function isString(e){return"[object String]"===toS(e)}var traverse=module.exports=function(e){return new Traverse(e)};Traverse.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var o=e[r];if(!t||!hasOwnProperty.call(t,o)){t=void 0;break}t=t[o]}return t},Traverse.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var o=e[r];if(!t||!hasOwnProperty.call(t,o))return!1;t=t[o]}return!0},Traverse.prototype.set=function(e,t){for(var r=this.value,o=0;o<e.length-1;o++){var n=e[o];hasOwnProperty.call(r,n)||(r[n]={}),r=r[n]}return r[e[o]]=t,t},Traverse.prototype.map=function(e){return walk(this.value,e,!0)},Traverse.prototype.forEach=function(e){return this.value=walk(this.value,e,!1),this.value},Traverse.prototype.reduce=function(e,t){var r=1===arguments.length,o=r?this.value:t;return this.forEach(function(t){this.isRoot&&r||(o=e.call(this,o,t))}),o},Traverse.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},Traverse.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},Traverse.prototype.clone=function(){var e=[],t=[];return function r(o){for(var n=0;n<e.length;n++)if(e[n]===o)return t[n];if("object"==typeof o&&null!==o){var a=copy(o);return e.push(o),t.push(a),forEach(objectKeys(o),function(e){a[e]=r(o[e])}),e.pop(),t.pop(),a}return o}(this.value)};var objectKeys=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};forEach(objectKeys(Traverse.prototype),function(e){traverse[e]=function(t){var r=[].slice.call(arguments,1),o=new Traverse(t);return o[e].apply(o,r)}});var hasOwnProperty=Object.hasOwnProperty||function(e,t){return t in e};

/***/ }),

/***/ "2P8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function alphanumerical(a){return alphabetical(a)||decimal(a)}var alphabetical=__webpack_require__("FKYu"),decimal=__webpack_require__("/EOA");module.exports=alphanumerical;

/***/ }),

/***/ "2a6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function iterate(t,e,r){var a,i=-1;if(!t)throw new Error("Iterate requires that |this| not be "+t);if(!has(t,"length"))throw new Error("Iterate requires that |this| has a `length`");if("function"!=typeof e)throw new Error("`callback` must be a function");for(;++i<t.length;)i in t&&"number"==typeof(a=e.call(r,t[i],i,t))&&(a<0&&(i=0),i=a-1)}var has=__webpack_require__("XfW5");module.exports=iterate;

/***/ }),

/***/ "3JAh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function table(e){for(var a,l,t=this,r=t.options.looseTable,n=t.options.spacedTable,o=t.options.paddedTable,d=e.children,i=d.length,s=t.enterTable(),b=[];i--;)b[i]=t.all(d[i]);return s(),r?(a="",l=""):n?(a="| ",l=" |"):(a="|",l="|"),markdownTable(b,{align:e.align,pad:o,start:a,end:l,delimiter:n?" | ":"|"})}var markdownTable=__webpack_require__("REyP");module.exports=table;

/***/ }),

/***/ "3Sql":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){var n=e.indexOf("**",t),o=e.indexOf("__",t);return o===-1?n:n===-1?o:o<n?o:n}module.exports=locate;

/***/ }),

/***/ "4Gzi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function imageReference(e){return"!["+(this.encode(e.alt,e)||"")+"]"+label(e)}var label=__webpack_require__("tQYZ");module.exports=imageReference;

/***/ }),

/***/ "4c+y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){var n=e.indexOf("[",t),o=e.indexOf("![",t);return o===-1?n:n<o?n:o}module.exports=locate;

/***/ }),

/***/ "5FGK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function whitespace(e){return re.test("number"==typeof e?fromCode(e):e.charAt(0))}module.exports=whitespace;var fromCode=String.fromCharCode,re=/\s/;

/***/ }),

/***/ "6HgG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function hardBreak(r,e,a){for(var t,o=this,i=o.options.breaks,n=e.length,c=-1,u="";++c<n;){if("\n"===(t=e.charAt(c))){if(!i&&c<MIN_BREAK_LENGTH)return;return!!a||(u+=t,r(u)({type:"break"}))}if(" "!==t)return;u+=t}}var locate=__webpack_require__("+A91");module.exports=hardBreak,hardBreak.locator=locate;var MIN_BREAK_LENGTH=2;

/***/ }),

/***/ "9aN+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function setOptions(e){var t,o,s=this,r=s.options;if(null==e)e={};else{if("object"!=typeof e)throw new Error("Invalid value `"+e+"` for setting `options`");e=xtend(e)}for(t in defaults){if(o=e[t],null==o&&(o=r[t]),"blocks"!==t&&"boolean"!=typeof o||"blocks"===t&&"object"!=typeof o)throw new Error("Invalid value `"+o+"` for setting `options."+t+"`");e[t]=o}return s.options=e,s.escape=escapes(e),s}var xtend=__webpack_require__("q+vg"),escapes=__webpack_require__("vO+x"),defaults=__webpack_require__("dHqN");module.exports=setOptions;

/***/ }),

/***/ "9euR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function listItem(e,t,n,i){for(var r,l,s,d=this,a=d.options.listItemIndent,h=e.loose,u=e.children,o=u.length,c=[],p=-1;++p<o;)c[p]=d.visit(u[p],e);return r=CHECKBOX_MAP[e.checked]+c.join(h?"\n\n":"\n"),"1"===a||"mixed"===a&&r.indexOf("\n")===-1?(l=i.length+1,s=" "):(l=4*Math.ceil((i.length+1)/4),s=repeat(" ",l-i.length)),r=i+s+pad(r,l/4).slice(l),h&&t.children.length-1!==n&&(r+="\n"),r}var repeat=__webpack_require__("dVck"),pad=__webpack_require__("IjuO");module.exports=listItem;var CHECKBOX_MAP={undefined:"",null:"",true:"[x] ",false:"[ ] "};

/***/ }),

/***/ "Al96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var unified=__webpack_require__("xq7r"),parse=__webpack_require__("hIvf"),stringify=__webpack_require__("UNyq");module.exports=unified().use(parse).use(stringify).freeze();

/***/ }),

/***/ "Avon":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _require=__webpack_require__("t67x"),ASTNodeTypes=_require.ASTNodeTypes,_exports={root:ASTNodeTypes.Document,paragraph:ASTNodeTypes.Paragraph,blockquote:ASTNodeTypes.BlockQuote,listItem:ASTNodeTypes.ListItem,list:ASTNodeTypes.List,Bullet:"Bullet",heading:ASTNodeTypes.Header,code:ASTNodeTypes.CodeBlock,HtmlBlock:ASTNodeTypes.HtmlBlock,ReferenceDef:ASTNodeTypes.ReferenceDef,thematicBreak:ASTNodeTypes.HorizontalRule,text:ASTNodeTypes.Str,break:ASTNodeTypes.Break,emphasis:ASTNodeTypes.Emphasis,strong:ASTNodeTypes.Strong,html:ASTNodeTypes.Html,link:ASTNodeTypes.Link,image:ASTNodeTypes.Image,inlineCode:ASTNodeTypes.Code,delete:ASTNodeTypes.Delete,yaml:"Yaml",table:"Table",tableRow:"TableRow",tableCell:"TableCell",linkReference:"LinkReference",imageReference:"imageReference",definition:"Definition"};module.exports=_exports;

/***/ }),

/***/ "AySM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function yaml(e){var r=repeat("-",3);return r+(e.value?"\n"+e.value:"")+"\n"+r}var repeat=__webpack_require__("dVck");module.exports=yaml;

/***/ }),

/***/ "BBcX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function factory(t,r,n){return function(){var o=n||this,u=o[t];return o[t]=!r,function(){o[t]=u}}}module.exports=factory;

/***/ }),

/***/ "BPYs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function footnote(o){return"[^"+this.all(o).join("")+"]"}module.exports=footnote;

/***/ }),

/***/ "BUu3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function returner(r){return r}module.exports=returner;

/***/ }),

/***/ "CHTh":
/***/ (function(module, exports) {

module.exports = {
	"0": "�",
	"128": "€",
	"130": "‚",
	"131": "ƒ",
	"132": "„",
	"133": "…",
	"134": "†",
	"135": "‡",
	"136": "ˆ",
	"137": "‰",
	"138": "Š",
	"139": "‹",
	"140": "Œ",
	"142": "Ž",
	"145": "‘",
	"146": "’",
	"147": "“",
	"148": "”",
	"149": "•",
	"150": "–",
	"151": "—",
	"152": "˜",
	"153": "™",
	"154": "š",
	"155": "›",
	"156": "œ",
	"158": "ž",
	"159": "Ÿ"
};

/***/ }),

/***/ "CMzG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function factory(e){function t(t){for(var n=e.offset,i=t.line,r=[];++i&&i in n;)r.push((n[i]||0)+1);return{start:t,indent:r}}function n(t,n,i){3!==i&&e.file.message(t,n)}function i(i,r,o){entities(i,{position:t(r),warning:n,text:o,reference:o,textContext:e,referenceContext:e})}function r(e,i){return entities(e,{position:t(i),warning:n})}return i.raw=r,i}var entities=__webpack_require__("dTZW");module.exports=factory;

/***/ }),

/***/ "DiBB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function unorderedItems(e){for(var t=this,r=t.options.bullet,n=t.visitors.listItem,o=e.children,s=o.length,i=-1,l=[];++i<s;)l[i]=n.call(t,o[i],e,i,r);return l.join("\n")}module.exports=unorderedItems;

/***/ }),

/***/ "EYOx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function paragraph(i,r,e){for(var t,a,n,l,f,c=this,m=c.options,s=m.commonmark,u=m.gfm,E=c.blockTokenizers,o=c.interruptParagraph,p=r.indexOf(C_NEWLINE),_=r.length;p<_;){if(p===-1){p=_;break}if(r.charAt(p+1)===C_NEWLINE)break;if(s){for(l=0,t=p+1;t<_;){if((n=r.charAt(t))===C_TAB){l=TAB_SIZE;break}if(n!==C_SPACE)break;l++,t++}if(l>=TAB_SIZE){p=r.indexOf(C_NEWLINE,p+1);continue}}if(a=r.slice(p+1),interrupt(o,E,c,[i,a,!0]))break;if(E.list.call(c,i,a,!0)&&(c.inList||s||u&&!decimal(trim.left(a).charAt(0))))break;if(t=p,(p=r.indexOf(C_NEWLINE,p+1))!==-1&&""===trim(r.slice(t,p))){p=t;break}}return a=r.slice(0,p),""===trim(a)?(i(a),null):!!e||(f=i.now(),a=trimTrailingLines(a),i(a)({type:"paragraph",children:c.tokenizeInline(a,f)}))}var trim=__webpack_require__("QYuf"),decimal=__webpack_require__("/EOA"),trimTrailingLines=__webpack_require__("ZEGH"),interrupt=__webpack_require__("lHNd");module.exports=paragraph;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",TAB_SIZE=4;

/***/ }),

/***/ "EarI":
/***/ (function(module, exports) {

function parse(e){if(e=String(e),!(e.length>1e4)){var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*y;case"days":case"day":case"d":return a*d;case"hours":case"hour":case"hrs":case"hr":case"h":return a*h;case"minutes":case"minute":case"mins":case"min":case"m":return a*m;case"seconds":case"second":case"secs":case"sec":case"s":return a*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function fmtShort(e){return e>=d?Math.round(e/d)+"d":e>=h?Math.round(e/h)+"h":e>=m?Math.round(e/m)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function fmtLong(e){return plural(e,d,"day")||plural(e,h,"hour")||plural(e,m,"minute")||plural(e,s,"second")||e+" ms"}function plural(s,e,r){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+r:Math.ceil(s/e)+" "+r+"s"}var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;module.exports=function(s,e){e=e||{};var r=typeof s;if("string"===r&&s.length>0)return parse(s);if("number"===r&&isNaN(s)===!1)return e.long?fmtLong(s):fmtShort(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};

/***/ }),

/***/ "Eavi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function inlineHTML(t,i,a){var e,l,n=this,L=i.length;if(!("<"!==i.charAt(0)||L<3)&&(e=i.charAt(1),(alphabetical(e)||"?"===e||"!"===e||"/"===e)&&(l=i.match(tag))))return!!a||(l=l[0],!n.inLink&&EXPRESSION_HTML_LINK_OPEN.test(l)?n.inLink=!0:n.inLink&&EXPRESSION_HTML_LINK_CLOSE.test(l)&&(n.inLink=!1),t(l)({type:"html",value:l}))}var alphabetical=__webpack_require__("FKYu"),locate=__webpack_require__("uYcj"),tag=__webpack_require__("Ot24").tag;module.exports=inlineHTML,inlineHTML.locator=locate;var EXPRESSION_HTML_LINK_OPEN=/^<a /i,EXPRESSION_HTML_LINK_CLOSE=/^<\/a>/i;

/***/ }),

/***/ "FEa9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){return e.indexOf("`",t)}module.exports=locate;

/***/ }),

/***/ "FKYu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function alphabetical(t){var a="string"==typeof t?t.charCodeAt(0):t;return a>=97&&a<=122||a>=65&&a<=90}module.exports=alphabetical;

/***/ }),

/***/ "Fy0/":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function useColors(){return!("undefined"==typeof window||!window||void 0===window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function formatArgs(e){var o=this.useColors;if(e[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+e[0]+(o?"%c ":" ")+"+"+exports.humanize(this.diff),o){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var t=0,n=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(t++,"%c"===e&&(n=t))}),e.splice(n,0,r)}}function log(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(e){try{null==e?exports.storage.removeItem("debug"):exports.storage.debug=e}catch(e){}}function load(){var e;try{e=exports.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}function localstorage(){try{return window.localStorage}catch(e){}}exports=module.exports=__webpack_require__("vmzn"),exports.log=log,exports.formatArgs=formatArgs,exports.save=save,exports.load=load,exports.useColors=useColors,exports.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:localstorage(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},exports.enable(load());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("W2nU")))

/***/ }),

/***/ "GtcE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function root(o){return this.block(o)+"\n"}module.exports=root;

/***/ }),

/***/ "HwDa":
/***/ (function(module, exports) {

module.exports = [
	"cent",
	"copy",
	"divide",
	"gt",
	"lt",
	"not",
	"para",
	"times"
];

/***/ }),

/***/ "IBV9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function code(e,t){var r,a=this,n=e.value,i=a.options,o=i.fence,p=a.encode(e.lang||"",e);return p||i.fences||!n?(r=streak(n,o)+1,FENCE.test(n)&&(n=pad(n,1)),(r=repeat(o,Math.max(r,3)))+p+"\n"+n+"\n"+r):(t&&"listItem"===t.type&&"tab"!==i.listItemIndent&&i.pedantic&&a.file.fail("Cannot indent code properly. See http://git.io/vgFvT",e.position),pad(n,1))}var streak=__webpack_require__("bDIm"),repeat=__webpack_require__("dVck"),pad=__webpack_require__("IjuO");module.exports=code;var FENCE=/([`~])\1{2}/;

/***/ }),

/***/ "IHFu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function enter(e,r){var n=e.encode,t=e.escape,c=e.enterLink();return"shortcut"!==r.referenceType&&"collapsed"!==r.referenceType?c:(e.escape=returner,e.encode=returner,function(){e.encode=n,e.escape=t,c()})}var returner=__webpack_require__("BUu3");module.exports=enter;

/***/ }),

/***/ "IjuO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function pad(e,r){var t,n;for(e=e.split("\n"),t=e.length,n=repeat(" ",r*INDENT);t--;)0!==e[t].length&&(e[t]=n+e[t]);return e.join("\n")}var repeat=__webpack_require__("dVck");module.exports=pad;var INDENT=4;

/***/ }),

/***/ "J2sK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function atxHeading(t,A,C){for(var e,r,_,n=this,a=n.options,i=A.length+1,f=-1,h=t.now(),o="",c="";++f<i;){if((e=A.charAt(f))!==C_SPACE&&e!==C_TAB){f--;break}o+=e}for(_=0;++f<=i;){if((e=A.charAt(f))!==C_HASH){f--;break}o+=e,_++}if(!(_>MAX_ATX_COUNT)&&_&&(a.pedantic||A.charAt(f+1)!==C_HASH)){for(i=A.length+1,r="";++f<i;){if((e=A.charAt(f))!==C_SPACE&&e!==C_TAB){f--;break}r+=e}if(a.pedantic||0!==r.length||!e||e===C_NEWLINE){if(C)return!0;for(o+=r,r="",c="";++f<i&&(e=A.charAt(f))&&e!==C_NEWLINE;)if(e===C_SPACE||e===C_TAB||e===C_HASH){for(;e===C_SPACE||e===C_TAB;)r+=e,e=A.charAt(++f);for(;e===C_HASH;)r+=e,e=A.charAt(++f);for(;e===C_SPACE||e===C_TAB;)r+=e,e=A.charAt(++f);f--}else c+=r+e,r="";return h.column+=o.length,h.offset+=o.length,o+=c+r,t(o)({type:"heading",depth:_,children:n.tokenizeInline(c,h)})}}}module.exports=atxHeading;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_HASH="#",MAX_ATX_COUNT=6;

/***/ }),

/***/ "JLpa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function definition(C,r,e){for(var t,_,E,i,n,a,A,c,o=this,L=o.options.commonmark,h=0,N=r.length,f="";h<N&&((i=r.charAt(h))===C_SPACE||i===C_TAB);)f+=i,h++;if((i=r.charAt(h))===C_BRACKET_OPEN){for(h++,f+=i,E="";h<N&&(i=r.charAt(h))!==C_BRACKET_CLOSE;)i===C_BACKSLASH&&(E+=i,h++,i=r.charAt(h)),E+=i,h++;if(E&&r.charAt(h)===C_BRACKET_CLOSE&&r.charAt(h+1)===C_COLON){for(a=E,f+=E+C_BRACKET_CLOSE+C_COLON,h=f.length,E="";h<N&&((i=r.charAt(h))===C_TAB||i===C_SPACE||i===C_NEWLINE);)f+=i,h++;if(i=r.charAt(h),E="",t=f,i===C_LT){for(h++;h<N&&(i=r.charAt(h),isEnclosedURLCharacter(i));)E+=i,h++;if((i=r.charAt(h))===isEnclosedURLCharacter.delimiter)f+=C_LT+E+i,h++;else{if(L)return;h-=E.length+1,E=""}}if(!E){for(;h<N&&(i=r.charAt(h),isUnclosedURLCharacter(i));)E+=i,h++;f+=E}if(E){for(A=E,E="";h<N&&((i=r.charAt(h))===C_TAB||i===C_SPACE||i===C_NEWLINE);)E+=i,h++;if(i=r.charAt(h),n=null,i===C_DOUBLE_QUOTE?n=C_DOUBLE_QUOTE:i===C_SINGLE_QUOTE?n=C_SINGLE_QUOTE:i===C_PAREN_OPEN&&(n=C_PAREN_CLOSE),n){if(!E)return;for(f+=E+i,h=f.length,E="";h<N&&(i=r.charAt(h))!==n;){if(i===C_NEWLINE){if(h++,(i=r.charAt(h))===C_NEWLINE||i===n)return;E+=C_NEWLINE}E+=i,h++}if((i=r.charAt(h))!==n)return;_=f,f+=E+i,h++,c=E,E=""}else E="",h=f.length;for(;h<N&&((i=r.charAt(h))===C_TAB||i===C_SPACE);)f+=i,h++;return i=r.charAt(h),i&&i!==C_NEWLINE?void 0:!!e||(t=C(t).test().end,A=o.decode.raw(o.unescape(A),t),c&&(_=C(_).test().end,c=o.decode.raw(o.unescape(c),_)),C(f)({type:"definition",identifier:normalize(a),title:c||null,url:A}))}}}}function isEnclosedURLCharacter(C){return C!==C_GT&&C!==C_BRACKET_OPEN&&C!==C_BRACKET_CLOSE}function isUnclosedURLCharacter(C){return C!==C_BRACKET_OPEN&&C!==C_BRACKET_CLOSE&&!whitespace(C)}var whitespace=__webpack_require__("5FGK"),normalize=__webpack_require__("Ocd8");module.exports=definition,definition.notInList=!0,definition.notInBlock=!0;var C_DOUBLE_QUOTE='"',C_SINGLE_QUOTE="'",C_BACKSLASH="\\",C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_BRACKET_OPEN="[",C_BRACKET_CLOSE="]",C_PAREN_OPEN="(",C_PAREN_CLOSE=")",C_COLON=":",C_LT="<",C_GT=">";isEnclosedURLCharacter.delimiter=C_GT;

/***/ }),

/***/ "JbwY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function parse(e){var r=remark.parse(e),t=new StructuredSource(e);return traverse(r).forEach(function(r){if(this.notLeaf){if(r.type){var a=SyntaxMap[r.type];a?r.type=a:debug("replacedType : "+a+" , node.type: "+r.type)}if(r.position){var n=r.position,i={start:{line:n.start.line,column:n.start.column-1},end:{line:n.end.line,column:n.end.column-1}},o=t.locationToRange(i);r.loc=i,r.range=o,r.raw=e.slice(o[0],o[1]),Object.defineProperty(r,"position",{enumerable:!1,configurable:!1,writable:!1,value:n})}}}),r}var traverse=__webpack_require__("2GwR"),_require=__webpack_require__("t67x"),ASTNodeTypes=_require.ASTNodeTypes,StructuredSource=__webpack_require__("OeW3"),debug=__webpack_require__("Fy0/")("@textlint/markdown-to-ast"),SyntaxMap=__webpack_require__("Avon"),remarkAbstract=__webpack_require__("Al96"),remark=remarkAbstract();module.exports={parse:parse,Syntax:ASTNodeTypes};

/***/ }),

/***/ "Jn/e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function copy(t,e){for(var r,i=t.length,c=e.length,h=[],n=0,s=0;s<i;){for(r=s;s<i&&!PUNCTUATION.test(t.charAt(s));)s+=1;for(h.push(t.slice(r,s));n<c&&!PUNCTUATION.test(e.charAt(n));)n+=1;for(r=n;n<c&&PUNCTUATION.test(e.charAt(n));)"&"===e.charAt(n)&&(n+=entityPrefixLength(e.slice(n))),n+=1;for(h.push(e.slice(r,n));s<i&&PUNCTUATION.test(t.charAt(s));)s+=1}return h.join("")}var entityPrefixLength=__webpack_require__("i6r2");module.exports=copy;var PUNCTUATION=/[-!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~_]/;

/***/ }),

/***/ "LC74":
/***/ (function(module, exports) {

"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};

/***/ }),

/***/ "LHlb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function encode(e,r){var n=r||{},t=n.subset,a=t?toExpression(t):EXPRESSION_ESCAPE,c=n.escapeOnly,o=n.omitOptionalSemicolons;return e=e.replace(a,function(e,r,t){return one(e,t.charAt(r+1),n)}),t||c?e:e.replace(EXPRESSION_SURROGATE_PAIR,function(e,r,n){return toHexReference(1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536,n.charAt(r+2),o)}).replace(EXPRESSION_BMP,function(e,r,t){return one(e,t.charAt(r+1),n)})}function escape(e){return encode(e,{escapeOnly:!0,useNamedReferences:!0})}function one(e,r,n){var t,a,c=n.useShortestReferences,o=n.omitOptionalSemicolons;return(c||n.useNamedReferences)&&has(characters,e)&&(t=toNamed(characters[e],r,o,n.attribute)),!c&&t||(a=toHexReference(e.charCodeAt(0),r,o)),t&&(!c||t.length<a.length)?t:a}function toNamed(e,r,n,t){var a="&"+e;return n&&has(legacy,e)&&dangerous.indexOf(e)===-1&&(!t||r&&"="!==r&&!alphanumerical(r))?a:a+";"}function toHexReference(e,r,n){var t="&#x"+e.toString(16).toUpperCase();return n&&r&&!hexadecimal(r)?t:t+";"}function toExpression(e){return new RegExp("["+e.join("")+"]","g")}function construct(){var e,r={};for(e in entities)r[entities[e]]=e;return r}var entities=__webpack_require__("Ypgx"),legacy=__webpack_require__("P4LG"),has=__webpack_require__("XfW5"),hexadecimal=__webpack_require__("/Abr"),alphanumerical=__webpack_require__("2P8a"),dangerous=__webpack_require__("HwDa");module.exports=encode,encode.escape=escape;var escapes=['"',"'","<",">","&","`"],characters=construct(),EXPRESSION_ESCAPE=toExpression(escapes),EXPRESSION_SURROGATE_PAIR=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,EXPRESSION_BMP=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

/***/ }),

/***/ "LLx9":
/***/ (function(module, exports) {

module.exports = {
	"AEli": "Æ",
	"AElig": "Æ",
	"AM": "&",
	"AMP": "&",
	"Aacut": "Á",
	"Aacute": "Á",
	"Abreve": "Ă",
	"Acir": "Â",
	"Acirc": "Â",
	"Acy": "А",
	"Afr": "𝔄",
	"Agrav": "À",
	"Agrave": "À",
	"Alpha": "Α",
	"Amacr": "Ā",
	"And": "⩓",
	"Aogon": "Ą",
	"Aopf": "𝔸",
	"ApplyFunction": "⁡",
	"Arin": "Å",
	"Aring": "Å",
	"Ascr": "𝒜",
	"Assign": "≔",
	"Atild": "Ã",
	"Atilde": "Ã",
	"Aum": "Ä",
	"Auml": "Ä",
	"Backslash": "∖",
	"Barv": "⫧",
	"Barwed": "⌆",
	"Bcy": "Б",
	"Because": "∵",
	"Bernoullis": "ℬ",
	"Beta": "Β",
	"Bfr": "𝔅",
	"Bopf": "𝔹",
	"Breve": "˘",
	"Bscr": "ℬ",
	"Bumpeq": "≎",
	"CHcy": "Ч",
	"COP": "©",
	"COPY": "©",
	"Cacute": "Ć",
	"Cap": "⋒",
	"CapitalDifferentialD": "ⅅ",
	"Cayleys": "ℭ",
	"Ccaron": "Č",
	"Ccedi": "Ç",
	"Ccedil": "Ç",
	"Ccirc": "Ĉ",
	"Cconint": "∰",
	"Cdot": "Ċ",
	"Cedilla": "¸",
	"CenterDot": "·",
	"Cfr": "ℭ",
	"Chi": "Χ",
	"CircleDot": "⊙",
	"CircleMinus": "⊖",
	"CirclePlus": "⊕",
	"CircleTimes": "⊗",
	"ClockwiseContourIntegral": "∲",
	"CloseCurlyDoubleQuote": "”",
	"CloseCurlyQuote": "’",
	"Colon": "∷",
	"Colone": "⩴",
	"Congruent": "≡",
	"Conint": "∯",
	"ContourIntegral": "∮",
	"Copf": "ℂ",
	"Coproduct": "∐",
	"CounterClockwiseContourIntegral": "∳",
	"Cross": "⨯",
	"Cscr": "𝒞",
	"Cup": "⋓",
	"CupCap": "≍",
	"DD": "ⅅ",
	"DDotrahd": "⤑",
	"DJcy": "Ђ",
	"DScy": "Ѕ",
	"DZcy": "Џ",
	"Dagger": "‡",
	"Darr": "↡",
	"Dashv": "⫤",
	"Dcaron": "Ď",
	"Dcy": "Д",
	"Del": "∇",
	"Delta": "Δ",
	"Dfr": "𝔇",
	"DiacriticalAcute": "´",
	"DiacriticalDot": "˙",
	"DiacriticalDoubleAcute": "˝",
	"DiacriticalGrave": "`",
	"DiacriticalTilde": "˜",
	"Diamond": "⋄",
	"DifferentialD": "ⅆ",
	"Dopf": "𝔻",
	"Dot": "¨",
	"DotDot": "⃜",
	"DotEqual": "≐",
	"DoubleContourIntegral": "∯",
	"DoubleDot": "¨",
	"DoubleDownArrow": "⇓",
	"DoubleLeftArrow": "⇐",
	"DoubleLeftRightArrow": "⇔",
	"DoubleLeftTee": "⫤",
	"DoubleLongLeftArrow": "⟸",
	"DoubleLongLeftRightArrow": "⟺",
	"DoubleLongRightArrow": "⟹",
	"DoubleRightArrow": "⇒",
	"DoubleRightTee": "⊨",
	"DoubleUpArrow": "⇑",
	"DoubleUpDownArrow": "⇕",
	"DoubleVerticalBar": "∥",
	"DownArrow": "↓",
	"DownArrowBar": "⤓",
	"DownArrowUpArrow": "⇵",
	"DownBreve": "̑",
	"DownLeftRightVector": "⥐",
	"DownLeftTeeVector": "⥞",
	"DownLeftVector": "↽",
	"DownLeftVectorBar": "⥖",
	"DownRightTeeVector": "⥟",
	"DownRightVector": "⇁",
	"DownRightVectorBar": "⥗",
	"DownTee": "⊤",
	"DownTeeArrow": "↧",
	"Downarrow": "⇓",
	"Dscr": "𝒟",
	"Dstrok": "Đ",
	"ENG": "Ŋ",
	"ET": "Ð",
	"ETH": "Ð",
	"Eacut": "É",
	"Eacute": "É",
	"Ecaron": "Ě",
	"Ecir": "Ê",
	"Ecirc": "Ê",
	"Ecy": "Э",
	"Edot": "Ė",
	"Efr": "𝔈",
	"Egrav": "È",
	"Egrave": "È",
	"Element": "∈",
	"Emacr": "Ē",
	"EmptySmallSquare": "◻",
	"EmptyVerySmallSquare": "▫",
	"Eogon": "Ę",
	"Eopf": "𝔼",
	"Epsilon": "Ε",
	"Equal": "⩵",
	"EqualTilde": "≂",
	"Equilibrium": "⇌",
	"Escr": "ℰ",
	"Esim": "⩳",
	"Eta": "Η",
	"Eum": "Ë",
	"Euml": "Ë",
	"Exists": "∃",
	"ExponentialE": "ⅇ",
	"Fcy": "Ф",
	"Ffr": "𝔉",
	"FilledSmallSquare": "◼",
	"FilledVerySmallSquare": "▪",
	"Fopf": "𝔽",
	"ForAll": "∀",
	"Fouriertrf": "ℱ",
	"Fscr": "ℱ",
	"GJcy": "Ѓ",
	"G": ">",
	"GT": ">",
	"Gamma": "Γ",
	"Gammad": "Ϝ",
	"Gbreve": "Ğ",
	"Gcedil": "Ģ",
	"Gcirc": "Ĝ",
	"Gcy": "Г",
	"Gdot": "Ġ",
	"Gfr": "𝔊",
	"Gg": "⋙",
	"Gopf": "𝔾",
	"GreaterEqual": "≥",
	"GreaterEqualLess": "⋛",
	"GreaterFullEqual": "≧",
	"GreaterGreater": "⪢",
	"GreaterLess": "≷",
	"GreaterSlantEqual": "⩾",
	"GreaterTilde": "≳",
	"Gscr": "𝒢",
	"Gt": "≫",
	"HARDcy": "Ъ",
	"Hacek": "ˇ",
	"Hat": "^",
	"Hcirc": "Ĥ",
	"Hfr": "ℌ",
	"HilbertSpace": "ℋ",
	"Hopf": "ℍ",
	"HorizontalLine": "─",
	"Hscr": "ℋ",
	"Hstrok": "Ħ",
	"HumpDownHump": "≎",
	"HumpEqual": "≏",
	"IEcy": "Е",
	"IJlig": "Ĳ",
	"IOcy": "Ё",
	"Iacut": "Í",
	"Iacute": "Í",
	"Icir": "Î",
	"Icirc": "Î",
	"Icy": "И",
	"Idot": "İ",
	"Ifr": "ℑ",
	"Igrav": "Ì",
	"Igrave": "Ì",
	"Im": "ℑ",
	"Imacr": "Ī",
	"ImaginaryI": "ⅈ",
	"Implies": "⇒",
	"Int": "∬",
	"Integral": "∫",
	"Intersection": "⋂",
	"InvisibleComma": "⁣",
	"InvisibleTimes": "⁢",
	"Iogon": "Į",
	"Iopf": "𝕀",
	"Iota": "Ι",
	"Iscr": "ℐ",
	"Itilde": "Ĩ",
	"Iukcy": "І",
	"Ium": "Ï",
	"Iuml": "Ï",
	"Jcirc": "Ĵ",
	"Jcy": "Й",
	"Jfr": "𝔍",
	"Jopf": "𝕁",
	"Jscr": "𝒥",
	"Jsercy": "Ј",
	"Jukcy": "Є",
	"KHcy": "Х",
	"KJcy": "Ќ",
	"Kappa": "Κ",
	"Kcedil": "Ķ",
	"Kcy": "К",
	"Kfr": "𝔎",
	"Kopf": "𝕂",
	"Kscr": "𝒦",
	"LJcy": "Љ",
	"L": "<",
	"LT": "<",
	"Lacute": "Ĺ",
	"Lambda": "Λ",
	"Lang": "⟪",
	"Laplacetrf": "ℒ",
	"Larr": "↞",
	"Lcaron": "Ľ",
	"Lcedil": "Ļ",
	"Lcy": "Л",
	"LeftAngleBracket": "⟨",
	"LeftArrow": "←",
	"LeftArrowBar": "⇤",
	"LeftArrowRightArrow": "⇆",
	"LeftCeiling": "⌈",
	"LeftDoubleBracket": "⟦",
	"LeftDownTeeVector": "⥡",
	"LeftDownVector": "⇃",
	"LeftDownVectorBar": "⥙",
	"LeftFloor": "⌊",
	"LeftRightArrow": "↔",
	"LeftRightVector": "⥎",
	"LeftTee": "⊣",
	"LeftTeeArrow": "↤",
	"LeftTeeVector": "⥚",
	"LeftTriangle": "⊲",
	"LeftTriangleBar": "⧏",
	"LeftTriangleEqual": "⊴",
	"LeftUpDownVector": "⥑",
	"LeftUpTeeVector": "⥠",
	"LeftUpVector": "↿",
	"LeftUpVectorBar": "⥘",
	"LeftVector": "↼",
	"LeftVectorBar": "⥒",
	"Leftarrow": "⇐",
	"Leftrightarrow": "⇔",
	"LessEqualGreater": "⋚",
	"LessFullEqual": "≦",
	"LessGreater": "≶",
	"LessLess": "⪡",
	"LessSlantEqual": "⩽",
	"LessTilde": "≲",
	"Lfr": "𝔏",
	"Ll": "⋘",
	"Lleftarrow": "⇚",
	"Lmidot": "Ŀ",
	"LongLeftArrow": "⟵",
	"LongLeftRightArrow": "⟷",
	"LongRightArrow": "⟶",
	"Longleftarrow": "⟸",
	"Longleftrightarrow": "⟺",
	"Longrightarrow": "⟹",
	"Lopf": "𝕃",
	"LowerLeftArrow": "↙",
	"LowerRightArrow": "↘",
	"Lscr": "ℒ",
	"Lsh": "↰",
	"Lstrok": "Ł",
	"Lt": "≪",
	"Map": "⤅",
	"Mcy": "М",
	"MediumSpace": " ",
	"Mellintrf": "ℳ",
	"Mfr": "𝔐",
	"MinusPlus": "∓",
	"Mopf": "𝕄",
	"Mscr": "ℳ",
	"Mu": "Μ",
	"NJcy": "Њ",
	"Nacute": "Ń",
	"Ncaron": "Ň",
	"Ncedil": "Ņ",
	"Ncy": "Н",
	"NegativeMediumSpace": "​",
	"NegativeThickSpace": "​",
	"NegativeThinSpace": "​",
	"NegativeVeryThinSpace": "​",
	"NestedGreaterGreater": "≫",
	"NestedLessLess": "≪",
	"NewLine": "\n",
	"Nfr": "𝔑",
	"NoBreak": "⁠",
	"NonBreakingSpace": " ",
	"Nopf": "ℕ",
	"Not": "⫬",
	"NotCongruent": "≢",
	"NotCupCap": "≭",
	"NotDoubleVerticalBar": "∦",
	"NotElement": "∉",
	"NotEqual": "≠",
	"NotEqualTilde": "≂̸",
	"NotExists": "∄",
	"NotGreater": "≯",
	"NotGreaterEqual": "≱",
	"NotGreaterFullEqual": "≧̸",
	"NotGreaterGreater": "≫̸",
	"NotGreaterLess": "≹",
	"NotGreaterSlantEqual": "⩾̸",
	"NotGreaterTilde": "≵",
	"NotHumpDownHump": "≎̸",
	"NotHumpEqual": "≏̸",
	"NotLeftTriangle": "⋪",
	"NotLeftTriangleBar": "⧏̸",
	"NotLeftTriangleEqual": "⋬",
	"NotLess": "≮",
	"NotLessEqual": "≰",
	"NotLessGreater": "≸",
	"NotLessLess": "≪̸",
	"NotLessSlantEqual": "⩽̸",
	"NotLessTilde": "≴",
	"NotNestedGreaterGreater": "⪢̸",
	"NotNestedLessLess": "⪡̸",
	"NotPrecedes": "⊀",
	"NotPrecedesEqual": "⪯̸",
	"NotPrecedesSlantEqual": "⋠",
	"NotReverseElement": "∌",
	"NotRightTriangle": "⋫",
	"NotRightTriangleBar": "⧐̸",
	"NotRightTriangleEqual": "⋭",
	"NotSquareSubset": "⊏̸",
	"NotSquareSubsetEqual": "⋢",
	"NotSquareSuperset": "⊐̸",
	"NotSquareSupersetEqual": "⋣",
	"NotSubset": "⊂⃒",
	"NotSubsetEqual": "⊈",
	"NotSucceeds": "⊁",
	"NotSucceedsEqual": "⪰̸",
	"NotSucceedsSlantEqual": "⋡",
	"NotSucceedsTilde": "≿̸",
	"NotSuperset": "⊃⃒",
	"NotSupersetEqual": "⊉",
	"NotTilde": "≁",
	"NotTildeEqual": "≄",
	"NotTildeFullEqual": "≇",
	"NotTildeTilde": "≉",
	"NotVerticalBar": "∤",
	"Nscr": "𝒩",
	"Ntild": "Ñ",
	"Ntilde": "Ñ",
	"Nu": "Ν",
	"OElig": "Œ",
	"Oacut": "Ó",
	"Oacute": "Ó",
	"Ocir": "Ô",
	"Ocirc": "Ô",
	"Ocy": "О",
	"Odblac": "Ő",
	"Ofr": "𝔒",
	"Ograv": "Ò",
	"Ograve": "Ò",
	"Omacr": "Ō",
	"Omega": "Ω",
	"Omicron": "Ο",
	"Oopf": "𝕆",
	"OpenCurlyDoubleQuote": "“",
	"OpenCurlyQuote": "‘",
	"Or": "⩔",
	"Oscr": "𝒪",
	"Oslas": "Ø",
	"Oslash": "Ø",
	"Otild": "Õ",
	"Otilde": "Õ",
	"Otimes": "⨷",
	"Oum": "Ö",
	"Ouml": "Ö",
	"OverBar": "‾",
	"OverBrace": "⏞",
	"OverBracket": "⎴",
	"OverParenthesis": "⏜",
	"PartialD": "∂",
	"Pcy": "П",
	"Pfr": "𝔓",
	"Phi": "Φ",
	"Pi": "Π",
	"PlusMinus": "±",
	"Poincareplane": "ℌ",
	"Popf": "ℙ",
	"Pr": "⪻",
	"Precedes": "≺",
	"PrecedesEqual": "⪯",
	"PrecedesSlantEqual": "≼",
	"PrecedesTilde": "≾",
	"Prime": "″",
	"Product": "∏",
	"Proportion": "∷",
	"Proportional": "∝",
	"Pscr": "𝒫",
	"Psi": "Ψ",
	"QUO": "\"",
	"QUOT": "\"",
	"Qfr": "𝔔",
	"Qopf": "ℚ",
	"Qscr": "𝒬",
	"RBarr": "⤐",
	"RE": "®",
	"REG": "®",
	"Racute": "Ŕ",
	"Rang": "⟫",
	"Rarr": "↠",
	"Rarrtl": "⤖",
	"Rcaron": "Ř",
	"Rcedil": "Ŗ",
	"Rcy": "Р",
	"Re": "ℜ",
	"ReverseElement": "∋",
	"ReverseEquilibrium": "⇋",
	"ReverseUpEquilibrium": "⥯",
	"Rfr": "ℜ",
	"Rho": "Ρ",
	"RightAngleBracket": "⟩",
	"RightArrow": "→",
	"RightArrowBar": "⇥",
	"RightArrowLeftArrow": "⇄",
	"RightCeiling": "⌉",
	"RightDoubleBracket": "⟧",
	"RightDownTeeVector": "⥝",
	"RightDownVector": "⇂",
	"RightDownVectorBar": "⥕",
	"RightFloor": "⌋",
	"RightTee": "⊢",
	"RightTeeArrow": "↦",
	"RightTeeVector": "⥛",
	"RightTriangle": "⊳",
	"RightTriangleBar": "⧐",
	"RightTriangleEqual": "⊵",
	"RightUpDownVector": "⥏",
	"RightUpTeeVector": "⥜",
	"RightUpVector": "↾",
	"RightUpVectorBar": "⥔",
	"RightVector": "⇀",
	"RightVectorBar": "⥓",
	"Rightarrow": "⇒",
	"Ropf": "ℝ",
	"RoundImplies": "⥰",
	"Rrightarrow": "⇛",
	"Rscr": "ℛ",
	"Rsh": "↱",
	"RuleDelayed": "⧴",
	"SHCHcy": "Щ",
	"SHcy": "Ш",
	"SOFTcy": "Ь",
	"Sacute": "Ś",
	"Sc": "⪼",
	"Scaron": "Š",
	"Scedil": "Ş",
	"Scirc": "Ŝ",
	"Scy": "С",
	"Sfr": "𝔖",
	"ShortDownArrow": "↓",
	"ShortLeftArrow": "←",
	"ShortRightArrow": "→",
	"ShortUpArrow": "↑",
	"Sigma": "Σ",
	"SmallCircle": "∘",
	"Sopf": "𝕊",
	"Sqrt": "√",
	"Square": "□",
	"SquareIntersection": "⊓",
	"SquareSubset": "⊏",
	"SquareSubsetEqual": "⊑",
	"SquareSuperset": "⊐",
	"SquareSupersetEqual": "⊒",
	"SquareUnion": "⊔",
	"Sscr": "𝒮",
	"Star": "⋆",
	"Sub": "⋐",
	"Subset": "⋐",
	"SubsetEqual": "⊆",
	"Succeeds": "≻",
	"SucceedsEqual": "⪰",
	"SucceedsSlantEqual": "≽",
	"SucceedsTilde": "≿",
	"SuchThat": "∋",
	"Sum": "∑",
	"Sup": "⋑",
	"Superset": "⊃",
	"SupersetEqual": "⊇",
	"Supset": "⋑",
	"THOR": "Þ",
	"THORN": "Þ",
	"TRADE": "™",
	"TSHcy": "Ћ",
	"TScy": "Ц",
	"Tab": "\t",
	"Tau": "Τ",
	"Tcaron": "Ť",
	"Tcedil": "Ţ",
	"Tcy": "Т",
	"Tfr": "𝔗",
	"Therefore": "∴",
	"Theta": "Θ",
	"ThickSpace": "  ",
	"ThinSpace": " ",
	"Tilde": "∼",
	"TildeEqual": "≃",
	"TildeFullEqual": "≅",
	"TildeTilde": "≈",
	"Topf": "𝕋",
	"TripleDot": "⃛",
	"Tscr": "𝒯",
	"Tstrok": "Ŧ",
	"Uacut": "Ú",
	"Uacute": "Ú",
	"Uarr": "↟",
	"Uarrocir": "⥉",
	"Ubrcy": "Ў",
	"Ubreve": "Ŭ",
	"Ucir": "Û",
	"Ucirc": "Û",
	"Ucy": "У",
	"Udblac": "Ű",
	"Ufr": "𝔘",
	"Ugrav": "Ù",
	"Ugrave": "Ù",
	"Umacr": "Ū",
	"UnderBar": "_",
	"UnderBrace": "⏟",
	"UnderBracket": "⎵",
	"UnderParenthesis": "⏝",
	"Union": "⋃",
	"UnionPlus": "⊎",
	"Uogon": "Ų",
	"Uopf": "𝕌",
	"UpArrow": "↑",
	"UpArrowBar": "⤒",
	"UpArrowDownArrow": "⇅",
	"UpDownArrow": "↕",
	"UpEquilibrium": "⥮",
	"UpTee": "⊥",
	"UpTeeArrow": "↥",
	"Uparrow": "⇑",
	"Updownarrow": "⇕",
	"UpperLeftArrow": "↖",
	"UpperRightArrow": "↗",
	"Upsi": "ϒ",
	"Upsilon": "Υ",
	"Uring": "Ů",
	"Uscr": "𝒰",
	"Utilde": "Ũ",
	"Uum": "Ü",
	"Uuml": "Ü",
	"VDash": "⊫",
	"Vbar": "⫫",
	"Vcy": "В",
	"Vdash": "⊩",
	"Vdashl": "⫦",
	"Vee": "⋁",
	"Verbar": "‖",
	"Vert": "‖",
	"VerticalBar": "∣",
	"VerticalLine": "|",
	"VerticalSeparator": "❘",
	"VerticalTilde": "≀",
	"VeryThinSpace": " ",
	"Vfr": "𝔙",
	"Vopf": "𝕍",
	"Vscr": "𝒱",
	"Vvdash": "⊪",
	"Wcirc": "Ŵ",
	"Wedge": "⋀",
	"Wfr": "𝔚",
	"Wopf": "𝕎",
	"Wscr": "𝒲",
	"Xfr": "𝔛",
	"Xi": "Ξ",
	"Xopf": "𝕏",
	"Xscr": "𝒳",
	"YAcy": "Я",
	"YIcy": "Ї",
	"YUcy": "Ю",
	"Yacut": "Ý",
	"Yacute": "Ý",
	"Ycirc": "Ŷ",
	"Ycy": "Ы",
	"Yfr": "𝔜",
	"Yopf": "𝕐",
	"Yscr": "𝒴",
	"Yuml": "Ÿ",
	"ZHcy": "Ж",
	"Zacute": "Ź",
	"Zcaron": "Ž",
	"Zcy": "З",
	"Zdot": "Ż",
	"ZeroWidthSpace": "​",
	"Zeta": "Ζ",
	"Zfr": "ℨ",
	"Zopf": "ℤ",
	"Zscr": "𝒵",
	"aacut": "á",
	"aacute": "á",
	"abreve": "ă",
	"ac": "∾",
	"acE": "∾̳",
	"acd": "∿",
	"acir": "â",
	"acirc": "â",
	"acut": "´",
	"acute": "´",
	"acy": "а",
	"aeli": "æ",
	"aelig": "æ",
	"af": "⁡",
	"afr": "𝔞",
	"agrav": "à",
	"agrave": "à",
	"alefsym": "ℵ",
	"aleph": "ℵ",
	"alpha": "α",
	"amacr": "ā",
	"amalg": "⨿",
	"am": "&",
	"amp": "&",
	"and": "∧",
	"andand": "⩕",
	"andd": "⩜",
	"andslope": "⩘",
	"andv": "⩚",
	"ang": "∠",
	"ange": "⦤",
	"angle": "∠",
	"angmsd": "∡",
	"angmsdaa": "⦨",
	"angmsdab": "⦩",
	"angmsdac": "⦪",
	"angmsdad": "⦫",
	"angmsdae": "⦬",
	"angmsdaf": "⦭",
	"angmsdag": "⦮",
	"angmsdah": "⦯",
	"angrt": "∟",
	"angrtvb": "⊾",
	"angrtvbd": "⦝",
	"angsph": "∢",
	"angst": "Å",
	"angzarr": "⍼",
	"aogon": "ą",
	"aopf": "𝕒",
	"ap": "≈",
	"apE": "⩰",
	"apacir": "⩯",
	"ape": "≊",
	"apid": "≋",
	"apos": "'",
	"approx": "≈",
	"approxeq": "≊",
	"arin": "å",
	"aring": "å",
	"ascr": "𝒶",
	"ast": "*",
	"asymp": "≈",
	"asympeq": "≍",
	"atild": "ã",
	"atilde": "ã",
	"aum": "ä",
	"auml": "ä",
	"awconint": "∳",
	"awint": "⨑",
	"bNot": "⫭",
	"backcong": "≌",
	"backepsilon": "϶",
	"backprime": "‵",
	"backsim": "∽",
	"backsimeq": "⋍",
	"barvee": "⊽",
	"barwed": "⌅",
	"barwedge": "⌅",
	"bbrk": "⎵",
	"bbrktbrk": "⎶",
	"bcong": "≌",
	"bcy": "б",
	"bdquo": "„",
	"becaus": "∵",
	"because": "∵",
	"bemptyv": "⦰",
	"bepsi": "϶",
	"bernou": "ℬ",
	"beta": "β",
	"beth": "ℶ",
	"between": "≬",
	"bfr": "𝔟",
	"bigcap": "⋂",
	"bigcirc": "◯",
	"bigcup": "⋃",
	"bigodot": "⨀",
	"bigoplus": "⨁",
	"bigotimes": "⨂",
	"bigsqcup": "⨆",
	"bigstar": "★",
	"bigtriangledown": "▽",
	"bigtriangleup": "△",
	"biguplus": "⨄",
	"bigvee": "⋁",
	"bigwedge": "⋀",
	"bkarow": "⤍",
	"blacklozenge": "⧫",
	"blacksquare": "▪",
	"blacktriangle": "▴",
	"blacktriangledown": "▾",
	"blacktriangleleft": "◂",
	"blacktriangleright": "▸",
	"blank": "␣",
	"blk12": "▒",
	"blk14": "░",
	"blk34": "▓",
	"block": "█",
	"bne": "=⃥",
	"bnequiv": "≡⃥",
	"bnot": "⌐",
	"bopf": "𝕓",
	"bot": "⊥",
	"bottom": "⊥",
	"bowtie": "⋈",
	"boxDL": "╗",
	"boxDR": "╔",
	"boxDl": "╖",
	"boxDr": "╓",
	"boxH": "═",
	"boxHD": "╦",
	"boxHU": "╩",
	"boxHd": "╤",
	"boxHu": "╧",
	"boxUL": "╝",
	"boxUR": "╚",
	"boxUl": "╜",
	"boxUr": "╙",
	"boxV": "║",
	"boxVH": "╬",
	"boxVL": "╣",
	"boxVR": "╠",
	"boxVh": "╫",
	"boxVl": "╢",
	"boxVr": "╟",
	"boxbox": "⧉",
	"boxdL": "╕",
	"boxdR": "╒",
	"boxdl": "┐",
	"boxdr": "┌",
	"boxh": "─",
	"boxhD": "╥",
	"boxhU": "╨",
	"boxhd": "┬",
	"boxhu": "┴",
	"boxminus": "⊟",
	"boxplus": "⊞",
	"boxtimes": "⊠",
	"boxuL": "╛",
	"boxuR": "╘",
	"boxul": "┘",
	"boxur": "└",
	"boxv": "│",
	"boxvH": "╪",
	"boxvL": "╡",
	"boxvR": "╞",
	"boxvh": "┼",
	"boxvl": "┤",
	"boxvr": "├",
	"bprime": "‵",
	"breve": "˘",
	"brvba": "¦",
	"brvbar": "¦",
	"bscr": "𝒷",
	"bsemi": "⁏",
	"bsim": "∽",
	"bsime": "⋍",
	"bsol": "\\",
	"bsolb": "⧅",
	"bsolhsub": "⟈",
	"bull": "•",
	"bullet": "•",
	"bump": "≎",
	"bumpE": "⪮",
	"bumpe": "≏",
	"bumpeq": "≏",
	"cacute": "ć",
	"cap": "∩",
	"capand": "⩄",
	"capbrcup": "⩉",
	"capcap": "⩋",
	"capcup": "⩇",
	"capdot": "⩀",
	"caps": "∩︀",
	"caret": "⁁",
	"caron": "ˇ",
	"ccaps": "⩍",
	"ccaron": "č",
	"ccedi": "ç",
	"ccedil": "ç",
	"ccirc": "ĉ",
	"ccups": "⩌",
	"ccupssm": "⩐",
	"cdot": "ċ",
	"cedi": "¸",
	"cedil": "¸",
	"cemptyv": "⦲",
	"cen": "¢",
	"cent": "¢",
	"centerdot": "·",
	"cfr": "𝔠",
	"chcy": "ч",
	"check": "✓",
	"checkmark": "✓",
	"chi": "χ",
	"cir": "○",
	"cirE": "⧃",
	"circ": "ˆ",
	"circeq": "≗",
	"circlearrowleft": "↺",
	"circlearrowright": "↻",
	"circledR": "®",
	"circledS": "Ⓢ",
	"circledast": "⊛",
	"circledcirc": "⊚",
	"circleddash": "⊝",
	"cire": "≗",
	"cirfnint": "⨐",
	"cirmid": "⫯",
	"cirscir": "⧂",
	"clubs": "♣",
	"clubsuit": "♣",
	"colon": ":",
	"colone": "≔",
	"coloneq": "≔",
	"comma": ",",
	"commat": "@",
	"comp": "∁",
	"compfn": "∘",
	"complement": "∁",
	"complexes": "ℂ",
	"cong": "≅",
	"congdot": "⩭",
	"conint": "∮",
	"copf": "𝕔",
	"coprod": "∐",
	"cop": "©",
	"copy": "©",
	"copysr": "℗",
	"crarr": "↵",
	"cross": "✗",
	"cscr": "𝒸",
	"csub": "⫏",
	"csube": "⫑",
	"csup": "⫐",
	"csupe": "⫒",
	"ctdot": "⋯",
	"cudarrl": "⤸",
	"cudarrr": "⤵",
	"cuepr": "⋞",
	"cuesc": "⋟",
	"cularr": "↶",
	"cularrp": "⤽",
	"cup": "∪",
	"cupbrcap": "⩈",
	"cupcap": "⩆",
	"cupcup": "⩊",
	"cupdot": "⊍",
	"cupor": "⩅",
	"cups": "∪︀",
	"curarr": "↷",
	"curarrm": "⤼",
	"curlyeqprec": "⋞",
	"curlyeqsucc": "⋟",
	"curlyvee": "⋎",
	"curlywedge": "⋏",
	"curre": "¤",
	"curren": "¤",
	"curvearrowleft": "↶",
	"curvearrowright": "↷",
	"cuvee": "⋎",
	"cuwed": "⋏",
	"cwconint": "∲",
	"cwint": "∱",
	"cylcty": "⌭",
	"dArr": "⇓",
	"dHar": "⥥",
	"dagger": "†",
	"daleth": "ℸ",
	"darr": "↓",
	"dash": "‐",
	"dashv": "⊣",
	"dbkarow": "⤏",
	"dblac": "˝",
	"dcaron": "ď",
	"dcy": "д",
	"dd": "ⅆ",
	"ddagger": "‡",
	"ddarr": "⇊",
	"ddotseq": "⩷",
	"de": "°",
	"deg": "°",
	"delta": "δ",
	"demptyv": "⦱",
	"dfisht": "⥿",
	"dfr": "𝔡",
	"dharl": "⇃",
	"dharr": "⇂",
	"diam": "⋄",
	"diamond": "⋄",
	"diamondsuit": "♦",
	"diams": "♦",
	"die": "¨",
	"digamma": "ϝ",
	"disin": "⋲",
	"div": "÷",
	"divid": "÷",
	"divide": "÷",
	"divideontimes": "⋇",
	"divonx": "⋇",
	"djcy": "ђ",
	"dlcorn": "⌞",
	"dlcrop": "⌍",
	"dollar": "$",
	"dopf": "𝕕",
	"dot": "˙",
	"doteq": "≐",
	"doteqdot": "≑",
	"dotminus": "∸",
	"dotplus": "∔",
	"dotsquare": "⊡",
	"doublebarwedge": "⌆",
	"downarrow": "↓",
	"downdownarrows": "⇊",
	"downharpoonleft": "⇃",
	"downharpoonright": "⇂",
	"drbkarow": "⤐",
	"drcorn": "⌟",
	"drcrop": "⌌",
	"dscr": "𝒹",
	"dscy": "ѕ",
	"dsol": "⧶",
	"dstrok": "đ",
	"dtdot": "⋱",
	"dtri": "▿",
	"dtrif": "▾",
	"duarr": "⇵",
	"duhar": "⥯",
	"dwangle": "⦦",
	"dzcy": "џ",
	"dzigrarr": "⟿",
	"eDDot": "⩷",
	"eDot": "≑",
	"eacut": "é",
	"eacute": "é",
	"easter": "⩮",
	"ecaron": "ě",
	"ecir": "ê",
	"ecirc": "ê",
	"ecolon": "≕",
	"ecy": "э",
	"edot": "ė",
	"ee": "ⅇ",
	"efDot": "≒",
	"efr": "𝔢",
	"eg": "⪚",
	"egrav": "è",
	"egrave": "è",
	"egs": "⪖",
	"egsdot": "⪘",
	"el": "⪙",
	"elinters": "⏧",
	"ell": "ℓ",
	"els": "⪕",
	"elsdot": "⪗",
	"emacr": "ē",
	"empty": "∅",
	"emptyset": "∅",
	"emptyv": "∅",
	"emsp13": " ",
	"emsp14": " ",
	"emsp": " ",
	"eng": "ŋ",
	"ensp": " ",
	"eogon": "ę",
	"eopf": "𝕖",
	"epar": "⋕",
	"eparsl": "⧣",
	"eplus": "⩱",
	"epsi": "ε",
	"epsilon": "ε",
	"epsiv": "ϵ",
	"eqcirc": "≖",
	"eqcolon": "≕",
	"eqsim": "≂",
	"eqslantgtr": "⪖",
	"eqslantless": "⪕",
	"equals": "=",
	"equest": "≟",
	"equiv": "≡",
	"equivDD": "⩸",
	"eqvparsl": "⧥",
	"erDot": "≓",
	"erarr": "⥱",
	"escr": "ℯ",
	"esdot": "≐",
	"esim": "≂",
	"eta": "η",
	"et": "ð",
	"eth": "ð",
	"eum": "ë",
	"euml": "ë",
	"euro": "€",
	"excl": "!",
	"exist": "∃",
	"expectation": "ℰ",
	"exponentiale": "ⅇ",
	"fallingdotseq": "≒",
	"fcy": "ф",
	"female": "♀",
	"ffilig": "ﬃ",
	"fflig": "ﬀ",
	"ffllig": "ﬄ",
	"ffr": "𝔣",
	"filig": "ﬁ",
	"fjlig": "fj",
	"flat": "♭",
	"fllig": "ﬂ",
	"fltns": "▱",
	"fnof": "ƒ",
	"fopf": "𝕗",
	"forall": "∀",
	"fork": "⋔",
	"forkv": "⫙",
	"fpartint": "⨍",
	"frac1": "¼",
	"frac12": "½",
	"frac13": "⅓",
	"frac14": "¼",
	"frac15": "⅕",
	"frac16": "⅙",
	"frac18": "⅛",
	"frac23": "⅔",
	"frac25": "⅖",
	"frac3": "¾",
	"frac34": "¾",
	"frac35": "⅗",
	"frac38": "⅜",
	"frac45": "⅘",
	"frac56": "⅚",
	"frac58": "⅝",
	"frac78": "⅞",
	"frasl": "⁄",
	"frown": "⌢",
	"fscr": "𝒻",
	"gE": "≧",
	"gEl": "⪌",
	"gacute": "ǵ",
	"gamma": "γ",
	"gammad": "ϝ",
	"gap": "⪆",
	"gbreve": "ğ",
	"gcirc": "ĝ",
	"gcy": "г",
	"gdot": "ġ",
	"ge": "≥",
	"gel": "⋛",
	"geq": "≥",
	"geqq": "≧",
	"geqslant": "⩾",
	"ges": "⩾",
	"gescc": "⪩",
	"gesdot": "⪀",
	"gesdoto": "⪂",
	"gesdotol": "⪄",
	"gesl": "⋛︀",
	"gesles": "⪔",
	"gfr": "𝔤",
	"gg": "≫",
	"ggg": "⋙",
	"gimel": "ℷ",
	"gjcy": "ѓ",
	"gl": "≷",
	"glE": "⪒",
	"gla": "⪥",
	"glj": "⪤",
	"gnE": "≩",
	"gnap": "⪊",
	"gnapprox": "⪊",
	"gne": "⪈",
	"gneq": "⪈",
	"gneqq": "≩",
	"gnsim": "⋧",
	"gopf": "𝕘",
	"grave": "`",
	"gscr": "ℊ",
	"gsim": "≳",
	"gsime": "⪎",
	"gsiml": "⪐",
	"g": ">",
	"gt": ">",
	"gtcc": "⪧",
	"gtcir": "⩺",
	"gtdot": "⋗",
	"gtlPar": "⦕",
	"gtquest": "⩼",
	"gtrapprox": "⪆",
	"gtrarr": "⥸",
	"gtrdot": "⋗",
	"gtreqless": "⋛",
	"gtreqqless": "⪌",
	"gtrless": "≷",
	"gtrsim": "≳",
	"gvertneqq": "≩︀",
	"gvnE": "≩︀",
	"hArr": "⇔",
	"hairsp": " ",
	"half": "½",
	"hamilt": "ℋ",
	"hardcy": "ъ",
	"harr": "↔",
	"harrcir": "⥈",
	"harrw": "↭",
	"hbar": "ℏ",
	"hcirc": "ĥ",
	"hearts": "♥",
	"heartsuit": "♥",
	"hellip": "…",
	"hercon": "⊹",
	"hfr": "𝔥",
	"hksearow": "⤥",
	"hkswarow": "⤦",
	"hoarr": "⇿",
	"homtht": "∻",
	"hookleftarrow": "↩",
	"hookrightarrow": "↪",
	"hopf": "𝕙",
	"horbar": "―",
	"hscr": "𝒽",
	"hslash": "ℏ",
	"hstrok": "ħ",
	"hybull": "⁃",
	"hyphen": "‐",
	"iacut": "í",
	"iacute": "í",
	"ic": "⁣",
	"icir": "î",
	"icirc": "î",
	"icy": "и",
	"iecy": "е",
	"iexc": "¡",
	"iexcl": "¡",
	"iff": "⇔",
	"ifr": "𝔦",
	"igrav": "ì",
	"igrave": "ì",
	"ii": "ⅈ",
	"iiiint": "⨌",
	"iiint": "∭",
	"iinfin": "⧜",
	"iiota": "℩",
	"ijlig": "ĳ",
	"imacr": "ī",
	"image": "ℑ",
	"imagline": "ℐ",
	"imagpart": "ℑ",
	"imath": "ı",
	"imof": "⊷",
	"imped": "Ƶ",
	"in": "∈",
	"incare": "℅",
	"infin": "∞",
	"infintie": "⧝",
	"inodot": "ı",
	"int": "∫",
	"intcal": "⊺",
	"integers": "ℤ",
	"intercal": "⊺",
	"intlarhk": "⨗",
	"intprod": "⨼",
	"iocy": "ё",
	"iogon": "į",
	"iopf": "𝕚",
	"iota": "ι",
	"iprod": "⨼",
	"iques": "¿",
	"iquest": "¿",
	"iscr": "𝒾",
	"isin": "∈",
	"isinE": "⋹",
	"isindot": "⋵",
	"isins": "⋴",
	"isinsv": "⋳",
	"isinv": "∈",
	"it": "⁢",
	"itilde": "ĩ",
	"iukcy": "і",
	"ium": "ï",
	"iuml": "ï",
	"jcirc": "ĵ",
	"jcy": "й",
	"jfr": "𝔧",
	"jmath": "ȷ",
	"jopf": "𝕛",
	"jscr": "𝒿",
	"jsercy": "ј",
	"jukcy": "є",
	"kappa": "κ",
	"kappav": "ϰ",
	"kcedil": "ķ",
	"kcy": "к",
	"kfr": "𝔨",
	"kgreen": "ĸ",
	"khcy": "х",
	"kjcy": "ќ",
	"kopf": "𝕜",
	"kscr": "𝓀",
	"lAarr": "⇚",
	"lArr": "⇐",
	"lAtail": "⤛",
	"lBarr": "⤎",
	"lE": "≦",
	"lEg": "⪋",
	"lHar": "⥢",
	"lacute": "ĺ",
	"laemptyv": "⦴",
	"lagran": "ℒ",
	"lambda": "λ",
	"lang": "⟨",
	"langd": "⦑",
	"langle": "⟨",
	"lap": "⪅",
	"laqu": "«",
	"laquo": "«",
	"larr": "←",
	"larrb": "⇤",
	"larrbfs": "⤟",
	"larrfs": "⤝",
	"larrhk": "↩",
	"larrlp": "↫",
	"larrpl": "⤹",
	"larrsim": "⥳",
	"larrtl": "↢",
	"lat": "⪫",
	"latail": "⤙",
	"late": "⪭",
	"lates": "⪭︀",
	"lbarr": "⤌",
	"lbbrk": "❲",
	"lbrace": "{",
	"lbrack": "[",
	"lbrke": "⦋",
	"lbrksld": "⦏",
	"lbrkslu": "⦍",
	"lcaron": "ľ",
	"lcedil": "ļ",
	"lceil": "⌈",
	"lcub": "{",
	"lcy": "л",
	"ldca": "⤶",
	"ldquo": "“",
	"ldquor": "„",
	"ldrdhar": "⥧",
	"ldrushar": "⥋",
	"ldsh": "↲",
	"le": "≤",
	"leftarrow": "←",
	"leftarrowtail": "↢",
	"leftharpoondown": "↽",
	"leftharpoonup": "↼",
	"leftleftarrows": "⇇",
	"leftrightarrow": "↔",
	"leftrightarrows": "⇆",
	"leftrightharpoons": "⇋",
	"leftrightsquigarrow": "↭",
	"leftthreetimes": "⋋",
	"leg": "⋚",
	"leq": "≤",
	"leqq": "≦",
	"leqslant": "⩽",
	"les": "⩽",
	"lescc": "⪨",
	"lesdot": "⩿",
	"lesdoto": "⪁",
	"lesdotor": "⪃",
	"lesg": "⋚︀",
	"lesges": "⪓",
	"lessapprox": "⪅",
	"lessdot": "⋖",
	"lesseqgtr": "⋚",
	"lesseqqgtr": "⪋",
	"lessgtr": "≶",
	"lesssim": "≲",
	"lfisht": "⥼",
	"lfloor": "⌊",
	"lfr": "𝔩",
	"lg": "≶",
	"lgE": "⪑",
	"lhard": "↽",
	"lharu": "↼",
	"lharul": "⥪",
	"lhblk": "▄",
	"ljcy": "љ",
	"ll": "≪",
	"llarr": "⇇",
	"llcorner": "⌞",
	"llhard": "⥫",
	"lltri": "◺",
	"lmidot": "ŀ",
	"lmoust": "⎰",
	"lmoustache": "⎰",
	"lnE": "≨",
	"lnap": "⪉",
	"lnapprox": "⪉",
	"lne": "⪇",
	"lneq": "⪇",
	"lneqq": "≨",
	"lnsim": "⋦",
	"loang": "⟬",
	"loarr": "⇽",
	"lobrk": "⟦",
	"longleftarrow": "⟵",
	"longleftrightarrow": "⟷",
	"longmapsto": "⟼",
	"longrightarrow": "⟶",
	"looparrowleft": "↫",
	"looparrowright": "↬",
	"lopar": "⦅",
	"lopf": "𝕝",
	"loplus": "⨭",
	"lotimes": "⨴",
	"lowast": "∗",
	"lowbar": "_",
	"loz": "◊",
	"lozenge": "◊",
	"lozf": "⧫",
	"lpar": "(",
	"lparlt": "⦓",
	"lrarr": "⇆",
	"lrcorner": "⌟",
	"lrhar": "⇋",
	"lrhard": "⥭",
	"lrm": "‎",
	"lrtri": "⊿",
	"lsaquo": "‹",
	"lscr": "𝓁",
	"lsh": "↰",
	"lsim": "≲",
	"lsime": "⪍",
	"lsimg": "⪏",
	"lsqb": "[",
	"lsquo": "‘",
	"lsquor": "‚",
	"lstrok": "ł",
	"l": "<",
	"lt": "<",
	"ltcc": "⪦",
	"ltcir": "⩹",
	"ltdot": "⋖",
	"lthree": "⋋",
	"ltimes": "⋉",
	"ltlarr": "⥶",
	"ltquest": "⩻",
	"ltrPar": "⦖",
	"ltri": "◃",
	"ltrie": "⊴",
	"ltrif": "◂",
	"lurdshar": "⥊",
	"luruhar": "⥦",
	"lvertneqq": "≨︀",
	"lvnE": "≨︀",
	"mDDot": "∺",
	"mac": "¯",
	"macr": "¯",
	"male": "♂",
	"malt": "✠",
	"maltese": "✠",
	"map": "↦",
	"mapsto": "↦",
	"mapstodown": "↧",
	"mapstoleft": "↤",
	"mapstoup": "↥",
	"marker": "▮",
	"mcomma": "⨩",
	"mcy": "м",
	"mdash": "—",
	"measuredangle": "∡",
	"mfr": "𝔪",
	"mho": "℧",
	"micr": "µ",
	"micro": "µ",
	"mid": "∣",
	"midast": "*",
	"midcir": "⫰",
	"middo": "·",
	"middot": "·",
	"minus": "−",
	"minusb": "⊟",
	"minusd": "∸",
	"minusdu": "⨪",
	"mlcp": "⫛",
	"mldr": "…",
	"mnplus": "∓",
	"models": "⊧",
	"mopf": "𝕞",
	"mp": "∓",
	"mscr": "𝓂",
	"mstpos": "∾",
	"mu": "μ",
	"multimap": "⊸",
	"mumap": "⊸",
	"nGg": "⋙̸",
	"nGt": "≫⃒",
	"nGtv": "≫̸",
	"nLeftarrow": "⇍",
	"nLeftrightarrow": "⇎",
	"nLl": "⋘̸",
	"nLt": "≪⃒",
	"nLtv": "≪̸",
	"nRightarrow": "⇏",
	"nVDash": "⊯",
	"nVdash": "⊮",
	"nabla": "∇",
	"nacute": "ń",
	"nang": "∠⃒",
	"nap": "≉",
	"napE": "⩰̸",
	"napid": "≋̸",
	"napos": "ŉ",
	"napprox": "≉",
	"natur": "♮",
	"natural": "♮",
	"naturals": "ℕ",
	"nbs": " ",
	"nbsp": " ",
	"nbump": "≎̸",
	"nbumpe": "≏̸",
	"ncap": "⩃",
	"ncaron": "ň",
	"ncedil": "ņ",
	"ncong": "≇",
	"ncongdot": "⩭̸",
	"ncup": "⩂",
	"ncy": "н",
	"ndash": "–",
	"ne": "≠",
	"neArr": "⇗",
	"nearhk": "⤤",
	"nearr": "↗",
	"nearrow": "↗",
	"nedot": "≐̸",
	"nequiv": "≢",
	"nesear": "⤨",
	"nesim": "≂̸",
	"nexist": "∄",
	"nexists": "∄",
	"nfr": "𝔫",
	"ngE": "≧̸",
	"nge": "≱",
	"ngeq": "≱",
	"ngeqq": "≧̸",
	"ngeqslant": "⩾̸",
	"nges": "⩾̸",
	"ngsim": "≵",
	"ngt": "≯",
	"ngtr": "≯",
	"nhArr": "⇎",
	"nharr": "↮",
	"nhpar": "⫲",
	"ni": "∋",
	"nis": "⋼",
	"nisd": "⋺",
	"niv": "∋",
	"njcy": "њ",
	"nlArr": "⇍",
	"nlE": "≦̸",
	"nlarr": "↚",
	"nldr": "‥",
	"nle": "≰",
	"nleftarrow": "↚",
	"nleftrightarrow": "↮",
	"nleq": "≰",
	"nleqq": "≦̸",
	"nleqslant": "⩽̸",
	"nles": "⩽̸",
	"nless": "≮",
	"nlsim": "≴",
	"nlt": "≮",
	"nltri": "⋪",
	"nltrie": "⋬",
	"nmid": "∤",
	"nopf": "𝕟",
	"no": "¬",
	"not": "¬",
	"notin": "∉",
	"notinE": "⋹̸",
	"notindot": "⋵̸",
	"notinva": "∉",
	"notinvb": "⋷",
	"notinvc": "⋶",
	"notni": "∌",
	"notniva": "∌",
	"notnivb": "⋾",
	"notnivc": "⋽",
	"npar": "∦",
	"nparallel": "∦",
	"nparsl": "⫽⃥",
	"npart": "∂̸",
	"npolint": "⨔",
	"npr": "⊀",
	"nprcue": "⋠",
	"npre": "⪯̸",
	"nprec": "⊀",
	"npreceq": "⪯̸",
	"nrArr": "⇏",
	"nrarr": "↛",
	"nrarrc": "⤳̸",
	"nrarrw": "↝̸",
	"nrightarrow": "↛",
	"nrtri": "⋫",
	"nrtrie": "⋭",
	"nsc": "⊁",
	"nsccue": "⋡",
	"nsce": "⪰̸",
	"nscr": "𝓃",
	"nshortmid": "∤",
	"nshortparallel": "∦",
	"nsim": "≁",
	"nsime": "≄",
	"nsimeq": "≄",
	"nsmid": "∤",
	"nspar": "∦",
	"nsqsube": "⋢",
	"nsqsupe": "⋣",
	"nsub": "⊄",
	"nsubE": "⫅̸",
	"nsube": "⊈",
	"nsubset": "⊂⃒",
	"nsubseteq": "⊈",
	"nsubseteqq": "⫅̸",
	"nsucc": "⊁",
	"nsucceq": "⪰̸",
	"nsup": "⊅",
	"nsupE": "⫆̸",
	"nsupe": "⊉",
	"nsupset": "⊃⃒",
	"nsupseteq": "⊉",
	"nsupseteqq": "⫆̸",
	"ntgl": "≹",
	"ntild": "ñ",
	"ntilde": "ñ",
	"ntlg": "≸",
	"ntriangleleft": "⋪",
	"ntrianglelefteq": "⋬",
	"ntriangleright": "⋫",
	"ntrianglerighteq": "⋭",
	"nu": "ν",
	"num": "#",
	"numero": "№",
	"numsp": " ",
	"nvDash": "⊭",
	"nvHarr": "⤄",
	"nvap": "≍⃒",
	"nvdash": "⊬",
	"nvge": "≥⃒",
	"nvgt": ">⃒",
	"nvinfin": "⧞",
	"nvlArr": "⤂",
	"nvle": "≤⃒",
	"nvlt": "<⃒",
	"nvltrie": "⊴⃒",
	"nvrArr": "⤃",
	"nvrtrie": "⊵⃒",
	"nvsim": "∼⃒",
	"nwArr": "⇖",
	"nwarhk": "⤣",
	"nwarr": "↖",
	"nwarrow": "↖",
	"nwnear": "⤧",
	"oS": "Ⓢ",
	"oacut": "ó",
	"oacute": "ó",
	"oast": "⊛",
	"ocir": "ô",
	"ocirc": "ô",
	"ocy": "о",
	"odash": "⊝",
	"odblac": "ő",
	"odiv": "⨸",
	"odot": "⊙",
	"odsold": "⦼",
	"oelig": "œ",
	"ofcir": "⦿",
	"ofr": "𝔬",
	"ogon": "˛",
	"ograv": "ò",
	"ograve": "ò",
	"ogt": "⧁",
	"ohbar": "⦵",
	"ohm": "Ω",
	"oint": "∮",
	"olarr": "↺",
	"olcir": "⦾",
	"olcross": "⦻",
	"oline": "‾",
	"olt": "⧀",
	"omacr": "ō",
	"omega": "ω",
	"omicron": "ο",
	"omid": "⦶",
	"ominus": "⊖",
	"oopf": "𝕠",
	"opar": "⦷",
	"operp": "⦹",
	"oplus": "⊕",
	"or": "∨",
	"orarr": "↻",
	"ord": "º",
	"order": "ℴ",
	"orderof": "ℴ",
	"ordf": "ª",
	"ordm": "º",
	"origof": "⊶",
	"oror": "⩖",
	"orslope": "⩗",
	"orv": "⩛",
	"oscr": "ℴ",
	"oslas": "ø",
	"oslash": "ø",
	"osol": "⊘",
	"otild": "õ",
	"otilde": "õ",
	"otimes": "⊗",
	"otimesas": "⨶",
	"oum": "ö",
	"ouml": "ö",
	"ovbar": "⌽",
	"par": "¶",
	"para": "¶",
	"parallel": "∥",
	"parsim": "⫳",
	"parsl": "⫽",
	"part": "∂",
	"pcy": "п",
	"percnt": "%",
	"period": ".",
	"permil": "‰",
	"perp": "⊥",
	"pertenk": "‱",
	"pfr": "𝔭",
	"phi": "φ",
	"phiv": "ϕ",
	"phmmat": "ℳ",
	"phone": "☎",
	"pi": "π",
	"pitchfork": "⋔",
	"piv": "ϖ",
	"planck": "ℏ",
	"planckh": "ℎ",
	"plankv": "ℏ",
	"plus": "+",
	"plusacir": "⨣",
	"plusb": "⊞",
	"pluscir": "⨢",
	"plusdo": "∔",
	"plusdu": "⨥",
	"pluse": "⩲",
	"plusm": "±",
	"plusmn": "±",
	"plussim": "⨦",
	"plustwo": "⨧",
	"pm": "±",
	"pointint": "⨕",
	"popf": "𝕡",
	"poun": "£",
	"pound": "£",
	"pr": "≺",
	"prE": "⪳",
	"prap": "⪷",
	"prcue": "≼",
	"pre": "⪯",
	"prec": "≺",
	"precapprox": "⪷",
	"preccurlyeq": "≼",
	"preceq": "⪯",
	"precnapprox": "⪹",
	"precneqq": "⪵",
	"precnsim": "⋨",
	"precsim": "≾",
	"prime": "′",
	"primes": "ℙ",
	"prnE": "⪵",
	"prnap": "⪹",
	"prnsim": "⋨",
	"prod": "∏",
	"profalar": "⌮",
	"profline": "⌒",
	"profsurf": "⌓",
	"prop": "∝",
	"propto": "∝",
	"prsim": "≾",
	"prurel": "⊰",
	"pscr": "𝓅",
	"psi": "ψ",
	"puncsp": " ",
	"qfr": "𝔮",
	"qint": "⨌",
	"qopf": "𝕢",
	"qprime": "⁗",
	"qscr": "𝓆",
	"quaternions": "ℍ",
	"quatint": "⨖",
	"quest": "?",
	"questeq": "≟",
	"quo": "\"",
	"quot": "\"",
	"rAarr": "⇛",
	"rArr": "⇒",
	"rAtail": "⤜",
	"rBarr": "⤏",
	"rHar": "⥤",
	"race": "∽̱",
	"racute": "ŕ",
	"radic": "√",
	"raemptyv": "⦳",
	"rang": "⟩",
	"rangd": "⦒",
	"range": "⦥",
	"rangle": "⟩",
	"raqu": "»",
	"raquo": "»",
	"rarr": "→",
	"rarrap": "⥵",
	"rarrb": "⇥",
	"rarrbfs": "⤠",
	"rarrc": "⤳",
	"rarrfs": "⤞",
	"rarrhk": "↪",
	"rarrlp": "↬",
	"rarrpl": "⥅",
	"rarrsim": "⥴",
	"rarrtl": "↣",
	"rarrw": "↝",
	"ratail": "⤚",
	"ratio": "∶",
	"rationals": "ℚ",
	"rbarr": "⤍",
	"rbbrk": "❳",
	"rbrace": "}",
	"rbrack": "]",
	"rbrke": "⦌",
	"rbrksld": "⦎",
	"rbrkslu": "⦐",
	"rcaron": "ř",
	"rcedil": "ŗ",
	"rceil": "⌉",
	"rcub": "}",
	"rcy": "р",
	"rdca": "⤷",
	"rdldhar": "⥩",
	"rdquo": "”",
	"rdquor": "”",
	"rdsh": "↳",
	"real": "ℜ",
	"realine": "ℛ",
	"realpart": "ℜ",
	"reals": "ℝ",
	"rect": "▭",
	"re": "®",
	"reg": "®",
	"rfisht": "⥽",
	"rfloor": "⌋",
	"rfr": "𝔯",
	"rhard": "⇁",
	"rharu": "⇀",
	"rharul": "⥬",
	"rho": "ρ",
	"rhov": "ϱ",
	"rightarrow": "→",
	"rightarrowtail": "↣",
	"rightharpoondown": "⇁",
	"rightharpoonup": "⇀",
	"rightleftarrows": "⇄",
	"rightleftharpoons": "⇌",
	"rightrightarrows": "⇉",
	"rightsquigarrow": "↝",
	"rightthreetimes": "⋌",
	"ring": "˚",
	"risingdotseq": "≓",
	"rlarr": "⇄",
	"rlhar": "⇌",
	"rlm": "‏",
	"rmoust": "⎱",
	"rmoustache": "⎱",
	"rnmid": "⫮",
	"roang": "⟭",
	"roarr": "⇾",
	"robrk": "⟧",
	"ropar": "⦆",
	"ropf": "𝕣",
	"roplus": "⨮",
	"rotimes": "⨵",
	"rpar": ")",
	"rpargt": "⦔",
	"rppolint": "⨒",
	"rrarr": "⇉",
	"rsaquo": "›",
	"rscr": "𝓇",
	"rsh": "↱",
	"rsqb": "]",
	"rsquo": "’",
	"rsquor": "’",
	"rthree": "⋌",
	"rtimes": "⋊",
	"rtri": "▹",
	"rtrie": "⊵",
	"rtrif": "▸",
	"rtriltri": "⧎",
	"ruluhar": "⥨",
	"rx": "℞",
	"sacute": "ś",
	"sbquo": "‚",
	"sc": "≻",
	"scE": "⪴",
	"scap": "⪸",
	"scaron": "š",
	"sccue": "≽",
	"sce": "⪰",
	"scedil": "ş",
	"scirc": "ŝ",
	"scnE": "⪶",
	"scnap": "⪺",
	"scnsim": "⋩",
	"scpolint": "⨓",
	"scsim": "≿",
	"scy": "с",
	"sdot": "⋅",
	"sdotb": "⊡",
	"sdote": "⩦",
	"seArr": "⇘",
	"searhk": "⤥",
	"searr": "↘",
	"searrow": "↘",
	"sec": "§",
	"sect": "§",
	"semi": ";",
	"seswar": "⤩",
	"setminus": "∖",
	"setmn": "∖",
	"sext": "✶",
	"sfr": "𝔰",
	"sfrown": "⌢",
	"sharp": "♯",
	"shchcy": "щ",
	"shcy": "ш",
	"shortmid": "∣",
	"shortparallel": "∥",
	"sh": "­",
	"shy": "­",
	"sigma": "σ",
	"sigmaf": "ς",
	"sigmav": "ς",
	"sim": "∼",
	"simdot": "⩪",
	"sime": "≃",
	"simeq": "≃",
	"simg": "⪞",
	"simgE": "⪠",
	"siml": "⪝",
	"simlE": "⪟",
	"simne": "≆",
	"simplus": "⨤",
	"simrarr": "⥲",
	"slarr": "←",
	"smallsetminus": "∖",
	"smashp": "⨳",
	"smeparsl": "⧤",
	"smid": "∣",
	"smile": "⌣",
	"smt": "⪪",
	"smte": "⪬",
	"smtes": "⪬︀",
	"softcy": "ь",
	"sol": "/",
	"solb": "⧄",
	"solbar": "⌿",
	"sopf": "𝕤",
	"spades": "♠",
	"spadesuit": "♠",
	"spar": "∥",
	"sqcap": "⊓",
	"sqcaps": "⊓︀",
	"sqcup": "⊔",
	"sqcups": "⊔︀",
	"sqsub": "⊏",
	"sqsube": "⊑",
	"sqsubset": "⊏",
	"sqsubseteq": "⊑",
	"sqsup": "⊐",
	"sqsupe": "⊒",
	"sqsupset": "⊐",
	"sqsupseteq": "⊒",
	"squ": "□",
	"square": "□",
	"squarf": "▪",
	"squf": "▪",
	"srarr": "→",
	"sscr": "𝓈",
	"ssetmn": "∖",
	"ssmile": "⌣",
	"sstarf": "⋆",
	"star": "☆",
	"starf": "★",
	"straightepsilon": "ϵ",
	"straightphi": "ϕ",
	"strns": "¯",
	"sub": "⊂",
	"subE": "⫅",
	"subdot": "⪽",
	"sube": "⊆",
	"subedot": "⫃",
	"submult": "⫁",
	"subnE": "⫋",
	"subne": "⊊",
	"subplus": "⪿",
	"subrarr": "⥹",
	"subset": "⊂",
	"subseteq": "⊆",
	"subseteqq": "⫅",
	"subsetneq": "⊊",
	"subsetneqq": "⫋",
	"subsim": "⫇",
	"subsub": "⫕",
	"subsup": "⫓",
	"succ": "≻",
	"succapprox": "⪸",
	"succcurlyeq": "≽",
	"succeq": "⪰",
	"succnapprox": "⪺",
	"succneqq": "⪶",
	"succnsim": "⋩",
	"succsim": "≿",
	"sum": "∑",
	"sung": "♪",
	"sup": "⊃",
	"sup1": "¹",
	"sup2": "²",
	"sup3": "³",
	"supE": "⫆",
	"supdot": "⪾",
	"supdsub": "⫘",
	"supe": "⊇",
	"supedot": "⫄",
	"suphsol": "⟉",
	"suphsub": "⫗",
	"suplarr": "⥻",
	"supmult": "⫂",
	"supnE": "⫌",
	"supne": "⊋",
	"supplus": "⫀",
	"supset": "⊃",
	"supseteq": "⊇",
	"supseteqq": "⫆",
	"supsetneq": "⊋",
	"supsetneqq": "⫌",
	"supsim": "⫈",
	"supsub": "⫔",
	"supsup": "⫖",
	"swArr": "⇙",
	"swarhk": "⤦",
	"swarr": "↙",
	"swarrow": "↙",
	"swnwar": "⤪",
	"szli": "ß",
	"szlig": "ß",
	"target": "⌖",
	"tau": "τ",
	"tbrk": "⎴",
	"tcaron": "ť",
	"tcedil": "ţ",
	"tcy": "т",
	"tdot": "⃛",
	"telrec": "⌕",
	"tfr": "𝔱",
	"there4": "∴",
	"therefore": "∴",
	"theta": "θ",
	"thetasym": "ϑ",
	"thetav": "ϑ",
	"thickapprox": "≈",
	"thicksim": "∼",
	"thinsp": " ",
	"thkap": "≈",
	"thksim": "∼",
	"thor": "þ",
	"thorn": "þ",
	"tilde": "˜",
	"time": "×",
	"times": "×",
	"timesb": "⊠",
	"timesbar": "⨱",
	"timesd": "⨰",
	"tint": "∭",
	"toea": "⤨",
	"top": "⊤",
	"topbot": "⌶",
	"topcir": "⫱",
	"topf": "𝕥",
	"topfork": "⫚",
	"tosa": "⤩",
	"tprime": "‴",
	"trade": "™",
	"triangle": "▵",
	"triangledown": "▿",
	"triangleleft": "◃",
	"trianglelefteq": "⊴",
	"triangleq": "≜",
	"triangleright": "▹",
	"trianglerighteq": "⊵",
	"tridot": "◬",
	"trie": "≜",
	"triminus": "⨺",
	"triplus": "⨹",
	"trisb": "⧍",
	"tritime": "⨻",
	"trpezium": "⏢",
	"tscr": "𝓉",
	"tscy": "ц",
	"tshcy": "ћ",
	"tstrok": "ŧ",
	"twixt": "≬",
	"twoheadleftarrow": "↞",
	"twoheadrightarrow": "↠",
	"uArr": "⇑",
	"uHar": "⥣",
	"uacut": "ú",
	"uacute": "ú",
	"uarr": "↑",
	"ubrcy": "ў",
	"ubreve": "ŭ",
	"ucir": "û",
	"ucirc": "û",
	"ucy": "у",
	"udarr": "⇅",
	"udblac": "ű",
	"udhar": "⥮",
	"ufisht": "⥾",
	"ufr": "𝔲",
	"ugrav": "ù",
	"ugrave": "ù",
	"uharl": "↿",
	"uharr": "↾",
	"uhblk": "▀",
	"ulcorn": "⌜",
	"ulcorner": "⌜",
	"ulcrop": "⌏",
	"ultri": "◸",
	"umacr": "ū",
	"um": "¨",
	"uml": "¨",
	"uogon": "ų",
	"uopf": "𝕦",
	"uparrow": "↑",
	"updownarrow": "↕",
	"upharpoonleft": "↿",
	"upharpoonright": "↾",
	"uplus": "⊎",
	"upsi": "υ",
	"upsih": "ϒ",
	"upsilon": "υ",
	"upuparrows": "⇈",
	"urcorn": "⌝",
	"urcorner": "⌝",
	"urcrop": "⌎",
	"uring": "ů",
	"urtri": "◹",
	"uscr": "𝓊",
	"utdot": "⋰",
	"utilde": "ũ",
	"utri": "▵",
	"utrif": "▴",
	"uuarr": "⇈",
	"uum": "ü",
	"uuml": "ü",
	"uwangle": "⦧",
	"vArr": "⇕",
	"vBar": "⫨",
	"vBarv": "⫩",
	"vDash": "⊨",
	"vangrt": "⦜",
	"varepsilon": "ϵ",
	"varkappa": "ϰ",
	"varnothing": "∅",
	"varphi": "ϕ",
	"varpi": "ϖ",
	"varpropto": "∝",
	"varr": "↕",
	"varrho": "ϱ",
	"varsigma": "ς",
	"varsubsetneq": "⊊︀",
	"varsubsetneqq": "⫋︀",
	"varsupsetneq": "⊋︀",
	"varsupsetneqq": "⫌︀",
	"vartheta": "ϑ",
	"vartriangleleft": "⊲",
	"vartriangleright": "⊳",
	"vcy": "в",
	"vdash": "⊢",
	"vee": "∨",
	"veebar": "⊻",
	"veeeq": "≚",
	"vellip": "⋮",
	"verbar": "|",
	"vert": "|",
	"vfr": "𝔳",
	"vltri": "⊲",
	"vnsub": "⊂⃒",
	"vnsup": "⊃⃒",
	"vopf": "𝕧",
	"vprop": "∝",
	"vrtri": "⊳",
	"vscr": "𝓋",
	"vsubnE": "⫋︀",
	"vsubne": "⊊︀",
	"vsupnE": "⫌︀",
	"vsupne": "⊋︀",
	"vzigzag": "⦚",
	"wcirc": "ŵ",
	"wedbar": "⩟",
	"wedge": "∧",
	"wedgeq": "≙",
	"weierp": "℘",
	"wfr": "𝔴",
	"wopf": "𝕨",
	"wp": "℘",
	"wr": "≀",
	"wreath": "≀",
	"wscr": "𝓌",
	"xcap": "⋂",
	"xcirc": "◯",
	"xcup": "⋃",
	"xdtri": "▽",
	"xfr": "𝔵",
	"xhArr": "⟺",
	"xharr": "⟷",
	"xi": "ξ",
	"xlArr": "⟸",
	"xlarr": "⟵",
	"xmap": "⟼",
	"xnis": "⋻",
	"xodot": "⨀",
	"xopf": "𝕩",
	"xoplus": "⨁",
	"xotime": "⨂",
	"xrArr": "⟹",
	"xrarr": "⟶",
	"xscr": "𝓍",
	"xsqcup": "⨆",
	"xuplus": "⨄",
	"xutri": "△",
	"xvee": "⋁",
	"xwedge": "⋀",
	"yacut": "ý",
	"yacute": "ý",
	"yacy": "я",
	"ycirc": "ŷ",
	"ycy": "ы",
	"ye": "¥",
	"yen": "¥",
	"yfr": "𝔶",
	"yicy": "ї",
	"yopf": "𝕪",
	"yscr": "𝓎",
	"yucy": "ю",
	"yum": "ÿ",
	"yuml": "ÿ",
	"zacute": "ź",
	"zcaron": "ž",
	"zcy": "з",
	"zdot": "ż",
	"zeetrf": "ℨ",
	"zeta": "ζ",
	"zfr": "𝔷",
	"zhcy": "ж",
	"zigrarr": "⇝",
	"zopf": "𝕫",
	"zscr": "𝓏",
	"zwj": "‍",
	"zwnj": "‌"
};

/***/ }),

/***/ "LmLB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function stringify(n){return n&&"object"==typeof n?has(n,"position")||has(n,"type")?location(n.position):has(n,"start")||has(n,"end")?location(n):has(n,"line")||has(n,"column")?position(n):null:null}function position(n){return n&&"object"==typeof n||(n={}),index(n.line)+":"+index(n.column)}function location(n){return n&&"object"==typeof n||(n={}),position(n.start)+"-"+position(n.end)}function index(n){return n&&"number"==typeof n?n:1}var has=__webpack_require__("XfW5");module.exports=stringify;

/***/ }),

/***/ "M4Bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function blockHTML(e,t,i){for(var r,s,o,l,n,C,c,a=this,f=a.options.blocks,p=t.length,E=0,T=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+f.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(openCloseTag.source+"\\s*$"),/^$/,!1]];E<p&&((l=t.charAt(E))===C_TAB||l===C_SPACE);)E++;if(t.charAt(E)===C_LT){for(r=t.indexOf(C_NEWLINE,E+1),r=r===-1?p:r,s=t.slice(E,r),o=-1,n=T.length;++o<n;)if(T[o][0].test(s)){C=T[o];break}if(C){if(i)return C[2];if(E=r,!C[1].test(s))for(;E<p;){if(r=t.indexOf(C_NEWLINE,E+1),r=r===-1?p:r,s=t.slice(E+1,r),C[1].test(s)){s&&(E=r);break}E=r}return c=t.slice(0,E),e(c)({type:"html",value:c})}}}var openCloseTag=__webpack_require__("Ot24").openCloseTag;module.exports=blockHTML;var C_TAB="\t",C_SPACE=" ",C_NEWLINE="\n",C_LT="<";

/***/ }),

/***/ "Nh09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function wordCharacter(r){return re.test("number"==typeof r?fromCode(r):r.charAt(0))}module.exports=wordCharacter;var fromCode=String.fromCharCode,re=/\w/;

/***/ }),

/***/ "Ocd8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function normalize(e){return collapseWhiteSpace(e).toLowerCase()}var collapseWhiteSpace=__webpack_require__("1P8C");module.exports=normalize;

/***/ }),

/***/ "OeW3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var StructuredSource=__webpack_require__("yDZR").default;module.exports=StructuredSource;

/***/ }),

/***/ "Ot24":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var attributeName="[a-zA-Z_:][a-zA-Z0-9:._-]*",unquoted="[^\"'=<>`\\u0000-\\u0020]+",singleQuoted="'[^']*'",doubleQuoted='"[^"]*"',attributeValue="(?:"+unquoted+"|"+singleQuoted+"|"+doubleQuoted+")",attribute="(?:\\s+"+attributeName+"(?:\\s*=\\s*"+attributeValue+")?)",openTag="<[A-Za-z][A-Za-z0-9\\-]*"+attribute+"*\\s*\\/?>",closeTag="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",comment="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",processing="<[?].*?[?]>",declaration="<![A-Za-z]+\\s+[^>]*>",cdata="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";exports.openCloseTag=new RegExp("^(?:"+openTag+"|"+closeTag+")"),exports.tag=new RegExp("^(?:"+openTag+"|"+closeTag+"|"+comment+"|"+processing+"|"+declaration+"|"+cdata+")");

/***/ }),

/***/ "P4LG":
/***/ (function(module, exports) {

module.exports = {
	"AElig": "Æ",
	"AMP": "&",
	"Aacute": "Á",
	"Acirc": "Â",
	"Agrave": "À",
	"Aring": "Å",
	"Atilde": "Ã",
	"Auml": "Ä",
	"COPY": "©",
	"Ccedil": "Ç",
	"ETH": "Ð",
	"Eacute": "É",
	"Ecirc": "Ê",
	"Egrave": "È",
	"Euml": "Ë",
	"GT": ">",
	"Iacute": "Í",
	"Icirc": "Î",
	"Igrave": "Ì",
	"Iuml": "Ï",
	"LT": "<",
	"Ntilde": "Ñ",
	"Oacute": "Ó",
	"Ocirc": "Ô",
	"Ograve": "Ò",
	"Oslash": "Ø",
	"Otilde": "Õ",
	"Ouml": "Ö",
	"QUOT": "\"",
	"REG": "®",
	"THORN": "Þ",
	"Uacute": "Ú",
	"Ucirc": "Û",
	"Ugrave": "Ù",
	"Uuml": "Ü",
	"Yacute": "Ý",
	"aacute": "á",
	"acirc": "â",
	"acute": "´",
	"aelig": "æ",
	"agrave": "à",
	"amp": "&",
	"aring": "å",
	"atilde": "ã",
	"auml": "ä",
	"brvbar": "¦",
	"ccedil": "ç",
	"cedil": "¸",
	"cent": "¢",
	"copy": "©",
	"curren": "¤",
	"deg": "°",
	"divide": "÷",
	"eacute": "é",
	"ecirc": "ê",
	"egrave": "è",
	"eth": "ð",
	"euml": "ë",
	"frac12": "½",
	"frac14": "¼",
	"frac34": "¾",
	"gt": ">",
	"iacute": "í",
	"icirc": "î",
	"iexcl": "¡",
	"igrave": "ì",
	"iquest": "¿",
	"iuml": "ï",
	"laquo": "«",
	"lt": "<",
	"macr": "¯",
	"micro": "µ",
	"middot": "·",
	"nbsp": " ",
	"not": "¬",
	"ntilde": "ñ",
	"oacute": "ó",
	"ocirc": "ô",
	"ograve": "ò",
	"ordf": "ª",
	"ordm": "º",
	"oslash": "ø",
	"otilde": "õ",
	"ouml": "ö",
	"para": "¶",
	"plusmn": "±",
	"pound": "£",
	"quot": "\"",
	"raquo": "»",
	"reg": "®",
	"sect": "§",
	"shy": "­",
	"sup1": "¹",
	"sup2": "²",
	"sup3": "³",
	"szlig": "ß",
	"thorn": "þ",
	"times": "×",
	"uacute": "ú",
	"ucirc": "û",
	"ugrave": "ù",
	"uml": "¨",
	"uuml": "ü",
	"yacute": "ý",
	"yen": "¥",
	"yuml": "ÿ"
};

/***/ }),

/***/ "PiFy":
/***/ (function(module, exports, __webpack_require__) {

var implementation=__webpack_require__("fRHV");module.exports=Function.prototype.bind||implementation;

/***/ }),

/***/ "Pvji":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function linkReference(e){var r=this,i=e.referenceType,n=r.enterLinkReference(r,e),l=r.all(e).join("");return n(),"shortcut"!==i&&"collapsed"!==i||(l=copy(l,e.identifier)),"["+l+"]"+label(e)}var copy=__webpack_require__("Jn/e"),label=__webpack_require__("tQYZ");module.exports=linkReference;

/***/ }),

/***/ "Q9Rl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function indentation(t,e){var n,i,r,o,a=t.split(C_NEWLINE),d=a.length+1,s=1/0,f=[];for(a.unshift(repeat(C_SPACE,e)+"!");d--;)if(i=getIndent(a[d]),f[d]=i.stops,0!==trim(a[d]).length){if(!i.indent){s=1/0;break}i.indent>0&&i.indent<s&&(s=i.indent)}if(s!==1/0)for(d=a.length;d--;){for(r=f[d],n=s;n&&!(n in r);)n--;o=0!==trim(a[d]).length&&s&&n!==s?C_TAB:"",a[d]=o+a[d].slice(n in r?r[n]+1:0)}return a.shift(),a.join(C_NEWLINE)}var trim=__webpack_require__("QYuf"),repeat=__webpack_require__("dVck"),getIndent=__webpack_require__("QSrl");module.exports=indentation;var C_SPACE=" ",C_NEWLINE="\n",C_TAB="\t";

/***/ }),

/***/ "QLAS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function reference(E,e,_){var C,T,r,t,A,n,i,R,c=this,o=e.charAt(0),a=0,L=e.length,l="",O="",N=T_LINK,f=REFERENCE_TYPE_SHORTCUT;if("!"===o&&(N=T_IMAGE,O=o,o=e.charAt(++a)),o===C_BRACKET_OPEN){for(a++,O+=o,n="",c.options.footnotes&&N===T_LINK&&e.charAt(a)===C_CARET&&(O+=C_CARET,a++,N=T_FOOTNOTE),R=0;a<L;){if((o=e.charAt(a))===C_BRACKET_OPEN)i=!0,R++;else if(o===C_BRACKET_CLOSE){if(!R)break;R--}o===C_BACKSLASH&&(n+=C_BACKSLASH,o=e.charAt(++a)),n+=o,a++}if(l=n,C=n,(o=e.charAt(a))===C_BRACKET_CLOSE){for(a++,l+=o,n="";a<L&&(o=e.charAt(a),whitespace(o));)n+=o,a++;if((o=e.charAt(a))===C_BRACKET_OPEN){for(T="",n+=o,a++;a<L&&(o=e.charAt(a))!==C_BRACKET_OPEN&&o!==C_BRACKET_CLOSE;)o===C_BACKSLASH&&(T+=C_BACKSLASH,o=e.charAt(++a)),T+=o,a++;o=e.charAt(a),o===C_BRACKET_CLOSE?(f=T?REFERENCE_TYPE_FULL:REFERENCE_TYPE_COLLAPSED,n+=T+o,a++):T="",l+=n,n=""}else{if(!C)return;T=C}if(f===REFERENCE_TYPE_FULL||!i)return N===T_FOOTNOTE&&f!==REFERENCE_TYPE_SHORTCUT&&(N=T_LINK,O=C_BRACKET_OPEN+C_CARET,C=C_CARET+C),l=O+l,N===T_LINK&&c.inLink?null:!!_||(N===T_FOOTNOTE&&C.indexOf(" ")!==-1?E(l)({type:"footnote",children:this.tokenizeInline(C,E.now())}):(r=E.now(),r.column+=O.length,r.offset+=O.length,T=f===REFERENCE_TYPE_FULL?T:C,t={type:N+"Reference",identifier:normalize(T)},N!==T_LINK&&N!==T_IMAGE||(t.referenceType=f),N===T_LINK?(A=c.enterLink(),t.children=c.tokenizeInline(C,r),A()):N===T_IMAGE&&(t.alt=c.decode.raw(c.unescape(C),r)||null),E(l)(t)))}}}var whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("4c+y"),normalize=__webpack_require__("Ocd8");module.exports=reference,reference.locator=locate;var T_LINK="link",T_IMAGE="image",T_FOOTNOTE="footnote",REFERENCE_TYPE_SHORTCUT="shortcut",REFERENCE_TYPE_COLLAPSED="collapsed",REFERENCE_TYPE_FULL="full",C_CARET="^",C_BACKSLASH="\\",C_BRACKET_OPEN="[",C_BRACKET_CLOSE="]";

/***/ }),

/***/ "QSrl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function indentation(t){for(var r,a=0,n=0,c=t.charAt(a),e={};c in characters;)r=characters[c],n+=r,r>1&&(n=Math.floor(n/r)*r),e[n]=a,c=t.charAt(++a);return{indent:n,stops:e}}module.exports=indentation;var characters={" ":1,"\t":4};

/***/ }),

/***/ "QYuf":
/***/ (function(module, exports) {

function trim(r){return r.replace(/^\s*|\s*$/g,"")}exports=module.exports=trim,exports.left=function(r){return r.replace(/^\s*/,"")},exports.right=function(r){return r.replace(/\s*$/,"")};

/***/ }),

/***/ "QrNq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function escape(e,t,a){var c,r,s=this;if("\\"===t.charAt(0)&&(c=t.charAt(1),s.escape.indexOf(c)!==-1))return!!a||(r="\n"===c?{type:"break"}:{type:"text",value:c},e("\\"+c)(r))}var locate=__webpack_require__("x9L1");module.exports=escape,escape.locator=locate;

/***/ }),

/***/ "REyP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function markdownTable(n,r){var t,E,o,i,L,e,N,S,d,l,I,T,f=r||{},a=f.delimiter,O=f.start,u=f.end,C=f.align,P=f.stringLength||lengthNoop,_=0,g=-1,p=n.length,A=[];for(C=C?C.concat():[],null!==a&&void 0!==a||(a=SPACE+PIPE+SPACE),null!==O&&void 0!==O||(O=PIPE+SPACE),null!==u&&void 0!==u||(u=SPACE+PIPE);++g<p;)for(i=n[g],e=-1,i.length>_&&(_=i.length);++e<_;)N=i[e]?dotindex(i[e]):null,A[e]||(A[e]=MIN_CELL_SIZE),N>A[e]&&(A[e]=N);for("string"==typeof C&&(C=pad(_,C).split("")),e=-1;++e<_;)t=C[e],"string"==typeof t&&(t=t.charAt(0).toLowerCase()),ALLIGNMENT.indexOf(t)===-1&&(t=NULL),C[e]=t;for(g=-1,o=[];++g<p;){for(i=n[g],e=-1,L=[];++e<_;)d=i[e],d=stringify(d),C[e]===DOT?(N=dotindex(d),S=A[e]+(EXPRESSION_DOT.test(d)?0:1)-(P(d)-N),L[e]=d+pad(S-1)):L[e]=d;o[g]=L}for(A=[],g=-1;++g<p;)for(L=o[g],e=-1;++e<_;)d=L[e],A[e]||(A[e]=MIN_CELL_SIZE),(S=P(d))>A[e]&&(A[e]=S);for(g=-1;++g<p;){if(L=o[g],e=-1,f.pad!==!1)for(;++e<_;)d=L[e],N=A[e]-(P(d)||0),l=pad(N),C[e]===RIGHT||C[e]===DOT?d=l+d:C[e]===CENTER?(N/=2,N%1==0?(I=N,T=N):(I=N+.5,T=N-.5),d=pad(I)+d+pad(T)):d+=l,L[e]=d;o[g]=L.join(a)}if(f.rule!==!1){for(e=-1,E=[];++e<_;)f.pad===!1?(d=n[0][e],l=P(stringify(d)),l=l>MIN_CELL_SIZE?l:MIN_CELL_SIZE):l=A[e],t=C[e],d=t===RIGHT||t===NULL?DASH:COLON,d+=pad(l-2,DASH),d+=t!==LEFT&&t!==NULL?COLON:DASH,E[e]=d;o.splice(1,0,E.join(a))}return O+o.join(u+NEW_LINE+O)+u}function stringify(n){return null===n||void 0===n?"":String(n)}function lengthNoop(n){return String(n).length}function pad(n,r){return Array(n+1).join(r||SPACE)}function dotindex(n){var r=EXPRESSION_LAST_DOT.exec(n);return r?r.index+1:n.length}module.exports=markdownTable;var EXPRESSION_DOT=/\./,EXPRESSION_LAST_DOT=/\.[^.]*$/,LEFT="l",RIGHT="r",CENTER="c",DOT=".",NULL="",ALLIGNMENT=[LEFT,RIGHT,CENTER,DOT,NULL],MIN_CELL_SIZE=3,COLON=":",DASH="-",PIPE="|",SPACE=" ",NEW_LINE="\n";

/***/ }),

/***/ "RXtJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function blockquote(o){for(var t,e=this.block(o).split("\n"),n=[],l=e.length,r=-1;++r<l;)t=e[r],n[r]=(t?" ":"")+t;return">"+n.join("\n>")}module.exports=blockquote;

/***/ }),

/***/ "Re3r":
/***/ (function(module, exports) {

function isBuffer(f){return!!f.constructor&&"function"==typeof f.constructor.isBuffer&&f.constructor.isBuffer(f)}function isSlowBuffer(f){return"function"==typeof f.readFloatLE&&"function"==typeof f.slice&&isBuffer(f.slice(0,0))}module.exports=function(f){return null!=f&&(isBuffer(f)||isSlowBuffer(f)||!!f._isBuffer)};

/***/ }),

/***/ "STDS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function fencedCode(C,r,e){var t,_,E,f,N,i,A,n,o,a,c,T=this,h=T.options,l=r.length+1,I=0,s="";if(h.gfm){for(;I<l&&((E=r.charAt(I))===C_SPACE||E===C_TAB);)s+=E,I++;if(a=I,(E=r.charAt(I))===C_TILDE||E===C_TICK){for(I++,_=E,t=1,s+=E;I<l&&(E=r.charAt(I))===_;)s+=E,t++,I++;if(!(t<MIN_FENCE_COUNT)){for(;I<l&&((E=r.charAt(I))===C_SPACE||E===C_TAB);)s+=E,I++;for(f="",N="";I<l&&(E=r.charAt(I))!==C_NEWLINE&&E!==C_TILDE&&E!==C_TICK;)E===C_SPACE||E===C_TAB?N+=E:(f+=N+E,N=""),I++;if(!(E=r.charAt(I))||E===C_NEWLINE){if(e)return!0;for(c=C.now(),c.column+=s.length,c.offset+=s.length,s+=f,f=T.decode.raw(T.unescape(f),c),N&&(s+=N),N="",n="",o="",i="",A="";I<l;)if(E=r.charAt(I),i+=n,A+=o,n="",o="",E===C_NEWLINE){for(i?(n+=E,o+=E):s+=E,N="",I++;I<l&&(E=r.charAt(I))===C_SPACE;)N+=E,I++;if(n+=N,o+=N.slice(a),!(N.length>=CODE_INDENT_COUNT)){for(N="";I<l&&(E=r.charAt(I))===_;)N+=E,I++;if(n+=N,o+=N,!(N.length<t)){for(N="";I<l&&((E=r.charAt(I))===C_SPACE||E===C_TAB);)n+=E,o+=E,I++;if(!E||E===C_NEWLINE)break}}}else i+=E,o+=E,I++;return s+=i+n,C(s)({type:"code",lang:f||null,value:trim(A)})}}}}}var trim=__webpack_require__("ZEGH");module.exports=fencedCode;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_TILDE="~",C_TICK="`",MIN_FENCE_COUNT=3,CODE_INDENT_COUNT=4;

/***/ }),

/***/ "SjWX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function yaml(t,a,r){var A,C,E,N,_,c,h=this;if(h.options.yaml&&a.charAt(0)===C_DASH&&a.charAt(1)===C_DASH&&a.charAt(2)===C_DASH&&a.charAt(3)===C_NEWLINE)for(A=FENCE+C_NEWLINE,C="",c="",E=3,N=a.length;++E<N;){if((_=a.charAt(E))===C_DASH&&(c||!C)&&a.charAt(E+1)===C_DASH&&a.charAt(E+2)===C_DASH)return!!r||(A+=c+FENCE,t(A)({type:"yaml",value:C}));_===C_NEWLINE?c+=_:(A+=c+_,C+=c+_,c="")}}module.exports=yaml,yaml.onlyAtStart=!0;var FENCE="---",C_DASH="-",C_NEWLINE="\n";

/***/ }),

/***/ "Ssij":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function newline(e,r,t){var i,n,a,c,h=r.charAt(0);if("\n"===h){if(t)return!0;for(c=1,i=r.length,n=h,a="";c<i&&(h=r.charAt(c),whitespace(h));)a+=h,"\n"===h&&(n+=a,a=""),c++;e(n)}}var whitespace=__webpack_require__("5FGK");module.exports=newline;

/***/ }),

/***/ "T+0W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={gfm:!0,commonmark:!1,pedantic:!1,entities:"false",setext:!1,closeAtx:!1,looseTable:!1,spacedTable:!0,paddedTable:!0,incrementListMarker:!0,fences:!1,fence:"`",bullet:"-",listItemIndent:"tab",rule:"*",ruleSpaces:!0,ruleRepetition:3,strong:"*",emphasis:"_"};

/***/ }),

/***/ "T2xC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function list(e,t,E){for(var _,r,n,i,S,l,I,R,A,a,C,o,c,T,N,s,L,u,f,O,D,h,p,M,m=this,d=m.options.commonmark,B=m.options.pedantic,P=m.blockTokenizers,K=m.interruptList,g=0,v=t.length,k=null,U=0;g<v;){if((i=t.charAt(g))===C_TAB)U+=TAB_SIZE-U%TAB_SIZE;else{if(i!==C_SPACE)break;U++}g++}if(!(U>=TAB_SIZE)){if(i=t.charAt(g),_=d?LIST_ORDERED_COMMONMARK_MARKERS:LIST_ORDERED_MARKERS,LIST_UNORDERED_MARKERS[i]===!0)S=i,n=!1;else{for(n=!0,r="";g<v&&(i=t.charAt(g),decimal(i));)r+=i,g++;if(i=t.charAt(g),!r||_[i]!==!0)return;k=parseInt(r,10),S=i}if((i=t.charAt(++g))===C_SPACE||i===C_TAB){if(E)return!0;for(g=0,T=[],N=[],s=[];g<v;){for(l=t.indexOf(C_NEWLINE,g),I=g,R=!1,M=!1,l===-1&&(l=v),p=g+TAB_SIZE,U=0;g<v;){if((i=t.charAt(g))===C_TAB)U+=TAB_SIZE-U%TAB_SIZE;else{if(i!==C_SPACE)break;U++}g++}if(U>=TAB_SIZE&&(M=!0),L&&U>=L.indent&&(M=!0),i=t.charAt(g),A=null,!M){if(LIST_UNORDERED_MARKERS[i]===!0)A=i,g++,U++;else{for(r="";g<v&&(i=t.charAt(g),decimal(i));)r+=i,g++;i=t.charAt(g),g++,r&&_[i]===!0&&(A=i,U+=r.length+1)}if(A)if((i=t.charAt(g))===C_TAB)U+=TAB_SIZE-U%TAB_SIZE,g++;else if(i===C_SPACE){for(p=g+TAB_SIZE;g<p&&t.charAt(g)===C_SPACE;)g++,U++;g===p&&t.charAt(g)===C_SPACE&&(g-=TAB_SIZE-1,U-=TAB_SIZE-1)}else i!==C_NEWLINE&&""!==i&&(A=null)}if(A){if(!B&&S!==A)break;R=!0}else d||M||t.charAt(I)!==C_SPACE?d&&L&&(M=U>=L.indent||U>TAB_SIZE):M=!0,R=!1,g=I;if(C=t.slice(I,l),a=I===g?C:t.slice(g,l),(A===C_ASTERISK||A===C_UNDERSCORE||A===C_DASH)&&P.thematicBreak.call(m,e,C,!0))break;if(o=c,c=!trim(a).length,M&&L)L.value=L.value.concat(s,C),N=N.concat(s,C),s=[];else if(R)0!==s.length&&(L.value.push(""),L.trail=s.concat()),L={value:[C],indent:U,trail:[]},T.push(L),N=N.concat(s,C),s=[];else if(c){if(o)break;s.push(C)}else{if(o)break;if(interrupt(K,P,m,[e,C,!0]))break;L.value=L.value.concat(s,C),N=N.concat(s,C),s=[]}g=l+1}for(D=e(N.join(C_NEWLINE)).reset({type:"list",ordered:n,start:k,loose:null,children:[]}),u=m.enterList(),f=m.enterBlock(),O=!1,g=-1,v=T.length;++g<v;)L=T[g].value.join(C_NEWLINE),h=e.now(),L=e(L)(listItem(m,L,h),D),L.loose&&(O=!0),L=T[g].trail.join(C_NEWLINE),g!==v-1&&(L+=C_NEWLINE),e(L);return u(),f(),D.loose=O,D}}}function listItem(e,t,E){var _,r,n=e.offset,i=e.options.pedantic?pedanticListItem:normalListItem,S=null;return t=i.apply(null,arguments),e.options.gfm&&(_=t.match(EXPRESSION_TASK_ITEM))&&(r=_[0].length,S=_[1].toLowerCase()===C_X_LOWER,n[E.line]+=r,t=t.slice(r)),{type:"listItem",loose:EXPRESSION_LOOSE_LIST_ITEM.test(t)||t.charAt(t.length-1)===C_NEWLINE,checked:S,children:e.tokenizeBlock(t,E)}}function pedanticListItem(e,t,E){function _(e){return r[n]=(r[n]||0)+e.length,n++,""}var r=e.offset,n=E.line;return t=t.replace(EXPRESSION_PEDANTIC_BULLET,_),n=E.line,t.replace(EXPRESSION_INITIAL_INDENT,_)}function normalListItem(e,t,E){function _(e,t,E,_,S){return n=t+E+_,i=S,Number(E)<10&&n.length%2==1&&(E=C_SPACE+E),(r=t+repeat(C_SPACE,E.length)+_)+i}var r,n,i,S,l,I,R,A=e.offset,a=E.line;for(t=t.replace(EXPRESSION_BULLET,_),S=t.split(C_NEWLINE),l=removeIndent(t,getIndent(r).indent).split(C_NEWLINE),l[0]=i,A[a]=(A[a]||0)+n.length,a++,I=0,R=S.length;++I<R;)A[a]=(A[a]||0)+S[I].length-l[I].length,a++;return l.join(C_NEWLINE)}var trim=__webpack_require__("QYuf"),repeat=__webpack_require__("dVck"),decimal=__webpack_require__("/EOA"),getIndent=__webpack_require__("QSrl"),removeIndent=__webpack_require__("Q9Rl"),interrupt=__webpack_require__("lHNd");module.exports=list;var C_ASTERISK="*",C_UNDERSCORE="_",C_PLUS="+",C_DASH="-",C_DOT=".",C_SPACE=" ",C_NEWLINE="\n",C_TAB="\t",C_PAREN_CLOSE=")",C_X_LOWER="x",TAB_SIZE=4,EXPRESSION_LOOSE_LIST_ITEM=/\n\n(?!\s*$)/,EXPRESSION_TASK_ITEM=/^\[([ \t]|x|X)][ \t]/,EXPRESSION_BULLET=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,EXPRESSION_PEDANTIC_BULLET=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,EXPRESSION_INITIAL_INDENT=/^( {1,4}|\t)?/gm,LIST_UNORDERED_MARKERS={};LIST_UNORDERED_MARKERS[C_ASTERISK]=!0,LIST_UNORDERED_MARKERS[C_PLUS]=!0,LIST_UNORDERED_MARKERS[C_DASH]=!0;var LIST_ORDERED_MARKERS={};LIST_ORDERED_MARKERS[C_DOT]=!0;var LIST_ORDERED_COMMONMARK_MARKERS={};LIST_ORDERED_COMMONMARK_MARKERS[C_DOT]=!0,LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE]=!0;

/***/ }),

/***/ "T3u8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function link(e){var t=this,i=t.encode(e.url||"",e),l=t.enterLink(),r=t.encode(t.escape(e.url||"",e)),u=t.all(e).join("");return l(),null!=e.title||!PROTOCOL.test(i)||r!==u&&r!=="mailto:"+u?(i=uri(i),e.title&&(i+=" "+title(t.encode(t.escape(e.title,e),e))),"["+u+"]("+i+")"):uri(t.encode(e.url),!0)}var uri=__webpack_require__("vwBX"),title=__webpack_require__("T4OZ");module.exports=link;var PROTOCOL=/^[a-z][a-z+.-]+:\/?/i;

/***/ }),

/***/ "T4OZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function enclose(e){var n=e.indexOf('"')===-1?'"':"'";return n+e+n}module.exports=enclose;

/***/ }),

/***/ "Ta85":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function removePosition(i,t){return visit(i,t?hard:soft),i}function hard(i){delete i.position}function soft(i){i.position=void 0}var visit=__webpack_require__("cS5i");module.exports=removePosition;

/***/ }),

/***/ "UNyq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function stringify(i){var e=unherit(Compiler);e.prototype.options=xtend(e.prototype.options,this.data("settings"),i),this.Compiler=e}var unherit=__webpack_require__("gnUo"),xtend=__webpack_require__("q+vg"),Compiler=__webpack_require__("n0/0");module.exports=stringify,stringify.Compiler=Compiler;

/***/ }),

/***/ "UWtV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function strong(r){var t=repeat(this.options.strong,2);return t+this.all(r).join("")+t}var repeat=__webpack_require__("dVck");module.exports=strong;

/***/ }),

/***/ "UaBb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function heading(e){var t,r=this,n=e.depth,i=r.options.setext,a=r.options.closeAtx,o=r.all(e).join("");return i&&n<3?o+"\n"+repeat(1===n?"=":"-",o.length):(t=repeat("#",e.depth))+" "+o+(a?" "+t:"")}var repeat=__webpack_require__("dVck");module.exports=heading;

/***/ }),

/***/ "VX4J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(t,O){var e,o=PROTOCOLS.length,r=-1,i=-1;if(!this.options.gfm)return-1;for(;++r<o;)(e=t.indexOf(PROTOCOLS[r],O))!==-1&&(e<i||i===-1)&&(i=e);return i}module.exports=locate;var PROTOCOLS=["https://","http://","mailto:"];

/***/ }),

/***/ "WJJ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var hasOwn=Object.prototype.hasOwnProperty,toStr=Object.prototype.toString,isArray=function(r){return"function"==typeof Array.isArray?Array.isArray(r):"[object Array]"===toStr.call(r)},isPlainObject=function(r){if(!r||"[object Object]"!==toStr.call(r))return!1;var t=hasOwn.call(r,"constructor"),o=r.constructor&&r.constructor.prototype&&hasOwn.call(r.constructor.prototype,"isPrototypeOf");if(r.constructor&&!t&&!o)return!1;var n;for(n in r);return void 0===n||hasOwn.call(r,n)};module.exports=function r(){var t,o,n,c,e,a,i=arguments[0],s=1,l=arguments.length,u=!1;for("boolean"==typeof i?(u=i,i=arguments[1]||{},s=2):("object"!=typeof i&&"function"!=typeof i||null==i)&&(i={});s<l;++s)if(null!=(t=arguments[s]))for(o in t)n=i[o],c=t[o],i!==c&&(u&&c&&(isPlainObject(c)||(e=isArray(c)))?(e?(e=!1,a=n&&isArray(n)?n:[]):a=n&&isPlainObject(n)?n:{},i[o]=r(u,a,c)):void 0!==c&&(i[o]=c));return i};

/***/ }),

/***/ "WK+h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function footnoteDefinition(e){return"[^"+e.identifier.toLowerCase()+"]: "+this.all(e).join("\n\n"+repeat(" ",4))}var repeat=__webpack_require__("dVck");module.exports=footnoteDefinition;

/***/ }),

/***/ "XV+r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function modifierFactory(r){return iteratorFactory(wrapperFactory(r))}function iteratorFactory(r){function t(t){var e=t&&t.children;if(!e)throw new Error("Missing children in `parent` for `modifier`");return iterate(e,r,t)}return t}function wrapperFactory(r){function t(t,e){return r(t,e,this)}return t}var iterate=__webpack_require__("2a6b");module.exports=modifierFactory;

/***/ }),

/***/ "XfW5":
/***/ (function(module, exports, __webpack_require__) {

var bind=__webpack_require__("PiFy");module.exports=bind.call(Function.call,Object.prototype.hasOwnProperty);

/***/ }),

/***/ "Xs1Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){var n=e.indexOf("*",t),o=e.indexOf("_",t);return o===-1?n:n===-1?o:o<n?o:n}module.exports=locate;

/***/ }),

/***/ "Ypgx":
/***/ (function(module, exports) {

module.exports = {
	"nbsp": " ",
	"iexcl": "¡",
	"cent": "¢",
	"pound": "£",
	"curren": "¤",
	"yen": "¥",
	"brvbar": "¦",
	"sect": "§",
	"uml": "¨",
	"copy": "©",
	"ordf": "ª",
	"laquo": "«",
	"not": "¬",
	"shy": "­",
	"reg": "®",
	"macr": "¯",
	"deg": "°",
	"plusmn": "±",
	"sup2": "²",
	"sup3": "³",
	"acute": "´",
	"micro": "µ",
	"para": "¶",
	"middot": "·",
	"cedil": "¸",
	"sup1": "¹",
	"ordm": "º",
	"raquo": "»",
	"frac14": "¼",
	"frac12": "½",
	"frac34": "¾",
	"iquest": "¿",
	"Agrave": "À",
	"Aacute": "Á",
	"Acirc": "Â",
	"Atilde": "Ã",
	"Auml": "Ä",
	"Aring": "Å",
	"AElig": "Æ",
	"Ccedil": "Ç",
	"Egrave": "È",
	"Eacute": "É",
	"Ecirc": "Ê",
	"Euml": "Ë",
	"Igrave": "Ì",
	"Iacute": "Í",
	"Icirc": "Î",
	"Iuml": "Ï",
	"ETH": "Ð",
	"Ntilde": "Ñ",
	"Ograve": "Ò",
	"Oacute": "Ó",
	"Ocirc": "Ô",
	"Otilde": "Õ",
	"Ouml": "Ö",
	"times": "×",
	"Oslash": "Ø",
	"Ugrave": "Ù",
	"Uacute": "Ú",
	"Ucirc": "Û",
	"Uuml": "Ü",
	"Yacute": "Ý",
	"THORN": "Þ",
	"szlig": "ß",
	"agrave": "à",
	"aacute": "á",
	"acirc": "â",
	"atilde": "ã",
	"auml": "ä",
	"aring": "å",
	"aelig": "æ",
	"ccedil": "ç",
	"egrave": "è",
	"eacute": "é",
	"ecirc": "ê",
	"euml": "ë",
	"igrave": "ì",
	"iacute": "í",
	"icirc": "î",
	"iuml": "ï",
	"eth": "ð",
	"ntilde": "ñ",
	"ograve": "ò",
	"oacute": "ó",
	"ocirc": "ô",
	"otilde": "õ",
	"ouml": "ö",
	"divide": "÷",
	"oslash": "ø",
	"ugrave": "ù",
	"uacute": "ú",
	"ucirc": "û",
	"uuml": "ü",
	"yacute": "ý",
	"thorn": "þ",
	"yuml": "ÿ",
	"fnof": "ƒ",
	"Alpha": "Α",
	"Beta": "Β",
	"Gamma": "Γ",
	"Delta": "Δ",
	"Epsilon": "Ε",
	"Zeta": "Ζ",
	"Eta": "Η",
	"Theta": "Θ",
	"Iota": "Ι",
	"Kappa": "Κ",
	"Lambda": "Λ",
	"Mu": "Μ",
	"Nu": "Ν",
	"Xi": "Ξ",
	"Omicron": "Ο",
	"Pi": "Π",
	"Rho": "Ρ",
	"Sigma": "Σ",
	"Tau": "Τ",
	"Upsilon": "Υ",
	"Phi": "Φ",
	"Chi": "Χ",
	"Psi": "Ψ",
	"Omega": "Ω",
	"alpha": "α",
	"beta": "β",
	"gamma": "γ",
	"delta": "δ",
	"epsilon": "ε",
	"zeta": "ζ",
	"eta": "η",
	"theta": "θ",
	"iota": "ι",
	"kappa": "κ",
	"lambda": "λ",
	"mu": "μ",
	"nu": "ν",
	"xi": "ξ",
	"omicron": "ο",
	"pi": "π",
	"rho": "ρ",
	"sigmaf": "ς",
	"sigma": "σ",
	"tau": "τ",
	"upsilon": "υ",
	"phi": "φ",
	"chi": "χ",
	"psi": "ψ",
	"omega": "ω",
	"thetasym": "ϑ",
	"upsih": "ϒ",
	"piv": "ϖ",
	"bull": "•",
	"hellip": "…",
	"prime": "′",
	"Prime": "″",
	"oline": "‾",
	"frasl": "⁄",
	"weierp": "℘",
	"image": "ℑ",
	"real": "ℜ",
	"trade": "™",
	"alefsym": "ℵ",
	"larr": "←",
	"uarr": "↑",
	"rarr": "→",
	"darr": "↓",
	"harr": "↔",
	"crarr": "↵",
	"lArr": "⇐",
	"uArr": "⇑",
	"rArr": "⇒",
	"dArr": "⇓",
	"hArr": "⇔",
	"forall": "∀",
	"part": "∂",
	"exist": "∃",
	"empty": "∅",
	"nabla": "∇",
	"isin": "∈",
	"notin": "∉",
	"ni": "∋",
	"prod": "∏",
	"sum": "∑",
	"minus": "−",
	"lowast": "∗",
	"radic": "√",
	"prop": "∝",
	"infin": "∞",
	"ang": "∠",
	"and": "∧",
	"or": "∨",
	"cap": "∩",
	"cup": "∪",
	"int": "∫",
	"there4": "∴",
	"sim": "∼",
	"cong": "≅",
	"asymp": "≈",
	"ne": "≠",
	"equiv": "≡",
	"le": "≤",
	"ge": "≥",
	"sub": "⊂",
	"sup": "⊃",
	"nsub": "⊄",
	"sube": "⊆",
	"supe": "⊇",
	"oplus": "⊕",
	"otimes": "⊗",
	"perp": "⊥",
	"sdot": "⋅",
	"lceil": "⌈",
	"rceil": "⌉",
	"lfloor": "⌊",
	"rfloor": "⌋",
	"lang": "〈",
	"rang": "〉",
	"loz": "◊",
	"spades": "♠",
	"clubs": "♣",
	"hearts": "♥",
	"diams": "♦",
	"quot": "\"",
	"amp": "&",
	"lt": "<",
	"gt": ">",
	"OElig": "Œ",
	"oelig": "œ",
	"Scaron": "Š",
	"scaron": "š",
	"Yuml": "Ÿ",
	"circ": "ˆ",
	"tilde": "˜",
	"ensp": " ",
	"emsp": " ",
	"thinsp": " ",
	"zwnj": "‌",
	"zwj": "‍",
	"lrm": "‎",
	"rlm": "‏",
	"ndash": "–",
	"mdash": "—",
	"lsquo": "‘",
	"rsquo": "’",
	"sbquo": "‚",
	"ldquo": "“",
	"rdquo": "”",
	"bdquo": "„",
	"dagger": "†",
	"Dagger": "‡",
	"permil": "‰",
	"lsaquo": "‹",
	"rsaquo": "›",
	"euro": "€"
};

/***/ }),

/***/ "ZEGH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function trimTrailingLines(i){for(var r=String(i),n=r.length;r.charAt(--n)===line;);return r.slice(0,n+1)}module.exports=trimTrailingLines;var line="\n";

/***/ }),

/***/ "ZaRG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function footnoteDefinition(t,e,o){var n,C,i,r,A,_,f,E,c,a,h,l,B=this,N=B.offset;if(B.options.footnotes){for(n=0,C=e.length,i="",r=t.now(),A=r.line;n<C&&(c=e.charAt(n),whitespace(c));)i+=c,n++;if(e.charAt(n)===C_BRACKET_OPEN&&e.charAt(n+1)===C_CARET){for(i+=C_BRACKET_OPEN+C_CARET,n=i.length,f="";n<C&&(c=e.charAt(n))!==C_BRACKET_CLOSE;)c===C_BACKSLASH&&(f+=c,n++,c=e.charAt(n)),f+=c,n++;if(f&&e.charAt(n)===C_BRACKET_CLOSE&&e.charAt(n+1)===C_COLON){if(o)return!0;for(a=normalize(f),i+=f+C_BRACKET_CLOSE+C_COLON,n=i.length;n<C&&((c=e.charAt(n))===C_TAB||c===C_SPACE);)i+=c,n++;for(r.column+=i.length,r.offset+=i.length,f="",_="",E="";n<C;){if((c=e.charAt(n))===C_NEWLINE){for(E=c,n++;n<C&&(c=e.charAt(n))===C_NEWLINE;)E+=c,n++;for(f+=E,E="";n<C&&(c=e.charAt(n))===C_SPACE;)E+=c,n++;if(0===E.length)break;f+=E}f&&(_+=f,f=""),_+=c,n++}return i+=_,_=_.replace(EXPRESSION_INITIAL_TAB,function(t){return N[A]=(N[A]||0)+t.length,A++,""}),h=t(i),l=B.enterBlock(),_=B.tokenizeBlock(_,r),l(),h({type:"footnoteDefinition",identifier:a,children:_})}}}}var whitespace=__webpack_require__("5FGK"),normalize=__webpack_require__("Ocd8");module.exports=footnoteDefinition,footnoteDefinition.notInList=!0,footnoteDefinition.notInBlock=!0;var C_BACKSLASH="\\",C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_BRACKET_OPEN="[",C_BRACKET_CLOSE="]",C_CARET="^",C_COLON=":",EXPRESSION_INITIAL_TAB=/^( {4}|\t)?/gm;

/***/ }),

/***/ "aBxj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function link(e,_,C){var r,A,E,t,a,i,c,O,L,R,f,h,N,K,n,s,S,l,o,T=this,M="",u=0,P=_.charAt(0),I=T.options.commonmark,B=T.options.gfm;if("!"===P&&(L=!0,M=P,P=_.charAt(++u)),P===C_BRACKET_OPEN&&(L||!T.inLink)){for(M+=P,n="",u++,h=_.length,S=e.now(),K=0,S.column+=u,S.offset+=u;u<h;){if(P=_.charAt(u),i=P,P===C_TICK){for(A=1;_.charAt(u+1)===C_TICK;)i+=P,u++,A++;E?A>=E&&(E=0):E=A}else if(P===C_BACKSLASH)u++,i+=_.charAt(u);else if(E&&!B||P!==C_BRACKET_OPEN){if((!E||B)&&P===C_BRACKET_CLOSE){if(!K){if(B)for(;u<h&&(P=_.charAt(u+1),whitespace(P));)i+=P,u++;if(_.charAt(u+1)!==C_PAREN_OPEN)return;i+=C_PAREN_OPEN,r=!0,u++;break}K--}}else K++;n+=i,i="",u++}if(r){for(R=n,M+=n+i,u++;u<h&&(P=_.charAt(u),whitespace(P));)M+=P,u++;if(P=_.charAt(u),O=I?COMMONMARK_LINK_MARKERS:LINK_MARKERS,n="",t=M,P===C_LT){for(u++,t+=C_LT;u<h&&(P=_.charAt(u))!==C_GT;){if(I&&"\n"===P)return;n+=P,u++}if(_.charAt(u)!==C_GT)return;M+=C_LT+n+C_GT,s=n,u++}else{for(P=null,i="";u<h&&(P=_.charAt(u),!i||!has(O,P));){if(whitespace(P)){if(I)break;i+=P}else{if(P===C_PAREN_OPEN)K++;else if(P===C_PAREN_CLOSE){if(0===K)break;K--}n+=i,i="",P===C_BACKSLASH&&(n+=C_BACKSLASH,P=_.charAt(++u)),n+=P}u++}M+=n,s=n,u=M.length}for(n="";u<h&&(P=_.charAt(u),whitespace(P));)n+=P,u++;if(P=_.charAt(u),M+=n,n&&has(O,P))if(u++,M+=P,n="",f=O[P],a=M,I){for(;u<h&&(P=_.charAt(u))!==f;)P===C_BACKSLASH&&(n+=C_BACKSLASH,P=_.charAt(++u)),u++,n+=P;if((P=_.charAt(u))!==f)return;for(N=n,M+=n+P,u++;u<h&&(P=_.charAt(u),whitespace(P));)M+=P,u++}else for(i="";u<h;){if((P=_.charAt(u))===f)c&&(n+=f+i,i=""),c=!0;else if(c){if(P===C_PAREN_CLOSE){M+=n+f+i,N=n;break}whitespace(P)?i+=P:(n+=f+i+P,i="",c=!1)}else n+=P;u++}if(_.charAt(u)===C_PAREN_CLOSE)return!!C||(M+=C_PAREN_CLOSE,s=T.decode.raw(T.unescape(s),e(t).test().end),N&&(a=e(a).test().end,N=T.decode.raw(T.unescape(N),a)),o={type:L?"image":"link",title:N||null,url:s},L?o.alt=T.decode.raw(T.unescape(R),S)||null:(l=T.enterLink(),o.children=T.tokenizeInline(R,S),l()),e(M)(o))}}}var has=__webpack_require__("XfW5"),whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("4c+y");module.exports=link,link.locator=locate;var C_BACKSLASH="\\",C_BRACKET_OPEN="[",C_BRACKET_CLOSE="]",C_PAREN_OPEN="(",C_PAREN_CLOSE=")",C_LT="<",C_GT=">",C_TICK="`",C_DOUBLE_QUOTE='"',C_SINGLE_QUOTE="'",LINK_MARKERS={};LINK_MARKERS[C_DOUBLE_QUOTE]=C_DOUBLE_QUOTE,LINK_MARKERS[C_SINGLE_QUOTE]=C_SINGLE_QUOTE;var COMMONMARK_LINK_MARKERS={};COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE]=C_DOUBLE_QUOTE,COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE]=C_SINGLE_QUOTE,COMMONMARK_LINK_MARKERS[C_PAREN_OPEN]=C_PAREN_CLOSE;

/***/ }),

/***/ "bDIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function longestStreak(e,r){var t,n,o=0,i=0;if("string"!=typeof r||1!==r.length)throw new Error("Expected character");for(e=String(e),t=n=e.indexOf(r);n!==-1;)o++,n===t?o>i&&(i=o):o=1,t=n+1,n=e.indexOf(r,t);return i}module.exports=longestStreak;

/***/ }),

/***/ "br67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function setOptions(e){var t,n,r=this,i=r.options;if(null==e)e={};else{if("object"!=typeof e)throw new Error("Invalid value `"+e+"` for setting `options`");e=xtend(e)}for(n in defaults)validate[typeof defaults[n]](e,n,i[n],maps[n]);return t=e.ruleRepetition,t&&t<3&&raise(t,"options.ruleRepetition"),r.encode=encodeFactory(String(e.entities)),r.escape=escapeFactory(e),r.options=e,r}function raise(e,t){throw new Error("Invalid value `"+e+"` for setting `"+t+"`")}function validateBoolean(e,t,n){var r=e[t];null==r&&(r=n),"boolean"!=typeof r&&raise(r,"options."+t),e[t]=r}function validateNumber(e,t,n){var r=e[t];null==r&&(r=n),isNaN(r)&&raise(r,"options."+t),e[t]=r}function validateString(e,t,n,r){var i=e[t];null==i&&(i=n),i=String(i),i in r||raise(i,"options."+t),e[t]=i}function encodeFactory(e){function t(e){return encode(e,n)}var n={};return"false"===e?returner:("true"===e&&(n.useNamedReferences=!0),"escape"===e&&(n.escapeOnly=!0,n.useNamedReferences=!0),t)}var xtend=__webpack_require__("q+vg"),encode=__webpack_require__("LHlb"),defaults=__webpack_require__("T+0W"),escapeFactory=__webpack_require__("wbH0"),returner=__webpack_require__("BUu3");module.exports=setOptions;var maps={entities:{true:!0,false:!0,numbers:!0,escape:!0},bullet:{"*":!0,"-":!0,"+":!0},rule:{"-":!0,_:!0,"*":!0},listItemIndent:{tab:!0,mixed:!0,1:!0},emphasis:{_:!0,"*":!0},strong:{_:!0,"*":!0},fence:{"`":!0,"~":!0}},validate={boolean:validateBoolean,string:validateString,number:validateNumber};

/***/ }),

/***/ "buw/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function emphasis(s){var i=this.options.emphasis;return i+this.all(s).join("")+i}module.exports=emphasis;

/***/ }),

/***/ "bw58":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return!/[^0-9a-z\xDF-\xFF]/.test(t.toLowerCase())};

/***/ }),

/***/ "cHA3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function all(t){for(var l=this,r=t.children,e=r.length,i=[],n=-1;++n<e;)i[n]=l.visit(r[n],t);return i}module.exports=all;

/***/ }),

/***/ "cS5i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function visit(n,t,r,i){function u(n,i,u){var l;return i=i||(u?0:null),t&&n.type!==t||(l=r(n,i,u||null)),n.children&&l!==!1?e(n.children,n):l}function e(n,t){for(var r,e=i?-1:1,l=n.length,o=(i?l:-1)+e;o>-1&&o<l;){if((r=n[o])&&u(r,o,t)===!1)return!1;o+=e}return!0}"function"==typeof t&&(i=r,r=t,t=null),u(n)}module.exports=visit;

/***/ }),

/***/ "d4Rk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function factory(n){var t=indices(String(n));return{toPosition:offsetToPositionFactory(t),toOffset:positionToOffsetFactory(t)}}function offsetToPositionFactory(n){function t(t){var o=-1,i=n.length;if(t<0)return{};for(;++o<i;)if(n[o]>t)return{line:o+1,column:t-(n[o-1]||0)+1,offset:t};return{}}return t}function positionToOffsetFactory(n){function t(t){var o=t&&t.line,i=t&&t.column;return!isNaN(o)&&!isNaN(i)&&o-1 in n?(n[o-2]||0)+i-1||0:-1}return t}function indices(n){for(var t=[],o=n.indexOf("\n");o!==-1;)t.push(o+1),o=n.indexOf("\n",o+1);return t.push(n.length+1),t}module.exports=factory;

/***/ }),

/***/ "dHqN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={position:!0,gfm:!0,yaml:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:__webpack_require__("v6Z4"),breaks:!1};

/***/ }),

/***/ "dTZW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function wrapper(E,e){var n,t={};e||(e={});for(n in defaults)t[n]=null==e[n]?defaults[n]:e[n];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),parse(E,t)}function parse(E,e){function n(){return{line:H,column:v,offset:Y+(g.offset||0)}}function t(E,e){var t=n();t.column+=e,t.offset+=e,L.call(x,MESSAGES[E],t,E)}function r(e){return E.charAt(e)}function i(){B&&(G.push(B),m&&m.call(p,B,{start:u,end:n()}),B=EMPTY)}var a,N,M,A,o,l,c,T,R,C,S,D,I,s,u,_,d,f,h=e.additional,O=e.nonTerminated,m=e.text,P=e.reference,L=e.warning,p=e.textContext,U=e.referenceContext,x=e.warningContext,g=e.position,W=e.indent||[],F=E.length,Y=0,b=-1,v=g.column||1,H=g.line||1,B=EMPTY,G=[];for(u=n(),c=L?t:noop,Y--,F++;++Y<F;)if(A===NEWLINE&&(v=W[b]||1),(A=r(Y))!==AMPERSAND)A===NEWLINE&&(H++,b++,v=0),A?(B+=A,v++):i();else{if((l=r(Y+1))===TAB||l===NEWLINE||l===FORM_FEED||l===SPACE||l===LESS_THAN||l===AMPERSAND||l===EMPTY||h&&l===h){B+=A,v++;continue}for(D=S=f=Y+1,l!==OCTOTHORP?I=NAMED:(f=++S,l=r(f),l===X_LOWER||l===X_UPPER?(I=HEXADECIMAL,f=++S):I=DECIMAL),a=C=M=EMPTY,s=TESTS[I],f--;++f<F&&(l=r(f),s(l));)M+=l,I===NAMED&&has(legacy,M)&&(a=M,C=legacy[M]);N=r(f)===SEMICOLON,N&&(f++,I===NAMED&&has(characterEntities,M)&&(a=M,C=characterEntities[M])),d=1+f-D,(N||O)&&(M?I===NAMED?(N&&!C?c(NAMED_UNKNOWN,1):(a!==M&&(f=S+a.length,d=1+f-S,N=!1),N||(T=a?NAMED_NOT_TERMINATED:NAMED_EMPTY,e.attribute?(l=r(f),l===EQUAL?(c(T,d),C=null):alphanumerical(l)?C=null:c(T,d)):c(T,d))),o=C):(N||c(NUMERIC_NOT_TERMINATED,d),o=parseInt(M,BASE[I]),isProhibited(o)?(c(NUMERIC_PROHIBITED,d),o=REPLACEMENT):o in invalid?(c(NUMERIC_DISALLOWED,d),o=invalid[o]):(R=EMPTY,isWarning(o)&&c(NUMERIC_DISALLOWED,d),o>65535&&(o-=65536,R+=fromCharCode(o>>>10|55296),o=56320|1023&o),o=R+fromCharCode(o))):I!==NAMED&&c(NUMERIC_EMPTY,d)),o?(i(),u=n(),Y=f-1,v+=f-D+1,G.push(o),_=n(),_.offset++,P&&P.call(U,o,{start:u,end:_},E.slice(D-1,f)),u=_):(M=E.slice(D-1,f),B+=M,v+=M.length,Y=f-1)}return G.join(EMPTY)}function isProhibited(E){return E>=55296&&E<=57343||E>1114111}function isWarning(E){return E>=1&&E<=8||11===E||E>=13&&E<=31||E>=127&&E<=159||E>=64976&&E<=65007||65535==(65535&E)||65534==(65535&E)}var has=__webpack_require__("XfW5"),characterEntities=__webpack_require__("LLx9"),legacy=__webpack_require__("P4LG"),invalid=__webpack_require__("CHTh"),decimal=__webpack_require__("/EOA"),hexadecimal=__webpack_require__("/Abr"),alphanumerical=__webpack_require__("2P8a");module.exports=wrapper;var fromCharCode=String.fromCharCode,noop=Function.prototype,REPLACEMENT="�",FORM_FEED="\f",AMPERSAND="&",OCTOTHORP="#",SEMICOLON=";",NEWLINE="\n",X_LOWER="x",X_UPPER="X",SPACE=" ",LESS_THAN="<",EQUAL="=",EMPTY="",TAB="\t",defaults={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},NAMED="named",HEXADECIMAL="hexadecimal",DECIMAL="decimal",BASE={};BASE[HEXADECIMAL]=16,BASE[DECIMAL]=10;var TESTS={};TESTS[NAMED]=alphanumerical,TESTS[DECIMAL]=decimal,TESTS[HEXADECIMAL]=hexadecimal;var NAMED_NOT_TERMINATED=1,NUMERIC_NOT_TERMINATED=2,NAMED_EMPTY=3,NUMERIC_EMPTY=4,NAMED_UNKNOWN=5,NUMERIC_DISALLOWED=6,NUMERIC_PROHIBITED=7,NUMERIC_REFERENCE="Numeric character references",NAMED_REFERENCE="Named character references",TERMINATED=" must be terminated by a semicolon",VOID=" cannot be empty",MESSAGES={};MESSAGES[NAMED_NOT_TERMINATED]=NAMED_REFERENCE+TERMINATED,MESSAGES[NUMERIC_NOT_TERMINATED]=NUMERIC_REFERENCE+TERMINATED,MESSAGES[NAMED_EMPTY]=NAMED_REFERENCE+VOID,MESSAGES[NUMERIC_EMPTY]=NUMERIC_REFERENCE+VOID,MESSAGES[NAMED_UNKNOWN]=NAMED_REFERENCE+" must be known",MESSAGES[NUMERIC_DISALLOWED]=NUMERIC_REFERENCE+" cannot be disallowed",MESSAGES[NUMERIC_PROHIBITED]=NUMERIC_REFERENCE+" cannot be outside the permissible Unicode range";

/***/ }),

/***/ "dVck":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function repeat(e,r){if("string"!=typeof e)throw new TypeError("expected a string");if(1===r)return e;if(2===r)return e+e;var t=e.length*r;if(cache!==e||void 0===cache)cache=e,res="";else if(res.length>=t)return res.substr(0,t);for(;t>res.length&&r>1;)1&r&&(res+=e),r>>=1,e+=e;return res+=e,res=res.substr(0,t)}var res="",cache;module.exports=repeat;

/***/ }),

/***/ "dqO4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function mergeable(n){var t,e;return"text"!==n.type||!n.position||(t=n.position.start,e=n.position.end,t.line!==e.line||e.column-t.column===n.value.length)}function mergeText(n,t){return n.value+=t.value,n}function mergeBlockquote(n,t){return this.options.commonmark?t:(n.children=n.children.concat(t.children),n)}function factory(n){function t(t,e){function r(n){for(var t=-1,e=n.indexOf("\n");e!==-1;)B++,t=e,e=n.indexOf("\n",e+1);t===-1?L+=n.length:L=n.length-t,B in E&&(t!==-1?L+=E[B]:L<=E[B]&&(L=E[B]+1))}function i(){var n=[],t=B+1;return function(){for(var e=B+1;t<e;)n.push((E[t]||0)+1),t++;return n}}function o(){var n={line:B,column:L};return n.offset=d.toOffset(n),n}function l(n){this.start=n,this.end=o()}function u(n){t.substring(0,n.length)!==n&&d.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),o())}function c(){function n(n,e){var r=n.position,i=r?r.start:t,o=[],u=r&&r.end.line,c=t.line;if(n.position=new l(i),r&&e&&r.indent){if(o=r.indent,u<c){for(;++u<c;)o.push((E[u]||0)+1);o.push(t.column)}e=o.concat(e)}return n.position.indent=e||[],n}var t=o();return n}function f(n,t){var e=t?t.children:y,r=e[e.length-1];return r&&n.type===r.type&&n.type in MERGEABLE_NODES&&mergeable(r)&&mergeable(n)&&(n=MERGEABLE_NODES[n.type].call(d,r,n)),n!==r&&e.push(n),d.atStart&&0!==y.length&&d.exitStart(),n}function a(n){function e(n,t){return p(f(p(n),t),s)}function l(){var r=e.apply(null,arguments);return B=h.line,L=h.column,t=n+t,r}function a(){var e=p({});return B=h.line,L=h.column,t=n+t,e.position}var s=i(),p=c(),h=o();return u(n),e.reset=l,l.test=a,e.test=a,t=t.substring(n.length),r(n),s=s(),e}var s,p,h,g,m,v,d=this,E=d.offset,y=[],k=d[n+"Methods"],x=d[n+"Tokenizers"],B=e.line,L=e.column;if(!t)return y;for(a.now=o,a.file=d.file,r("");t;){for(s=-1,p=k.length,m=!1;++s<p&&(g=k[s],!(h=x[g])||h.onlyAtStart&&!d.atStart||h.notInList&&d.inList||h.notInBlock&&d.inBlock||h.notInLink&&d.inLink||(v=t.length,h.apply(d,[a,t]),!(m=v!==t.length))););m||d.file.fail(new Error("Infinite loop"),a.now())}return d.eof=o(),y}return t}module.exports=factory;var MERGEABLE_NODES={text:mergeText,blockquote:mergeBlockquote};

/***/ }),

/***/ "eJpZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function table(e,_,t){var l,i,E,A,L,n,r,N,C,I,f,h,s,T,a,c,B,u,o,O,p,G,S,g,P=this;if(P.options.gfm){for(l=0,u=0,n=_.length+1,r=[];l<n;){if(G=_.indexOf(C_NEWLINE,l),S=_.indexOf(C_PIPE,l+1),G===-1&&(G=_.length),S===-1||S>G){if(u<MIN_TABLE_ROWS)return;break}r.push(_.slice(l,G)),u++,l=G+1}for(A=r.join(C_NEWLINE),i=r.splice(1,1)[0]||[],l=0,n=i.length,u--,E=!1,f=[];l<n;){if((C=i.charAt(l))===C_PIPE){if(I=null,E===!1){if(g===!1)return}else f.push(E),E=!1;g=!1}else if(C===C_DASH)I=!0,E=E||TABLE_ALIGN_NONE;else if(C===C_COLON)E=E===TABLE_ALIGN_LEFT?TABLE_ALIGN_CENTER:I&&E===TABLE_ALIGN_NONE?TABLE_ALIGN_RIGHT:TABLE_ALIGN_LEFT;else if(!whitespace(C))return;l++}if(E!==!1&&f.push(E),!(f.length<MIN_TABLE_COLUMNS)){if(t)return!0;for(B=-1,O=[],p=e(A).reset({type:"table",align:f,children:O});++B<u;){for(o=r[B],L={type:"tableRow",children:[]},B&&e(C_NEWLINE),e(o).reset(L,p),n=o.length+1,l=0,N="",h="",s=!0,T=null,a=null;l<n;)if((C=o.charAt(l))!==C_TAB&&C!==C_SPACE){if(""===C||C===C_PIPE)if(s)e(C);else{if(C&&a){N+=C,l++;continue}!h&&!C||s||(A=h,N.length>1&&(C?(A+=N.slice(0,N.length-1),N=N.charAt(N.length-1)):(A+=N,N="")),c=e.now(),e(A)({type:"tableCell",children:P.tokenizeInline(h,c)},L)),e(N+C),N="",h=""}else if(N&&(h+=N,N=""),h+=C,C===C_BACKSLASH&&l!==n-2&&(h+=o.charAt(l+1),l++),C===C_TICK){for(T=1;o.charAt(l+1)===C;)h+=C,l++,T++;a?T>=a&&(a=0):a=T}s=!1,l++}else h?N+=C:e(C),l++;B||e(C_NEWLINE+i)}return p}}}var whitespace=__webpack_require__("5FGK");module.exports=table,table.notInList=!0;var C_BACKSLASH="\\",C_TICK="`",C_DASH="-",C_PIPE="|",C_COLON=":",C_SPACE=" ",C_NEWLINE="\n",C_TAB="\t",MIN_TABLE_COLUMNS=1,MIN_TABLE_ROWS=2,TABLE_ALIGN_LEFT="left",TABLE_ALIGN_CENTER="center",TABLE_ALIGN_RIGHT="right",TABLE_ALIGN_NONE=null;

/***/ }),

/***/ "eQha":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function definition(i){var e=uri(i.url);return i.title&&(e+=" "+title(i.title)),"["+i.identifier+"]: "+e}var uri=__webpack_require__("vwBX"),title=__webpack_require__("T4OZ");module.exports=definition;

/***/ }),

/***/ "efCm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function url(O,e,t){var T,r,C,_,i,L,P,l,n,R,o,a,c=this;if(c.options.gfm){for(T="",_=-1,l=PROTOCOLS_LENGTH;++_<l;)if(L=PROTOCOLS[_],P=e.slice(0,L.length),P.toLowerCase()===L){T=P;break}if(T){for(_=T.length,l=e.length,n="",R=0;_<l&&(C=e.charAt(_),!whitespace(C)&&C!==C_LT)&&("."!==C&&","!==C&&":"!==C&&";"!==C&&'"'!==C&&"'"!==C&&")"!==C&&"]"!==C||(o=e.charAt(_+1))&&!whitespace(o))&&(C!==C_PAREN_OPEN&&C!==C_BRACKET_OPEN||R++,C!==C_PAREN_CLOSE&&C!==C_BRACKET_CLOSE||!(--R<0));)n+=C,_++;if(n){if(T+=n,r=T,L===MAILTO_PROTOCOL){if((i=n.indexOf(C_AT_SIGN))===-1||i===l-1)return;r=r.substr(MAILTO_PROTOCOL.length)}return!!t||(a=c.enterLink(),r=c.tokenizeInline(r,O.now()),a(),O(T)({type:"link",title:null,url:decode(T),children:r}))}}}}var decode=__webpack_require__("dTZW"),whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("VX4J");module.exports=url,url.locator=locate,url.notInLink=!0;var C_BRACKET_OPEN="[",C_BRACKET_CLOSE="]",C_PAREN_OPEN="(",C_PAREN_CLOSE=")",C_LT="<",C_AT_SIGN="@",HTTP_PROTOCOL="http://",HTTPS_PROTOCOL="https://",MAILTO_PROTOCOL="mailto:",PROTOCOLS=[HTTP_PROTOCOL,HTTPS_PROTOCOL,MAILTO_PROTOCOL],PROTOCOLS_LENGTH=PROTOCOLS.length;

/***/ }),

/***/ "fATh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function factory(r,e){function n(n){for(var t,i=0,u=n.indexOf("\\"),c=r[e],f=[];u!==-1;)f.push(n.slice(i,u)),i=u+1,t=n.charAt(i),t&&c.indexOf(t)!==-1||f.push("\\"),u=n.indexOf("\\",i);return f.push(n.slice(i)),f.join("")}return n}module.exports=factory;

/***/ }),

/***/ "fFsz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function text(e,t,i){var n,l,o,r,s,c,a,f,u,x,d=this;if(i)return!0;for(n=d.inlineMethods,r=n.length,l=d.inlineTokenizers,o=-1,u=t.length;++o<r;)"text"!==(f=n[o])&&l[f]&&(a=l[f].locator,a||e.file.fail("Missing locator: `"+f+"`"),(c=a.call(d,t,1))!==-1&&c<u&&(u=c));s=t.slice(0,u),x=e.now(),d.decode(s,x,function(t,i,n){e(n||t)({type:"text",value:t})})}module.exports=text;

/***/ }),

/***/ "fRHV":
/***/ (function(module, exports) {

var ERROR_MESSAGE="Function.prototype.bind called on incompatible ",slice=Array.prototype.slice,toStr=Object.prototype.toString,funcType="[object Function]";module.exports=function(t){var n=this;if("function"!=typeof n||toStr.call(n)!==funcType)throw new TypeError(ERROR_MESSAGE+n);for(var o,e=slice.call(arguments,1),r=function(){if(this instanceof o){var r=n.apply(this,e.concat(slice.call(arguments)));return Object(r)===r?r:this}return n.apply(t,e.concat(slice.call(arguments)))},c=Math.max(0,n.length-e.length),i=[],p=0;p<c;p++)i.push("$"+p);if(o=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(r),n.prototype){var l=function(){};l.prototype=n.prototype,o.prototype=new l,l.prototype=null}return o};

/***/ }),

/***/ "gatn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function text(e,t){return this.encode(this.escape(e.value,e,t),e)}module.exports=text;

/***/ }),

/***/ "gf/M":
/***/ (function(module, exports) {

module.exports=function(t){return"[object Function]"===Object.prototype.toString.call(t)};

/***/ }),

/***/ "gnUo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function unherit(t){function n(n){return t.apply(this,n)}function e(){return this instanceof e?t.apply(this,arguments):new n(arguments)}var i,r,o;inherits(e,t),inherits(n,e),i=e.prototype;for(r in i)(o=i[r])&&"object"==typeof o&&(i[r]="concat"in o?o.concat():xtend(o));return e}var xtend=__webpack_require__("q+vg"),inherits=__webpack_require__("LC74");module.exports=unherit;

/***/ }),

/***/ "gp5W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function strikethrough(e,t,r){var i,c,h,o=this,a="",s="",l="",n="";if(o.options.gfm&&t.charAt(0)===C_TILDE&&t.charAt(1)===C_TILDE&&!whitespace(t.charAt(2)))for(i=1,c=t.length,h=e.now(),h.column+=2,h.offset+=2;++i<c;){if(!((a=t.charAt(i))!==C_TILDE||s!==C_TILDE||l&&whitespace(l)))return!!r||e(DOUBLE+n+DOUBLE)({type:"delete",children:o.tokenizeInline(n,h)});n+=s,l=s,s=a}}var whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("+oRu");module.exports=strikethrough,strikethrough.locator=locate;var C_TILDE="~",DOUBLE="~~";

/***/ }),

/***/ "hIvf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function parse(r){var e=unherit(Parser);e.prototype.options=xtend(e.prototype.options,this.data("settings"),r),this.Parser=e}var unherit=__webpack_require__("gnUo"),xtend=__webpack_require__("q+vg"),Parser=__webpack_require__("pqYZ");module.exports=parse,parse.Parser=Parser;

/***/ }),

/***/ "i6r2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function length(e){var t;return"&"!==e.charAt(0)?0:(t=e.split("&",2).join("&"),t.length-decode(t).length)}var decode=__webpack_require__("dTZW");module.exports=length;

/***/ }),

/***/ "iQ5r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function tableCell(l){return this.all(l).join("")}module.exports=tableCell;

/***/ }),

/***/ "ico/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function lineBreak(){return map[this.options.commonmark]}module.exports=lineBreak;var map={true:"\\\n",false:"  \n"};

/***/ }),

/***/ "j9wi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function block(n){for(var e,t,r=this,s=[],o=n.children,p=o.length,i=-1;++i<p;)e=o[i],t&&(e.type===t.type&&"list"===t.type?s.push(t.ordered===e.ordered?"\n\n\n":"\n\n"):"list"!==t.type||"code"!==e.type||e.lang?s.push("\n\n"):s.push("\n\n\n")),s.push(r.visit(e,n)),t=e;return s.join("")}module.exports=block;

/***/ }),

/***/ "kjjq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function compile(){return this.visit(compact(this.tree,this.options.commonmark))}var compact=__webpack_require__("o2yl");module.exports=compile;

/***/ }),

/***/ "l4af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function compare(r,n){return r<n}function upperBound(r,n,o){return void 0===o&&(o=compare),function(){for(var e=r.length,u=0;e;){var t=e>>>1,a=u+t;o(n,r[a])?e=t:(u=a+1,e-=t+1)}return u}()}function lowerBound(r,n,o){return void 0===o&&(o=compare),function(){for(var e=r.length,u=0;e;){var t=e>>>1,a=u+t;o(r[a],n)?(u=a+1,e-=t+1):e=t}return u}()}function binarySearch(r,n,o){return void 0===o&&(o=compare),function(){var e=lowerBound(r,n,o);return e!==r.length&&!o(n,r[e])}()}exports.compare=compare,exports.lowerBound=lowerBound,exports.upperBound=upperBound,exports.binarySearch=binarySearch;

/***/ }),

/***/ "lBnD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function thematicBreak(C,_,E){for(var A,t,e,r,R=-1,S=_.length+1,a="";++R<S&&((A=_.charAt(R))===C_TAB||A===C_SPACE);)a+=A;if(A===C_ASTERISK||A===C_DASH||A===C_UNDERSCORE)for(t=A,a+=A,e=1,r="";++R<S;)if((A=_.charAt(R))===t)e++,a+=r+t,r="";else{if(A!==C_SPACE)return e>=THEMATIC_BREAK_MARKER_COUNT&&(!A||A===C_NEWLINE)?(a+=r,!!E||C(a)({type:"thematicBreak"})):void 0;r+=A}}module.exports=thematicBreak;var C_NEWLINE="\n",C_TAB="\t",C_SPACE=" ",C_ASTERISK="*",C_UNDERSCORE="_",C_DASH="-",THEMATIC_BREAK_MARKER_COUNT=3;

/***/ }),

/***/ "lHNd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function interrupt(r,t,e,n){for(var o,i,p,u,a,f,c=["pedantic","commonmark"],l=c.length,m=r.length,s=-1;++s<m;){for(o=r[s],i=o[1]||{},p=o[0],u=-1,f=!1;++u<l;)if(a=c[u],void 0!==i[a]&&i[a]!==e.options[a]){f=!0;break}if(!f&&t[p].apply(e,n))return!0}return!1}module.exports=interrupt;

/***/ }),

/***/ "mQUw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function strikethrough(t){return"~~"+this.all(t).join("")+"~~"}module.exports=strikethrough;

/***/ }),

/***/ "mjOQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function VFile(t){var e,r,s;if(t){if(string(t)||buffer(t))t={contents:t};else if("message"in t&&"messages"in t)return t}else t={};if(!(this instanceof VFile))return new VFile(t);for(this.data={},this.messages=[],this.history=[],this.cwd=process.cwd(),r=-1,s=order.length;++r<s;)e=order[r],has(t,e)&&(this[e]=t[e]);for(e in t)order.indexOf(e)===-1&&(this[e]=t[e])}function toString(t){var e=this.contents||"";return buffer(e)?e.toString(t):String(e)}function message(t,e,r){var s,n,i=this.path,a=stringify(e)||"1:1";return s={start:{line:null,column:null},end:{line:null,column:null}},e&&e.position&&(e=e.position),e&&(e.start?(s=e,e=e.start):s.start=e),n=new VMessage(t.message||t),n.name=(i?i+":":"")+a,n.file=i||"",n.reason=t.message||t,n.line=e?e.line:null,n.column=e?e.column:null,n.location=s,n.ruleId=r||null,n.source=null,n.fatal=!1,t.stack&&(n.stack=t.stack),this.messages.push(n),n}function fail(){var t=this.message.apply(this,arguments);throw t.fatal=!0,t}function VMessagePrototype(){}function VMessage(t){this.message=t}function assertPart(t,e){if(t.indexOf(path.sep)!==-1)throw new Error("`"+e+"` cannot be a path: did not expect `"+path.sep+"`")}function assertNonEmpty(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function assertPath(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}var path=__webpack_require__("o/zv"),has=__webpack_require__("XfW5"),replace=__webpack_require__("ryvU"),stringify=__webpack_require__("LmLB"),buffer=__webpack_require__("Re3r"),string=__webpack_require__("wGrg");module.exports=VFile;var proto=VFile.prototype;proto.toString=toString,proto.message=message,proto.fail=fail,proto.warn=message;var order=["history","path","basename","stem","extname","dirname"];Object.defineProperty(proto,"path",{get:function(){return this.history[this.history.length-1]},set:function(t){assertNonEmpty(t,"path"),t!==this.path&&this.history.push(t)}}),Object.defineProperty(proto,"dirname",{get:function(){return string(this.path)?path.dirname(this.path):void 0},set:function(t){assertPath(this.path,"dirname"),this.path=path.join(t||"",this.basename)}}),Object.defineProperty(proto,"basename",{get:function(){return string(this.path)?path.basename(this.path):void 0},set:function(t){assertNonEmpty(t,"basename"),assertPart(t,"basename"),this.path=path.join(this.dirname||"",t)}}),Object.defineProperty(proto,"extname",{get:function(){return string(this.path)?path.extname(this.path):void 0},set:function(t){var e=t||"";if(assertPart(e,"extname"),assertPath(this.path,"extname"),e){if("."!==e.charAt(0))throw new Error("`extname` must start with `.`");if(e.indexOf(".",1)!==-1)throw new Error("`extname` cannot contain multiple dots")}this.path=replace(this.path,e)}}),Object.defineProperty(proto,"stem",{get:function(){return string(this.path)?path.basename(this.path,this.extname):void 0},set:function(t){assertNonEmpty(t,"stem"),assertPart(t,"stem"),this.path=path.join(this.dirname||"",t+(this.extname||""))}}),VMessagePrototype.prototype=Error.prototype,VMessage.prototype=new VMessagePrototype,proto=VMessage.prototype,proto.file=proto.name=proto.reason=proto.message=proto.stack="",proto.fatal=proto.column=proto.line=null;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("W2nU")))

/***/ }),

/***/ "n0/0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function Compiler(e,i){this.inLink=!1,this.inTable=!1,this.tree=e,this.file=i,this.options=xtend(this.options),this.setOptions({})}var xtend=__webpack_require__("q+vg"),toggle=__webpack_require__("BBcX");module.exports=Compiler;var proto=Compiler.prototype;proto.enterLink=toggle("inLink",!1),proto.enterTable=toggle("inTable",!1),proto.enterLinkReference=__webpack_require__("IHFu"),proto.options=__webpack_require__("T+0W"),proto.setOptions=__webpack_require__("br67"),proto.compile=__webpack_require__("kjjq"),proto.visit=__webpack_require__("rky9"),proto.all=__webpack_require__("cHA3"),proto.block=__webpack_require__("j9wi"),proto.visitOrderedItems=__webpack_require__("v1W7"),proto.visitUnorderedItems=__webpack_require__("DiBB"),proto.visitors={root:__webpack_require__("GtcE"),text:__webpack_require__("gatn"),heading:__webpack_require__("UaBb"),paragraph:__webpack_require__("vOCk"),blockquote:__webpack_require__("RXtJ"),list:__webpack_require__("y9Xm"),listItem:__webpack_require__("9euR"),inlineCode:__webpack_require__("pn6G"),yaml:__webpack_require__("AySM"),code:__webpack_require__("IBV9"),html:__webpack_require__("ojLw"),thematicBreak:__webpack_require__("oBtX"),strong:__webpack_require__("UWtV"),emphasis:__webpack_require__("buw/"),break:__webpack_require__("ico/"),delete:__webpack_require__("mQUw"),link:__webpack_require__("T3u8"),linkReference:__webpack_require__("Pvji"),imageReference:__webpack_require__("4Gzi"),definition:__webpack_require__("eQha"),image:__webpack_require__("phWv"),footnote:__webpack_require__("BPYs"),footnoteReference:__webpack_require__("qF/V"),footnoteDefinition:__webpack_require__("WK+h"),table:__webpack_require__("3JAh"),tableCell:__webpack_require__("iQ5r")};

/***/ }),

/***/ "o/zv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function normalizeArray(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function filter(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(r){return splitPathRe.exec(r).slice(1)};exports.resolve=function(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},exports.normalize=function(r){var t=exports.isAbsolute(r),e="/"===substr(r,-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),r||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}for(var l=[],u=o;u<n.length;u++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=splitPath(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},exports.basename=function(r,t){var e=splitPath(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return splitPath(r)[3]};var substr="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("W2nU")))

/***/ }),

/***/ "o2yl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function compact(i,e){function t(i){i.children&&o(i)}function n(i,t,n){var o=n.children,r=t&&o[t-1];if(r&&i.type===r.type&&mergeable(r,e)&&mergeable(i,e))return i.value&&(r.value+=i.value),i.children&&(r.children=r.children.concat(i.children)),o.splice(t,1),r.position&&i.position&&(r.position.end=i.position.end),t}var o=modify(n);return visit(i,t),i}function mergeable(i,e){var t,n;return"text"===i.type?!i.position||(t=i.position.start,n=i.position.end,t.line!==n.line||n.column-t.column===i.value.length):e&&"blockquote"===i.type}var visit=__webpack_require__("cS5i"),modify=__webpack_require__("XV+r");module.exports=compact;

/***/ }),

/***/ "oBtX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function thematic(){var e=this.options,t=repeat(e.rule,e.ruleRepetition);return e.ruleSpaces?t.split("").join(" "):t}var repeat=__webpack_require__("dVck");module.exports=thematic;

/***/ }),

/***/ "ojLw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function html(t){return t.value}module.exports=html;

/***/ }),

/***/ "pC3S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function inlineCode(e,r,i){for(var t,a,n,c,o,C,l,f,h=r.length,u=0,s="",d="";u<h&&r.charAt(u)===C_TICK;)s+=C_TICK,u++;if(s){for(o=s,c=u,s="",f=r.charAt(u),n=0;u<h;){if(C=f,f=r.charAt(u+1),C===C_TICK?(n++,d+=C):(n=0,s+=C),n&&f!==C_TICK){if(n===c){o+=s+d,l=!0;break}s+=d,d=""}u++}if(!l){if(c%2!=0)return;s=""}if(i)return!0;for(t="",a="",h=s.length,u=-1;++u<h;)C=s.charAt(u),whitespace(C)?a+=C:(a&&(t&&(t+=a),a=""),t+=C);return e(o)({type:"inlineCode",value:t})}}var whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("FEa9");module.exports=inlineCode,inlineCode.locator=locate;var C_TICK="`";

/***/ }),

/***/ "phWv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function image(e){var t=this,i=uri(t.encode(e.url||"",e)),r=t.enterLink(),l=t.encode(t.escape(e.alt||"",e));return r(),e.title&&(i+=" "+title(t.encode(e.title,e))),"!["+l+"]("+i+")"}var uri=__webpack_require__("vwBX"),title=__webpack_require__("T4OZ");module.exports=image;

/***/ }),

/***/ "pn6G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function inlineCode(e){var r=e.value,t=repeat("`",streak(r,"`")+1),a=t,n=t;return"`"===r.charAt(0)&&(a+=" "),"`"===r.charAt(r.length-1)&&(n=" "+n),a+r+n}var streak=__webpack_require__("bDIm"),repeat=__webpack_require__("dVck");module.exports=inlineCode;

/***/ }),

/***/ "pqYZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function Parser(e,t){this.file=t,this.offset={},this.options=xtend(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=vfileLocation(t).toOffset,this.unescape=unescape(this,"escape"),this.decode=decode(this)}function keys(e){var t,o=[];for(t in e)o.push(t);return o}var xtend=__webpack_require__("q+vg"),toggle=__webpack_require__("BBcX"),vfileLocation=__webpack_require__("d4Rk"),unescape=__webpack_require__("fATh"),decode=__webpack_require__("CMzG"),tokenizer=__webpack_require__("dqO4");module.exports=Parser;var proto=Parser.prototype;proto.setOptions=__webpack_require__("9aN+"),proto.parse=__webpack_require__("v6G5"),proto.options=__webpack_require__("dHqN"),proto.exitStart=toggle("atStart",!0),proto.enterList=toggle("inList",!1),proto.enterLink=toggle("inLink",!1),proto.enterBlock=toggle("inBlock",!1),proto.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],proto.interruptList=[["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],proto.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],proto.blockTokenizers={yamlFrontMatter:__webpack_require__("SjWX"),newline:__webpack_require__("Ssij"),indentedCode:__webpack_require__("1fab"),fencedCode:__webpack_require__("STDS"),blockquote:__webpack_require__("+DZ4"),atxHeading:__webpack_require__("J2sK"),thematicBreak:__webpack_require__("lBnD"),list:__webpack_require__("T2xC"),setextHeading:__webpack_require__("18WG"),html:__webpack_require__("M4Bb"),footnote:__webpack_require__("ZaRG"),definition:__webpack_require__("JLpa"),table:__webpack_require__("eJpZ"),paragraph:__webpack_require__("EYOx")},proto.inlineTokenizers={escape:__webpack_require__("QrNq"),autoLink:__webpack_require__("uFu0"),url:__webpack_require__("efCm"),html:__webpack_require__("Eavi"),link:__webpack_require__("aBxj"),reference:__webpack_require__("QLAS"),strong:__webpack_require__("vXYk"),emphasis:__webpack_require__("15wF"),deletion:__webpack_require__("gp5W"),code:__webpack_require__("pC3S"),break:__webpack_require__("6HgG"),text:__webpack_require__("fFsz")},proto.blockMethods=keys(proto.blockTokenizers),proto.inlineMethods=keys(proto.inlineTokenizers),proto.tokenizeBlock=tokenizer("block"),proto.tokenizeInline=tokenizer("inline"),proto.tokenizeFactory=tokenizer;

/***/ }),

/***/ "q+vg":
/***/ (function(module, exports) {

function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

/***/ }),

/***/ "qF/V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function footnoteReference(e){return"[^"+e.identifier+"]"}module.exports=footnoteReference;

/***/ }),

/***/ "rky9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function one(e,o){var t=this,i=t.visitors;return"function"!=typeof i[e.type]&&t.file.fail(new Error("Missing compiler for node of type `"+e.type+"`: `"+e+"`"),e),i[e.type].call(t,e,o)}module.exports=one;

/***/ }),

/***/ "ryvU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function replaceExt(e,t){if("string"!=typeof e)return e;if(0===e.length)return e;var r=path.basename(e,path.extname(e))+t;return path.join(path.dirname(e),r)}var path=__webpack_require__("o/zv");module.exports=replaceExt;

/***/ }),

/***/ "t67x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var ASTNodeTypes;!function(e){e.Document="Document",e.Paragraph="Paragraph",e.BlockQuote="BlockQuote",e.ListItem="ListItem",e.List="List",e.Header="Header",e.CodeBlock="CodeBlock",e.HtmlBlock="HtmlBlock",e.ReferenceDef="ReferenceDef",e.HorizontalRule="HorizontalRule",e.Comment="Comment",e.Str="Str",e.Break="Break",e.Emphasis="Emphasis",e.Strong="Strong",e.Html="Html",e.Link="Link",e.Image="Image",e.Code="Code",e.Delete="Delete"}(ASTNodeTypes=exports.ASTNodeTypes||(exports.ASTNodeTypes={}));

/***/ }),

/***/ "tKin":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function ccount(r,t){var e,n=0;if(r=String(r),"string"!=typeof t||1!==t.length)throw new Error("Expected character");for(e=r.indexOf(t);e!==-1;)n++,e=r.indexOf(t,e+1);return n}module.exports=ccount;

/***/ }),

/***/ "tQYZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function label(e){var r=e.referenceType,t="full"===r?e.identifier:"";return"shortcut"===r?t:"["+t+"]"}module.exports=label;

/***/ }),

/***/ "uFu0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function autoLink(e,t,n){var i,r,o,L,T,a,l,A,c,_,s,u;if(t.charAt(0)===C_LT){for(i=this,r="",o=t.length,L=0,T="",l=!1,A="",L++,r=C_LT;L<o&&" "!==(a=t.charAt(L))&&a!==C_GT&&a!==C_AT_SIGN&&(":"!==a||t.charAt(L+1)!==C_SLASH);)T+=a,L++;if(T){if(A+=T,T="",a=t.charAt(L),A+=a,L++,a===C_AT_SIGN)l=!0;else{if(":"!==a||t.charAt(L+1)!==C_SLASH)return;A+=C_SLASH,L++}for(;L<o&&" "!==(a=t.charAt(L))&&a!==C_GT;)T+=a,L++;if(a=t.charAt(L),T&&a===C_GT)return!!n||(A+=T,_=A,r+=A+a,c=e.now(),c.column++,c.offset++,l&&(A.slice(0,MAILTO_LENGTH).toLowerCase()===MAILTO?(_=_.substr(MAILTO_LENGTH),c.column+=MAILTO_LENGTH,c.offset+=MAILTO_LENGTH):A=MAILTO+A),s=i.inlineTokenizers.escape,i.inlineTokenizers.escape=null,u=i.enterLink(),_=i.tokenizeInline(_,c),i.inlineTokenizers.escape=s,u(),e(r)({type:"link",title:null,url:decode(A),children:_}))}}}var decode=__webpack_require__("dTZW"),locate=__webpack_require__("uYcj");module.exports=autoLink,autoLink.locator=locate,autoLink.notInLink=!0;var C_LT="<",C_GT=">",C_AT_SIGN="@",C_SLASH="/",MAILTO="mailto:",MAILTO_LENGTH=MAILTO.length;

/***/ }),

/***/ "uYcj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){return e.indexOf("<",t)}module.exports=locate;

/***/ }),

/***/ "v1W7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function orderedItems(t){for(var e,r=this,s=r.visitors.listItem,i=r.options.incrementListMarker,n=[],o=t.start,d=t.children,l=d.length,c=-1;++c<l;)e=(i?o+c:o)+".",n[c]=s.call(r,d[c],t,c,e);return n.join("\n")}module.exports=orderedItems;

/***/ }),

/***/ "v6G5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function parse(){var e,o=this,t=String(o.file),i={line:1,column:1,offset:0},r=xtend(i);return t=t.replace(EXPRESSION_LINE_BREAKS,C_NEWLINE),65279===t.charCodeAt(0)&&(t=t.slice(1),r.column++,r.offset++),e={type:"root",children:o.tokenizeBlock(t,r),position:{start:i,end:o.eof||xtend(i)}},o.options.position||removePosition(e,!0),e}var xtend=__webpack_require__("q+vg"),removePosition=__webpack_require__("Ta85");module.exports=parse;var C_NEWLINE="\n",EXPRESSION_LINE_BREAKS=/\r\n|\r/g;

/***/ }),

/***/ "v6Z4":
/***/ (function(module, exports) {

module.exports = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"meta",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"pre",
	"section",
	"source",
	"title",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
];

/***/ }),

/***/ "vO+x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function escapes(m){var a=m||{};return a.commonmark?commonmark:a.gfm?gfm:defaults}module.exports=escapes;var defaults=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],gfm=defaults.concat(["~","|"]),commonmark=gfm.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);escapes.default=defaults,escapes.gfm=gfm,escapes.commonmark=commonmark;

/***/ }),

/***/ "vOCk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function paragraph(r){return this.all(r).join("")}module.exports=paragraph;

/***/ }),

/***/ "vXYk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function strong(t,r,e){var c,i,a,o,n,s,h,l=this,u=0,A=r.charAt(u);if(!(A!==C_ASTERISK&&A!==C_UNDERSCORE||r.charAt(++u)!==A||(i=l.options.pedantic,a=A,n=a+a,s=r.length,u++,o="",A="",i&&whitespace(r.charAt(u)))))for(;u<s;){if(h=A,!((A=r.charAt(u))!==a||r.charAt(u+1)!==a||i&&whitespace(h))&&(A=r.charAt(u+2))!==a){if(!trim(o))return;return!!e||(c=t.now(),c.column+=2,c.offset+=2,t(n+o+n)({type:"strong",children:l.tokenizeInline(o,c)}))}i||"\\"!==A||(o+=A,A=r.charAt(++u)),o+=A,u++}}var trim=__webpack_require__("QYuf"),whitespace=__webpack_require__("5FGK"),locate=__webpack_require__("3Sql");module.exports=strong,strong.locator=locate;var C_ASTERISK="*",C_UNDERSCORE="_";

/***/ }),

/***/ "vmzn":
/***/ (function(module, exports, __webpack_require__) {

function selectColor(e){var r,t=0;for(r in e)t=(t<<5)-t+e.charCodeAt(r),t|=0;return exports.colors[Math.abs(t)%exports.colors.length]}function createDebug(e){function r(){if(r.enabled){var e=r,t=+new Date,o=t-(prevTime||t);e.diff=o,e.prev=prevTime,e.curr=t,prevTime=t;for(var s=new Array(arguments.length),n=0;n<s.length;n++)s[n]=arguments[n];s[0]=exports.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var p=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,t){if("%%"===r)return r;p++;var o=exports.formatters[t];if("function"==typeof o){var n=s[p];r=o.call(e,n),s.splice(p,1),p--}return r}),exports.formatArgs.call(e,s);(r.log||exports.log||console.log.bind(console)).apply(e,s)}}return r.namespace=e,r.enabled=exports.enabled(e),r.useColors=exports.useColors(),r.color=selectColor(e),"function"==typeof exports.init&&exports.init(r),r}function enable(e){exports.save(e),exports.names=[],exports.skips=[];for(var r=(e||"").split(/[\s,]+/),t=r.length,o=0;o<t;o++)r[o]&&(e=r[o].replace(/\*/g,".*?"),"-"===e[0]?exports.skips.push(new RegExp("^"+e.substr(1)+"$")):exports.names.push(new RegExp("^"+e+"$")))}function disable(){exports.enable("")}function enabled(e){var r,t;for(r=0,t=exports.skips.length;r<t;r++)if(exports.skips[r].test(e))return!1;for(r=0,t=exports.names.length;r<t;r++)if(exports.names[r].test(e))return!0;return!1}function coerce(e){return e instanceof Error?e.stack||e.message:e}exports=module.exports=createDebug.debug=createDebug.default=createDebug,exports.coerce=coerce,exports.disable=disable,exports.enable=enable,exports.enabled=enabled,exports.humanize=__webpack_require__("EarI"),exports.names=[],exports.skips=[],exports.formatters={};var prevTime;

/***/ }),

/***/ "vwBX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function enclose(e,t){return t||0===e.length||re.test(e)||count(e,"(")!==count(e,")")?"<"+e+">":e}var count=__webpack_require__("tKin");module.exports=enclose;var re=/\s/;

/***/ }),

/***/ "wGrg":
/***/ (function(module, exports) {

function isString(t){return"[object String]"===toString.call(t)}var toString=Object.prototype.toString;module.exports=isString;

/***/ }),

/***/ "wN2/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var toString=Object.prototype.toString;module.exports=function(t){var e;return"[object Object]"===toString.call(t)&&(null===(e=Object.getPrototypeOf(t))||e===Object.getPrototypeOf({}))};

/***/ }),

/***/ "wbH0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function factory(e){function t(t,r,i){function a(e){return g.indexOf(e)===-1?entities[e]:BACKSLASH+e}var n,c,l,h,u,s,A=this,p=e.gfm,f=e.commonmark,o=e.pedantic,x=f?[".",")"]:["."],m=i&&i.children,L=m&&m.indexOf(r),S=m&&m[L-1],d=m&&m[L+1],v=t.length,g=escapes(e),B=-1,C=[],H=C;for(n=S?text(S)&&/\n\s*$/.test(S.value):!i||"root"===i.type||"paragraph"===i.type;++B<v;){if(c=t.charAt(B),s=!1,"\n"===c)n=!0;else if(c===BACKSLASH||"`"===c||"*"===c||"["===c||"<"===c||"&"===c&&prefix(t.slice(B))>0||"]"===c&&A.inLink||p&&"~"===c&&"~"===t.charAt(B+1)||p&&"|"===c&&(A.inTable||alignment(t,B))||"_"===c&&B>0&&B<v-1&&(o||!alphanumeric(t.charAt(B-1))||!alphanumeric(t.charAt(B+1)))||p&&!A.inLink&&":"===c&&protocol(C.join("")))s=!0;else if(n)if(">"===c||"#"===c||BULLETS.indexOf(c)!==-1)s=!0;else if(decimal(c)){for(u=B+1;u<v&&decimal(t.charAt(u));)u++;x.indexOf(t.charAt(u))!==-1&&((d=t.charAt(u+1))&&" "!==d&&"\t"!==d&&"\n"!==d||(C.push(t.slice(B,u)),B=u,c=t.charAt(B),s=!0))}n&&!whitespace(c)&&(n=!1),C.push(s?a(c):c)}if(m&&text(r)){if(S&&"shortcut"===S.referenceType){for(B=-1,v=H.length;++B<v;)if(" "!==(c=H[B])&&"\t"!==c){"("!==c&&":"!==c||(H[B]=a(c));break}text(d)&&B===v&&"("===d.value.charAt(0)&&H.push(BACKSLASH)}p&&!A.inLink&&text(S)&&":"===t.charAt(0)&&protocol(S.value.slice(-6))&&(H[0]=a(":")),text(d)&&"&"===t.charAt(v-1)&&0!==prefix("&"+d.value)&&(H[H.length-1]=a("&")),p&&text(d)&&"~"===t.charAt(v-1)&&"~"===d.value.charAt(0)&&H.splice(H.length-1,0,BACKSLASH),l=text(S)&&alphanumeric(S.value.slice(-1)),h=text(d)&&alphanumeric(d.value.charAt(0)),1===v?"_"!==t||!o&&l&&h||H.unshift(BACKSLASH):("_"!==t.charAt(0)||!o&&l&&alphanumeric(t.charAt(1))||H.unshift(BACKSLASH),"_"!==t.charAt(v-1)||!o&&h&&alphanumeric(t.charAt(v-2))||H.splice(H.length-1,0,BACKSLASH))}return H.join("")}return t}function alignment(e,t){var r=e.lastIndexOf("\n",t),i=e.indexOf("\n",t);for(r=r===-1?-1:r,i=i===-1?e.length:i;++r<i;)if(ALLIGNMENT.indexOf(e.charAt(r))===-1)return!1;return!0}function text(e){return e&&"text"===e.type}function protocol(e){var t=e.slice(-6).toLowerCase();return"mailto"===t||"https"===t.slice(-5)||"http"===t.slice(-4)}var decimal=__webpack_require__("/EOA"),alphanumeric=__webpack_require__("bw58"),whitespace=__webpack_require__("5FGK"),escapes=__webpack_require__("vO+x"),prefix=__webpack_require__("i6r2");module.exports=factory;var BACKSLASH="\\",BULLETS=["*","-","+"],ALLIGNMENT=[":","-"," ","|"],entities={"<":"&lt;",":":"&#x3A;","&":"&amp;","|":"&#x7C;","~":"&#x7E;"};

/***/ }),

/***/ "x9L1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function locate(e,t){return e.indexOf("\\",t)}module.exports=locate;

/***/ }),

/***/ "xq7r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function pipelineParse(e,n){n.tree=e.parse(n.file)}function pipelineRun(e,n,r){function i(e,i,t){e?r(e):(n.tree=i,n.file=t,r())}e.run(n.tree,n.file,i)}function pipelineStringify(e,n){n.file.contents=e.stringify(n.tree,n.file)}function unified(){function e(){for(var e=unified(),n=c.length,r=-1;++r<n;)e.use.apply(null,c[r]);return e.data(extend(!0,{},g)),e}function n(){var n,r,i,t;if(v)return e;for(;++d<c.length;)n=c[d],r=n[0],i=n[1],t=null,i!==!1&&(i===!0&&(n[1]=void 0),t=r.apply(e,n.slice(1)),func(t)&&p.use(t));return v=!0,d=1/0,e}function r(n,r){return string(n)?2===arguments.length?(assertUnfrozen("data",v),g[n]=r,e):has(g,n)&&g[n]||null:n?(assertUnfrozen("data",v),g=n,e):g}function i(n){function r(e){s(e.plugins),e.settings&&(u=extend(u||{},e.settings))}function i(e){if(func(e))o(e);else{if("object"!=typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?o.apply(null,e):r(e)}}function s(e){var n,r;if(null===e||void 0===e);else{if(!("object"==typeof e&&"length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(n=e.length,r=-1;++r<n;)i(e[r])}}function o(e,n){var r=t(e);r?(plain(r[1])&&plain(n)&&(n=extend(r[1],n)),r[1]=n):c.push(slice.call(arguments))}var u;if(assertUnfrozen("use",v),null===n||void 0===n);else if(func(n))o.apply(null,arguments);else{if("object"!=typeof n)throw new Error("Expected usable value, not `"+n+"`");"length"in n?s(n):r(n)}return u&&(g.settings=extend(g.settings||{},u)),e}function t(e){for(var n,r=c.length,i=-1;++i<r;)if(n=c[i],n[0]===e)return n}function s(r){var i,t=vfile(r);return n(),i=e.Parser,assertParser("parse",i),newable(i)?new i(String(t),t).parse():i(String(t),t)}function o(e,r,i){function t(n,t){function s(r,s,o){s=s||e,r?t(r):n?n(s):i(null,s,o)}p.run(e,vfile(r),s)}if(assertNode(e),n(),!i&&func(r)&&(i=r,r=null),!i)return new Promise(t);t(null,i)}function u(e,n){function r(e,n){t=!0,bail(e),i=n}var i,t=!1;return o(e,n,r),assertDone("runSync","run",t),i}function f(r,i){var t,s=vfile(i);return n(),t=e.Compiler,assertCompiler("stringify",t),assertNode(r),newable(t)?new t(r,s).compile():t(r,s)}function l(r,i){function t(n,t){function s(e){e?t(e):n?n(o):i(null,o)}var o=vfile(r);pipeline.run(e,{file:o},s)}if(n(),assertParser("process",e.Parser),assertCompiler("process",e.Compiler),!i)return new Promise(t);t(null,i)}function a(r){function i(e){s=!0,bail(e)}var t,s=!1;return n(),assertParser("processSync",e.Parser),assertCompiler("processSync",e.Compiler),t=vfile(r),l(t,i),assertDone("processSync","process",s),t}var c=[],p=trough(),g={},v=!1,d=-1;return e.data=r,e.freeze=n,e.attachers=c,e.use=i,e.parse=s,e.stringify=f,e.run=o,e.runSync=u,e.process=l,e.processSync=a,e}function newable(e){return func(e)&&keys(e.prototype)}function keys(e){var n;for(n in e)return!0;return!1}function assertParser(e,n){if(!func(n))throw new Error("Cannot `"+e+"` without `Parser`")}function assertCompiler(e,n){if(!func(n))throw new Error("Cannot `"+e+"` without `Compiler`")}function assertUnfrozen(e,n){if(n)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function assertNode(e){if(!e||!string(e.type))throw new Error("Expected node, got `"+e+"`")}function assertDone(e,n,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}var has=__webpack_require__("XfW5"),extend=__webpack_require__("WJJ6"),bail=__webpack_require__("+TXw"),vfile=__webpack_require__("mjOQ"),trough=__webpack_require__("/Rpd"),string=__webpack_require__("wGrg"),func=__webpack_require__("gf/M"),plain=__webpack_require__("wN2/");module.exports=unified().freeze();var slice=[].slice,pipeline=trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);

/***/ }),

/***/ "y9Xm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function list(e){return this[ORDERED_MAP[e.ordered]](e)}module.exports=list;var ORDERED_MAP={true:"visitOrderedItems",false:"visitUnorderedItems"};

/***/ }),

/***/ "yDZR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _classProps=function(o,t,n){t&&Object.defineProperties(o,t),n&&Object.defineProperties(o.prototype,n)},upperBound=__webpack_require__("l4af").upperBound,Position=function(o,t){this.line=o,this.column=t};exports.Position=Position;var SourceLocation=function(o,t){this.start=o,this.end=t};exports.SourceLocation=SourceLocation;var StructuredSource=function(){var o=function(o){this.indice=[0];var t=/[\r\n\u2028\u2029]/g,n=o.length;for(t.lastIndex=0;;){var i=t.exec(o);if(!i)break;var e=i.index;13===o.charCodeAt(e)&&10===o.charCodeAt(e+1)&&(e+=1);var r=e+1;if(n<r)break;this.indice.push(r),t.lastIndex=r}};return o.prototype.locationToRange=function(o){return[this.positionToIndex(o.start),this.positionToIndex(o.end)]},o.prototype.rangeToLocation=function(o){return new SourceLocation(this.indexToPosition(o[0]),this.indexToPosition(o[1]))},o.prototype.positionToIndex=function(o){return this.indice[o.line-1]+o.column},o.prototype.indexToPosition=function(o){var t=upperBound(this.indice,o);return new Position(t,o-this.indice[t-1])},_classProps(o,null,{line:{get:function(){return this.indice.length}}}),o}();exports.default=StructuredSource;

/***/ })

});