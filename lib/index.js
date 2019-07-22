"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _header["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _footer["default"];
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function get() {
    return _layout["default"];
  }
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function get() {
    return _theme["default"];
  }
});
Object.defineProperty(exports, "data", {
  enumerable: true,
  get: function get() {
    return _data["default"];
  }
});

var _header = _interopRequireDefault(require("./components/header"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _layout = _interopRequireDefault(require("./components/layout"));

var _theme = _interopRequireDefault(require("./theme"));

var _data = _interopRequireDefault(require("../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }