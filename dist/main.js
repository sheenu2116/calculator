/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background: linear-gradient(90deg, rgba(144,85,225,255),rgba(254,152,103,255));\n}\n\nmain { \n    width: 450px;\n    Height:600px;\n    margin: 130px auto;\n    user-select: none;\n}\n\n.calculator {\n    display: grid;\n    height: 600px;\n    grid-template-rows: 40px 30px 100px 1fr;\n    grid-template-columns: 1fr;\n    grid-gap : 1px;\n    background: white;\n    border-radius: 10px;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-rows : repeat(5,1fr);\n    grid-template-columns: repeat(4,1fr);\n    grid-row: 4/5;\n}\n\n.calc-button {\n    \n}\n\n.window-controls {\n    justify-content: flex-start;\n    align-self: center;\n    margin: 0 20px;\n    display: flex;\n    padding-top: 10px;\n}\n\n.calculation {\n    text-align: right;\n    font-size: 20px;\n    color: rgba(160,164,167,255);\n    padding: 10px 35px 0px 30px;\n}\n\n.input-wrapper{\n    grid-row: 3/4;\n    display: block;\n}\n\ninput[type=text] {\n    box-sizing: border-box;\n    padding: 20px 30px 20px 35px;\n    font-size: 50px;\n    text-align: right;\n    background: transparent;\n    border: none;\n    color: black;\n    width: 100%;\n    pointer-events: none;\n    cursor: crosshair;\n    caret-color: transparent;\n}\n\ninput[type=text]::placeholder {\n    color: black;\n}\n\ninput:focus{\n    outline: none;\n}\n\n\ninput[type=button] {\n    background: transparent;\n    border: none;\n    justify-content: center;\n    align-self: center;\n    font-size: 1.7em;\n    margin-top: 25px;\n}\n\n.num-btn {\n    background: rgba(242,237,255,255);\n    text-align: center;    \n    border: 1px solid rgba(223,220,239,255);\n}\n\n.num-btn:hover {\n    background: rgb(200, 179, 255);\n    border: 1px solid rgb(191, 185, 223);\n}\n.func-btn {    \n    background: rgba(245,224,253,255);\n    text-align: center;\n    border: 1px solid rgba(225,209,236,255);\n}\n\n.func-btn:hover {    \n    background: rgb(231, 183, 250);\n    border: 1px solid rgb(220, 201, 233);\n}\n\n.ops-btn {    \n    text-align: center;\n    grid-column: 4/5;\n    z-index: 1;\n    border: 1px solid rgba(237,180,90,255);\n}\n\n.ops-btn:hover {\n    background: 1px solid rgb(254, 126, 52);\n    border: 1px solid rgb(232, 162, 48);\n    z-index: 1;\n}\n\n.ops-btn >input{\n\n    color: white;\n}\n\n.ops-gradient {\n    grid-column: 4/5;\n    grid-row: 1/6;\n    background: linear-gradient(180deg, rgba(246,211,93,255), rgba(254,156,101,255));\n    border-bottom-right-radius: 10px;\n}\n\n.zero {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-bottom-left-radius: 10px;\n}\n\n.divide {\n    grid-row: 1/2;\n}\n\n.multiply {\n    grid-row: 2/3;\n}\n\n.plus {\n    grid-row: 4/5;\n}\n\n.minus {\n    grid-row: 3/4;\n}\n\n.equal {\n    grid-row: 5/6;\n    border-bottom-right-radius: 10px;\n}\n\n.grey-circle {\n    background-color: rgba(207,210,228,255);\n    height: 10px;\n    width:10px;\n    border-radius: 5px;\n    margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,8EAA8E;AAClF;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uCAAuC;IACvC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,oCAAoC;IACpC,aAAa;AACjB;;AAEA;;AAEA;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;AACxC;AACA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;IACvC,mCAAmC;IACnC,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gFAAgF;IAChF,gCAAgC;AACpC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["body {\n    background: linear-gradient(90deg, rgba(144,85,225,255),rgba(254,152,103,255));\n}\n\nmain { \n    width: 450px;\n    Height:600px;\n    margin: 130px auto;\n    user-select: none;\n}\n\n.calculator {\n    display: grid;\n    height: 600px;\n    grid-template-rows: 40px 30px 100px 1fr;\n    grid-template-columns: 1fr;\n    grid-gap : 1px;\n    background: white;\n    border-radius: 10px;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-rows : repeat(5,1fr);\n    grid-template-columns: repeat(4,1fr);\n    grid-row: 4/5;\n}\n\n.calc-button {\n    \n}\n\n.window-controls {\n    justify-content: flex-start;\n    align-self: center;\n    margin: 0 20px;\n    display: flex;\n    padding-top: 10px;\n}\n\n.calculation {\n    text-align: right;\n    font-size: 20px;\n    color: rgba(160,164,167,255);\n    padding: 10px 35px 0px 30px;\n}\n\n.input-wrapper{\n    grid-row: 3/4;\n    display: block;\n}\n\ninput[type=text] {\n    box-sizing: border-box;\n    padding: 20px 30px 20px 35px;\n    font-size: 50px;\n    text-align: right;\n    background: transparent;\n    border: none;\n    color: black;\n    width: 100%;\n    pointer-events: none;\n    cursor: crosshair;\n    caret-color: transparent;\n}\n\ninput[type=text]::placeholder {\n    color: black;\n}\n\ninput:focus{\n    outline: none;\n}\n\n\ninput[type=button] {\n    background: transparent;\n    border: none;\n    justify-content: center;\n    align-self: center;\n    font-size: 1.7em;\n    margin-top: 25px;\n}\n\n.num-btn {\n    background: rgba(242,237,255,255);\n    text-align: center;    \n    border: 1px solid rgba(223,220,239,255);\n}\n\n.num-btn:hover {\n    background: rgb(200, 179, 255);\n    border: 1px solid rgb(191, 185, 223);\n}\n.func-btn {    \n    background: rgba(245,224,253,255);\n    text-align: center;\n    border: 1px solid rgba(225,209,236,255);\n}\n\n.func-btn:hover {    \n    background: rgb(231, 183, 250);\n    border: 1px solid rgb(220, 201, 233);\n}\n\n.ops-btn {    \n    text-align: center;\n    grid-column: 4/5;\n    z-index: 1;\n    border: 1px solid rgba(237,180,90,255);\n}\n\n.ops-btn:hover {\n    background: 1px solid rgb(254, 126, 52);\n    border: 1px solid rgb(232, 162, 48);\n    z-index: 1;\n}\n\n.ops-btn >input{\n\n    color: white;\n}\n\n.ops-gradient {\n    grid-column: 4/5;\n    grid-row: 1/6;\n    background: linear-gradient(180deg, rgba(246,211,93,255), rgba(254,156,101,255));\n    border-bottom-right-radius: 10px;\n}\n\n.zero {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-bottom-left-radius: 10px;\n}\n\n.divide {\n    grid-row: 1/2;\n}\n\n.multiply {\n    grid-row: 2/3;\n}\n\n.plus {\n    grid-row: 4/5;\n}\n\n.minus {\n    grid-row: 3/4;\n}\n\n.equal {\n    grid-row: 5/6;\n    border-bottom-right-radius: 10px;\n}\n\n.grey-circle {\n    background-color: rgba(207,210,228,255);\n    height: 10px;\n    width:10px;\n    border-radius: 5px;\n    margin-right: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/constants/buttonGroup.constant.js":
/*!***********************************************!*\
  !*** ./src/constants/buttonGroup.constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonGroups": () => (/* binding */ buttonGroups)
/* harmony export */ });
const buttonGroups = {
    OPERATION: ['PLUS', 'MINUS', 'DIVIDE', 'MULTIPLY', 'PERCENT'],
    FUNCTION: ['CLEAR', 'PLUSMINUS', 'EQUAL'],
    NUMBER: ['ONE','TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'ZERO']
}

/***/ }),

/***/ "./src/constants/keyCodeToButton.constant.js":
/*!***************************************************!*\
  !*** ./src/constants/keyCodeToButton.constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyCodeToButtonMap": () => (/* binding */ keyCodeToButtonMap)
/* harmony export */ });

const keyCodeToButtonMap = {
    49: 'ONE',
    50: 'TWO',
    51: 'THREE',
    52: 'FOUR',
    53: 'FIVE',
    54: 'SIX',
    55: 'SEVEN',
    56: 'EIGHT',
    57: 'NINE',
    48: 'ZERO',
    46: 'DECIMAL',
    43: 'PLUS',
    45: 'MINUS',
    47: 'DIVIDE',
    42: 'MULTIPLY',
    37: 'PERCENT',
    67: 'CLEAR',
    99: 'CLEAR',
    61: 'EQUAL',
    13: 'EQUAL'
}

/***/ }),

/***/ "./src/constants/value-button.constant.js":
/*!************************************************!*\
  !*** ./src/constants/value-button.constant.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueToButtonMap": () => (/* binding */ valueToButtonMap),
/* harmony export */   "buttonToValueMap": () => (/* binding */ buttonToValueMap)
/* harmony export */ });
const valueToButtonMap = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    0: 'ZERO',
    '+': 'PLUS',
    '???': 'MINUS',
    '??': 'MULTIPLY',
    '??': 'DIVIDE',
    '=': 'EQUAL',
    '.': 'DECIMAL',
    'C': 'CLEAR',
    '+/-': 'PLUSMINUS',
    '%': 'PERCENT'

}

const buttonToValueMap = Object.fromEntries(Object.entries(valueToButtonMap).map(entry => entry.reverse()))


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
const state = {
    lastKey: null,
    currentOperand: '',
    operationInProgress: null
}

/***/ }),

/***/ "./src/utils/buttonClicks/function.click.js":
/*!**************************************************!*\
  !*** ./src/utils/buttonClicks/function.click.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "functionButtonClicked": () => (/* binding */ functionButtonClicked)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculate */ "./src/utils/calculate.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.elements */ "./src/utils/dom.elements.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations */ "./src/utils/operations/index.js");





function functionButtonClicked(button) {
   switch(button) {
        case 'CLEAR': _operations__WEBPACK_IMPORTED_MODULE_3__.default.clear()
            break
        case 'PLUSMINUS': _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value = _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value/1 < 0? _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value.substring(1): `-${_dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value}`
            break
        case 'EQUAL': _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value = (0,_calculate__WEBPACK_IMPORTED_MODULE_1__.calculate)(_state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand, _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value, _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress);
            _state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand = _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value;
            _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress = null
            break
        default:
   }
}

/***/ }),

/***/ "./src/utils/buttonClicks/index.js":
/*!*****************************************!*\
  !*** ./src/utils/buttonClicks/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonClick": () => (/* binding */ buttonClick)
/* harmony export */ });
/* harmony import */ var _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/value-button.constant */ "./src/constants/value-button.constant.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validations */ "./src/utils/validations.js");
/* harmony import */ var _function_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.click */ "./src/utils/buttonClicks/function.click.js");
/* harmony import */ var _operation_cick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation.cick */ "./src/utils/buttonClicks/operation.cick.js");
/* harmony import */ var _number_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.click */ "./src/utils/buttonClicks/number.click.js");






function buttonClick (event, button) {

    if(!button) {
        const buttonElement = event.currentTarget;
        const buttonInput = buttonElement.firstElementChild
        button= _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_0__.valueToButtonMap[buttonInput.value]
    }  
    
    if((0,_validations__WEBPACK_IMPORTED_MODULE_1__.isFunction)(button)) {
        (0,_function_click__WEBPACK_IMPORTED_MODULE_2__.functionButtonClicked)(button)
    } else if ((0,_validations__WEBPACK_IMPORTED_MODULE_1__.isOperation)(button)) {
        (0,_operation_cick__WEBPACK_IMPORTED_MODULE_3__.operationButtonClicked)(button)
    } else if ((0,_validations__WEBPACK_IMPORTED_MODULE_1__.isNumber)(button)) {
        (0,_number_click__WEBPACK_IMPORTED_MODULE_4__.numberButtonClicked)(button)
    }
    lastKey = button
}

/***/ }),

/***/ "./src/utils/buttonClicks/number.click.js":
/*!************************************************!*\
  !*** ./src/utils/buttonClicks/number.click.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberButtonClicked": () => (/* binding */ numberButtonClicked)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.elements */ "./src/utils/dom.elements.js");
/* harmony import */ var _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/value-button.constant */ "./src/constants/value-button.constant.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validations */ "./src/utils/validations.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state */ "./src/state.js");





function numberButtonClicked(button) {
    if (_dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value === '0' || _dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value === '' || (0,_validations__WEBPACK_IMPORTED_MODULE_2__.isOperationOrFunction)(_state__WEBPACK_IMPORTED_MODULE_3__.state.lastKey)) {
        if(button === _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__.buttonToValueMap.DECIMAL) {
            _dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value = '0.'
        } else _dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value = _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__.buttonToValueMap[button]
        
      } else {
        _dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value = _dom_elements__WEBPACK_IMPORTED_MODULE_0__.display.value + _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__.buttonToValueMap[button]
      }
    
}

/***/ }),

/***/ "./src/utils/buttonClicks/operation.cick.js":
/*!**************************************************!*\
  !*** ./src/utils/buttonClicks/operation.cick.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "operationButtonClicked": () => (/* binding */ operationButtonClicked)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculate */ "./src/utils/calculate.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.elements */ "./src/utils/dom.elements.js");




function operationButtonClicked(button) {
    if(operationInProgress) _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value = (0,_calculate__WEBPACK_IMPORTED_MODULE_1__.calculate)(_state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand, _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value, _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress)
    _state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand = _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value
    _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress = button;
}

/***/ }),

/***/ "./src/utils/calculate.js":
/*!********************************!*\
  !*** ./src/utils/calculate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculate": () => (/* binding */ calculate)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.elements */ "./src/utils/dom.elements.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./src/utils/operations/index.js");



function calculate (firstOperand, secondOperand, operator) {
    if(!operator) return secondOperand
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.calculationPane.innerText = `${firstOperand} ${buttonToValueMap[operator]} ${secondOperand}`
    return _operations__WEBPACK_IMPORTED_MODULE_1__.default[operator](firstOperand/1, secondOperand/1)
}

/***/ }),

/***/ "./src/utils/dom.elements.js":
/*!***********************************!*\
  !*** ./src/utils/dom.elements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculator": () => (/* binding */ calculator),
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "calculationPane": () => (/* binding */ calculationPane),
/* harmony export */   "numberPad": () => (/* binding */ numberPad),
/* harmony export */   "buttons": () => (/* binding */ buttons)
/* harmony export */ });
const calculator = document.querySelector(`.calculator`)
const display = calculator.querySelector(`input[name=userInput]`)
const calculationPane = calculator.querySelector(`.calculation`)
const numberPad = calculator.querySelector(`.buttons-wrapper`)
const buttons = numberPad.querySelectorAll(`.calc-button`)

/***/ }),

/***/ "./src/utils/keyPressToButton.js":
/*!***************************************!*\
  !*** ./src/utils/keyPressToButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keypressToButton": () => (/* binding */ keypressToButton)
/* harmony export */ });
/* harmony import */ var _constants_keyCodeToButton_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/keyCodeToButton.constant */ "./src/constants/keyCodeToButton.constant.js");
/* harmony import */ var _buttonClicks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonClicks */ "./src/utils/buttonClicks/index.js");



function keypressToButton (event) {
    const button = _constants_keyCodeToButton_constant__WEBPACK_IMPORTED_MODULE_0__.keyCodeToButtonMap[event.keyCode]
    if(button) (0,_buttonClicks__WEBPACK_IMPORTED_MODULE_1__.buttonClick)(null, button)
}

/***/ }),

/***/ "./src/utils/operations/index.js":
/*!***************************************!*\
  !*** ./src/utils/operations/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.elements */ "./src/utils/dom.elements.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    PLUS: (a,b) => a+b,
    MINUS: (a,b) => a-b,
    DIVIDE: (a,b) => a/b,
    MULTIPLY: (a,b) => a*b,
    PERCENT: (a,b) => a*b/100,
    clear: ()=> {
        _state__WEBPACK_IMPORTED_MODULE_0__.state.lastKey = null, _dom_elements__WEBPACK_IMPORTED_MODULE_1__.display.value= '', _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress = null, _state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand = '', _dom_elements__WEBPACK_IMPORTED_MODULE_1__.calculationPane.innerText = ''
    }
});

/***/ }),

/***/ "./src/utils/validations.js":
/*!**********************************!*\
  !*** ./src/utils/validations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOperation": () => (/* binding */ isOperation),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isOperationOrFunction": () => (/* binding */ isOperationOrFunction)
/* harmony export */ });
/* harmony import */ var _constants_buttonGroup_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/buttonGroup.constant */ "./src/constants/buttonGroup.constant.js");


function isOperation (button) {
    return _constants_buttonGroup_constant__WEBPACK_IMPORTED_MODULE_0__.buttonGroups.OPERATION.includes(button)
}

function isFunction (button) {
    return _constants_buttonGroup_constant__WEBPACK_IMPORTED_MODULE_0__.buttonGroups.FUNCTION.includes(button)
}

function isNumber (button) {
    return _constants_buttonGroup_constant__WEBPACK_IMPORTED_MODULE_0__.buttonGroups.NUMBER.includes(button)
}

function isOperationOrFunction (button) {
    return isOperation(button) || isFunction(button)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom.elements */ "./src/utils/dom.elements.js");
/* harmony import */ var _utils_buttonClicks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/buttonClicks */ "./src/utils/buttonClicks/index.js");
/* harmony import */ var _utils_keyPressToButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/keyPressToButton */ "./src/utils/keyPressToButton.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");





_utils_dom_elements__WEBPACK_IMPORTED_MODULE_0__.buttons.forEach(button => button.addEventListener(`click`, _utils_buttonClicks__WEBPACK_IMPORTED_MODULE_1__.buttonClick))
window.addEventListener('keypress', _utils_keyPressToButton__WEBPACK_IMPORTED_MODULE_2__.keypressToButton)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NvbnN0YW50cy9idXR0b25Hcm91cC5jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NvbnN0YW50cy9rZXlDb2RlVG9CdXR0b24uY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9jb25zdGFudHMvdmFsdWUtYnV0dG9uLmNvbnN0YW50LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvZnVuY3Rpb24uY2xpY2suanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvbnVtYmVyLmNsaWNrLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvdXRpbHMvYnV0dG9uQ2xpY2tzL29wZXJhdGlvbi5jaWNrLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvdXRpbHMvY2FsY3VsYXRlLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvdXRpbHMvZG9tLmVsZW1lbnRzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvdXRpbHMva2V5UHJlc3NUb0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL29wZXJhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy92YWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QscUZBQXFGLEdBQUcsVUFBVSxvQkFBb0IsbUJBQW1CLHlCQUF5Qix3QkFBd0IsR0FBRyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw4Q0FBOEMsaUNBQWlDLHFCQUFxQix3QkFBd0IsMEJBQTBCLEdBQUcsc0JBQXNCLG9CQUFvQix5Q0FBeUMsMkNBQTJDLG9CQUFvQixHQUFHLGtCQUFrQixTQUFTLHNCQUFzQixrQ0FBa0MseUJBQXlCLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixzQkFBc0IsbUNBQW1DLGtDQUFr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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNJO0FBQ1M7QUFDL0I7O0FBRTdCLGdFQUFlLDRDQUE0Qyw0REFBVztBQUN0RSxvQ0FBb0MscUVBQWdCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNDQsODUsMjI1LDI1NSkscmdiYSgyNTQsMTUyLDEwMywyNTUpKTtcXG59XFxuXFxubWFpbiB7IFxcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIEhlaWdodDo2MDBweDtcXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNhbGN1bGF0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMzBweCAxMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWdhcCA6IDFweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3MgOiByZXBlYXQoNSwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi5jYWxjLWJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4ud2luZG93LWNvbnRyb2xzIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNhbGN1bGF0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHJnYmEoMTYwLDE2NCwxNjcsMjU1KTtcXG4gICAgcGFkZGluZzogMTBweCAzNXB4IDBweCAzMHB4O1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlcntcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ubnVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLDIzNywyNTUsMjU1KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjMsMjIwLDIzOSwyNTUpO1xcbn1cXG5cXG4ubnVtLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDAsIDE3OSwgMjU1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MSwgMTg1LCAyMjMpO1xcbn1cXG4uZnVuYy1idG4geyAgICBcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsMjI0LDI1MywyNTUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LDIwOSwyMzYsMjU1KTtcXG59XFxuXFxuLmZ1bmMtYnRuOmhvdmVyIHsgICAgXFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzEsIDE4MywgMjUwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjAxLCAyMzMpO1xcbn1cXG5cXG4ub3BzLWJ0biB7ICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM3LDE4MCw5MCwyNTUpO1xcbn1cXG5cXG4ub3BzLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IDFweCBzb2xpZCByZ2IoMjU0LCAxMjYsIDUyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiwgMTYyLCA0OCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5vcHMtYnRuID5pbnB1dHtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BzLWdyYWRpZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDEvNjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNDYsMjExLDkzLDI1NSksIHJnYmEoMjU0LDE1NiwxMDEsMjU1KSk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uemVybyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRpdmlkZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5tdWx0aXBseSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wbHVzIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLm1pbnVzIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLmVxdWFsIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ncmV5LWNpcmNsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LDIxMCwyMjgsMjU1KTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNDQsODUsMjI1LDI1NSkscmdiYSgyNTQsMTUyLDEwMywyNTUpKTtcXG59XFxuXFxubWFpbiB7IFxcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIEhlaWdodDo2MDBweDtcXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNhbGN1bGF0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMzBweCAxMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWdhcCA6IDFweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3MgOiByZXBlYXQoNSwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi5jYWxjLWJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4ud2luZG93LWNvbnRyb2xzIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNhbGN1bGF0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHJnYmEoMTYwLDE2NCwxNjcsMjU1KTtcXG4gICAgcGFkZGluZzogMTBweCAzNXB4IDBweCAzMHB4O1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlcntcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ubnVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLDIzNywyNTUsMjU1KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjMsMjIwLDIzOSwyNTUpO1xcbn1cXG5cXG4ubnVtLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDAsIDE3OSwgMjU1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MSwgMTg1LCAyMjMpO1xcbn1cXG4uZnVuYy1idG4geyAgICBcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsMjI0LDI1MywyNTUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LDIwOSwyMzYsMjU1KTtcXG59XFxuXFxuLmZ1bmMtYnRuOmhvdmVyIHsgICAgXFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzEsIDE4MywgMjUwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjAxLCAyMzMpO1xcbn1cXG5cXG4ub3BzLWJ0biB7ICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM3LDE4MCw5MCwyNTUpO1xcbn1cXG5cXG4ub3BzLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IDFweCBzb2xpZCByZ2IoMjU0LCAxMjYsIDUyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiwgMTYyLCA0OCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5vcHMtYnRuID5pbnB1dHtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BzLWdyYWRpZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDEvNjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNDYsMjExLDkzLDI1NSksIHJnYmEoMjU0LDE1NiwxMDEsMjU1KSk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uemVybyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRpdmlkZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5tdWx0aXBseSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wbHVzIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLm1pbnVzIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLmVxdWFsIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ncmV5LWNpcmNsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LDIxMCwyMjgsMjU1KTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IGJ1dHRvbkdyb3VwcyA9IHtcbiAgICBPUEVSQVRJT046IFsnUExVUycsICdNSU5VUycsICdESVZJREUnLCAnTVVMVElQTFknLCAnUEVSQ0VOVCddLFxuICAgIEZVTkNUSU9OOiBbJ0NMRUFSJywgJ1BMVVNNSU5VUycsICdFUVVBTCddLFxuICAgIE5VTUJFUjogWydPTkUnLCdUV08nLCAnVEhSRUUnLCAnRk9VUicsICdGSVZFJywgJ1NJWCcsICdTRVZFTicsICdFSUdIVCcsICdOSU5FJywgJ1pFUk8nXVxufSIsIlxuZXhwb3J0IGNvbnN0IGtleUNvZGVUb0J1dHRvbk1hcCA9IHtcbiAgICA0OTogJ09ORScsXG4gICAgNTA6ICdUV08nLFxuICAgIDUxOiAnVEhSRUUnLFxuICAgIDUyOiAnRk9VUicsXG4gICAgNTM6ICdGSVZFJyxcbiAgICA1NDogJ1NJWCcsXG4gICAgNTU6ICdTRVZFTicsXG4gICAgNTY6ICdFSUdIVCcsXG4gICAgNTc6ICdOSU5FJyxcbiAgICA0ODogJ1pFUk8nLFxuICAgIDQ2OiAnREVDSU1BTCcsXG4gICAgNDM6ICdQTFVTJyxcbiAgICA0NTogJ01JTlVTJyxcbiAgICA0NzogJ0RJVklERScsXG4gICAgNDI6ICdNVUxUSVBMWScsXG4gICAgMzc6ICdQRVJDRU5UJyxcbiAgICA2NzogJ0NMRUFSJyxcbiAgICA5OTogJ0NMRUFSJyxcbiAgICA2MTogJ0VRVUFMJyxcbiAgICAxMzogJ0VRVUFMJ1xufSIsImV4cG9ydCBjb25zdCB2YWx1ZVRvQnV0dG9uTWFwID0ge1xuICAgIDE6ICdPTkUnLFxuICAgIDI6ICdUV08nLFxuICAgIDM6ICdUSFJFRScsXG4gICAgNDogJ0ZPVVInLFxuICAgIDU6ICdGSVZFJyxcbiAgICA2OiAnU0lYJyxcbiAgICA3OiAnU0VWRU4nLFxuICAgIDg6ICdFSUdIVCcsXG4gICAgOTogJ05JTkUnLFxuICAgIDA6ICdaRVJPJyxcbiAgICAnKyc6ICdQTFVTJyxcbiAgICAn4oiSJzogJ01JTlVTJyxcbiAgICAnw5cnOiAnTVVMVElQTFknLFxuICAgICfDtyc6ICdESVZJREUnLFxuICAgICc9JzogJ0VRVUFMJyxcbiAgICAnLic6ICdERUNJTUFMJyxcbiAgICAnQyc6ICdDTEVBUicsXG4gICAgJysvLSc6ICdQTFVTTUlOVVMnLFxuICAgICclJzogJ1BFUkNFTlQnXG5cbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblRvVmFsdWVNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXModmFsdWVUb0J1dHRvbk1hcCkubWFwKGVudHJ5ID0+IGVudHJ5LnJldmVyc2UoKSkpXG4iLCJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gICAgbGFzdEtleTogbnVsbCxcbiAgICBjdXJyZW50T3BlcmFuZDogJycsXG4gICAgb3BlcmF0aW9uSW5Qcm9ncmVzczogbnVsbFxufSIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGUgfSBmcm9tIFwiLi4vY2FsY3VsYXRlXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4uL2RvbS5lbGVtZW50c1wiO1xuaW1wb3J0IE9QRVJUQUlPTlMgZnJvbSBcIi4uL29wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZ1bmN0aW9uQnV0dG9uQ2xpY2tlZChidXR0b24pIHtcbiAgIHN3aXRjaChidXR0b24pIHtcbiAgICAgICAgY2FzZSAnQ0xFQVInOiBPUEVSVEFJT05TLmNsZWFyKClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1BMVVNNSU5VUyc6IGRpc3BsYXkudmFsdWUgPSBkaXNwbGF5LnZhbHVlLzEgPCAwPyBkaXNwbGF5LnZhbHVlLnN1YnN0cmluZygxKTogYC0ke2Rpc3BsYXkudmFsdWV9YFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnRVFVQUwnOiBkaXNwbGF5LnZhbHVlID0gY2FsY3VsYXRlKHN0YXRlLmN1cnJlbnRPcGVyYW5kLCBkaXNwbGF5LnZhbHVlLCBzdGF0ZS5vcGVyYXRpb25JblByb2dyZXNzKTtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRPcGVyYW5kID0gZGlzcGxheS52YWx1ZTtcbiAgICAgICAgICAgIHN0YXRlLm9wZXJhdGlvbkluUHJvZ3Jlc3MgPSBudWxsXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgfVxufSIsImltcG9ydCB7IHZhbHVlVG9CdXR0b25NYXAgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3ZhbHVlLWJ1dHRvbi5jb25zdGFudFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzT3BlcmF0aW9uIH0gZnJvbSBcIi4uL3ZhbGlkYXRpb25zXCI7XG5pbXBvcnQgeyBmdW5jdGlvbkJ1dHRvbkNsaWNrZWQgfSBmcm9tIFwiLi9mdW5jdGlvbi5jbGlja1wiXG5pbXBvcnQgeyBvcGVyYXRpb25CdXR0b25DbGlja2VkIH0gZnJvbSBcIi4vb3BlcmF0aW9uLmNpY2tcIlxuaW1wb3J0IHsgbnVtYmVyQnV0dG9uQ2xpY2tlZCB9IGZyb20gXCIuL251bWJlci5jbGlja1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25DbGljayAoZXZlbnQsIGJ1dHRvbikge1xuXG4gICAgaWYoIWJ1dHRvbikge1xuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgYnV0dG9uSW5wdXQgPSBidXR0b25FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgIGJ1dHRvbj0gdmFsdWVUb0J1dHRvbk1hcFtidXR0b25JbnB1dC52YWx1ZV1cbiAgICB9ICBcbiAgICBcbiAgICBpZihpc0Z1bmN0aW9uKGJ1dHRvbikpIHtcbiAgICAgICAgZnVuY3Rpb25CdXR0b25DbGlja2VkKGJ1dHRvbilcbiAgICB9IGVsc2UgaWYgKGlzT3BlcmF0aW9uKGJ1dHRvbikpIHtcbiAgICAgICAgb3BlcmF0aW9uQnV0dG9uQ2xpY2tlZChidXR0b24pXG4gICAgfSBlbHNlIGlmIChpc051bWJlcihidXR0b24pKSB7XG4gICAgICAgIG51bWJlckJ1dHRvbkNsaWNrZWQoYnV0dG9uKVxuICAgIH1cbiAgICBsYXN0S2V5ID0gYnV0dG9uXG59IiwiaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuLi9kb20uZWxlbWVudHNcIjtcbmltcG9ydCB7IGJ1dHRvblRvVmFsdWVNYXAgYXMgQlVUVE9OUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvdmFsdWUtYnV0dG9uLmNvbnN0YW50XCI7XG5pbXBvcnQgeyBpc09wZXJhdGlvbk9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdmFsaWRhdGlvbnNcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJCdXR0b25DbGlja2VkKGJ1dHRvbikge1xuICAgIGlmIChkaXNwbGF5LnZhbHVlID09PSAnMCcgfHwgZGlzcGxheS52YWx1ZSA9PT0gJycgfHwgaXNPcGVyYXRpb25PckZ1bmN0aW9uKHN0YXRlLmxhc3RLZXkpKSB7XG4gICAgICAgIGlmKGJ1dHRvbiA9PT0gQlVUVE9OUy5ERUNJTUFMKSB7XG4gICAgICAgICAgICBkaXNwbGF5LnZhbHVlID0gJzAuJ1xuICAgICAgICB9IGVsc2UgZGlzcGxheS52YWx1ZSA9IEJVVFRPTlNbYnV0dG9uXVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXkudmFsdWUgPSBkaXNwbGF5LnZhbHVlICsgQlVUVE9OU1tidXR0b25dXG4gICAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZSB9IGZyb20gXCIuLi9jYWxjdWxhdGVcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi4vZG9tLmVsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb25CdXR0b25DbGlja2VkKGJ1dHRvbikge1xuICAgIGlmKG9wZXJhdGlvbkluUHJvZ3Jlc3MpIGRpc3BsYXkudmFsdWUgPSBjYWxjdWxhdGUoc3RhdGUuY3VycmVudE9wZXJhbmQsIGRpc3BsYXkudmFsdWUsIHN0YXRlLm9wZXJhdGlvbkluUHJvZ3Jlc3MpXG4gICAgc3RhdGUuY3VycmVudE9wZXJhbmQgPSBkaXNwbGF5LnZhbHVlXG4gICAgc3RhdGUub3BlcmF0aW9uSW5Qcm9ncmVzcyA9IGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyBjYWxjdWxhdGlvblBhbmUgfSBmcm9tIFwiLi9kb20uZWxlbWVudHNcIjtcbmltcG9ydCBPUEVSQVRJT05TIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZSAoZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kLCBvcGVyYXRvcikge1xuICAgIGlmKCFvcGVyYXRvcikgcmV0dXJuIHNlY29uZE9wZXJhbmRcbiAgICBjYWxjdWxhdGlvblBhbmUuaW5uZXJUZXh0ID0gYCR7Zmlyc3RPcGVyYW5kfSAke2J1dHRvblRvVmFsdWVNYXBbb3BlcmF0b3JdfSAke3NlY29uZE9wZXJhbmR9YFxuICAgIHJldHVybiBPUEVSQVRJT05TW29wZXJhdG9yXShmaXJzdE9wZXJhbmQvMSwgc2Vjb25kT3BlcmFuZC8xKVxufSIsImV4cG9ydCBjb25zdCBjYWxjdWxhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhbGN1bGF0b3JgKVxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSBjYWxjdWxhdG9yLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9dXNlcklucHV0XWApXG5leHBvcnQgY29uc3QgY2FsY3VsYXRpb25QYW5lID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKGAuY2FsY3VsYXRpb25gKVxuZXhwb3J0IGNvbnN0IG51bWJlclBhZCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcihgLmJ1dHRvbnMtd3JhcHBlcmApXG5leHBvcnQgY29uc3QgYnV0dG9ucyA9IG51bWJlclBhZC5xdWVyeVNlbGVjdG9yQWxsKGAuY2FsYy1idXR0b25gKSIsImltcG9ydCB7IGtleUNvZGVUb0J1dHRvbk1hcCB9IGZyb20gXCIuLi9jb25zdGFudHMva2V5Q29kZVRvQnV0dG9uLmNvbnN0YW50XCI7XG5pbXBvcnQgeyBidXR0b25DbGljayB9IGZyb20gXCIuL2J1dHRvbkNsaWNrc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24ga2V5cHJlc3NUb0J1dHRvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBidXR0b24gPSBrZXlDb2RlVG9CdXR0b25NYXBbZXZlbnQua2V5Q29kZV1cbiAgICBpZihidXR0b24pIGJ1dHRvbkNsaWNrKG51bGwsIGJ1dHRvbilcbn0iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgZGlzcGxheSwgY2FsY3VsYXRpb25QYW5lIH0gZnJvbSBcIi4uL2RvbS5lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgUExVUzogKGEsYikgPT4gYStiLFxuICAgIE1JTlVTOiAoYSxiKSA9PiBhLWIsXG4gICAgRElWSURFOiAoYSxiKSA9PiBhL2IsXG4gICAgTVVMVElQTFk6IChhLGIpID0+IGEqYixcbiAgICBQRVJDRU5UOiAoYSxiKSA9PiBhKmIvMTAwLFxuICAgIGNsZWFyOiAoKT0+IHtcbiAgICAgICAgc3RhdGUubGFzdEtleSA9IG51bGwsIGRpc3BsYXkudmFsdWU9ICcnLCBzdGF0ZS5vcGVyYXRpb25JblByb2dyZXNzID0gbnVsbCwgc3RhdGUuY3VycmVudE9wZXJhbmQgPSAnJywgY2FsY3VsYXRpb25QYW5lLmlubmVyVGV4dCA9ICcnXG4gICAgfVxufSIsImltcG9ydCB7IGJ1dHRvbkdyb3VwcyB9IGZyb20gXCIuLi9jb25zdGFudHMvYnV0dG9uR3JvdXAuY29uc3RhbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3BlcmF0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLk9QRVJBVElPTi5pbmNsdWRlcyhidXR0b24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLkZVTkNUSU9OLmluY2x1ZGVzKGJ1dHRvbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLk5VTUJFUi5pbmNsdWRlcyhidXR0b24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZXJhdGlvbk9yRnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHJldHVybiBpc09wZXJhdGlvbihidXR0b24pIHx8IGlzRnVuY3Rpb24oYnV0dG9uKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBidXR0b25zIH0gZnJvbSBcIi4vdXRpbHMvZG9tLmVsZW1lbnRzXCI7XG5pbXBvcnQgeyBidXR0b25DbGljayB9IGZyb20gXCIuL3V0aWxzL2J1dHRvbkNsaWNrc1wiO1xuaW1wb3J0IHsga2V5cHJlc3NUb0J1dHRvbiB9IGZyb20gXCIuL3V0aWxzL2tleVByZXNzVG9CdXR0b25cIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcblxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBidXR0b25DbGljaykpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBrZXlwcmVzc1RvQnV0dG9uKSJdLCJzb3VyY2VSb290IjoiIn0=