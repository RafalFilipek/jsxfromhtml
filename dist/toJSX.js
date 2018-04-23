'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./createGetTagFunction');

var _step = require('./step');

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var toJSX = function toJSX(dom, getTag) {
  if (!Array.isArray(dom)) {
    var Component = getTag('span');
    return _react2.default.createElement(Component, {
      'data-jsx-to-html-root': true
    });
  }
  var rootNode = {
    name: 'span',
    type: 'tag',
    children: dom,
    attribs: { 'data-jsx-to-html-root': true }
  };
  return (0, _step2.default)(
    rootNode,
    0,
    { name: 'span', type: 'tag', data: '', children: [rootNode], attribs: {} },
    getTag
  );
};

exports.default = toJSX;
//# sourceMappingURL=toJSX.js.map
