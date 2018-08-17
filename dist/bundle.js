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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _services = __webpack_require__(/*! app/services */ \"./src/services.js\");\n\n_services.app.mount(document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App(taskListFactory, taskAddView) {\n    _classCallCheck(this, App);\n\n    this.taskListFactory = taskListFactory;\n    this.taskAddView = taskAddView;\n  }\n\n  _createClass(App, [{\n    key: \"mount\",\n    value: function mount($root) {\n      var $taskList = document.createElement('ul');\n      var taskList = this.taskListFactory.create($taskList, []);\n      var $add = this.taskAddView.render(taskList);\n      $root.appendChild($add);\n      $root.appendChild($taskList);\n    }\n  }]);\n\n  return App;\n}();\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/entity/task.js":
/*!****************************!*\
  !*** ./src/entity/task.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(title) {\n    _classCallCheck(this, Task);\n\n    this.title = title;\n    this.complete = false;\n  }\n\n  _createClass(Task, [{\n    key: \"getTitle\",\n    value: function getTitle() {\n      return this.title;\n    }\n  }, {\n    key: \"toggleComplete\",\n    value: function toggleComplete() {\n      this.complete = !this.complete;\n    }\n  }, {\n    key: \"isComplete\",\n    value: function isComplete() {\n      return this.complete;\n    }\n  }]);\n\n  return Task;\n}();\n\nexports.default = Task;\n\n//# sourceURL=webpack:///./src/entity/task.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.app = void 0;\n\nvar _list = _interopRequireDefault(__webpack_require__(/*! app/view/list */ \"./src/view/list.js\"));\n\nvar _task = _interopRequireDefault(__webpack_require__(/*! app/view/task */ \"./src/view/task.js\"));\n\nvar _add = _interopRequireDefault(__webpack_require__(/*! app/view/add */ \"./src/view/add.js\"));\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! app/app */ \"./src/app.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar taskView = new _task.default();\nvar taskAddView = new _add.default();\nvar taskListFactory = new _list.default(taskView);\nvar app = new _app.default(taskListFactory, taskAddView);\nexports.app = app;\n\n//# sourceURL=webpack:///./src/services.js?");

/***/ }),

/***/ "./src/view/add.js":
/*!*************************!*\
  !*** ./src/view/add.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _task = _interopRequireDefault(__webpack_require__(/*! app/entity/task */ \"./src/entity/task.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TaskAddView =\n/*#__PURE__*/\nfunction () {\n  function TaskAddView() {\n    _classCallCheck(this, TaskAddView);\n  }\n\n  _createClass(TaskAddView, [{\n    key: \"render\",\n    value: function render(taskList) {\n      var $add = document.createElement('form');\n      var $input = document.createElement('input');\n      var $submit = document.createElement('button');\n      $submit.type = 'button';\n      $submit.innerText = 'Add';\n      $add.append($input);\n      $add.append($submit);\n      $submit.addEventListener('click', function () {\n        taskList.add(new _task.default($input.value));\n      });\n      return $add;\n    }\n  }]);\n\n  return TaskAddView;\n}();\n\nexports.default = TaskAddView;\n\n//# sourceURL=webpack:///./src/view/add.js?");

/***/ }),

/***/ "./src/view/list.js":
/*!**************************!*\
  !*** ./src/view/list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TaskListFactory =\n/*#__PURE__*/\nfunction () {\n  function TaskListFactory(taskView) {\n    _classCallCheck(this, TaskListFactory);\n\n    this.taskView = taskView;\n  }\n\n  _createClass(TaskListFactory, [{\n    key: \"create\",\n    value: function create($tasks, tasks) {\n      var list = new UnorderedList($tasks, tasks, this.taskView);\n      tasks.forEach(function (task) {\n        return list.add(task);\n      });\n      return list;\n    }\n  }]);\n\n  return TaskListFactory;\n}();\n\nexports.default = TaskListFactory;\n\nvar UnorderedList =\n/*#__PURE__*/\nfunction () {\n  function UnorderedList($list, items, itemFactory) {\n    _classCallCheck(this, UnorderedList);\n\n    this.$list = $list;\n    this.items = items;\n    this.itemFactory = itemFactory;\n    this.itemDomMap = new Map();\n  }\n\n  _createClass(UnorderedList, [{\n    key: \"add\",\n    value: function add(item) {\n      var $item = this.itemFactory.render(item, this);\n      this.items.push(item);\n      this.itemDomMap.set(item, $item);\n      this.$list.appendChild($item);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(item) {\n      var $item = this.itemDomMap.get(item);\n      var index = this.items.indexOf(item);\n\n      if (index !== -1) {\n        this.items.splice(index, 1);\n      }\n\n      this.itemDomMap.delete(item);\n      $item.remove();\n    }\n  }]);\n\n  return UnorderedList;\n}();\n\n//# sourceURL=webpack:///./src/view/list.js?");

/***/ }),

/***/ "./src/view/task.js":
/*!**************************!*\
  !*** ./src/view/task.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TaskView =\n/*#__PURE__*/\nfunction () {\n  function TaskView() {\n    _classCallCheck(this, TaskView);\n  }\n\n  _createClass(TaskView, [{\n    key: \"render\",\n    value: function render(task, taskList) {\n      var $task = document.createElement('div');\n      var $title = document.createElement('label');\n      var $complete = document.createElement('button');\n      var $remove = document.createElement('button');\n      $title.innerText = task.getTitle();\n      $complete.innerText = 'Complete';\n      $remove.innerText = 'Remove';\n      $task.append($title);\n      $task.append($complete);\n      $task.append($remove);\n      $remove.addEventListener('click', function () {\n        taskList.remove(task);\n      });\n      $complete.addEventListener('click', function () {\n        task.toggleComplete();\n\n        if (task.isComplete()) {\n          $task.classList.add('task-complete');\n        } else {\n          $task.classList.remove('task-complete');\n        }\n      });\n      return $task;\n    }\n  }]);\n\n  return TaskView;\n}();\n\nexports.default = TaskView;\n\n//# sourceURL=webpack:///./src/view/task.js?");

/***/ })

/******/ });