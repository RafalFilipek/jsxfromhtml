'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _htmlparser = require('htmlparser2');

var textToDOM = function textToDOM(html) {
  return new Promise(function (resolve, reject) {
    var handler = new _htmlparser.DomHandler(function (error, dom) {
      error ? reject(error) : resolve(dom);
    });
    var parser = new _htmlparser.Parser(handler);
    parser.write(html);
    parser.done();
  });
};

exports.default = textToDOM;