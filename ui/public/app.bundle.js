/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AllLyricPosts.jsx":
/*!*******************************!*\
  !*** ./src/AllLyricPosts.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllLyricPosts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserContext.js */ \"./src/UserContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar ASingleLyricPost = /*#__PURE__*/function (_React$Component) {\n  _inherits(ASingleLyricPost, _React$Component);\n\n  var _super = _createSuper(ASingleLyricPost);\n\n  function ASingleLyricPost(props) {\n    var _this;\n\n    _classCallCheck(this, ASingleLyricPost);\n\n    _this = _super.call(this, props);\n    var _this$props$lyricpost = _this.props.lyricpost,\n        lyric = _this$props$lyricpost.lyric,\n        song = _this$props$lyricpost.song,\n        artist = _this$props$lyricpost.artist,\n        user = _this$props$lyricpost.user;\n    _this.state = {\n      lyric: lyric,\n      song: song,\n      artist: artist,\n      user: user,\n      inputLinkClicked: false\n    };\n    _this.toggleEditForm = _this.toggleEditForm.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n  /*toggleEditForm function is necessary as we want the edit forms to be hidden unless a user clicks on the 'edit' button. This component has a state inputLinkClicked. When this is false, edit forms are hidden. When it is true (for example, by clicking on the edit button and activating the toggleEditForm function, inputLinkClicked is set to true, and edit forms are visible.*/\n\n\n  _createClass(ASingleLyricPost, [{\n    key: \"toggleEditForm\",\n    value: function toggleEditForm() {\n      if (this.state.inputLinkClicked) {\n        this.setState({\n          inputLinkClicked: false\n        });\n      } else {\n        this.setState({\n          inputLinkClicked: true\n        });\n      }\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function () {\n      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n        var form, changes, id;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                form = document.forms.updateLyricPost;\n                changes = {\n                  lyric: form.lyric.value,\n                  song: form.song.value,\n                  artist: form.artist.value,\n                  user: form.user.value\n                };\n                id = this.props.lyricpost.id;\n                this.props.updateLyricPost(id, changes);\n                this.toggleEditForm();\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function handleSubmit(_x) {\n        return _handleSubmit.apply(this, arguments);\n      }\n\n      return handleSubmit;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var lyricpost = this.props.lyricpost;\n      var user = this.context;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"lyricPostData\"\n      }, \"'\", lyricpost.lyric, \"'\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"songName\"\n      }, lyricpost.song), \" by\", \" \", lyricpost.artist, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"- posted by \", lyricpost.user),\n      /* In this if statement, edit forms are hidden from user if inputLinkClicked is set to false. If set to true (for example, by clicking on the edit button and activating the toggleEditForm function), then the edit forms appear */\n      this.state.inputLinkClicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        onClick: this.toggleEditForm\n      }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"button\",\n        hidden: !user.signedIn,\n        onClick: function onClick() {\n          _this2.props.deleteLyricPost(lyricpost.id);\n        }\n      }, \"Delete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), this.state.inputLinkClicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        name: \"updateLyricPost\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n        type: \"text\",\n        name: \"lyric\",\n        value: this.state.lyric,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            lyric: e.target.value\n          });\n        },\n        rows: \"4\",\n        cols: \"40\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"song\",\n        value: this.state.song,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            song: e.target.value\n          });\n        },\n        size: \"40\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"artist\",\n        value: this.state.artist,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            artist: e.target.value\n          });\n        },\n        size: \"40\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"user\",\n        value: this.state.user,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            user: e.target.value\n          });\n        },\n        size: \"40\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"submit\"\n      }, \"Submit changes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"button\",\n        onClick: this.toggleEditForm\n      }, \"Cancel\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null));\n    }\n  }]);\n\n  return ASingleLyricPost;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nASingleLyricPost.contextType = _UserContext_js__WEBPACK_IMPORTED_MODULE_1__.default;\n\nvar AllLyricPosts = /*#__PURE__*/function (_React$Component2) {\n  _inherits(AllLyricPosts, _React$Component2);\n\n  var _super2 = _createSuper(AllLyricPosts);\n\n  function AllLyricPosts() {\n    _classCallCheck(this, AllLyricPosts);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(AllLyricPosts, [{\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      //key is needed below, when creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.\n      var allLyricPosts = this.props.lyricpostsList.slice(0).reverse().map(function (i) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ASingleLyricPost, {\n          key: i._id,\n          lyricpost: i,\n          updateLyricPost: _this3.props.updateLyricPost,\n          deleteLyricPost: _this3.props.deleteLyricPost\n        });\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, allLyricPosts);\n    }\n  }]);\n\n  return AllLyricPosts;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://mern_stack_bones/./src/AllLyricPosts.jsx?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var _GreetingsParent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GreetingsParent.jsx */ \"./src/GreetingsParent.jsx\");\n\n\n\n\n\nvar element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GreetingsParent_jsx__WEBPACK_IMPORTED_MODULE_4__.default, null);\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack://mern_stack_bones/./src/App.jsx?");

/***/ }),

/***/ "./src/GreetingsParent.jsx":
/*!*********************************!*\
  !*** ./src/GreetingsParent.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GreetingsParent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _LyricPostAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LyricPostAdd.jsx */ \"./src/LyricPostAdd.jsx\");\n/* harmony import */ var _AllLyricPosts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllLyricPosts.jsx */ \"./src/AllLyricPosts.jsx\");\n/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register.jsx */ \"./src/Register.jsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserContext.js */ \"./src/UserContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar GreetingsParent = /*#__PURE__*/function (_React$Component) {\n  _inherits(GreetingsParent, _React$Component);\n\n  var _super = _createSuper(GreetingsParent);\n\n  function GreetingsParent() {\n    var _this;\n\n    _classCallCheck(this, GreetingsParent);\n\n    _this = _super.call(this);\n    _this.state = {\n      lyricpostsList: [],\n      user: {\n        signedIn: false\n      }\n    };\n    _this.onUserChange = _this.onUserChange.bind(_assertThisInitialized(_this));\n    _this.createLyricPost = _this.createLyricPost.bind(_assertThisInitialized(_this));\n    _this.updateLyricPost = _this.updateLyricPost.bind(_assertThisInitialized(_this));\n    _this.deleteLyricPost = _this.deleteLyricPost.bind(_assertThisInitialized(_this));\n    _this.uRLEndpoint = window.ENV.UI_API_ENDPOINT;\n    return _this;\n  }\n\n  _createClass(GreetingsParent, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var apiEndpoint, response, body, result, signedIn, givenName, email;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;\n                _context.next = 3;\n                return fetch(\"\".concat(apiEndpoint, \"/user\"), {\n                  method: 'POST'\n                });\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.text();\n\n              case 6:\n                body = _context.sent;\n                result = JSON.parse(body);\n                signedIn = result.signedIn, givenName = result.givenName, email = result.email;\n                this.setState({\n                  user: {\n                    signedIn: signedIn,\n                    givenName: givenName,\n                    email: email\n                  }\n                });\n                this.loadData();\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"onUserChange\",\n    value: function onUserChange(user) {\n      this.setState({\n        user: user\n      });\n    } //about GraphQL queries: A query is sent to the server that precisely describes its data needs. The server resolves that query and returns only the data the client asked for.\n\n  }, {\n    key: \"loadData\",\n    value: function () {\n      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var query, response, result;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"query{lyricpostsList{\\n      _id id lyric song artist user\\n    }}\";\n                _context2.next = 3;\n                return fetch(this.uRLEndpoint, {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    query: query\n                  })\n                });\n\n              case 3:\n                response = _context2.sent;\n                _context2.next = 6;\n                return response.json();\n\n              case 6:\n                result = _context2.sent;\n                this.setState({\n                  lyricpostsList: result.data.lyricpostsList\n                });\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function loadData() {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }, {\n    key: \"createLyricPost\",\n    value: function () {\n      var _createLyricPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(lyricPostA) {\n        var query, response;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                query = \"mutation ($lyricPostA:LyricPostInputs!){\\n      lyricPostAdd(lyricPost:$lyricPostA){\\n        id\\n    }\\n    }\";\n                _context3.next = 3;\n                return fetch(this.uRLEndpoint, {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    query: query,\n                    variables: {\n                      lyricPostA: lyricPostA\n                    }\n                  })\n                });\n\n              case 3:\n                response = _context3.sent;\n                this.loadData();\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function createLyricPost(_x) {\n        return _createLyricPost.apply(this, arguments);\n      }\n\n      return createLyricPost;\n    }()\n  }, {\n    key: \"updateLyricPost\",\n    value: function () {\n      var _updateLyricPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, changes) {\n        var query, response;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                query = \"mutation lyricPostUpdate($id:Int!,$changes: LyricPostInputs!){\\n      lyricPostUpdate(id: $id, changes:$changes){\\n        _id id song\\n      }\\n    }\";\n                _context4.next = 3;\n                return fetch(this.uRLEndpoint, {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    query: query,\n                    variables: {\n                      id: id,\n                      changes: changes\n                    }\n                  })\n                });\n\n              case 3:\n                response = _context4.sent;\n                this.loadData();\n\n              case 5:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function updateLyricPost(_x2, _x3) {\n        return _updateLyricPost.apply(this, arguments);\n      }\n\n      return updateLyricPost;\n    }()\n  }, {\n    key: \"deleteLyricPost\",\n    value: function () {\n      var _deleteLyricPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {\n        var query, response;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                query = \"mutation lyricPostDelete($id:Int!){\\n      lyricPostDelete(id: $id)\\n    }\";\n                _context5.next = 3;\n                return fetch(this.uRLEndpoint, {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    query: query,\n                    variables: {\n                      id: id\n                    }\n                  })\n                });\n\n              case 3:\n                response = _context5.sent;\n                this.loadData();\n\n              case 5:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      function deleteLyricPost(_x4) {\n        return _deleteLyricPost.apply(this, arguments);\n      }\n\n      return deleteLyricPost;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var user = this.state.user;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Lyrics to Live By\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UserContext_js__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {\n        value: user\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n        user: user,\n        onUserChange: this.onUserChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LyricPostAdd_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n        user: user,\n        createLyricPost: this.createLyricPost\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Previous added lyrics:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AllLyricPosts_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n        lyricpostsList: this.state.lyricpostsList,\n        updateLyricPost: this.updateLyricPost,\n        deleteLyricPost: this.deleteLyricPost\n      })));\n    }\n  }]);\n\n  return GreetingsParent;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://mern_stack_bones/./src/GreetingsParent.jsx?");

/***/ }),

/***/ "./src/LyricPostAdd.jsx":
/*!******************************!*\
  !*** ./src/LyricPostAdd.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LyricPostAdd)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar LyricPostAdd = /*#__PURE__*/function (_React$Component) {\n  _inherits(LyricPostAdd, _React$Component);\n\n  var _super = _createSuper(LyricPostAdd);\n\n  function LyricPostAdd() {\n    var _this;\n\n    _classCallCheck(this, LyricPostAdd);\n\n    _this = _super.call(this);\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(LyricPostAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.lyricPostAdd;\n      var lyricPost = {\n        lyric: form.lyric.value,\n        song: form.song.value,\n        artist: form.artist.value,\n        user: form.user.value\n      };\n      this.props.createLyricPost(lyricPost);\n      form.lyric.value = \"\";\n      form.song.value = \"\";\n      form.artist.value = \"\";\n      form.user.value = \"\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var signedIn = this.props.user.signedIn;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Been inspired by some lyrics recently? Share the wealth!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        name: \"lyricPostAdd\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n        type: \"text\",\n        name: \"lyric\",\n        placeholder: \"lyric\",\n        rows: \"4\",\n        cols: \"40\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"song\",\n        placeholder: \"song\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"artist\",\n        placeholder: \"artist\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"user\",\n        placeholder: \"user\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        hidden: !signedIn\n      }, \"Submit\")));\n    }\n  }]);\n\n  return LyricPostAdd;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://mern_stack_bones/./src/LyricPostAdd.jsx?");

/***/ }),

/***/ "./src/Register.jsx":
/*!**************************!*\
  !*** ./src/Register.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _images_signinbutton_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/signinbutton.png */ \"./src/images/signinbutton.png\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Register = /*#__PURE__*/function (_React$Component) {\n  _inherits(Register, _React$Component);\n\n  var _super = _createSuper(Register);\n\n  function Register(props) {\n    var _this;\n\n    _classCallCheck(this, Register);\n\n    _this = _super.call(this, props);\n    _this.signOut = _this.signOut.bind(_assertThisInitialized(_this));\n    _this.signIn = _this.signIn.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Register, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var clientId = window.ENV.GOOGLE_CLIENT_ID;\n      if (!clientId) return;\n      window.gapi.load(\"auth2\", function () {\n        if (!window.gapi.auth2.getAuthInstance()) {\n          //this line initialises the Google library, which is needed in the following signin function\n          window.gapi.auth2.init({\n            client_id: clientId\n          });\n        }\n      });\n    }\n  }, {\n    key: \"signIn\",\n    value: function () {\n      var _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var googleToken, auth2, googleUser, apiEndpoint, response, body, result, signedIn, givenName, email, onUserChange;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                auth2 = window.gapi.auth2.getAuthInstance();\n                _context.next = 4;\n                return auth2.signIn();\n\n              case 4:\n                googleUser = _context.sent;\n                googleToken = googleUser.getAuthResponse().id_token;\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                showError(\"Error authenticating with Google: \".concat(_context.t0.error));\n\n              case 11:\n                _context.prev = 11;\n                apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;\n                _context.next = 15;\n                return fetch(\"\".concat(apiEndpoint, \"/signin\"), {\n                  method: \"POST\",\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify({\n                    google_token: googleToken\n                  })\n                });\n\n              case 15:\n                response = _context.sent;\n                _context.next = 18;\n                return response.text();\n\n              case 18:\n                body = _context.sent;\n                result = JSON.parse(body);\n                signedIn = result.signedIn, givenName = result.givenName, email = result.email;\n                onUserChange = this.props.onUserChange;\n                onUserChange({\n                  signedIn: signedIn,\n                  givenName: givenName,\n                  email: email\n                });\n                _context.next = 28;\n                break;\n\n              case 25:\n                _context.prev = 25;\n                _context.t1 = _context[\"catch\"](11);\n                showError(\"Error signing into the app: \".concat(_context.t1));\n\n              case 28:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 8], [11, 25]]);\n      }));\n\n      function signIn() {\n        return _signIn.apply(this, arguments);\n      }\n\n      return signIn;\n    }()\n  }, {\n    key: \"signOut\",\n    value: function () {\n      var _signOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var apiEndpoint, showError, auth2, onUserChange;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;\n                showError = this.props.showError;\n                _context2.prev = 2;\n                _context2.next = 5;\n                return fetch(\"\".concat(apiEndpoint, \"/signout\"), {\n                  method: \"POST\"\n                });\n\n              case 5:\n                auth2 = window.gapi.auth2.getAuthInstance();\n                _context2.next = 8;\n                return auth2.signOut();\n\n              case 8:\n                onUserChange = this.props.onUserChange;\n                onUserChange({\n                  signedIn: false,\n                  givenName: \"\",\n                  email: \"\"\n                });\n                _context2.next = 15;\n                break;\n\n              case 12:\n                _context2.prev = 12;\n                _context2.t0 = _context2[\"catch\"](2);\n                showError(\"Error signing out: \".concat(_context2.t0));\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[2, 12]]);\n      }));\n\n      function signOut() {\n        return _signOut.apply(this, arguments);\n      }\n\n      return signOut;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var user = this.props.user;\n\n      if (user.signedIn) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Welcome \", user.givenName, \"!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          onClick: this.signOut\n        }, \"Sign Out\"));\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        onClick: this.signIn\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: _images_signinbutton_png__WEBPACK_IMPORTED_MODULE_1__.default,\n        alt: \"Sign in\"\n      }))));\n    }\n  }]);\n\n  return Register;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://mern_stack_bones/./src/Register.jsx?");

/***/ }),

/***/ "./src/UserContext.js":
/*!****************************!*\
  !*** ./src/UserContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({\n  signedIn: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);\n\n//# sourceURL=webpack://mern_stack_bones/./src/UserContext.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1{color:red;}\\n\\n.lyricPostData{\\n    white-space:pre-wrap\\n}\\n\\n.songName{\\n    font-style: italic\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mern_stack_bones/./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/images/signinbutton.png":
/*!*************************************!*\
  !*** ./src/images/signinbutton.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"60eaa1cdb7f51c1c51a441dfd2a2d9f3.png\");\n\n//# sourceURL=webpack://mern_stack_bones/./src/images/signinbutton.png?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://mern_stack_bones/./src/App.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/App.jsx","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmern_stack_bones"] = self["webpackChunkmern_stack_bones"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;