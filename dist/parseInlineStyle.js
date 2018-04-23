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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var parseInlineStyle = function parseInlineStyle(styling) {
  return styling
    .split(';')
    .filter(function(style) {
      return style.split(':')[0] && style.split(':')[1];
    })
    .map(function(style) {
      return [style.split(':')[0].trim().replace(/-./g, function(c) {
          return c.substr(1).toUpperCase();
        }), style.split(':')[1].trim()];
    })
    .reduce(
      function(styleObj, style) {
        return _extends({}, styleObj, _defineProperty({}, style[0], style[1]));
      },
      {}
    );
}; // based on https://gist.github.com/goldhand/70de06a3bdbdb51565878ad1ee37e92b

exports.default = parseInlineStyle;
//# sourceMappingURL=parseInlineStyle.js.map
