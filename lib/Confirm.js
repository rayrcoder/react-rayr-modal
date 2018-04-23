'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRayrBtn = require('react-rayr-btn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Rayr Lee on 2018/4/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.default = function (opt) {

    var oModal = document.createElement('div');
    var _opt = {
        title: '系统提示',
        msg: '您确定要执行此操作吗？',
        className: '',
        backDrop: false,
        size: 'sm'
    };

    Object.assign(_opt, opt);

    document.body.appendChild(oModal);

    return new Promise(function (resolve, reject) {
        var Modal = function (_React$Component) {
            _inherits(Modal, _React$Component);

            function Modal() {
                _classCallCheck(this, Modal);

                var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

                _this.state = {
                    className: ''
                };
                return _this;
            }

            _createClass(Modal, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    window.requestAnimationFrame(function () {
                        _this2.setState({
                            className: 'rayr-modal-fade'
                        });
                    });
                }
            }, {
                key: 'close',
                value: function close() {
                    this.setState({
                        className: ''
                    }, function () {
                        _reactDom2.default.unmountComponentAtNode(oModal);
                        document.body.removeChild(oModal);
                    });
                }
            }, {
                key: 'confirm',
                value: function confirm() {
                    this.close();
                    resolve('success');
                }
            }, {
                key: 'cancel',
                value: function cancel() {
                    this.close();
                    reject('cancel');
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
                            _react2.default.createElement(
                                'div',
                                { className: 'rayr-modal-header' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'title' },
                                    _opt.title
                                ),
                                _react2.default.createElement('span', { className: 'close-btn', onClick: function onClick() {
                                        _this3.cancel();
                                    } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'rayr-modal-body' },
                                _opt.msg
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'rayr-modal-footer' },
                                _react2.default.createElement(
                                    _reactRayrBtn.RayrBtn,
                                    { type: 'primary', icon: 'check', onClick: function onClick() {
                                            _this3.confirm();
                                        } },
                                    '\u786E\u5B9A'
                                ),
                                _react2.default.createElement(
                                    _reactRayrBtn.RayrBtn,
                                    { type: 'primary', inverse: true, icon: 'close', onClick: function onClick() {
                                            _this3.cancel();
                                        } },
                                    '\u53D6\u6D88'
                                )
                            )
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