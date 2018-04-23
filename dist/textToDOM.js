'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _htmlparser = require('htmlparser2');

var textToDOM = function textToDOM(html) {
  var handler = new _htmlparser.DomHandler();
  var parser = new _htmlparser.Parser(handler);
  parser.write(html);
  parser.done();
  return handler.dom;
};

exports.default = textToDOM;
//# sourceMappingURL=textToDOM.js.map
