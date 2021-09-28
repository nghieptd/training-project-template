/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/api/content.ts":
/*!************************************!*\
  !*** ./src/scripts/api/content.ts ***!
  \************************************/
/*! exports provided: loadContents, editContent, deleteFile, createFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContents", function() { return loadContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContent", function() { return editContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony import */ var _utilities_randomSleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_randomSleep */ "./src/scripts/utilities/_randomSleep.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/scripts/api/data.ts");


const KEY = 'DB';
const loadContents = async folder => {
  await Object(_utilities_randomSleep__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const jsonString = localStorage.getItem(KEY);
  let data;

  if (jsonString) {
    data = JSON.parse(jsonString);
  } else {
    data = _data__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  let fetchedItems = [];

  if (!folder) {
    fetchedItems = data.filter(item => item.folderId < 0);
  } else {
    const targetFolder = data.find(item => item.name === folder);

    if (targetFolder) {
      fetchedItems = data.filter(item => item.folderId > -1 && item.folderId === targetFolder.id);
    }
  }

  const mappedItems = fetchedItems.map(item => {
    if (!item.isFolder) {
      /* File */
      return {
        id: item.id,
        name: item.name,
        isFolder: item.isFolder,
        folderId: item.folderId,
        type: item.type,
        createdAt: new Date(item.createdAt),
        createdBy: item.createdBy,
        updatedAt: new Date(item.updatedAt),
        updatedBy: item.updatedBy
      };
    }
    /* Node */


    return {
      id: item.id,
      name: item.name,
      isFolder: item.isFolder,
      folderId: item.folderId,
      createdAt: new Date(item.createdAt),
      createdBy: item.createdBy,
      updatedAt: new Date(item.updatedAt),
      updatedBy: item.updatedBy
    };
  }); // Data from localStorage is empty - Initialize data

  if (jsonString === null) {
    localStorage.setItem(KEY, JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_1__["default"]));
  }

  return mappedItems;
};
const editContent = () => {// TODO
};
const deleteFile = () => {// TODO
};
const createFile = () => {// TODO
};

/***/ }),

/***/ "./src/scripts/api/data.ts":
/*!*********************************!*\
  !*** ./src/scripts/api/data.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 0,
  name: 'CoasterAndBargeLoading.xlsx',
  type: 'xlsx',
  isFolder: false,
  folderId: -1,
  createdBy: 'Administrator MOD',
  createdAt: '2021-09-28T04:00:39.113Z',
  updatedBy: 'Administrator MOD',
  updatedAt: '2021-09-28T04:00:39.113Z'
}, {
  id: 1,
  name: 'RevenueByServices.xlsx',
  type: 'xlsx',
  isFolder: false,
  folderId: -1,
  createdBy: 'Administrator MOD',
  createdAt: '2021-09-28T04:00:39.113Z',
  updatedBy: 'Administrator MOD',
  updatedAt: '2021-09-28T04:00:39.113Z'
}, {
  id: 2,
  name: 'RevenueByServices2016.xlsx',
  type: 'xlsx',
  isFolder: false,
  folderId: -1,
  createdBy: 'Administrator MOD',
  createdAt: '2021-09-28T04:00:39.113Z',
  updatedBy: 'Administrator MOD',
  updatedAt: '2021-09-28T04:00:39.113Z'
}, {
  id: 3,
  name: 'RevenueByServices2017.xlsx',
  type: 'xlsx',
  isFolder: false,
  folderId: -1,
  createdBy: 'Administrator MOD',
  createdAt: '2021-09-28T04:00:39.113Z',
  updatedBy: 'Administrator MOD',
  updatedAt: '2021-09-28T04:00:39.113Z'
}, {
  id: 4,
  name: 'CAS',
  type: 'folder',
  isFolder: true,
  folderId: -1,
  createdBy: 'Megan Bowen',
  createdAt: '2021-04-29T17:00:00.000Z',
  updatedBy: 'Megan Bowen',
  updatedAt: '2021-04-29T17:00:00.000Z'
}]);

/***/ }),

/***/ "./src/scripts/components/_table.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/_table.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/content */ "./src/scripts/api/content.ts");


const formatTime = date => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const current = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let strTime = `${monthNames[date.getMonth()]} ${date.getDate()}`; // Default - return month and date only
  // Show elapsed time if within a day

  if (date.getDate() === current.getDate()) {
    const msDiff = current.getTime() - date.getTime();
    const elapsedSec = Math.floor(msDiff / 1000);

    if (elapsedSec < 10) {
      strTime = 'A few seconds ago';
    } else if (elapsedSec < 60) {
      strTime = `${elapsedSec} seconds ago`;
    } else if (elapsedSec < 3600) {
      strTime = `${Math.floor(elapsedSec / 60)} minutes ago`;
    } else if (elapsedSec < 86400) {
      strTime = `${Math.floor(elapsedSec / 3600)} hours ago`;
    }
  }

  return strTime;
};

const getTypeClasses = type => {
  const prefix = 'ms-Icon ms-Icon--';

  switch (type) {
    case 'folder':
      return `${prefix}FabricFolderFill`;

    case 'xlsx':
      return `${prefix}ExcelDocument excelType`;

    default:
      return `${prefix}SurveyQuestions`;
  }
};

const buildTableRow = data => {
  const tr = document.createElement('tr');
  const type = document.createElement('td');
  type.className = 'typeCell';
  const icon = document.createElement('i');
  icon.className = getTypeClasses('type' in data ? data.type : 'folder');
  type.appendChild(icon);
  const name = document.createElement('td');
  name.innerText = data.name;
  const modifiedDate = document.createElement('td');
  modifiedDate.className = 'modifiedCell';
  modifiedDate.innerText = formatTime(data.updatedAt);
  const modifiedBy = document.createElement('td');
  modifiedBy.className = 'modByCell';
  modifiedBy.innerText = data.updatedBy;
  tr.append(type, name, modifiedDate, modifiedBy, document.createElement('td'));
  return tr;
};

const renderTable = async () => {
  // TODO Render table data
  const tbodyDesktop = document.querySelector('#table-desktop tbody');

  if (tbodyDesktop === null) {
    return;
  }

  const data = await Object(_api_content__WEBPACK_IMPORTED_MODULE_0__["loadContents"])();
  const nodes = data.map(buildTableRow);
  tbodyDesktop.append(...nodes);
};

/* harmony default export */ __webpack_exports__["default"] = (renderTable);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_table */ "./src/scripts/components/_table.ts");


Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_table__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/_randomSleep.ts":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/_randomSleep.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getRandomIntInclusvie = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};

/* harmony default export */ __webpack_exports__["default"] = (async (msMin = 500, msMax = 1000) => {
  const ms = getRandomIntInclusvie(msMin, msMax);
  await sleep(ms);
});

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map