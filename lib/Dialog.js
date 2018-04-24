'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Rayr Lee on 2018/4/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.default = function (C, opt) {

    var CONTAINER = document.getElementById('rayr-modal-container') || document.querySelector('body');

    var oModal = document.createElement('div');
    var _opt = {
        className: '',
        backDrop: false,
        size: 'md',
        data: null
    };

    Object.assign(_opt, opt);

    CONTAINER.appendChild(oModal);

    return new Promise(function (resolve, reject) {
        var Modal = function (_React$Component) {
            _inherits(Modal, _React$Component);

            function Modal() {
                _classCallCheck(this, Modal);

                var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

                _this.state = {
                    className: ''
                };
                _this.timer = null;
                return _this;
            }

            _createClass(Modal, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    this.timer = window.setTimeout(function () {
                        _this2.setState({
                            className: 'rayr-modal-fade'
                        });
                    }, 50);
                }
            }, {
                key: 'bindEscFn',
                value: function bindEscFn(e) {
                    e.key === 'Escape' && this.cancel();
                }
            }, {
                key: 'close',
                value: function close() {
                    _reactDom2.default.unmountComponentAtNode(oModal);
                    CONTAINER.removeChild(oModal);
                    clearTimeout(this.timer);
                    this.timer = null;
                }
            }, {
                key: 'confirm',
                value: function confirm() {
                    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

                    this.close();
                    resolve(res);
                }
            }, {
                key: 'cancel',
                value: function cancel() {
                    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cancel';

                    this.close();
                    reject(res);
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this3 = this;

                    return _react2.default.createElement(
                        'div',
                        { className: 'rayr-modal ' + this.state.className },
                        _react2.default.createElement('div', { className: 'rayr-modal-bg', onClick: function onClick() {
                                _opt.backDrop && _this3.cancel();
                            } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'rayr-modal-content rayr-modal-' + _opt.size },
                            _react2.default.createElement(C, { confirm: this.confirm.bind(this), cancel: this.cancel.bind(this), data: _opt.data })
                        )
                    );
                }
            }]);

            return Modal;
        }(_react2.default.Component);

        _reactDom2.default.render(_react2.default.createElement(Modal, null), oModal);
    });
};

module.exports = exports['default'];