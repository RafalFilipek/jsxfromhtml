'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attributesMap = require('./attributesMap');

var _attributesMap2 = _interopRequireDefault(_attributesMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapAttributes = function mapAttributes() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (memo, key) {
    memo[_attributesMap2.default[key] || key] = attrs[key];
    return memo;
  }, {});
};

exports.default = mapAttributes;