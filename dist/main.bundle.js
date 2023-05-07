"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_project"] = self["webpackChunkto_do_list_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: medium;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  height: 100vh;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: gainsboro;\\n}\\n\\nh1 {\\n  font-size: medium;\\n  padding: 0;\\n  margin: 0;\\n  font-weight: normal;\\n}\\n\\n.main-container {\\n  padding: 0;\\n  width: 50%;\\n  align-items: stretch;\\n  max-height: 80%;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 0 0 1rem gray;\\n}\\n\\n.main-container div {\\n  margin: 0;\\n  padding: 1rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-color: white;\\n  border: solid 1px gainsboro;\\n  height: 3rem;\\n}\\n\\nimg {\\n  width: 1rem;\\n  aspect-ratio: 1/1;\\n}\\n\\n#add-field {\\n  height: 3rem;\\n  border: solid 1px gainsboro;\\n  border-right: 0;\\n  border-left: 0;\\n  outline: none;\\n  flex-grow: 1;\\n}\\n\\n#list-container {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  overflow: auto;\\n}\\n\\nli {\\n  padding: 1rem;\\n  border: solid 1px gainsboro;\\n}\\n\\n#list-container li {\\n  padding: 1rem;\\n  display: flex;\\n  justify-content: stretch;\\n  align-items: center;\\n  background-color: white;\\n  height: 3rem;\\n  gap: 1rem;\\n}\\n\\ninput:checked ~ span {\\n  text-decoration: line-through;\\n  color: gray;\\n}\\n\\n#list-container li span {\\n  flex-grow: 1;\\n}\\n\\n#clean-btn {\\n  height: 3rem;\\n  padding: 1rem;\\n  margin: 0;\\n  border: solid 1px gainsboro;\\n  color: gray;\\n}\\n\\n#clean-btn:hover {\\n  background-color: gainsboro;\\n}\\n\\n::-webkit-input-placeholder {\\n  font-style: italic;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 5px;\\n}\\n\\n::-webkit-scrollbar-track {\\n  background-color: #f1f1f1;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background-color: #888;\\n}\\n\\n::-moz-placeholder {\\n  font-style: italic;\\n}\\n\\n:-moz-placeholder {\\n  font-style: italic;\\n}\\n\\n:-ms-input-placeholder {\\n  font-style: italic;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/enter.png */ \"./src/images/enter.png\");\n/* harmony import */ var _images_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/refresh.png */ \"./src/images/refresh.png\");\n/* harmony import */ var _images_del_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/del.png */ \"./src/images/del.png\");\n/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.png */ \"./src/images/edit.png\");\n/* harmony import */ var _images_ok_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ok.png */ \"./src/images/ok.png\");\n/* harmony import */ var _images_exit_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/exit.png */ \"./src/images/exit.png\");\n/* harmony import */ var _images_dots_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/dots.png */ \"./src/images/dots.png\");\n/* harmony import */ var _modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/visibility.js */ \"./src/modules/visibility.js\");\n/* harmony import */ var _modules_complete_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/complete.js */ \"./src/modules/complete.js\");\n\n\n\n\n\n\n\n\n\n\n\nlet toDoList = [];\nconst refreshIcon = document.getElementById('refresh-icon');\nconst enterIcon = document.getElementById('enter-icon');\nconst addField = document.getElementById('add-field');\nconst cleanBtn = document.getElementById('clean-btn');\nconst listContainer = document.getElementById('list-container');\nrefreshIcon.src = _images_refresh_png__WEBPACK_IMPORTED_MODULE_2__;\n\nenterIcon.src = _images_enter_png__WEBPACK_IMPORTED_MODULE_1__;\n\nif (typeof localStorage.getItem('to_do_list') !== \"undefined\" && localStorage.getItem('to_do_list') !== null) {\n  toDoList = JSON.parse(localStorage.getItem('to_do_list'));\n}\n\nconst UpdateStorage = () => localStorage.setItem('to_do_list', JSON.stringify(toDoList));\n\nconst UpdateIndex = (x) => {\n  for (let i = x; i < toDoList.length; i += 1) {\n    toDoList[i].index = i;\n  }\n  UpdateStorage();\n};\n\nconst EditFun = (varX) => {\n  const editArrItem = toDoList.filter((item) => item.index === varX);\n  return editArrItem[0].description;\n};\n\nconst DelFun = (varX) => {\n  toDoList = toDoList.filter((item) => item.index !== varX);\n};\n\nconst OkFun = (varX, val) => {\n  toDoList = toDoList.filter((item) => {\n    if (item.index === varX) {\n      item.description = val;\n    }\n    return true;\n  });\n};\n\n\nconst ListenToBtns = () => {\n  const listItem = document.querySelectorAll('.item');\nconst checkIcon = document.querySelectorAll('.check-icon');\nconst span = document.querySelectorAll('.task-text');\nconst editField = document.querySelectorAll('.edit-field');\nconst delIcon = document.querySelectorAll('.del-icon');\nconst editIcon = document.querySelectorAll('.edit-icon');\nconst okIcon = document.querySelectorAll('.ok-icon');\nconst xIcon = document.querySelectorAll('.x-icon');\nconst dotsIcon = document.querySelectorAll('.dots-icon');\n\nfor (let i = 0; i < toDoList.length; i += 1) {\n  const index = toDoList[i].index;\n    checkIcon[i].addEventListener('change', () => {\n      toDoList[i].completed = (0,_modules_complete_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(checkIcon[i].checked);\n      UpdateStorage();\n    });\n    dotsIcon[i].addEventListener('click', () => {\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.ShowElement)([checkIcon[i], span[i], delIcon[i], editIcon[i], xIcon[i]]);\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.HideElement)([editField[i], okIcon[i], dotsIcon[i]]);\n    });\n    xIcon[i].addEventListener('click', () => {\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.ShowElement)([checkIcon[i], span[i], dotsIcon[i]]);\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.HideElement)([editField[i], delIcon[i], editIcon[i], okIcon[i], xIcon[i]]);\n    });\n    editIcon[i].addEventListener('click', () => {\n      editField[i].value = EditFun(index);\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.ShowElement)([editField[i], okIcon[i], xIcon[i]]);\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.HideElement)([checkIcon[i], span[i], delIcon[i], editIcon[i], dotsIcon[i]]);\n    });\n    delIcon[i].addEventListener('click', () => {\n      listItem[i].remove();\n      DelFun(index);\n      UpdateStorage();\n      UpdateIndex(index);\n      ShowList();\n    });\n    okIcon[i].addEventListener('click', () => {\n      OkFun(index, editField[i].value);\n      UpdateStorage();\n      span[i].innerHTML = editField[i].value;\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.ShowElement)([checkIcon[i], span[i], dotsIcon[i]]);\n      (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.HideElement)([editField[i], delIcon[i], editIcon[i], okIcon[i], xIcon[i]]);\n    });\n}\n}\n\n\n\n\nconst ShowList = () => {\n  listContainer.innerHTML = '';\n  for (let i = 0; i < toDoList.length; i += 1) {\n    const listItem = document.createElement('li');\n    const checkIcon = document.createElement('input');\n    const span = document.createElement('span');\n    const editField = document.createElement('input');\n    const delIcon = document.createElement('img');\n    const editIcon = document.createElement('img');\n    const okIcon = document.createElement('img');\n    const xIcon = document.createElement('img');\n    const dotsIcon = document.createElement('img');\n\n    listItem.classList.add('item');\n    checkIcon.classList.add('check-icon');\n    span.classList.add('task-text');\n    editField.classList.add('edit-field');\n    delIcon.classList.add('del-icon');\n    editIcon.classList.add('edit-icon');\n    okIcon.classList.add('ok-icon');\n    xIcon.classList.add('x-icon');\n    dotsIcon.classList.add('dots-icon');\n    checkIcon.type = 'checkbox';\n    checkIcon.checked = toDoList[i].completed;\n    span.innerHTML = toDoList[i].description;\n    editField.style.flexGrow = 1;\n\n    delIcon.src = _images_del_png__WEBPACK_IMPORTED_MODULE_3__;\n    editIcon.src = _images_edit_png__WEBPACK_IMPORTED_MODULE_4__;\n    okIcon.src = _images_ok_png__WEBPACK_IMPORTED_MODULE_5__;\n    xIcon.src = _images_exit_png__WEBPACK_IMPORTED_MODULE_6__;\n    dotsIcon.src = _images_dots_png__WEBPACK_IMPORTED_MODULE_7__;\n\n    listItem.appendChild(checkIcon);\n    listItem.appendChild(span);\n    listItem.appendChild(editField);\n    listItem.appendChild(delIcon);\n    listItem.appendChild(editIcon);\n    listItem.appendChild(okIcon);\n    listItem.appendChild(xIcon);\n    listItem.appendChild(dotsIcon);\n\n    (0,_modules_visibility_js__WEBPACK_IMPORTED_MODULE_8__.HideElement)([editField, delIcon, editIcon, okIcon, xIcon]);\n    listContainer.appendChild(listItem);\n  }\n  ListenToBtns();\n};\n\nShowList();\n\nenterIcon.addEventListener('click', () => {\n  if (toDoList.length !== 0) {\n    toDoList.push({\n      description: addField.value,\n      completed: false,\n      index: toDoList[toDoList.length - 1].index + 1,\n    });\n  } else {\n    toDoList.push({\n      description: addField.value,\n      completed: false,\n      index: 0,\n    });\n  }\n  ShowList();\n  UpdateStorage();\n  addField.value = '';\n  addField.focus();\n});\n\naddField.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    enterIcon.click();\n  }\n});\n\ncleanBtn.addEventListener('click', () => {\n  toDoList = toDoList.filter((item) => item.completed === false);\n  UpdateStorage();\n  UpdateIndex(0);\n  ShowList();\n});\n\nconst dragFun = () => {\n  let dragFromIndex;\n  let dragToIndex;\n  let items = listContainer.querySelectorAll('.item');\n  items.forEach((item) => {\n    item.draggable = true;\n    item.addEventListener('dragstart', (e) => {\n      setTimeout(() => item.classList.add('dragging'), 0);\n      dragFromIndex = Array.from(items).indexOf(e.target);\n    });\n    item.addEventListener('dragend', (e) => {\n      item.classList.remove('dragging');\n\n      const newParent = e.target.parentNode;\n      const newItems = newParent.childNodes;\n      dragToIndex = Array.from(newItems).indexOf(e.target);\n      items = listContainer.querySelectorAll('.item');\n\n      const objToMove = toDoList[dragFromIndex];\n      objToMove.index = dragToIndex;\n      toDoList.splice(dragFromIndex, 1);\n      toDoList.splice(dragToIndex, 0, objToMove);\n      UpdateIndex(0);\n      window.location.reload(); // I should find a better solution than reloading the page\n    });\n  });\n\n  const initlistContainer = (e) => {\n    e.preventDefault();\n    const draggingItem = document.querySelector('.dragging');\n    const siblings = [...listContainer.querySelectorAll('.item:not(.dragging)')];\n    const nextSib = siblings.find((sib) => e.clientY <= sib.offsetTop + sib.offsetHeight / 2);\n    listContainer.insertBefore(draggingItem, nextSib);\n  };\n\n  listContainer.addEventListener('dragover', initlistContainer);\n  listContainer.addEventListener('dragenter', (e) => e.preventDefault());\n};\ndragFun();\n\n//# sourceURL=webpack://to-do-list-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/complete.js":
/*!*********************************!*\
  !*** ./src/modules/complete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CheckIfCompleted = (check) => check;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIfCompleted);\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/complete.js?");

/***/ }),

/***/ "./src/modules/visibility.js":
/*!***********************************!*\
  !*** ./src/modules/visibility.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HideElement\": () => (/* binding */ HideElement),\n/* harmony export */   \"ShowElement\": () => (/* binding */ ShowElement)\n/* harmony export */ });\nconst ShowElement = (el = []) => {\n  for (let i = 0; i < el.length; i += 1) {\n    el[i].style.display = 'block';\n  }\n};\n\nconst HideElement = (el = []) => {\n  for (let i = 0; i < el.length; i += 1) {\n    el[i].style.display = 'none';\n  }\n};\n\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/visibility.js?");

/***/ }),

/***/ "./src/images/del.png":
/*!****************************!*\
  !*** ./src/images/del.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee4b58337bd3477db466.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/del.png?");

/***/ }),

/***/ "./src/images/dots.png":
/*!*****************************!*\
  !*** ./src/images/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a9493a080887ddaef77.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/dots.png?");

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f6481dd783e4c5d194e.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/edit.png?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6be7477364f2b104fba.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/enter.png?");

/***/ }),

/***/ "./src/images/exit.png":
/*!*****************************!*\
  !*** ./src/images/exit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfbc2abb610e7e0ca089.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/exit.png?");

/***/ }),

/***/ "./src/images/ok.png":
/*!***************************!*\
  !*** ./src/images/ok.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"852ad271cd73ed3f901c.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/ok.png?");

/***/ }),

/***/ "./src/images/refresh.png":
/*!********************************!*\
  !*** ./src/images/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f441a0886e3869491398.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/refresh.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);