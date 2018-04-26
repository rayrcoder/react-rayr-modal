'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Rayr Lee on 2018/4/23.
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRayrBtn = require('react-rayr-btn');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Confirm(props) {
    var data = props.data,
        confirm = props.confirm,
        cancel = props.cancel;


    return [_react2.default.createElement(
        _Header2.default,
        _extends({ key: 'Header' }, props),
        data.title
    ), _react2.default.createElement(
        _Body2.default,
        { key: 'Body' },
        data.msg
    ), _react2.default.createElement(
        _Footer2.default,
        { key: 'Footer' },
        _react2.default.createElement(
            _reactRayrBtn.RayrBtn,
            { type: data.type, size: data.btnSzie, icon: data.confirmIcon, onClick: function onClick() {
                    confirm();
                } },
            data.confirmText
        ),
        _react2.default.createElement(
            _reactRayrBtn.RayrBtn,
            { type: data.type, size: data.btnSzie, inverse: 'true', icon: data.cancelIcon, onClick: function onClick() {
                    cancel();
                } },
            data.cancelText
        )
    )];
}

exports.default = function () {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: (0, _classnames2.default)('rayr-modal-confirm', opt.className),
        data: {
            title: opt.title || '系统提示', //标题
            msg: opt.msg || '您确定要执行此操作吗？', //内容
            type: opt.type || 'primary', //确认框类型
            btnSzie: opt.btnSzie || 'md', //按钮大小
            confirmText: opt.confirmText || '确定', //确认按钮文案
            cancelText: opt.cancelText || '取消', //取消按钮文案
            confirmIcon: opt.confirmIcon || 'check', //确认按钮图标
            cancelIcon: opt.cancelIcon || 'close' //取消按钮图标
        }
    };

    return (0, _Dialog2.default)(Confirm, _opt);
};

module.exports = exports['default'];