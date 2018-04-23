'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createGetTagFunction = require('./createGetTagFunction');

var _createGetTagFunction2 = _interopRequireDefault(_createGetTagFunction);

var _textToDOM = require('./textToDOM');

var _textToDOM2 = _interopRequireDefault(_textToDOM);

var _toJSX = require('./toJSX');

var _toJSX2 = _interopRequireDefault(_toJSX);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var convert = function convert(html, mapElements, mapInline, mapBlock) {
  var getTag = (0, _createGetTagFunction2.default)(
    mapElements,
    mapInline,
    mapBlock
  );
  var dom = (0, _textToDOM2.default)(html);
  return (0, _toJSX2.default)(dom, getTag);
};

exports.default = convert;
//# sourceMappingURL=convert.js.map
