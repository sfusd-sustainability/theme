"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _data = _interopRequireDefault(require("../../data.json"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sustainabilitylogo = _interopRequireDefault(require("../img/sustainabilitylogo.webp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Oswald';\n  height: 86px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  * {\n    font-weight: 400;\n  }\n  h1 {\n    font-size: 22px;\n    color: #004566;\n  }\n  a {\n    text-decoration: none !important;\n  }\n  img {\n    height: 29px;\n    width: 56px;\n    margin-bottom: 6px;\n    margin-right: 8px;\n  }\n\n  @media only screen and (max-width: 850px) {\n    justify-content: center;\n    img { display: none; }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents["default"].header(_templateObject());

var Header = function Header(props) {
  return _react["default"].createElement(StyledHeader, null, _react["default"].createElement("img", {
    src: _sustainabilitylogo["default"],
    alt: "SFUSD Sustainability Logo"
  }), _react["default"].createElement("a", {
    href: props.url || _data["default"].homeUrl
  }, _react["default"].createElement("h1", null, props.title || _data["default"].name)));
};

var _default = Header;
exports["default"] = _default;