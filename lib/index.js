'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _convert = require('./convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsxHtml = function (_PureComponent) {
  _inherits(JsxHtml, _PureComponent);

  function JsxHtml() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, JsxHtml);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JsxHtml.__proto__ || Object.getPrototypeOf(JsxHtml)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JsxHtml, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setContent();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.html !== prevProps.html) {
        this.setContent();
      }
    }
  }, {
    key: 'setContent',
    value: function setContent() {
      var _this2 = this;

      (0, _convert2.default)(this.props.html, this.props.mapElements, this.props.mapInline, this.props.mapBlock).then(function (content) {
        _this2.setState({ content: content });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof this.props.children === 'function') {
        return this.props.children(this.state.content || null);
      }
      return this.state.content || null;
    }
  }]);

  return JsxHtml;
}(_react.PureComponent);

JsxHtml.displayName = 'JsxHtml';
JsxHtml.propTypes = {
  html: _react.PropTypes.string,
  mapElements: _react.PropTypes.object,
  mapInline: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  mapBlock: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  children: _react.PropTypes.func
};
JsxHtml.defaultProps = {
  html: '',
  mapElements: {},
  mapInline: '',
  mapBlock: '',
  children: null
};
exports.default = JsxHtml;