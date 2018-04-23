'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selfClosingElements = require('./selfClosingElements');

var _selfClosingElements2 = _interopRequireDefault(_selfClosingElements);

var _mapAttributes = require('./mapAttributes');

var _mapAttributes2 = _interopRequireDefault(_mapAttributes);

var _groupInlineElements = require('./groupInlineElements');

var _groupInlineElements2 = _interopRequireDefault(_groupInlineElements);

var _inlineElements = require('./inlineElements');

var _inlineElements2 = _interopRequireDefault(_inlineElements);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var step = function step(dom, index, parent, getTag) {
  if (dom.type === 'comment') {
    return null;
  }
  if (dom.type === 'tag' || dom.type === 'script' || dom.type === 'style') {
    var Component = getTag(dom.name);
    if (Component === null) {
      return null;
    }
    if (_selfClosingElements2.default.indexOf(dom.name) !== -1) {
      return _react2.default.createElement(
        Component,
        _extends({ key: index }, (0, _mapAttributes2.default)(dom.attribs))
      );
    }
    var isParentBlock = parent &&
      _inlineElements2.default.indexOf(parent.name) === -1;
    var _children = isParentBlock
      ? (0, _groupInlineElements2.default)(dom.children)
      : dom.children;
    return _react2.default.createElement(
      Component,
      _extends({ key: index }, (0, _mapAttributes2.default)(dom.attribs)),
      _children.map(function(item, index) {
        return step(item, index, item.parent, getTag);
      })
    );
  }
  if (dom.type === 'text') {
    if ((dom.data || '').trim() === '') {
      return null;
    }
    if (parent && _inlineElements2.default.indexOf(parent.name) !== -1) {
      return dom.data || null;
    }
    var _Component = getTag('span');
    return _react2.default.createElement(_Component, { key: index }, dom.data);
  }
  return null;
};

exports.default = step;
//# sourceMappingURL=step.js.map
