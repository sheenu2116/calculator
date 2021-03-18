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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background: linear-gradient(90deg, rgba(144,85,225,255),rgba(254,152,103,255));\n}\n\nmain { \n    width: 450px;\n    Height:600px;\n    margin: 130px auto;\n    user-select: none;\n}\n\n.calculator {\n    display: grid;\n    height: 600px;\n    grid-template-rows: 40px 30px 100px 1fr;\n    grid-template-columns: 1fr;\n    grid-gap : 1px;\n    background: white;\n    border-radius: 10px;\n    box-shadow: 15px 25px 50px -20px grey;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-rows : repeat(5,1fr);\n    grid-template-columns: repeat(4,1fr);\n    grid-row: 4/5;\n}\n\n.window-controls {\n    justify-content: flex-start;\n    align-self: center;\n    margin: 0 20px;\n    display: flex;\n    padding-top: 10px;\n}\n\n.calculation {\n    text-align: right;\n    font-size: 20px;\n    color: rgba(160,164,167,255);\n    padding: 10px 35px 0px 30px;\n}\n\n.input-wrapper{\n    grid-row: 3/4;\n    display: block;\n}\n\ninput[type=text] {\n    box-sizing: border-box;\n    padding: 20px 30px 20px 35px;\n    font-size: 50px;\n    text-align: right;\n    background: transparent;\n    border: none;\n    color: black;\n    width: 100%;\n    pointer-events: none;\n    cursor: crosshair;\n    caret-color: transparent;\n}\n\ninput[type=text]::placeholder {\n    color: black;\n}\n\ninput:focus{\n    outline: none;\n}\n\n\ninput[type=button] {\n    background: transparent;\n    border: none;\n    justify-content: center;\n    align-self: center;\n    font-size: 1.7em;\n    margin-top: 25px;\n}\n\n.num-btn {\n    background: rgba(242,237,255,255);\n    text-align: center;    \n    border: 1px solid rgba(223,220,239,255);\n}\n\n.num-btn:hover {\n    background: rgb(200, 179, 255);\n    border: 1px solid rgb(191, 185, 223);\n}\n.func-btn {    \n    background: rgba(245,224,253,255);\n    text-align: center;\n    border: 1px solid rgba(225,209,236,255);\n}\n\n.func-btn:hover {    \n    background: rgb(231, 183, 250);\n    border: 1px solid rgb(220, 201, 233);\n}\n\n.ops-btn {    \n    text-align: center;\n    grid-column: 4/5;\n    z-index: 1;\n    border: 1px solid rgba(237,180,90,255);\n    border-right: none;\n}\n\n.ops-btn:hover {\n    background: 1px solid rgb(254, 126, 52);\n    border: 1px solid rgb(232, 162, 48);\n    z-index: 1;\n}\n\n.ops-btn >input{\n\n    color: white;\n}\n\n.ops-gradient {\n    grid-column: 4/5;\n    grid-row: 1/6;\n    background: linear-gradient(180deg, rgba(246,211,93,255), rgba(254,156,101,255));\n    border-bottom-right-radius: 10px;\n}\n\n.zero {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-bottom-left-radius: 10px;\n}\n\n.divide {\n    grid-row: 1/2;\n}\n\n.multiply {\n    grid-row: 2/3;\n}\n\n.plus {\n    grid-row: 4/5;\n}\n\n.minus {\n    grid-row: 3/4;\n}\n\n.equal {\n    grid-row: 5/6;\n    border-bottom-right-radius: 10px;\n    border-bottom: none;\n}\n\n.grey-circle {\n    background-color: rgba(207,210,228,255);\n    height: 10px;\n    width:10px;\n    border-radius: 5px;\n    margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,8EAA8E;AAClF;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uCAAuC;IACvC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;AACxC;AACA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,mCAAmC;IACnC,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gFAAgF;IAChF,gCAAgC;AACpC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["body {\n    background: linear-gradient(90deg, rgba(144,85,225,255),rgba(254,152,103,255));\n}\n\nmain { \n    width: 450px;\n    Height:600px;\n    margin: 130px auto;\n    user-select: none;\n}\n\n.calculator {\n    display: grid;\n    height: 600px;\n    grid-template-rows: 40px 30px 100px 1fr;\n    grid-template-columns: 1fr;\n    grid-gap : 1px;\n    background: white;\n    border-radius: 10px;\n    box-shadow: 15px 25px 50px -20px grey;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-rows : repeat(5,1fr);\n    grid-template-columns: repeat(4,1fr);\n    grid-row: 4/5;\n}\n\n.window-controls {\n    justify-content: flex-start;\n    align-self: center;\n    margin: 0 20px;\n    display: flex;\n    padding-top: 10px;\n}\n\n.calculation {\n    text-align: right;\n    font-size: 20px;\n    color: rgba(160,164,167,255);\n    padding: 10px 35px 0px 30px;\n}\n\n.input-wrapper{\n    grid-row: 3/4;\n    display: block;\n}\n\ninput[type=text] {\n    box-sizing: border-box;\n    padding: 20px 30px 20px 35px;\n    font-size: 50px;\n    text-align: right;\n    background: transparent;\n    border: none;\n    color: black;\n    width: 100%;\n    pointer-events: none;\n    cursor: crosshair;\n    caret-color: transparent;\n}\n\ninput[type=text]::placeholder {\n    color: black;\n}\n\ninput:focus{\n    outline: none;\n}\n\n\ninput[type=button] {\n    background: transparent;\n    border: none;\n    justify-content: center;\n    align-self: center;\n    font-size: 1.7em;\n    margin-top: 25px;\n}\n\n.num-btn {\n    background: rgba(242,237,255,255);\n    text-align: center;    \n    border: 1px solid rgba(223,220,239,255);\n}\n\n.num-btn:hover {\n    background: rgb(200, 179, 255);\n    border: 1px solid rgb(191, 185, 223);\n}\n.func-btn {    \n    background: rgba(245,224,253,255);\n    text-align: center;\n    border: 1px solid rgba(225,209,236,255);\n}\n\n.func-btn:hover {    \n    background: rgb(231, 183, 250);\n    border: 1px solid rgb(220, 201, 233);\n}\n\n.ops-btn {    \n    text-align: center;\n    grid-column: 4/5;\n    z-index: 1;\n    border: 1px solid rgba(237,180,90,255);\n    border-right: none;\n}\n\n.ops-btn:hover {\n    background: 1px solid rgb(254, 126, 52);\n    border: 1px solid rgb(232, 162, 48);\n    z-index: 1;\n}\n\n.ops-btn >input{\n\n    color: white;\n}\n\n.ops-gradient {\n    grid-column: 4/5;\n    grid-row: 1/6;\n    background: linear-gradient(180deg, rgba(246,211,93,255), rgba(254,156,101,255));\n    border-bottom-right-radius: 10px;\n}\n\n.zero {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-bottom-left-radius: 10px;\n}\n\n.divide {\n    grid-row: 1/2;\n}\n\n.multiply {\n    grid-row: 2/3;\n}\n\n.plus {\n    grid-row: 4/5;\n}\n\n.minus {\n    grid-row: 3/4;\n}\n\n.equal {\n    grid-row: 5/6;\n    border-bottom-right-radius: 10px;\n    border-bottom: none;\n}\n\n.grey-circle {\n    background-color: rgba(207,210,228,255);\n    height: 10px;\n    width:10px;\n    border-radius: 5px;\n    margin-right: 10px;\n}"],"sourceRoot":""}]);
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
    '−': 'MINUS',
    '×': 'MULTIPLY',
    '÷': 'DIVIDE',
    '=': 'EQUAL',
    '.': 'DECIMAL',
    'C': 'CLEAR',
    '+/-': 'PLUSMINUS',
    '%': 'PERCENT'

}

const buttonToValueMap = Object.fromEntries(Object.entries(valueToButtonMap).map(entry => entry.reverse()))


/***/ }),

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonClick": () => (/* binding */ buttonClick),
/* harmony export */   "keypressToButton": () => (/* binding */ keypressToButton)
/* harmony export */ });
/* harmony import */ var _constants_keyCodeToButton_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/keyCodeToButton.constant */ "./src/constants/keyCodeToButton.constant.js");
/* harmony import */ var _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/value-button.constant */ "./src/constants/value-button.constant.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _utils_buttonClicks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/buttonClicks */ "./src/utils/buttonClicks/index.js");
/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/validations */ "./src/utils/validations.js");







function buttonClick (event, button) {

    if(!button) {
        const buttonElement = event.currentTarget;
        const buttonInput = buttonElement.firstElementChild
        button= _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_1__.valueToButtonMap[buttonInput.value]
    }  
    
    if((0,_utils_validations__WEBPACK_IMPORTED_MODULE_4__.isFunction)(button)) {
        (0,_utils_buttonClicks__WEBPACK_IMPORTED_MODULE_3__.functionButtonClicked)(button)
    } else if ((0,_utils_validations__WEBPACK_IMPORTED_MODULE_4__.isOperation)(button)) {
        (0,_utils_buttonClicks__WEBPACK_IMPORTED_MODULE_3__.operationButtonClicked)(button)
    } else if ((0,_utils_validations__WEBPACK_IMPORTED_MODULE_4__.isNumber)(button)) {
        (0,_utils_buttonClicks__WEBPACK_IMPORTED_MODULE_3__.numberButtonClicked)(button)
    }
    _state__WEBPACK_IMPORTED_MODULE_2__.state.lastKey = button
}

function keypressToButton (event) {
    const button = _constants_keyCodeToButton_constant__WEBPACK_IMPORTED_MODULE_0__.keyCodeToButtonMap[event.keyCode]
    if(button) buttonClick(null, button)
}

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
        case 'PLUSMINUS': if(!_dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value) return
            _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value = _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value/1 < 0? _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value.substring(1): `-${_dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value}`
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
/* harmony export */   "functionButtonClicked": () => (/* reexport safe */ _function_click__WEBPACK_IMPORTED_MODULE_0__.functionButtonClicked),
/* harmony export */   "operationButtonClicked": () => (/* reexport safe */ _operation_click__WEBPACK_IMPORTED_MODULE_1__.operationButtonClicked),
/* harmony export */   "numberButtonClicked": () => (/* reexport safe */ _number_click__WEBPACK_IMPORTED_MODULE_2__.numberButtonClicked)
/* harmony export */ });
/* harmony import */ var _function_click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.click */ "./src/utils/buttonClicks/function.click.js");
/* harmony import */ var _operation_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation.click */ "./src/utils/buttonClicks/operation.click.js");
/* harmony import */ var _number_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.click */ "./src/utils/buttonClicks/number.click.js");






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

/***/ "./src/utils/buttonClicks/operation.click.js":
/*!***************************************************!*\
  !*** ./src/utils/buttonClicks/operation.click.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "operationButtonClicked": () => (/* binding */ operationButtonClicked)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculate */ "./src/utils/calculate.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.elements */ "./src/utils/dom.elements.js");




function operationButtonClicked(button) {
    if(_state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress) _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value = (0,_calculate__WEBPACK_IMPORTED_MODULE_1__.calculate)(_state__WEBPACK_IMPORTED_MODULE_0__.state.currentOperand, _dom_elements__WEBPACK_IMPORTED_MODULE_2__.display.value, _state__WEBPACK_IMPORTED_MODULE_0__.state.operationInProgress)
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
/* harmony import */ var _constants_value_button_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/value-button.constant */ "./src/constants/value-button.constant.js");
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.elements */ "./src/utils/dom.elements.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations */ "./src/utils/operations/index.js");





function calculate (firstOperand, secondOperand, operator) {
    if(!operator) return secondOperand
    _dom_elements__WEBPACK_IMPORTED_MODULE_1__.calculationPane.innerText = `${firstOperand} ${_constants_value_button_constant__WEBPACK_IMPORTED_MODULE_0__.buttonToValueMap[operator]} ${secondOperand}`
    return _operations__WEBPACK_IMPORTED_MODULE_2__.default[operator](firstOperand/1, secondOperand/1)
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
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller */ "./src/controller/controller.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");




_utils_dom_elements__WEBPACK_IMPORTED_MODULE_0__.buttons.forEach(button => button.addEventListener(`click`, _controller_controller__WEBPACK_IMPORTED_MODULE_1__.buttonClick))
window.addEventListener('keypress', _controller_controller__WEBPACK_IMPORTED_MODULE_1__.keypressToButton)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NvbnN0YW50cy9idXR0b25Hcm91cC5jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NvbnN0YW50cy9rZXlDb2RlVG9CdXR0b24uY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9jb25zdGFudHMvdmFsdWUtYnV0dG9uLmNvbnN0YW50LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvZnVuY3Rpb24uY2xpY2suanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy9idXR0b25DbGlja3MvbnVtYmVyLmNsaWNrLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvdXRpbHMvYnV0dG9uQ2xpY2tzL29wZXJhdGlvbi5jbGljay5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL2NhbGN1bGF0ZS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL2RvbS5lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL29wZXJhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy91dGlscy92YWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QscUZBQXFGLEdBQUcsVUFBVSxvQkFBb0IsbUJBQW1CLHlCQUF5Qix3QkFBd0IsR0FBRyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw4Q0FBOEMsaUNBQWlDLHFCQUFxQix3QkFBd0IsMEJBQTBCLDRDQUE0QyxHQUFHLHNCQUFzQixvQkFBb0IseUNBQXlDLDJDQUEyQyxvQkFBb0IsR0FBRyxzQkFBc0Isa0NBQWtDLHlCQUF5QixxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0Isc0JBQXNCLG1DQUFtQyxrQ0FBa0MsR0FB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UCxXQUFXLHlGQUE0QjtBQUN2Qzs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUN5QjtBQUMzQzs7QUFFN0IsZ0VBQWUsNENBQTRDLCtEQUFXO0FBQ3RFLG9DQUFvQyxvRUFBZ0IsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE0NCw4NSwyMjUsMjU1KSxyZ2JhKDI1NCwxNTIsMTAzLDI1NSkpO1xcbn1cXG5cXG5tYWluIHsgXFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgSGVpZ2h0OjYwMHB4O1xcbiAgICBtYXJnaW46IDEzMHB4IGF1dG87XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uY2FsY3VsYXRvciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAzMHB4IDEwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtZ2FwIDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMTVweCAyNXB4IDUwcHggLTIwcHggZ3JleTtcXG59XFxuXFxuLmJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93cyA6IHJlcGVhdCg1LDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLndpbmRvdy1jb250cm9scyB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5jYWxjdWxhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2JhKDE2MCwxNjQsMTY3LDI1NSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMzVweCAwcHggMzBweDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXJ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzVweDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjdlbTtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLm51bS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwyMzcsMjU1LDI1NSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIzLDIyMCwyMzksMjU1KTtcXG59XFxuXFxuLm51bS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAwLCAxNzksIDI1NSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTEsIDE4NSwgMjIzKTtcXG59XFxuLmZ1bmMtYnRuIHsgICAgXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDIyNCwyNTMsMjU1KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNSwyMDksMjM2LDI1NSk7XFxufVxcblxcbi5mdW5jLWJ0bjpob3ZlciB7ICAgIFxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCAxODMsIDI1MCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjAsIDIwMSwgMjMzKTtcXG59XFxuXFxuLm9wcy1idG4geyAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzNywxODAsOTAsMjU1KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ub3BzLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IDFweCBzb2xpZCByZ2IoMjU0LCAxMjYsIDUyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiwgMTYyLCA0OCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5vcHMtYnRuID5pbnB1dHtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3BzLWdyYWRpZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDEvNjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNDYsMjExLDkzLDI1NSksIHJnYmEoMjU0LDE1NiwxMDEsMjU1KSk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uemVybyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRpdmlkZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5tdWx0aXBseSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wbHVzIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLm1pbnVzIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLmVxdWFsIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5ncmV5LWNpcmNsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LDIxMCwyMjgsMjU1KTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNDQsODUsMjI1LDI1NSkscmdiYSgyNTQsMTUyLDEwMywyNTUpKTtcXG59XFxuXFxubWFpbiB7IFxcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIEhlaWdodDo2MDBweDtcXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNhbGN1bGF0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMzBweCAxMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWdhcCA6IDFweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDE1cHggMjVweCA1MHB4IC0yMHB4IGdyZXk7XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3MgOiByZXBlYXQoNSwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi53aW5kb3ctY29udHJvbHMge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4uY2FsY3VsYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiYSgxNjAsMTY0LDE2NywyNTUpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHggMHB4IDMwcHg7XFxufVxcblxcbi5pbnB1dC13cmFwcGVye1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5udW0tYnRuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsMjM3LDI1NSwyNTUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMywyMjAsMjM5LDI1NSk7XFxufVxcblxcbi5udW0tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMCwgMTc5LCAyNTUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkxLCAxODUsIDIyMyk7XFxufVxcbi5mdW5jLWJ0biB7ICAgIFxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwyMjQsMjUzLDI1NSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjUsMjA5LDIzNiwyNTUpO1xcbn1cXG5cXG4uZnVuYy1idG46aG92ZXIgeyAgICBcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMSwgMTgzLCAyNTApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMDEsIDIzMyk7XFxufVxcblxcbi5vcHMtYnRuIHsgICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzcsMTgwLDkwLDI1NSk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLm9wcy1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAxcHggc29saWQgcmdiKDI1NCwgMTI2LCA1Mik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzIsIDE2MiwgNDgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ub3BzLWJ0biA+aW5wdXR7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm9wcy1ncmFkaWVudCB7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiAxLzY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjQ2LDIxMSw5MywyNTUpLCByZ2JhKDI1NCwxNTYsMTAxLDI1NSkpO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnplcm8ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kaXZpZGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4ubXVsdGlwbHkge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ucGx1cyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi5taW51cyB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5lcXVhbCB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uZ3JleS1jaXJjbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywyMTAsMjI4LDI1NSk7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBidXR0b25Hcm91cHMgPSB7XG4gICAgT1BFUkFUSU9OOiBbJ1BMVVMnLCAnTUlOVVMnLCAnRElWSURFJywgJ01VTFRJUExZJywgJ1BFUkNFTlQnXSxcbiAgICBGVU5DVElPTjogWydDTEVBUicsICdQTFVTTUlOVVMnLCAnRVFVQUwnXSxcbiAgICBOVU1CRVI6IFsnT05FJywnVFdPJywgJ1RIUkVFJywgJ0ZPVVInLCAnRklWRScsICdTSVgnLCAnU0VWRU4nLCAnRUlHSFQnLCAnTklORScsICdaRVJPJ11cbn0iLCJcbmV4cG9ydCBjb25zdCBrZXlDb2RlVG9CdXR0b25NYXAgPSB7XG4gICAgNDk6ICdPTkUnLFxuICAgIDUwOiAnVFdPJyxcbiAgICA1MTogJ1RIUkVFJyxcbiAgICA1MjogJ0ZPVVInLFxuICAgIDUzOiAnRklWRScsXG4gICAgNTQ6ICdTSVgnLFxuICAgIDU1OiAnU0VWRU4nLFxuICAgIDU2OiAnRUlHSFQnLFxuICAgIDU3OiAnTklORScsXG4gICAgNDg6ICdaRVJPJyxcbiAgICA0NjogJ0RFQ0lNQUwnLFxuICAgIDQzOiAnUExVUycsXG4gICAgNDU6ICdNSU5VUycsXG4gICAgNDc6ICdESVZJREUnLFxuICAgIDQyOiAnTVVMVElQTFknLFxuICAgIDM3OiAnUEVSQ0VOVCcsXG4gICAgNjc6ICdDTEVBUicsXG4gICAgOTk6ICdDTEVBUicsXG4gICAgNjE6ICdFUVVBTCcsXG4gICAgMTM6ICdFUVVBTCdcbn0iLCJleHBvcnQgY29uc3QgdmFsdWVUb0J1dHRvbk1hcCA9IHtcbiAgICAxOiAnT05FJyxcbiAgICAyOiAnVFdPJyxcbiAgICAzOiAnVEhSRUUnLFxuICAgIDQ6ICdGT1VSJyxcbiAgICA1OiAnRklWRScsXG4gICAgNjogJ1NJWCcsXG4gICAgNzogJ1NFVkVOJyxcbiAgICA4OiAnRUlHSFQnLFxuICAgIDk6ICdOSU5FJyxcbiAgICAwOiAnWkVSTycsXG4gICAgJysnOiAnUExVUycsXG4gICAgJ+KIkic6ICdNSU5VUycsXG4gICAgJ8OXJzogJ01VTFRJUExZJyxcbiAgICAnw7cnOiAnRElWSURFJyxcbiAgICAnPSc6ICdFUVVBTCcsXG4gICAgJy4nOiAnREVDSU1BTCcsXG4gICAgJ0MnOiAnQ0xFQVInLFxuICAgICcrLy0nOiAnUExVU01JTlVTJyxcbiAgICAnJSc6ICdQRVJDRU5UJ1xuXG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25Ub1ZhbHVlTWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHZhbHVlVG9CdXR0b25NYXApLm1hcChlbnRyeSA9PiBlbnRyeS5yZXZlcnNlKCkpKVxuIiwiaW1wb3J0IHsga2V5Q29kZVRvQnV0dG9uTWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9rZXlDb2RlVG9CdXR0b24uY29uc3RhbnRcIjtcbmltcG9ydCB7IHZhbHVlVG9CdXR0b25NYXAgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3ZhbHVlLWJ1dHRvbi5jb25zdGFudFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IGZ1bmN0aW9uQnV0dG9uQ2xpY2tlZCwgb3BlcmF0aW9uQnV0dG9uQ2xpY2tlZCwgbnVtYmVyQnV0dG9uQ2xpY2tlZCB9IGZyb20gXCIuLi91dGlscy9idXR0b25DbGlja3NcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT3BlcmF0aW9uLCBpc051bWJlciB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25DbGljayAoZXZlbnQsIGJ1dHRvbikge1xuXG4gICAgaWYoIWJ1dHRvbikge1xuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgYnV0dG9uSW5wdXQgPSBidXR0b25FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgIGJ1dHRvbj0gdmFsdWVUb0J1dHRvbk1hcFtidXR0b25JbnB1dC52YWx1ZV1cbiAgICB9ICBcbiAgICBcbiAgICBpZihpc0Z1bmN0aW9uKGJ1dHRvbikpIHtcbiAgICAgICAgZnVuY3Rpb25CdXR0b25DbGlja2VkKGJ1dHRvbilcbiAgICB9IGVsc2UgaWYgKGlzT3BlcmF0aW9uKGJ1dHRvbikpIHtcbiAgICAgICAgb3BlcmF0aW9uQnV0dG9uQ2xpY2tlZChidXR0b24pXG4gICAgfSBlbHNlIGlmIChpc051bWJlcihidXR0b24pKSB7XG4gICAgICAgIG51bWJlckJ1dHRvbkNsaWNrZWQoYnV0dG9uKVxuICAgIH1cbiAgICBzdGF0ZS5sYXN0S2V5ID0gYnV0dG9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlwcmVzc1RvQnV0dG9uIChldmVudCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGtleUNvZGVUb0J1dHRvbk1hcFtldmVudC5rZXlDb2RlXVxuICAgIGlmKGJ1dHRvbikgYnV0dG9uQ2xpY2sobnVsbCwgYnV0dG9uKVxufSIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgICBsYXN0S2V5OiBudWxsLFxuICAgIGN1cnJlbnRPcGVyYW5kOiAnJyxcbiAgICBvcGVyYXRpb25JblByb2dyZXNzOiBudWxsXG59IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZSB9IGZyb20gXCIuLi9jYWxjdWxhdGVcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi4vZG9tLmVsZW1lbnRzXCI7XG5pbXBvcnQgT1BFUlRBSU9OUyBmcm9tIFwiLi4vb3BlcmF0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZnVuY3Rpb25CdXR0b25DbGlja2VkKGJ1dHRvbikge1xuICAgc3dpdGNoKGJ1dHRvbikge1xuICAgICAgICBjYXNlICdDTEVBUic6IE9QRVJUQUlPTlMuY2xlYXIoKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUExVU01JTlVTJzogaWYoIWRpc3BsYXkudmFsdWUpIHJldHVyblxuICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IGRpc3BsYXkudmFsdWUvMSA8IDA/IGRpc3BsYXkudmFsdWUuc3Vic3RyaW5nKDEpOiBgLSR7ZGlzcGxheS52YWx1ZX1gXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdFUVVBTCc6IGRpc3BsYXkudmFsdWUgPSBjYWxjdWxhdGUoc3RhdGUuY3VycmVudE9wZXJhbmQsIGRpc3BsYXkudmFsdWUsIHN0YXRlLm9wZXJhdGlvbkluUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudE9wZXJhbmQgPSBkaXNwbGF5LnZhbHVlO1xuICAgICAgICAgICAgc3RhdGUub3BlcmF0aW9uSW5Qcm9ncmVzcyA9IG51bGxcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICB9XG59IiwiZXhwb3J0IHsgZnVuY3Rpb25CdXR0b25DbGlja2VkIH0gZnJvbSBcIi4vZnVuY3Rpb24uY2xpY2tcIlxuZXhwb3J0IHsgb3BlcmF0aW9uQnV0dG9uQ2xpY2tlZCB9IGZyb20gXCIuL29wZXJhdGlvbi5jbGlja1wiXG5leHBvcnQgeyBudW1iZXJCdXR0b25DbGlja2VkIH0gZnJvbSBcIi4vbnVtYmVyLmNsaWNrXCJcblxuIiwiaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuLi9kb20uZWxlbWVudHNcIjtcbmltcG9ydCB7IGJ1dHRvblRvVmFsdWVNYXAgYXMgQlVUVE9OUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvdmFsdWUtYnV0dG9uLmNvbnN0YW50XCI7XG5pbXBvcnQgeyBpc09wZXJhdGlvbk9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdmFsaWRhdGlvbnNcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJCdXR0b25DbGlja2VkKGJ1dHRvbikge1xuICAgIGlmIChkaXNwbGF5LnZhbHVlID09PSAnMCcgfHwgZGlzcGxheS52YWx1ZSA9PT0gJycgfHwgaXNPcGVyYXRpb25PckZ1bmN0aW9uKHN0YXRlLmxhc3RLZXkpKSB7XG4gICAgICAgIGlmKGJ1dHRvbiA9PT0gQlVUVE9OUy5ERUNJTUFMKSB7XG4gICAgICAgICAgICBkaXNwbGF5LnZhbHVlID0gJzAuJ1xuICAgICAgICB9IGVsc2UgZGlzcGxheS52YWx1ZSA9IEJVVFRPTlNbYnV0dG9uXVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXkudmFsdWUgPSBkaXNwbGF5LnZhbHVlICsgQlVUVE9OU1tidXR0b25dXG4gICAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZSB9IGZyb20gXCIuLi9jYWxjdWxhdGVcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi4vZG9tLmVsZW1lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb25CdXR0b25DbGlja2VkKGJ1dHRvbikge1xuICAgIGlmKHN0YXRlLm9wZXJhdGlvbkluUHJvZ3Jlc3MpIGRpc3BsYXkudmFsdWUgPSBjYWxjdWxhdGUoc3RhdGUuY3VycmVudE9wZXJhbmQsIGRpc3BsYXkudmFsdWUsIHN0YXRlLm9wZXJhdGlvbkluUHJvZ3Jlc3MpXG4gICAgc3RhdGUuY3VycmVudE9wZXJhbmQgPSBkaXNwbGF5LnZhbHVlXG4gICAgc3RhdGUub3BlcmF0aW9uSW5Qcm9ncmVzcyA9IGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyBidXR0b25Ub1ZhbHVlTWFwIH0gZnJvbSBcIi4uL2NvbnN0YW50cy92YWx1ZS1idXR0b24uY29uc3RhbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0aW9uUGFuZSB9IGZyb20gXCIuL2RvbS5lbGVtZW50c1wiO1xuaW1wb3J0IE9QRVJBVElPTlMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGUgKGZpcnN0T3BlcmFuZCwgc2Vjb25kT3BlcmFuZCwgb3BlcmF0b3IpIHtcbiAgICBpZighb3BlcmF0b3IpIHJldHVybiBzZWNvbmRPcGVyYW5kXG4gICAgY2FsY3VsYXRpb25QYW5lLmlubmVyVGV4dCA9IGAke2ZpcnN0T3BlcmFuZH0gJHtidXR0b25Ub1ZhbHVlTWFwW29wZXJhdG9yXX0gJHtzZWNvbmRPcGVyYW5kfWBcbiAgICByZXR1cm4gT1BFUkFUSU9OU1tvcGVyYXRvcl0oZmlyc3RPcGVyYW5kLzEsIHNlY29uZE9wZXJhbmQvMSlcbn0iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYWxjdWxhdG9yYClcbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPXVzZXJJbnB1dF1gKVxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0aW9uUGFuZSA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcihgLmNhbGN1bGF0aW9uYClcbmV4cG9ydCBjb25zdCBudW1iZXJQYWQgPSBjYWxjdWxhdG9yLnF1ZXJ5U2VsZWN0b3IoYC5idXR0b25zLXdyYXBwZXJgKVxuZXhwb3J0IGNvbnN0IGJ1dHRvbnMgPSBudW1iZXJQYWQucXVlcnlTZWxlY3RvckFsbChgLmNhbGMtYnV0dG9uYCkiLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgZGlzcGxheSwgY2FsY3VsYXRpb25QYW5lIH0gZnJvbSBcIi4uL2RvbS5lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgUExVUzogKGEsYikgPT4gYStiLFxuICAgIE1JTlVTOiAoYSxiKSA9PiBhLWIsXG4gICAgRElWSURFOiAoYSxiKSA9PiBhL2IsXG4gICAgTVVMVElQTFk6IChhLGIpID0+IGEqYixcbiAgICBQRVJDRU5UOiAoYSxiKSA9PiBhKmIvMTAwLFxuICAgIGNsZWFyOiAoKT0+IHtcbiAgICAgICAgc3RhdGUubGFzdEtleSA9IG51bGwsIGRpc3BsYXkudmFsdWU9ICcnLCBzdGF0ZS5vcGVyYXRpb25JblByb2dyZXNzID0gbnVsbCwgc3RhdGUuY3VycmVudE9wZXJhbmQgPSAnJywgY2FsY3VsYXRpb25QYW5lLmlubmVyVGV4dCA9ICcnXG4gICAgfVxufSIsImltcG9ydCB7IGJ1dHRvbkdyb3VwcyB9IGZyb20gXCIuLi9jb25zdGFudHMvYnV0dG9uR3JvdXAuY29uc3RhbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3BlcmF0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLk9QRVJBVElPTi5pbmNsdWRlcyhidXR0b24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLkZVTkNUSU9OLmluY2x1ZGVzKGJ1dHRvbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyIChidXR0b24pIHtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzLk5VTUJFUi5pbmNsdWRlcyhidXR0b24pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZXJhdGlvbk9yRnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHJldHVybiBpc09wZXJhdGlvbihidXR0b24pIHx8IGlzRnVuY3Rpb24oYnV0dG9uKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBidXR0b25zIH0gZnJvbSBcIi4vdXRpbHMvZG9tLmVsZW1lbnRzXCI7XG5pbXBvcnQgeyBidXR0b25DbGljaywga2V5cHJlc3NUb0J1dHRvbiB9IGZyb20gXCIuL2NvbnRyb2xsZXIvY29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGJ1dHRvbkNsaWNrKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleXByZXNzVG9CdXR0b24pIl0sInNvdXJjZVJvb3QiOiIifQ==