'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineElements = require('./inlineElements');

var _inlineElements2 = _interopRequireDefault(_inlineElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFromGroup = function getFromGroup(group) {
  return group.length === 1 ? group[0] : {
    name: 'span',
    type: 'tag',
    attribs: {},
    data: '',
    children: group.map(function (el) {
      el.parent = {
        name: 'span',
        type: 'tag',
        attribs: {},
        data: ''
      };
      return el;
    })
  };
};

var groupInlineElements = function groupInlineElements(collection) {
  var result = [];
  var inGroup = false;
  var group = [];
  collection.forEach(function (el) {
    if (!_inlineElements2.default.indexOf(el.name) === -1) {
      result.push(el);
      if (inGroup) {
        result.push(getFromGroup(group));
        inGroup = false;
        group = [];
      }
    } else {
      inGroup = true;
      group.push(el);
    }
  });
  if (inGroup) {
    result.push(getFromGroup(group));
  }
  return result;
};

exports.default = groupInlineElements;