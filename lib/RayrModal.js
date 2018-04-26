'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RayrModal = function (_React$Component) {
    _inherits(RayrModal, _React$Component);

    function RayrModal() {
        _classCallCheck(this, RayrModal);

        return _possibleConstructorReturn(this, (RayrModal.__proto__ || Object.getPrototypeOf(RayrModal)).apply(this, arguments));
    }

    _createClass(RayrModal, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'rayr-modal-container', className: (0, _classnames2.default)(this.props.className) });
        }
    }]);

    return RayrModal;
}(_react2.default.Component);

RayrModal.propTypes = {};
RayrModal.defaultProps = {
    className: ''
};
RayrModal.Header = _Header2.default;
RayrModal.Body = _Body2.default;
RayrModal.Footer = _Footer2.default;
RayrModal.Dialog = _Dialog2.default;
RayrModal.Confirm = _Confirm2.default;
exports.default = RayrModal;
module.exports = exports['default'];