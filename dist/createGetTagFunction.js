'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inlineElements = require('./inlineElements');

var _inlineElements2 = _interopRequireDefault(_inlineElements);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createGetTagFunction = function createGetTagFunction() {
  var mapElements = arguments.length > 0 && arguments[0] !== undefined
    ? arguments[0]
    : {};
  var mapInline = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1]
    : null;
  var mapBlock = arguments.length > 2 && arguments[2] !== undefined
    ? arguments[2]
    : null;
  return function(name) {
    if (mapElements) {
      if (mapElements[name]) {
        return mapElements[name];
      } else if (mapElements[name] === false) {
        return null;
      }
    }
    var isInline = _inlineElements2.default.indexOf(name) !== -1;
    if (isInline && mapInline) {
      return mapInline;
    }
    if (!isInline && mapBlock) {
      return mapBlock;
    }
    return name;
  };
};

exports.default = createGetTagFunction;
//# sourceMappingURL=createGetTagFunction.js.map
