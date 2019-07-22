"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _header = _interopRequireDefault(require("./header"));

var _footer = _interopRequireDefault(require("./footer"));

var _data = _interopRequireDefault(require("../../data.json"));

require("./layout.css");

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 35px 0 0;\n  display: block;\n  font-size: 15px;\n  font-weight: 400;\n  color: gray;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 960px;\n  margin: auto;\n  padding: 0 1rem;\n  a {\n    color: gray;\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  height: 11rem;\n  width: 100%;\n  background-color: ", ";\n  z-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 86px;\n  width: 100%;\n  background-color: ", ";\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderBackground = _styledComponents["default"].div(_templateObject(), _theme["default"].colors.primary);

var FooterBackground = _styledComponents["default"].div(_templateObject2(), _theme["default"].colors.primary);

var Content = _styledComponents["default"].div(_templateObject3());

var BackLink = _styledComponents["default"].a(_templateObject4());

var layout = function layout(props) {
  return _react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, _react["default"].createElement(_reactHelmet["default"], {
    title: props.title + " | " + _data["default"].title,
    defer: false
  }), _react["default"].createElement(HeaderBackground, null), _react["default"].createElement(Content, null, _react["default"].createElement(_header["default"], null), props.title && _react["default"].createElement("h2", null, props.title), _react["default"].createElement(BackLink, {
    href: _data["default"].homeUrl
  }, "<", " Back to Home"), props.children, _react["default"].createElement(_footer["default"], null)), _react["default"].createElement(FooterBackground, null));
};

var _default = layout;
exports["default"] = _default;